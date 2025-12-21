import { Box, Container, Typography, Grid, Chip } from '@mui/material';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';

const MotionBox = motion.create(Box);

const projects = [
    {
        title: 'BotBhai',
        description: 'A SaaS webapp for AI-powered conversations. Currently my main project featuring modern web technologies and AI integration.',
        tags: ['Next.js', 'React', 'AI', 'SaaS'],
        github: null,
        live: 'https://chat.botbhai.net/',
        featured: true,
    },
    {
        title: 'Product Pricing App',
        description: 'An Android app for personal use, built as a fun project to explore mobile development with TypeScript.',
        tags: ['TypeScript', 'Android', 'Mobile'],
        github: 'https://github.com/tanviralamtusar/Product-pricing-app',
        live: null,
        featured: false,
    },
    {
        title: 'Color Picker Extension',
        description: 'A browser extension for picking colors from any webpage. My exploration into browser extension development.',
        tags: ['JavaScript', 'Browser Extension', 'Chrome'],
        github: 'https://github.com/tanviralamtusar/color-picker-extension',
        live: null,
        featured: false,
    },
    {
        title: 'Website Link Extractor',
        description: 'A tool to extract and organize links from websites. Useful for content analysis and web scraping.',
        tags: ['JavaScript', 'Web Scraping', 'Tools'],
        github: 'https://github.com/tanviralamtusar/website-link-extractor',
        live: null,
        featured: false,
    },
    {
        title: 'SysMonBar',
        description: 'A system monitoring tool built with Python. Monitors system resources and displays them in a convenient bar.',
        tags: ['Python', 'System Tools', 'Desktop'],
        github: 'https://github.com/tanviralamtusar/SysMonBar',
        live: null,
        featured: false,
    },
    {
        title: 'Modern Website',
        description: 'My first website project! A journey into web development that sparked my passion for creating on the web.',
        tags: ['HTML', 'CSS', 'First Project'],
        github: 'https://github.com/tanviralamtusar/ModernWebsite',
        live: null,
        featured: false,
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
                py: { xs: 10, md: 15 },
                position: 'relative',
                background: 'var(--bg-secondary)',
            }}
        >
            <Container maxWidth="lg">
                <MotionBox
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Header */}
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography
                            variant="overline"
                            sx={{
                                color: 'var(--primary-400)',
                                fontWeight: 600,
                                letterSpacing: 3,
                                mb: 1,
                                display: 'block',
                            }}
                        >
                            PROJECTS
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 700,
                                mb: 2,
                                background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--primary-400) 100%)',
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
                            }}
                        >
                            A collection of projects that showcase my journey and skills
                        </Typography>
                    </Box>

                    {/* Projects Grid */}
                    <Grid container spacing={4}>
                        {projects.map((project, index) => (
                            <Grid
                                size={{
                                    xs: 12,
                                    sm: 6,
                                    md: project.featured ? 12 : 6,
                                    lg: project.featured ? 12 : 4
                                }}
                                key={project.title}
                            >
                                <MotionBox
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    sx={{
                                        p: 4,
                                        height: '100%',
                                        borderRadius: 3,
                                        background: project.featured
                                            ? 'linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-primary) 100%)'
                                            : 'var(--bg-primary)',
                                        border: project.featured
                                            ? '2px solid var(--primary-500)'
                                            : '1px solid var(--border-color)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            borderColor: 'var(--primary-400)',
                                            boxShadow: '0 20px 50px rgba(12, 123, 255, 0.15)',
                                        },
                                        '&::before': project.featured ? {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '4px',
                                            background: 'linear-gradient(90deg, var(--primary-400), var(--accent-400), var(--secondary-400))',
                                        } : {},
                                    }}
                                >
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 16,
                                                right: 16,
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 0.5,
                                                px: 1.5,
                                                py: 0.5,
                                                borderRadius: 2,
                                                background: 'linear-gradient(135deg, var(--primary-500), var(--accent-500))',
                                                color: 'white',
                                                fontSize: '0.75rem',
                                                fontWeight: 600,
                                            }}
                                        >
                                            <Star size={14} />
                                            Featured
                                        </Box>
                                    )}

                                    {/* Project Title */}
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontSize: project.featured ? '1.5rem' : '1.25rem',
                                            fontWeight: 600,
                                            color: 'var(--text-primary)',
                                            mb: 2,
                                        }}
                                    >
                                        {project.title}
                                    </Typography>

                                    {/* Description */}
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'var(--text-secondary)',
                                            mb: 3,
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        {project.description}
                                    </Typography>

                                    {/* Tags */}
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                                        {project.tags.map((tag) => (
                                            <Chip
                                                key={tag}
                                                label={tag}
                                                size="small"
                                                sx={{
                                                    background: 'var(--glass-bg)',
                                                    color: 'var(--primary-400)',
                                                    border: '1px solid var(--border-color)',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 500,
                                                }}
                                            />
                                        ))}
                                    </Box>

                                    {/* Links */}
                                    <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
                                        {project.github && (
                                            <Box
                                                component="a"
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1,
                                                    color: 'var(--text-secondary)',
                                                    textDecoration: 'none',
                                                    fontSize: '0.9rem',
                                                    fontWeight: 500,
                                                    transition: 'color 0.3s ease',
                                                    '&:hover': {
                                                        color: 'var(--primary-400)',
                                                    },
                                                }}
                                            >
                                                <Github size={18} />
                                                Code
                                            </Box>
                                        )}
                                        {project.live && (
                                            <Box
                                                component="a"
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1,
                                                    color: 'var(--text-secondary)',
                                                    textDecoration: 'none',
                                                    fontSize: '0.9rem',
                                                    fontWeight: 500,
                                                    transition: 'color 0.3s ease',
                                                    '&:hover': {
                                                        color: 'var(--primary-400)',
                                                    },
                                                }}
                                            >
                                                <ExternalLink size={18} />
                                                Live Demo
                                            </Box>
                                        )}
                                    </Box>
                                </MotionBox>
                            </Grid>
                        ))}
                    </Grid>
                </MotionBox>
            </Container>
        </Box>
    );
}
