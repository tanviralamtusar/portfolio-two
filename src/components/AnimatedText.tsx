import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface AnimatedTextProps {
    text: string;
    delay?: number;
    className?: string;
    style?: React.CSSProperties;
}

export default function AnimatedText({ text, delay = 0, className, style }: AnimatedTextProps) {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (currentIndex < text.length) {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            } else {
                setIsComplete(true);
            }
        }, currentIndex === 0 ? delay : 50);

        return () => clearTimeout(timeout);
    }, [currentIndex, text, delay]);

    return (
        <motion.span
            className={className}
            style={style}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {displayText}
            {!isComplete && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    style={{
                        display: 'inline-block',
                        width: '3px',
                        height: '1em',
                        background: 'var(--primary-400)',
                        marginLeft: '2px',
                        verticalAlign: 'text-bottom',
                    }}
                />
            )}
        </motion.span>
    );
}
