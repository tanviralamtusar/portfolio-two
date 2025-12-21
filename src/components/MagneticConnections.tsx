import { useState, useEffect, useCallback, useRef } from "react";
import { Box, useTheme } from "@mui/material";
import { motion } from "motion/react";

const MotionBox = motion.create(Box);

const MagneticConnections = () => {
    const theme = useTheme();
    const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
    const [dots, setDots] = useState<{ id: string; x: number; y: number }[]>([]);
    const rafRef = useRef<number | null>(null);
    const ref = useRef<HTMLDivElement>(null);

    const dotSize = 3;
    const spacing = 40;
    const connectDistance = 80;
    const lineOpacity = 0.6;
    const extraColumns = 4;

    useEffect(() => {
        const calculateDots = () => {
            if (ref.current) {
                const width = ref.current.offsetWidth;
                const height = ref.current.offsetHeight;
                const cols = Math.floor(width / spacing) + extraColumns;
                const rows = Math.floor(height / spacing);
                const offsetX =
                    (width - (cols - extraColumns) * spacing) / 2 -
                    (extraColumns * spacing) / 2;
                const offsetY = (height - rows * spacing) / 2;

                const newDots: { id: string; x: number; y: number }[] = [];
                for (let row = 0; row < rows; row++) {
                    for (let col = 0; col < cols; col++) {
                        newDots.push({
                            id: `${col}-${row}`,
                            x: offsetX + col * spacing,
                            y: offsetY + row * spacing,
                        });
                    }
                }
                setDots(newDots);
            }
        };

        calculateDots();
        window.addEventListener("resize", calculateDots);
        return () => window.removeEventListener("resize", calculateDots);
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);

        rafRef.current = requestAnimationFrame(() => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        setMousePos(null);
    }, []);

    const distance = useCallback((pos1: { x: number; y: number }, pos2: { x: number; y: number }) => {
        const dx = pos1.x - pos2.x;
        const dy = pos1.y - pos2.y;
        return Math.sqrt(dx * dx + dy * dy);
    }, []);

    return (
        <MotionBox
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            sx={{
                width: "100%",
                height: "100%",
                background: theme.palette.background.default,
                position: "absolute",
                top: 0,
                left: 0,
                overflow: "hidden",
                cursor: "pointer",
            }}
        >
            <svg
                width="100%"
                height="100%"
                style={{
                    position: "absolute",
                    pointerEvents: "none",
                }}
            >
                {mousePos &&
                    dots.map((dot) => {
                        const dist = distance(mousePos, dot);

                        if (dist < connectDistance) {
                            const opacity = lineOpacity * (1 - dist / connectDistance);
                            return (
                                <line
                                    key={`line-${dot.id}`}
                                    x1={dot.x}
                                    y1={dot.y}
                                    x2={mousePos.x}
                                    y2={mousePos.y}
                                    stroke={
                                        theme.palette.mode === "dark"
                                            ? "rgba(12, 123, 255, 0.8)"
                                            : "rgba(12, 123, 255, 0.7)"
                                    }
                                    strokeWidth={0.8}
                                    opacity={opacity}
                                />
                            );
                        }
                        return null;
                    })}
            </svg>

            {dots.map((dot) => {
                const dist = mousePos ? distance(mousePos, dot) : connectDistance;
                const scale = mousePos
                    ? 1 + 0.5 * (1 - Math.min(1, dist / connectDistance))
                    : 1;
                const opacity = mousePos
                    ? 0.6 + 0.4 * (1 - Math.min(1, dist / connectDistance))
                    : 0.6;

                return (
                    <motion.div
                        key={dot.id}
                        style={{
                            position: "absolute",
                            left: dot.x - dotSize / 2,
                            top: dot.y - dotSize / 2,
                            width: dotSize,
                            height: dotSize,
                            borderRadius: "50%",
                            background:
                                theme.palette.mode === "dark"
                                    ? "rgba(12, 123, 255, 0.85)"
                                    : "rgba(12, 123, 255, 0.7)",
                            zIndex: 1,
                            scale,
                            opacity,
                            willChange: "transform, opacity",
                        }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                    />
                );
            })}
        </MotionBox>
    );
};

export default MagneticConnections;
