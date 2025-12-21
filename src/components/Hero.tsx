import { Box, Container, Typography, IconButton } from '@mui/material';
import { motion } from 'motion/react';
import { ArrowDown, Github, Mail, Code, Zap, Sparkles, Terminal, Palette, LayoutGrid, Layers, Flame } from 'lucide-react';
import MagneticConnections from './MagneticConnections';
import AnimatedText from './AnimatedText';
import TypeAnimation from './TypeAnimation';
import SocialOrbit from './SocialOrbit';

const MotionBox = motion.create(Box);

export default function Hero() {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Box
            id="home"
            sx={{
                minHeight: '100vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
            }}
        >
            {/* Background */}
            <MagneticConnections />

            {/* Content */}
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 4 }}>
                    {/* Left Side - Text Content */}
                    <Box sx={{ flex: { xs: '1', md: '0 0 55%', lg: '0 0 60%' } }}>
                        <MotionBox
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            sx={{
                                textAlign: 'left',
                            }}
                        >
                            {/* Greeting */}
                            <MotionBox
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                sx={{
                                    display: 'inline-block',
                                    px: 3,
                                    py: 1,
                                    mb: 3,
                                    borderRadius: '50px',
                                    background: 'var(--glass-bg)',
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid var(--border-color)',
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    sx={{ color: 'var(--text-secondary)', fontWeight: 500 }}
                                >
                                    👋 Hi there, I'm
                                </Typography>
                            </MotionBox>

                            {/* Name */}
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
                                    fontWeight: 400,
                                    lineHeight: 1.1,
                                    mb: 2,
                                    fontFamily: '"Moonstar", "Outfit", sans-serif',
                                }}
                            >
                                <AnimatedText
                                    text="Tanvir Alam"
                                    delay={500}
                                    style={{
                                        fontFamily: '"Moonstar", "Outfit", sans-serif',
                                        background: 'linear-gradient(135deg, var(--primary-300) 0%, var(--accent-400) 50%, var(--secondary-400) 100%)',
                                        backgroundSize: '200% 200%',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        animation: 'gradient-shift 5s ease infinite',
                                    }}
                                />
                            </Typography>

                            {/* Role with TypeAnimation */}
                            <MotionBox
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.5 }}
                                sx={{
                                    fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.75rem' },
                                    fontWeight: 500,
                                    color: 'var(--text-secondary)',
                                    mb: 4,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    flexWrap: 'wrap',
                                    gap: 1,
                                }}
                            >
                                <span>I'm a</span>
                                <TypeAnimation
                                    words={['Full Stack Developer', 'Tech Enthusiast', 'Content Creator', 'AI Automation Expert', 'Problem Solver', 'Tinkerer', 'AI Enthusiast']}
                                    typingSpeed="medium"
                                    deletingSpeed="fast"
                                    gradientFrom="primary-300"
                                    gradientTo="accent-400"
                                    pauseDuration={2000}
                                    style={{
                                        fontSize: 'inherit',
                                        fontWeight: 600,
                                    }}
                                />
                            </MotionBox>

                            {/* CTA Buttons */}
                            <MotionBox
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 2.8 }}
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                    justifyContent: 'flex-start',
                                    flexWrap: 'wrap',
                                    mb: 6,
                                }}
                            >
                                <Box
                                    component="a"
                                    href="#projects"
                                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                        e.preventDefault();
                                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="btn btn-primary"
                                >
                                    View Projects
                                </Box>
                                <Box
                                    component="a"
                                    href="#contact"
                                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                        e.preventDefault();
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="btn btn-secondary"
                                >
                                    Get In Touch
                                </Box>
                            </MotionBox>

                            {/* Social Links */}
                            <MotionBox
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 3 }}
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                    justifyContent: 'flex-start',
                                    mb: 6,
                                }}
                            >
                                <IconButton
                                    component="a"
                                    href="https://github.com/tanviralamtusar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: 'var(--text-secondary)',
                                        background: 'var(--glass-bg)',
                                        backdropFilter: 'blur(12px)',
                                        border: '1px solid var(--border-color)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            color: 'var(--primary-400)',
                                            transform: 'translateY(-3px)',
                                            boxShadow: '0 10px 30px rgba(12, 123, 255, 0.2)',
                                        },
                                    }}
                                >
                                    <Github size={22} />
                                </IconButton>
                                <IconButton
                                    component="a"
                                    href="mailto:alamtanvir2006@gmail.com"
                                    sx={{
                                        color: 'var(--text-secondary)',
                                        background: 'var(--glass-bg)',
                                        backdropFilter: 'blur(12px)',
                                        border: '1px solid var(--border-color)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            color: 'var(--primary-400)',
                                            transform: 'translateY(-3px)',
                                            boxShadow: '0 10px 30px rgba(12, 123, 255, 0.2)',
                                        },
                                    }}
                                >
                                    <Mail size={22} />
                                </IconButton>
                            </MotionBox>
                        </MotionBox>
                    </Box>

                    {/* Right Side - Social Orbit */}
                    <Box sx={{ flex: { xs: '1', md: '0 0 40%', lg: '0 0 35%' }, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
                        <MotionBox
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <SocialOrbit
                                rippleCount={3}
                                rippleDuration={2}
                                orbitDuration={30}
                                iconDelay={200}
                                iconDuration={800}
                                icons={[
                                    { icon: <Zap size={20} />, orbitIndex: 1, position: 0 },
                                    { icon: <Sparkles size={20} />, orbitIndex: 2, position: 45 },
                                    { icon: <Terminal size={20} />, orbitIndex: 2, position: 90 },
                                    { icon: <Palette size={20} />, orbitIndex: 1, position: 135 },
                                    { icon: <Code size={20} />, orbitIndex: 1, position: 180 },
                                    { icon: <LayoutGrid size={20} />, orbitIndex: 2, position: 225 },
                                    { icon: <Layers size={20} />, orbitIndex: 1, position: 270 },
                                    { icon: <Flame size={20} />, orbitIndex: 2, position: 315 },
                                ]}
                            >
                                <svg
                                    height="32"
                                    viewBox="0 0 16 16"
                                    width="32"
                                    fill="currentColor"
                                >
                                    <path d="M8 0C8.26264 0 8.5144 0.104413 8.7002 0.290039L10.4639 2.05273H12.9551C13.0853 2.05258 13.2146 2.07819 13.335 2.12793C13.4554 2.17773 13.5651 2.25063 13.6572 2.34277C13.7494 2.43492 13.8223 2.54461 13.8721 2.66504C13.9218 2.7854 13.9474 2.91468 13.9473 3.04492V5.53711L15.71 7.2998C15.8956 7.4856 16 7.73736 16 8C16 8.26264 15.8956 8.5144 15.71 8.7002L13.9473 10.4639V12.9551C13.9474 13.0853 13.9218 13.2146 13.8721 13.335C13.8223 13.4554 13.7494 13.5651 13.6572 13.6572C13.5651 13.7494 13.4554 13.8223 13.335 13.8721C13.2146 13.9218 13.0853 13.9474 12.9551 13.9473H10.4639L8.7002 15.71C8.5144 15.8956 8.26264 16 8 16C7.73736 16 7.4856 15.8956 7.2998 15.71L5.53613 13.9473H3.04492C2.49748 13.9473 2.05273 13.5037 2.05273 12.9551V10.4639L0.290039 8.7002C0.104413 8.5144 0 8.26264 0 8C0 7.73736 0.104413 7.4856 0.290039 7.2998L2.05273 5.53613V3.04492C2.05258 2.91468 2.07819 2.7854 2.12793 2.66504C2.17773 2.54461 2.25063 2.43492 2.34277 2.34277C2.43492 2.25063 2.54461 2.17773 2.66504 2.12793C2.7854 2.07819 2.91468 2.05258 3.04492 2.05273H5.53711L7.2998 0.290039C7.4856 0.104413 7.73736 0 8 0ZM6.9375 8.5332L5.875 7.4707L4.81445 8.53125L6.40723 10.124C6.70012 10.4169 7.17488 10.4169 7.46777 10.124L11.1855 6.40625L10.125 5.3457L6.9375 8.5332Z" />
                                </svg>
                            </SocialOrbit>
                        </MotionBox>
                    </Box>
                </Box>
            </Container>

            {/* Scroll Indicator */}
            <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 3.5 }}
                onClick={scrollToAbout}
                sx={{
                    position: 'absolute',
                    bottom: 40,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    cursor: 'pointer',
                    zIndex: 10,
                }}
            >
                <MotionBox
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1,
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}
                    >
                        Scroll Down
                    </Typography>
                    <ArrowDown size={20} color="var(--text-tertiary)" />
                </MotionBox>
            </MotionBox>
        </Box>
    );
}
