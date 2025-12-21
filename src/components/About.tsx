import { Box, Container, Typography, Grid } from '@mui/material';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Code, Zap } from 'lucide-react';
import { SpotlightCard } from './ui/spotlightcard';

const MotionBox = motion.create(Box);

const highlights = [
    {
        icon: <Code size={24} />,
        title: 'Currently Building',
        description: 'BotBhai - A SaaS webapp',
        link: 'https://chat.botbhai.net/',
    },
    {
        icon: <Sparkles size={24} />,
        title: 'Learning',
        description: 'JavaScript, React, TypeScript, and Git',
    },
    {
        icon: <Zap size={24} />,
        title: 'Ask Me About',
        description: 'AI Automation, Next.js, and Web Development',
    },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <Box
            id="about"
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
                            ABOUT ME
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
                            A Bit About Me
                        </Typography>
                    </Box>

                    {/* Main Content */}
                    <Grid container spacing={6} alignItems="center">
                        {/* Text Content */}
                        <Grid size={{ xs: 12, md: 7 }}>
                            <MotionBox
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: '1.15rem',
                                        lineHeight: 1.9,
                                        color: 'var(--text-secondary)',
                                        mb: 4,
                                    }}
                                >
                                    I'm a passionate <strong style={{ color: 'var(--primary-400)' }}>Full Stack Developer</strong> and
                                    student with a deep interest in technology and innovation. My journey started with
                                    AI Automation before I fell in love with Full-Stack Development.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: '1.15rem',
                                        lineHeight: 1.9,
                                        color: 'var(--text-secondary)',
                                        mb: 4,
                                    }}
                                >
                                    Currently, I'm focused on building modern web applications and exploring the
                                    intersection of AI and web development. I love creating tools that solve real
                                    problems and make people's lives easier.
                                </Typography>

                                {/* Fun Fact */}
                                <Box
                                    sx={{
                                        p: 3,
                                        borderRadius: 3,
                                        background: 'var(--glass-bg)',
                                        backdropFilter: 'blur(12px)',
                                        border: '1px solid var(--border-color)',
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        sx={{ color: 'var(--primary-400)', fontWeight: 600, mb: 1 }}
                                    >
                                        ⚡ Fun Fact
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ color: 'var(--text-secondary)' }}
                                    >
                                        I started my journey with AI Automation before falling in love with Full-Stack Development!
                                    </Typography>
                                </Box>
                            </MotionBox>
                        </Grid>

                        {/* Highlight Cards */}
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 3 }}>
                                {highlights.map((item, index) => (
                                    <MotionBox
                                        key={index}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    >
                                        <SpotlightCard
                                            spotlightColor="12, 123, 255"
                                            style={{ width: '100%' }}
                                        >
                                            <Box
                                                component={item.link ? 'a' : 'div'}
                                                href={item.link}
                                                target={item.link ? '_blank' : undefined}
                                                rel={item.link ? 'noopener noreferrer' : undefined}
                                                sx={{
                                                    p: 3,
                                                    display: 'block',
                                                    textDecoration: 'none',
                                                    cursor: item.link ? 'pointer' : 'default',
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 2,
                                                        mb: 1.5,
                                                        color: 'var(--primary-400)',
                                                    }}
                                                >
                                                    {item.icon}
                                                    <Typography
                                                        variant="h4"
                                                        sx={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}
                                                    >
                                                        {item.title}
                                                    </Typography>
                                                </Box>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: 'var(--text-secondary)' }}
                                                >
                                                    {item.description}
                                                </Typography>
                                            </Box>
                                        </SpotlightCard>
                                    </MotionBox>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </MotionBox>
            </Container>
        </Box>
    );
}
