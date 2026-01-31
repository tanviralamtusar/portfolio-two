import { Box, Container, Typography } from '@mui/material';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Code, Zap, ArrowRight } from 'lucide-react';
import { SpotlightCard } from './ui/spotlightcard';

const MotionBox = motion.create(Box);

const highlights = [
    {
        icon: <Code size={28} />,
        title: 'Currently Building',
        description: 'BotBhai - A SaaS webapp',
        link: 'https://chat.botbhai.net/',
        gradient: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
    },
    {
        icon: <Sparkles size={28} />,
        title: 'Learning',
        description: 'JavaScript, React, TypeScript, and Git',
        gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    },
    {
        icon: <Zap size={28} />,
        title: 'Ask Me About',
        description: 'AI Automation, Next.js, and Web Development',
        gradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
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
                    top: '10%',
                    left: '-5%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(12, 123, 255, 0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '-5%',
                    width: '350px',
                    height: '350px',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
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
                                ABOUT ME
                            </Typography>
                        </MotionBox>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 700,
                                mt: 3,
                                fontSize: { xs: '2rem', md: '3rem' },
                                background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--primary-400) 50%, var(--accent-400) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            A Bit About Me
                        </Typography>
                    </Box>

                    {/* Main Content - Text */}
                    <Box sx={{ maxWidth: '800px', mx: 'auto', mb: { xs: 6, md: 8 } }}>
                        <MotionBox
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                                    lineHeight: 2,
                                    color: 'var(--text-secondary)',
                                    textAlign: 'center',
                                    mb: 3,
                                }}
                            >
                                I'm a passionate <Box component="span" sx={{
                                    color: 'var(--primary-400)',
                                    fontWeight: 600,
                                    position: 'relative',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: -2,
                                        left: 0,
                                        width: '100%',
                                        height: '2px',
                                        background: 'linear-gradient(90deg, var(--primary-400), transparent)',
                                    }
                                }}>Full Stack Developer</Box> and
                                student with a deep interest in technology and innovation.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                                    lineHeight: 2,
                                    color: 'var(--text-secondary)',
                                    textAlign: 'center',
                                }}
                            >
                                Currently focused on building modern web applications and exploring the
                                intersection of AI and web development. I love creating tools that solve real
                                problems and make people's lives easier.
                            </Typography>
                        </MotionBox>
                    </Box>

                    {/* Fun Fact Card - Full Width */}
                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        sx={{ mb: { xs: 4, md: 6 } }}
                    >
                        <SpotlightCard
                            spotlightColor="139, 92, 246"
                            style={{ width: '100%' }}
                        >
                            <Box
                                sx={{
                                    p: { xs: 3, md: 4 },
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 48,
                                        height: 48,
                                        borderRadius: '12px',
                                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.05))',
                                        border: '1px solid rgba(139, 92, 246, 0.3)',
                                        fontSize: '1.5rem',
                                    }}
                                >
                                    ⚡
                                </Box>
                                <Box>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'rgba(139, 92, 246, 1)',
                                            fontWeight: 700,
                                            fontSize: '0.85rem',
                                            letterSpacing: 1,
                                            textTransform: 'uppercase',
                                            mb: 0.5,
                                        }}
                                    >
                                        Fun Fact
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ color: 'var(--text-secondary)', fontSize: { xs: '0.95rem', md: '1.05rem' } }}
                                    >
                                        I started my journey with AI Automation before falling in love with Full-Stack Development!
                                    </Typography>
                                </Box>
                            </Box>
                        </SpotlightCard>
                    </MotionBox>

                    {/* Highlight Cards - Grid */}
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                            gap: { xs: 2, md: 3 },
                        }}
                    >
                        {highlights.map((item, index) => (
                            <MotionBox
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            >
                                <SpotlightCard
                                    spotlightColor="12, 123, 255"
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    <Box
                                        component={item.link ? 'a' : 'div'}
                                        href={item.link}
                                        target={item.link ? '_blank' : undefined}
                                        rel={item.link ? 'noopener noreferrer' : undefined}
                                        sx={{
                                            p: { xs: 3, md: 4 },
                                            display: 'flex',
                                            flexDirection: 'column',
                                            textDecoration: 'none',
                                            cursor: item.link ? 'pointer' : 'default',
                                            height: '100%',
                                            transition: 'transform 0.3s ease',
                                            '&:hover': item.link ? {
                                                transform: 'translateY(-4px)',
                                            } : {},
                                        }}
                                    >
                                        {/* Icon with gradient background */}
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: 56,
                                                height: 56,
                                                borderRadius: '16px',
                                                background: item.gradient,
                                                mb: 2.5,
                                                color: '#fff',
                                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                                            }}
                                        >
                                            {item.icon}
                                        </Box>

                                        {/* Title with arrow for links */}
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                            <Typography
                                                variant="h4"
                                                sx={{
                                                    fontSize: { xs: '1rem', md: '1.1rem' },
                                                    fontWeight: 700,
                                                    color: 'var(--text-primary)',
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                            {item.link && (
                                                <ArrowRight
                                                    size={18}
                                                    style={{
                                                        color: 'var(--primary-400)',
                                                        transition: 'transform 0.3s ease',
                                                    }}
                                                />
                                            )}
                                        </Box>

                                        {/* Description */}
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'var(--text-secondary)',
                                                fontSize: { xs: '0.9rem', md: '0.95rem' },
                                                lineHeight: 1.7,
                                            }}
                                        >
                                            {item.description}
                                        </Typography>
                                    </Box>
                                </SpotlightCard>
                            </MotionBox>
                        ))}
                    </Box>
                </MotionBox>
            </Container>
        </Box>
    );
}
