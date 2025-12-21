import { Box, Container, Typography, Grid } from '@mui/material';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const MotionBox = motion.create(Box);

const skillCategories = [
    {
        title: 'Frontend',
        skills: [
            { name: 'React', level: 85 },
            { name: 'Next.js', level: 80 },
            { name: 'TypeScript', level: 75 },
            { name: 'JavaScript', level: 85 },
            { name: 'HTML/CSS', level: 90 },
        ],
    },
    {
        title: 'Backend & Tools',
        skills: [
            { name: 'Node.js', level: 70 },
            { name: 'Python', level: 75 },
            { name: 'Git', level: 80 },
            { name: 'REST APIs', level: 75 },
        ],
    },
    {
        title: 'AI & Automation',
        skills: [
            { name: 'AI Automation', level: 85 },
            { name: 'Prompt Engineering', level: 80 },
            { name: 'API Integration', level: 75 },
        ],
    },
    {
        title: 'Currently Learning',
        skills: [
            { name: 'React', level: 60 },
            { name: 'TypeScript', level: 55 },
            { name: 'Git', level: 65 },
        ],
    },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <Box
            id="skills"
            component="section"
            sx={{
                py: { xs: 10, md: 15 },
                position: 'relative',
                background: 'var(--bg-primary)',
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
                            SKILLS
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
                            What I Work With
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'var(--text-secondary)',
                                maxWidth: '600px',
                                mx: 'auto',
                            }}
                        >
                            Technologies and tools I use to bring ideas to life
                        </Typography>
                    </Box>

                    {/* Skills Grid */}
                    <Grid container spacing={4}>
                        {skillCategories.map((category, categoryIndex) => (
                            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={category.title}>
                                <MotionBox
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
                                    sx={{
                                        p: 3,
                                        height: '100%',
                                        borderRadius: 3,
                                        background: 'var(--bg-secondary)',
                                        border: '1px solid var(--border-color)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            borderColor: 'var(--primary-400)',
                                            boxShadow: '0 15px 40px rgba(12, 123, 255, 0.1)',
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontSize: '1.1rem',
                                            fontWeight: 600,
                                            color: 'var(--primary-400)',
                                            mb: 3,
                                            pb: 2,
                                            borderBottom: '1px solid var(--border-color)',
                                        }}
                                    >
                                        {category.title}
                                    </Typography>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                                        {category.skills.map((skill, skillIndex) => (
                                            <Box key={skill.name}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        mb: 0.5,
                                                    }}
                                                >
                                                    <Typography
                                                        variant="body2"
                                                        sx={{ color: 'var(--text-primary)', fontWeight: 500 }}
                                                    >
                                                        {skill.name}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{ color: 'var(--text-tertiary)' }}
                                                    >
                                                        {skill.level}%
                                                    </Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        width: '100%',
                                                        height: 6,
                                                        borderRadius: 3,
                                                        background: 'var(--border-color)',
                                                        overflow: 'hidden',
                                                    }}
                                                >
                                                    <MotionBox
                                                        initial={{ width: 0 }}
                                                        animate={isInView ? { width: `${skill.level}%` } : {}}
                                                        transition={{
                                                            duration: 1,
                                                            delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.1,
                                                            ease: 'easeOut',
                                                        }}
                                                        sx={{
                                                            height: '100%',
                                                            borderRadius: 3,
                                                            background: 'linear-gradient(90deg, var(--primary-500), var(--accent-400))',
                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                        ))}
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
