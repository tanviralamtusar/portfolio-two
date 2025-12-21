import React, { useRef, useState, useCallback, MouseEvent } from 'react';

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string; // RGB values like "34, 211, 238"
    style?: React.CSSProperties;
}

export function SpotlightCard({
    children,
    className = '',
    spotlightColor = '34, 211, 238',
    style = {},
}: SpotlightCardProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            if (!divRef.current) return;
            const rect = divRef.current.getBoundingClientRect();
            setPosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        },
        []
    );

    const handleMouseEnter = useCallback(() => {
        setOpacity(1);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setOpacity(0);
    }, []);

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={className}
            style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                border: '1px solid var(--border-color, rgba(255, 255, 255, 0.1))',
                background: 'var(--bg-tertiary, rgba(15, 23, 42, 0.8))',
                backdropFilter: 'blur(12px)',
                ...style,
            }}
        >
            {/* Spotlight gradient overlay */}
            <div
                style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    inset: 0,
                    opacity: opacity,
                    transition: 'opacity 0.3s ease',
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(${spotlightColor}, 0.15), transparent 40%)`,
                }}
            />
            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
                {children}
            </div>
        </div>
    );
}

export default SpotlightCard;
