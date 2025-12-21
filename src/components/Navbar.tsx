import { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'motion/react';
import ThemeSwitch from './ThemeSwitch';

const MotionBox = motion.create(Box);

interface NavbarProps {
    onThemeChange?: (theme: 'light' | 'dark') => void;
}

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onThemeChange }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItems.map(item => item.href.replace('#', ''));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.getElementById(href.replace('#', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <MotionBox
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                py: scrolled ? 1.5 : 2,
                background: scrolled ? 'var(--glass-bg)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
                transition: 'all 0.3s ease',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    {/* Logo */}
                    <Typography
                        variant="h4"
                        component="a"
                        href="#home"
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, '#home')}
                        sx={{
                            fontFamily: '"Moonstar", "Outfit", sans-serif',
                            fontWeight: 400,
                            fontSize: '1.5rem',
                            background: 'linear-gradient(135deg, var(--primary-400) 0%, var(--accent-400) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            cursor: 'pointer',
                            textDecoration: 'none',
                        }}
                    >
                        Tanvir Alam
                    </Typography>

                    {/* Navigation Links */}
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 4,
                            alignItems: 'center',
                        }}
                    >
                        {navItems.map((item) => (
                            <Box
                                key={item.label}
                                component="a"
                                href={item.href}
                                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, item.href)}
                                sx={{
                                    color: activeSection === item.href.replace('#', '')
                                        ? 'var(--primary-400)'
                                        : 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    position: 'relative',
                                    transition: 'color 0.3s ease',
                                    '&:hover': {
                                        color: 'var(--primary-400)',
                                    },
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: -4,
                                        left: 0,
                                        width: activeSection === item.href.replace('#', '') ? '100%' : '0%',
                                        height: '2px',
                                        background: 'linear-gradient(90deg, var(--primary-400), var(--accent-400))',
                                        transition: 'width 0.3s ease',
                                    },
                                    '&:hover::after': {
                                        width: '100%',
                                    },
                                }}
                            >
                                {item.label}
                            </Box>
                        ))}
                    </Box>

                    {/* Theme Switch */}
                    <ThemeSwitch onThemeChange={onThemeChange} />
                </Box>
            </Container>
        </MotionBox>
    );
}
