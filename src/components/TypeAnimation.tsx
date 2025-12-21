import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';

interface TypeAnimationProps {
    words: string[];
    typingSpeed?: 'slow' | 'medium' | 'fast';
    deletingSpeed?: 'slow' | 'medium' | 'fast';
    gradientFrom?: string;
    gradientTo?: string;
    pauseDuration?: number;
    className?: string;
    style?: React.CSSProperties;
}

const speedMap = {
    slow: 100,
    medium: 70,
    fast: 35,
};

export default function TypeAnimation({
    words,
    typingSpeed = 'medium',
    deletingSpeed = 'medium',
    gradientFrom = 'primary-300',
    gradientTo = 'accent-400',
    pauseDuration = 1500,
    className,
    style,
}: TypeAnimationProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const typeSpeed = speedMap[typingSpeed];
    const deleteSpeed = speedMap[deletingSpeed];

    const handleTyping = useCallback(() => {
        const currentWord = words[currentWordIndex];

        if (isPaused) {
            return;
        }

        if (!isDeleting) {
            // Typing
            if (displayText.length < currentWord.length) {
                setDisplayText(currentWord.substring(0, displayText.length + 1));
            } else {
                // Word complete, pause then start deleting
                setIsPaused(true);
                setTimeout(() => {
                    setIsPaused(false);
                    setIsDeleting(true);
                }, pauseDuration);
            }
        } else {
            // Deleting
            if (displayText.length > 0) {
                setDisplayText(displayText.substring(0, displayText.length - 1));
            } else {
                // Word deleted, move to next word
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
        }
    }, [currentWordIndex, displayText, isDeleting, isPaused, pauseDuration, words]);

    useEffect(() => {
        const timeout = setTimeout(
            handleTyping,
            isDeleting ? deleteSpeed : typeSpeed
        );
        return () => clearTimeout(timeout);
    }, [handleTyping, isDeleting, deleteSpeed, typeSpeed]);

    // Convert color names to CSS variables or direct colors
    const getGradientColor = (color: string) => {
        if (color.startsWith('#') || color.startsWith('rgb')) {
            return color;
        }
        // Map common color names to CSS variable format
        const colorMap: { [key: string]: string } = {
            'primary-300': 'var(--primary-300)',
            'primary-400': 'var(--primary-400)',
            'primary-500': 'var(--primary-500)',
            'accent-400': 'var(--accent-400)',
            'accent-500': 'var(--accent-500)',
            'secondary-400': 'var(--secondary-400)',
            'secondary-500': 'var(--secondary-500)',
            'red-500': '#ef4444',
            'yellow-500': '#eab308',
            'teal-500': '#14b8a6',
            'teal-600': '#0d9488',
            'cyan-400': '#22d3ee',
            'purple-400': '#a78bfa',
            'blue-400': '#60a5fa',
            'blue-500': '#3b82f6',
        };
        return colorMap[color] || `var(--${color})`;
    };

    return (
        <span className={className} style={style}>
            <motion.span
                style={{
                    background: `linear-gradient(135deg, ${getGradientColor(gradientFrom)}, ${getGradientColor(gradientTo)})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}
            >
                {displayText}
            </motion.span>
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                style={{
                    display: 'inline-block',
                    width: '3px',
                    height: '1em',
                    background: getGradientColor(gradientTo),
                    marginLeft: '4px',
                    verticalAlign: 'text-bottom',
                }}
            />
        </span>
    );
}
