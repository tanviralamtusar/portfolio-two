import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface CardData {
    title: string;
    description: string;
    image: string;
    link?: string;
    tags?: string[];
}

interface Breakpoint {
    maxWidth: number;
    activeWidth: number;
    inactiveWidth: number;
    titleActive: string;
    titleInactive: string;
}

interface ClassNames {
    container?: string;
    card?: string;
    title?: string;
    description?: string;
    button?: string;
    buttonIcon?: string;
}

interface ExpandingCardsProps {
    cards: CardData[];
    gap?: number;
    height?: number;
    classNames?: ClassNames;
    breakpoints?: Breakpoint[];
    transitionDuration?: number;
}

export function ExpandingCards({
    cards,
    gap = 16,
    height = 450,
    breakpoints = [],
    transitionDuration = 0.4,
}: ExpandingCardsProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint | null>(null);

    // Default breakpoint values
    const defaultBreakpoint: Breakpoint = {
        maxWidth: Infinity,
        activeWidth: 400,
        inactiveWidth: 100,
        titleActive: '28px',
        titleInactive: '18px',
    };

    const updateBreakpoint = useCallback(() => {
        const width = window.innerWidth;
        const sorted = [...breakpoints].sort((a, b) => a.maxWidth - b.maxWidth);
        const matched = sorted.find(bp => width <= bp.maxWidth);
        setCurrentBreakpoint(matched || null);
    }, [breakpoints]);

    useEffect(() => {
        updateBreakpoint();
        window.addEventListener('resize', updateBreakpoint);
        return () => window.removeEventListener('resize', updateBreakpoint);
    }, [updateBreakpoint]);

    const bp = currentBreakpoint || defaultBreakpoint;

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    };

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            {/* Cards Container */}
            <div
                style={{
                    display: 'flex',
                    gap: `${gap}px`,
                    height: `${height}px`,
                    overflow: 'hidden',
                    padding: '0 40px',
                }}
            >
                {cards.map((card, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <motion.div
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            animate={{
                                flex: isActive ? bp.activeWidth : bp.inactiveWidth,
                                filter: isActive ? 'brightness(1)' : 'brightness(0.6)',
                            }}
                            transition={{
                                duration: transitionDuration,
                                ease: [0.4, 0, 0.2, 1],
                            }}
                            style={{
                                position: 'relative',
                                cursor: 'pointer',
                                overflow: 'hidden',
                                borderRadius: '20px',
                                flexShrink: 0,
                                minWidth: isActive ? 'auto' : '60px',
                            }}
                        >
                            {/* Background Image */}
                            <img
                                src={card.image}
                                alt={card.title}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                }}
                            />

                            {/* Gradient Overlay */}
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.2) 100%)',
                                }}
                            />

                            {/* Content */}
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: isActive ? '28px' : '20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px',
                                }}
                            >
                                <motion.h3
                                    animate={{
                                        fontSize: isActive ? bp.titleActive : bp.titleInactive,
                                        opacity: 1,
                                    }}
                                    transition={{ duration: transitionDuration }}
                                    style={{
                                        color: 'white',
                                        fontWeight: 700,
                                        margin: 0,
                                        whiteSpace: isActive ? 'normal' : 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        writingMode: isActive ? 'horizontal-tb' : 'vertical-rl',
                                        textOrientation: isActive ? 'mixed' : 'mixed',
                                        transform: isActive ? 'none' : 'rotate(180deg)',
                                        letterSpacing: '0.5px',
                                    }}
                                >
                                    {card.title}
                                </motion.h3>

                                {isActive && (
                                    <>
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: transitionDuration, delay: 0.1 }}
                                            style={{
                                                color: 'rgba(255,255,255,0.8)',
                                                fontSize: '14px',
                                                margin: 0,
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {card.description}
                                        </motion.p>

                                        {/* Tags */}
                                        {card.tags && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: transitionDuration, delay: 0.15 }}
                                                style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: '8px',
                                                    marginTop: '4px',
                                                }}
                                            >
                                                {card.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        style={{
                                                            padding: '5px 12px',
                                                            borderRadius: '50px',
                                                            background: 'rgba(12, 123, 255, 0.3)',
                                                            backdropFilter: 'blur(8px)',
                                                            color: 'white',
                                                            fontSize: '12px',
                                                            fontWeight: 500,
                                                            border: '1px solid rgba(12, 123, 255, 0.4)',
                                                        }}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </motion.div>
                                        )}

                                        {/* Link Button */}
                                        {card.link && (
                                            <motion.a
                                                href={card.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: transitionDuration, delay: 0.2 }}
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    marginTop: '8px',
                                                    padding: '12px 24px',
                                                    borderRadius: '50px',
                                                    background: 'linear-gradient(135deg, #0c7bff, #6366f1)',
                                                    color: 'white',
                                                    textDecoration: 'none',
                                                    fontSize: '14px',
                                                    fontWeight: 600,
                                                    width: 'fit-content',
                                                    boxShadow: '0 4px 20px rgba(12, 123, 255, 0.4)',
                                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(12, 123, 255, 0.5)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(12, 123, 255, 0.4)';
                                                }}
                                            >
                                                <ExternalLink size={16} />
                                                View Project
                                            </motion.a>
                                        )}
                                    </>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                style={{
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'var(--bg-tertiary, rgba(30,30,40,0.9))',
                    border: '1px solid var(--border-color, rgba(255,255,255,0.1))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    zIndex: 10,
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--primary-400, #0c7bff)';
                    e.currentTarget.style.borderColor = 'var(--primary-400, #0c7bff)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--bg-tertiary, rgba(30,30,40,0.9))';
                    e.currentTarget.style.borderColor = 'var(--border-color, rgba(255,255,255,0.1))';
                }}
            >
                <ChevronLeft size={22} style={{ color: 'white' }} />
            </button>

            <button
                onClick={handleNext}
                style={{
                    position: 'absolute',
                    right: '0',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'var(--bg-tertiary, rgba(30,30,40,0.9))',
                    border: '1px solid var(--border-color, rgba(255,255,255,0.1))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    zIndex: 10,
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--primary-400, #0c7bff)';
                    e.currentTarget.style.borderColor = 'var(--primary-400, #0c7bff)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--bg-tertiary, rgba(30,30,40,0.9))';
                    e.currentTarget.style.borderColor = 'var(--border-color, rgba(255,255,255,0.1))';
                }}
            >
                <ChevronRight size={22} style={{ color: 'white' }} />
            </button>

            {/* Dots Indicator */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                    marginTop: '28px',
                }}
            >
                {cards.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        style={{
                            width: index === activeIndex ? '28px' : '10px',
                            height: '10px',
                            borderRadius: '5px',
                            background: index === activeIndex
                                ? 'var(--primary-400, #0c7bff)'
                                : 'var(--border-color, rgba(255,255,255,0.2))',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default ExpandingCards;
