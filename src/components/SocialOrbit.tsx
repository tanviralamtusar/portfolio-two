import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface OrbitIcon {
    icon: React.ReactNode;
    orbitIndex: number;
    position: number;
}

interface SocialOrbitProps {
    rippleCount?: number;
    rippleDuration?: number;
    textOrbitIndex?: number;
    textDuration?: number;
    orbitDuration?: number;
    iconDelay?: number;
    iconDuration?: number;
    icons: OrbitIcon[];
    children?: React.ReactNode;
}

export function SocialOrbit({
    rippleCount = 3,
    rippleDuration = 2,
    orbitDuration = 30,
    iconDelay = 200,
    iconDuration = 800,
    icons,
    children,
}: SocialOrbitProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const orbitSizes = [160, 240, 320, 400];

    return (
        <div
            style={{
                position: 'relative',
                width: '400px',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Ripple circles */}
            {Array.from({ length: rippleCount }).map((_, i) => (
                <motion.div
                    key={`ripple-${i}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [0.9, 1.1, 0.9],
                    }}
                    transition={{
                        duration: rippleDuration,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: 'easeInOut',
                    }}
                    style={{
                        position: 'absolute',
                        width: orbitSizes[i + 1],
                        height: orbitSizes[i + 1],
                        borderRadius: '50%',
                        border: '1px solid var(--primary-400)',
                        opacity: 0.2,
                    }}
                />
            ))}

            {/* Orbit rings */}
            {orbitSizes.slice(0, 3).map((size, i) => (
                <motion.div
                    key={`orbit-${i}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    style={{
                        position: 'absolute',
                        width: size,
                        height: size,
                        borderRadius: '50%',
                        border: '1px solid var(--border-color)',
                    }}
                />
            ))}

            {/* Orbiting icons */}
            {icons.map((item, index) => {
                const orbitSize = orbitSizes[item.orbitIndex];
                const radius = orbitSize / 2;

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                            duration: iconDuration / 1000,
                            delay: (iconDelay * index) / 1000,
                            ease: 'backOut',
                        }}
                        style={{
                            position: 'absolute',
                            width: orbitSize,
                            height: orbitSize,
                            animation: `orbit-${item.orbitIndex} ${orbitDuration}s linear infinite`,
                        }}
                    >
                        <motion.div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                width: 40,
                                height: 40,
                                marginLeft: -20,
                                marginTop: -20,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                background: 'var(--glass-bg)',
                                backdropFilter: 'blur(8px)',
                                border: '1px solid var(--border-color)',
                                color: 'var(--primary-400)',
                                transform: `rotate(${item.position}deg) translateX(${radius}px) rotate(-${item.position}deg)`,
                                boxShadow: '0 4px 15px rgba(12, 123, 255, 0.2)',
                            }}
                            whileHover={{
                                scale: 1.2,
                                boxShadow: '0 8px 25px rgba(12, 123, 255, 0.4)',
                            }}
                        >
                            {item.icon}
                        </motion.div>
                    </motion.div>
                );
            })}

            {/* Center content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3, ease: 'backOut' }}
                style={{
                    position: 'relative',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--primary-500), var(--accent-500))',
                    boxShadow: '0 10px 40px rgba(12, 123, 255, 0.4)',
                    color: 'white',
                }}
            >
                {children}
            </motion.div>

            {/* CSS for orbit animations */}
            <style>{`
        @keyframes orbit-0 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-1 {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes orbit-2 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}

export default SocialOrbit;
