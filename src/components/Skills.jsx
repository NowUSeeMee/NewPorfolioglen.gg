import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        "React", "Vue", "Next.js", "Node.js", "TypeScript",
        "JavaScript", "PHP", "MongoDB", "Tailwind CSS", "Git", "Figma",
        "Networking Setup", "Router Configuration", "Hardware Assembly", "PC Maintenance", "Software & Hardware Troubleshooting"
    ];

    // We duplicate the array so the infinite scroll is seamless
    const duplicatedSkills = [...skills, ...skills];

    return (
        <section id="skills" style={{
            padding: '4rem 0',
            background: 'var(--bg-color)',
            borderTop: '1px solid var(--glass-border)',
            borderBottom: '1px solid var(--glass-border)',
            overflow: 'hidden'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem' }}
                >
                    My <span className="text-gradient">Tech Stack</span>
                </motion.h2>
            </div>

            <div style={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                overflow: 'hidden',
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}>
                <motion.div
                    animate={{ x: [0, -2800] }} // Adjusted for more elements
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 35, // Slowed down slightly for more items
                            ease: "linear",
                        },
                    }}
                    style={{
                        display: 'flex',
                        gap: '3rem',
                        paddingRight: '3rem', // Match gap
                        whiteSpace: 'nowrap'
                    }}
                >
                    {duplicatedSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="glass-panel"
                            style={{
                                padding: '1rem 2rem',
                                fontSize: '1.2rem',
                                fontWeight: '600',
                                color: 'var(--text-primary)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minWidth: 'max-content'
                            }}>
                            {skill}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
