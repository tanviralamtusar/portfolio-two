import { Box, Container, Typography } from '@mui/material';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Folder, ArrowUpRight } from 'lucide-react';
import { ExpandingCards } from './ui/expanding-cards';

const MotionBox = motion.create(Box);

const projects = [
    {
        title: 'BotBhai',
        description: 'A SaaS webapp for AI-powered conversations. Currently my main project featuring modern web technologies and AI integration.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
        tags: ['Next.js', 'React', 'AI', 'SaaS'],
        link: 'https://chat.botbhai.net/',
    },
    {
        title: 'Product Pricing App',
        description: 'An Android app for personal use, built as a fun project to explore mobile development with TypeScript.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
        tags: ['TypeScript', 'Android', 'Mobile'],
        link: 'https://github.com/tanviralamtusar/Product-pricing-app',
    },
    {
        title: 'Color Picker Extension',
        description: 'A browser extension for picking colors from any webpage. My exploration into browser extension development.',
        image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop',
        tags: ['JavaScript', 'Browser Extension', 'Chrome'],
        link: 'https://github.com/tanviralamtusar/color-picker-extension',
    },
    {
        title: 'Website Link Extractor',
        description: 'A tool to extract and organize links from websites. Useful for content analysis and web scraping.',
        image: '/website-link-extractor.png',
        tags: ['JavaScript', 'Web Scraping', 'Tools'],
        link: 'https://github.com/tanviralamtusar/website-link-extractor',
    },
    {
        title: 'SysMonBar',
        description: 'A system monitoring tool built with Python. Monitors system resources and displays them in a convenient bar.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        tags: ['Python', 'System Tools', 'Desktop'],
        link: 'https://github.com/tanviralamtusar/SysMonBar',
    },
    {
        title: 'Modern Website',
        description: 'My first website project! A journey into web development that sparked my passion for creating on the web.',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop',
        tags: ['HTML', 'CSS', 'First Project'],
        link: 'https://github.com/tanviralamtusar/ModernWebsite',
    },
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <Box
            id="projects"
            component="section"
            sx={{
                py: { xs: 12, md: 18 },
                position: 'relative',
                background: 'var(--bg-secondary)',
                overflow: 'hidden',
            }}
        >
            {/* Background decorative elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '20%',
                    right: '-10%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(12, 123, 255, 0.06) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    pointerEvents: 'none',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '-10%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    pointerEvents: 'none',
                }}
            />

            <Container maxWidth="lg">
                <MotionBox
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Header */}
                    <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
                        <MotionBox
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5 }}
                        >
                            <Typography
                                variant="overline"
                                sx={{
                                    color: 'var(--primary-400)',
                                    fontWeight: 600,
                                    letterSpacing: 4,
                                    mb: 2,
                                    display: 'inline-block',
                                    px: 3,
                                    py: 1,
                                    borderRadius: 50,
                                    background: 'rgba(12, 123, 255, 0.1)',
                                    border: '1px solid rgba(12, 123, 255, 0.2)',
                                }}
                            >
                                PROJECTS
                            </Typography>
                        </MotionBox>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 700,
                                mt: 3,
                                mb: 2,
                                fontSize: { xs: '2rem', md: '3rem' },
                                background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--primary-400) 50%, var(--accent-400) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            What I've Built
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'var(--text-secondary)',
                                maxWidth: '600px',
                                mx: 'auto',
                                fontSize: { xs: '1rem', md: '1.15rem' },
                                lineHeight: 1.8,
                            }}
                        >
                            A collection of projects that showcase my journey and skills
                        </Typography>
                    </Box>

                    {/* Expanding Cards */}
                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <ExpandingCards
                            cards={projects}
                            gap={16}
                            height={450}
                            breakpoints={[
                                {
                                    maxWidth: 640,
                                    activeWidth: 5,
                                    inactiveWidth: 1,
                                    titleActive: '18px',
                                    titleInactive: '12px',
                                },
                                {
                                    maxWidth: 768,
                                    activeWidth: 4,
                                    inactiveWidth: 1,
                                    titleActive: '20px',
                                    titleInactive: '14px',
                                },
                                {
                                    maxWidth: 1024,
                                    activeWidth: 4,
                                    inactiveWidth: 1,
                                    titleActive: '24px',
                                    titleInactive: '16px',
                                },
                            ]}
                            transitionDuration={0.4}
                        />
                    </MotionBox>

                    {/* View More on GitHub */}
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: { xs: 6, md: 8 }
                        }}
                    >
                        <Box
                            component="a"
                            href="https://github.com/tanviralamtusar"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 1.5,
                                px: 4,
                                py: 2,
                                borderRadius: 50,
                                background: 'transparent',
                                border: '2px solid var(--border-color)',
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                fontSize: '1rem',
                                fontWeight: 600,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    borderColor: 'var(--primary-400)',
                                    color: 'var(--primary-400)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 8px 30px rgba(12, 123, 255, 0.2)',
                                },
                            }}
                        >
                            <Folder size={20} />
                            View More on GitHub
                            <ArrowUpRight size={18} />
                        </Box>
                    </MotionBox>
                </MotionBox>
            </Container>
        </Box>
    );
}
