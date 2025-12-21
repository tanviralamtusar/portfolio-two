import { Box, Container, Typography, IconButton } from '@mui/material';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Github, Mail, Heart } from 'lucide-react';

const MotionBox = motion.create(Box);

const socialLinks = [
    {
        icon: <Github size={24} />,
        label: 'GitHub',
        href: 'https://github.com/tanviralamtusar',
        color: '#333',
    },
    {
        icon: <Mail size={24} />,
        label: 'Email',
        href: 'mailto:alamtanvir2006@gmail.com',
        color: '#EA4335',
    },
];

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <Box
            id="contact"
            component="section"
            sx={{
                py: { xs: 10, md: 15 },
                position: 'relative',
                background: 'var(--bg-primary)',
            }}
        >
            <Container maxWidth="md">
                <MotionBox
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    sx={{ textAlign: 'center' }}
                >
                    {/* Section Header */}
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
                        CONTACT
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            mb: 3,
                            background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--primary-400) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Let's Connect
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'var(--text-secondary)',
                            maxWidth: '500px',
                            mx: 'auto',
                            mb: 6,
                            fontSize: '1.1rem',
                            lineHeight: 1.8,
                        }}
                    >
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </Typography>

                    {/* Contact Card */}
                    <MotionBox
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        sx={{
                            p: { xs: 4, md: 6 },
                            borderRadius: 4,
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--border-color)',
                            mb: 6,
                        }}
                    >
                        {/* Email */}
                        <Typography
                            variant="h4"
                            sx={{
                                fontSize: '1rem',
                                fontWeight: 500,
                                color: 'var(--text-tertiary)',
                                mb: 2,
                            }}
                        >
                            Reach me at
                        </Typography>
                        <Box
                            component="a"
                            href="mailto:alamtanvir2006@gmail.com"
                            sx={{
                                display: 'inline-block',
                                fontSize: { xs: '1.2rem', md: '1.5rem' },
                                fontWeight: 600,
                                color: 'var(--primary-400)',
                                textDecoration: 'none',
                                mb: 4,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.02)',
                                    textShadow: '0 0 20px rgba(12, 123, 255, 0.5)',
                                },
                            }}
                        >
                            alamtanvir2006@gmail.com
                        </Box>

                        {/* Social Links */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: 3,
                                pt: 4,
                                borderTop: '1px solid var(--border-color)',
                            }}
                        >
                            {socialLinks.map((social, index) => (
                                <MotionBox
                                    key={social.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                                >
                                    <IconButton
                                        component="a"
                                        href={social.href}
                                        target={social.label === 'Email' ? undefined : '_blank'}
                                        rel={social.label === 'Email' ? undefined : 'noopener noreferrer'}
                                        aria-label={social.label}
                                        sx={{
                                            width: 60,
                                            height: 60,
                                            color: 'var(--text-secondary)',
                                            background: 'var(--glass-bg)',
                                            backdropFilter: 'blur(12px)',
                                            border: '1px solid var(--border-color)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                color: 'var(--primary-400)',
                                                transform: 'translateY(-5px) scale(1.1)',
                                                borderColor: 'var(--primary-400)',
                                                boxShadow: '0 15px 40px rgba(12, 123, 255, 0.2)',
                                            },
                                        }}
                                    >
                                        {social.icon}
                                    </IconButton>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            mt: 1,
                                            color: 'var(--text-tertiary)',
                                            fontSize: '0.85rem',
                                        }}
                                    >
                                        {social.label}
                                    </Typography>
                                </MotionBox>
                            ))}
                        </Box>
                    </MotionBox>

                    {/* CTA */}
                    <MotionBox
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Box
                            component="a"
                            href="mailto:alamtanvir2006@gmail.com"
                            className="btn btn-primary"
                            sx={{
                                display: 'inline-flex',
                                fontSize: '1.1rem',
                                px: 5,
                                py: 2,
                            }}
                        >
                            <Mail size={20} />
                            Say Hello
                        </Box>
                    </MotionBox>
                </MotionBox>
            </Container>

            {/* Footer */}
            <Box
                sx={{
                    mt: 10,
                    pt: 4,
                    borderTop: '1px solid var(--border-color)',
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        color: 'var(--text-tertiary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                    }}
                >
                    Made with <Heart size={16} color="var(--primary-400)" fill="var(--primary-400)" /> by Tanvir Alam
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: 'var(--text-tertiary)',
                        mt: 1,
                        opacity: 0.7,
                    }}
                >
                    © {new Date().getFullYear()} All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}
