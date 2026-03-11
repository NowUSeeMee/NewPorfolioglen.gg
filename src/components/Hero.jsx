import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }} id="about">

            {/* Background Decor */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '-10%',
                width: '500px',
                height: '500px',
                background: 'var(--glow-color)',
                filter: 'blur(150px)',
                borderRadius: '50%',
                zIndex: -1,
                opacity: 0.5
            }} className="animate-float"></div>

            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-5%',
                width: '400px',
                height: '400px',
                background: 'rgba(111, 66, 193, 0.4)',
                filter: 'blur(120px)',
                borderRadius: '50%',
                zIndex: -1,
                animationDelay: '1s'
            }} className="animate-float"></div>

            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center'
            }}>
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p style={{
                        color: 'var(--text-secondary)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        marginBottom: '1rem',
                        fontSize: '0.9rem'
                    }}>Hi, I'm a developer</p>

                    <h1 style={{
                        fontSize: '4.5rem',
                        marginBottom: '1.5rem',
                        letterSpacing: '-1px'
                    }}>
                        Building <br />
                        <span className="text-gradient">Digital</span> Experiences.
                    </h1>

                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1.2rem',
                        marginBottom: '2.5rem',
                        maxWidth: '480px'
                    }}>
                        I specialize in crafting high-performance, visually stunning web applications with modern technologies. Let's turn your ideas into reality.
                    </p>

                    <div className="btn-container" style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-secondary">Contact Me</a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    style={{ position: 'relative', width: '100%' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="glass-panel" style={{
                        aspectRatio: '1',
                        borderRadius: '30%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: '2px',
                            borderRadius: 'inherit',
                            zIndex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem'
                        }}>
                            {/* Profile Picture */}
                            <img
                                src="/images/profilepic.png"
                                alt="Profile"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center 30%',
                                    zIndex: 2,
                                    position: 'absolute'
                                }}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            <h2 style={{
                                position: 'absolute',
                                zIndex: 2,
                                fontSize: '3rem',
                                opacity: 0.8,
                                fontFamily: 'monospace',
                                display: 'none'
                            }}>{'</>'}</h2>
                        </div>
                        {/* Animated rotating accent border */}
                        <div style={{
                            position: 'absolute',
                            width: '150%',
                            height: '150%',
                            background: 'conic-gradient(var(--accent-gradient), transparent 30%, transparent)',
                            animation: 'spin 4s linear infinite',
                            zIndex: 0
                        }}></div>
                    </div>
                </motion.div>
            </div>
            <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero h1 {
            font-size: 3rem !important;
          }
          .hero p {
            margin: 0 auto 1.5rem auto !important;
          }
          .hero-visual {
            width: 100%;
            max-width: 350px;
            margin: 0 auto;
          }
          .btn-container {
            justify-content: center;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
