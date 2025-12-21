import { useState, useEffect, useCallback } from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeSwitchProps {
    className?: string;
    onThemeChange?: (theme: 'light' | 'dark') => void;
}

export function ThemeSwitch({ className = '', onThemeChange }: ThemeSwitchProps) {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        const savedTheme =
            localStorage.getItem('theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

        setTheme(savedTheme as 'light' | 'dark');
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        onThemeChange?.(savedTheme as 'light' | 'dark');
    }, [onThemeChange]);

    const toggleTheme = useCallback(() => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        onThemeChange?.(newTheme);
    }, [theme, onThemeChange]);

    return (
        <button
            onClick={toggleTheme}
            className={`theme-switch ${className}`}
            aria-label="Toggle theme"
            style={{
                position: 'relative',
                display: 'flex',
                height: '40px',
                width: '40px',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                border: 'none',
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(12px)',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                color: 'var(--text-primary)',
            }}
        >
            <Sun
                style={{
                    position: 'absolute',
                    height: '20px',
                    width: '20px',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transform: theme === 'light'
                        ? 'scale(1) translateY(0)'
                        : 'scale(0.5) translateY(20px)',
                    opacity: theme === 'light' ? 1 : 0,
                }}
            />
            <Moon
                style={{
                    position: 'absolute',
                    height: '20px',
                    width: '20px',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transform: theme === 'dark'
                        ? 'scale(1) translateY(0)'
                        : 'scale(0.5) translateY(20px)',
                    opacity: theme === 'dark' ? 1 : 0,
                }}
            />
        </button>
    );
}

export default ThemeSwitch;
