import { useState, useEffect } from 'react';
import { Box, Container, Typography, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, href: string) => {
        e.preventDefault();
        const element = document.getElementById(href.replace('#', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
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
                                fontSize: { xs: '1.5rem', sm: '1.8rem' },
                                background: 'linear-gradient(135deg, var(--primary-400) 0%, var(--accent-400) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                cursor: 'pointer',
                                textDecoration: 'none',
                            }}
                        >
                            Tanvir
                        </Typography>

                        {/* Desktop Navigation Links */}
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

                        {/* Right Side - Theme Switch & Mobile Menu */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {/* Theme Switch */}
                            <ThemeSwitch onThemeChange={onThemeChange} />

                            {/* Mobile Menu Button */}
                            <IconButton
                                onClick={toggleMobileMenu}
                                sx={{
                                    display: { xs: 'flex', md: 'none' },
                                    color: 'var(--text-primary)',
                                    ml: 1,
                                }}
                                aria-label="Toggle mobile menu"
                            >
                                <AnimatePresence mode="wait">
                                    {mobileMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X size={24} />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu size={24} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </IconButton>
                        </Box>
                    </Box>
                </Container>
            </MotionBox>

            {/* Mobile Drawer Menu */}
            <Drawer
                anchor="right"
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        width: '75%',
                        maxWidth: '300px',
                        background: 'var(--bg-primary)',
                        borderLeft: '1px solid var(--border-color)',
                        backdropFilter: 'blur(20px)',
                    },
                }}
            >
                <Box sx={{ p: 3, pt: 10 }}>
                    <List>
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <ListItem disablePadding sx={{ mb: 1 }}>
                                    <ListItemButton
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        sx={{
                                            borderRadius: 2,
                                            py: 1.5,
                                            px: 2,
                                            background: activeSection === item.href.replace('#', '')
                                                ? 'var(--glass-bg)'
                                                : 'transparent',
                                            border: activeSection === item.href.replace('#', '')
                                                ? '1px solid var(--primary-400)'
                                                : '1px solid transparent',
                                            '&:hover': {
                                                background: 'var(--glass-bg)',
                                            },
                                        }}
                                    >
                                        <ListItemText
                                            primary={item.label}
                                            sx={{
                                                '& .MuiListItemText-primary': {
                                                    color: activeSection === item.href.replace('#', '')
                                                        ? 'var(--primary-400)'
                                                        : 'var(--text-primary)',
                                                    fontWeight: activeSection === item.href.replace('#', '')
                                                        ? 600
                                                        : 500,
                                                    fontSize: '1rem',
                                                },
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            </motion.div>
                        ))}
                    </List>

                    {/* Social Links in Mobile Menu */}
                    <Box
                        sx={{
                            mt: 4,
                            pt: 4,
                            borderTop: '1px solid var(--border-color)',
                            textAlign: 'center',
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{ color: 'var(--text-tertiary)', mb: 2 }}
                        >
                            Let's connect
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                            <Box
                                component="a"
                                href="https://github.com/tanviralamtusar"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    p: 1.5,
                                    borderRadius: 2,
                                    background: 'var(--glass-bg)',
                                    border: '1px solid var(--border-color)',
                                    color: 'var(--text-secondary)',
                                    display: 'flex',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: 'var(--primary-400)',
                                        borderColor: 'var(--primary-400)',
                                    },
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </Box>
                            <Box
                                component="a"
                                href="mailto:alamtanvir2006@gmail.com"
                                sx={{
                                    p: 1.5,
                                    borderRadius: 2,
                                    background: 'var(--glass-bg)',
                                    border: '1px solid var(--border-color)',
                                    color: 'var(--text-secondary)',
                                    display: 'flex',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: 'var(--primary-400)',
                                        borderColor: 'var(--primary-400)',
                                    },
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
}
