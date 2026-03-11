const Footer = () => {
    return (
        <footer style={{
            background: 'var(--bg-color-secondary)',
            padding: '3rem 0',
            borderTop: '1px solid var(--glass-border)',
            textAlign: 'center'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '2rem'
                }}>
                    <div className="logo" style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.2rem',
                        fontWeight: 800
                    }}>
                        Port<span className="text-gradient">folio.</span>
                    </div>

                    <div style={{
                        display: 'flex',
                        gap: '1.5rem',
                        color: 'var(--text-secondary)'
                    }}>
                        <a href="#" className="nav-link">GitHub</a>
                        <a href="#" className="nav-link">LinkedIn</a>
                        <a href="#" className="nav-link">Twitter</a>
                    </div>
                </div>
                <div style={{
                    marginTop: '2rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid var(--glass-border)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                }}>
                    <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
