import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const BinaryRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);

        // Binary characters
        const chars = '01';
        const fontSize = 14;
        const columns = Math.floor(width / fontSize);

        // An array of drops - one per column
        const drops = [];
        for (let x = 0; x < columns; x++) {
            // start randomly above screen
            drops[x] = Math.random() * -100;
        }

        const draw = () => {
            // Translucent background to show trail
            // Check current theme
            const isLight = document.documentElement.getAttribute('data-theme') === 'light';
            ctx.fillStyle = isLight ? 'rgba(248, 250, 252, 0.05)' : 'rgba(5, 5, 5, 0.05)';
            ctx.fillRect(0, 0, width, height);

            // Determine text color based on theme
            // In dark mode: dim white/cyan. In light mode: dim dark blue
            ctx.fillStyle = isLight ? 'rgba(59, 130, 246, 0.2)' : 'rgba(0, 242, 254, 0.15)';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));

                // x coordinate of the drop, y coordinate of the drop
                // Add subtle glow
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset drop if it goes off screen AND randomly so they don't all reset at once
                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // increment y coordinate
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 50); // Speed of the rain

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.5, // keep it subtle in the background
                zIndex: -1,
            }}
        />
    );
};

const BackgroundEffects = () => {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1000,
        height: typeof window !== 'undefined' ? window.innerHeight : 1000,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Generate random orbs
    const orbs = Array.from({ length: 5 }).map((_, i) => ({
        id: i,
        size: Math.random() * 300 + 150,
        x: Math.random() * windowSize.width,
        y: Math.random() * windowSize.height,
        color: i % 2 === 0 ? 'rgba(79, 172, 254, 0.15)' : 'rgba(111, 66, 193, 0.15)',
        duration: Math.random() * 20 + 20,
        delay: Math.random() * 5,
    }));

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -2,
            pointerEvents: 'none',
            overflow: 'hidden',
        }}>
            {/* Binary Matrix Rain */}
            <BinaryRain />

            {/* Dynamic drifting background orbs */}
            {orbs.map((orb) => (
                <motion.div
                    key={orb.id}
                    animate={{
                        x: [orb.x, Math.random() * windowSize.width, orb.x],
                        y: [orb.y, Math.random() * windowSize.height, orb.y],
                    }}
                    transition={{
                        duration: orb.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: orb.delay
                    }}
                    style={{
                        position: 'absolute',
                        width: orb.size,
                        height: orb.size,
                        borderRadius: '50%',
                        background: orb.color,
                        filter: 'blur(100px)',
                    }}
                />
            ))}

            {/* Grid overlay for a high-tech feel */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
            }}></div>
        </div>
    );
};

export default BackgroundEffects;
