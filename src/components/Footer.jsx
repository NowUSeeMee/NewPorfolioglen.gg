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
                        <a href="https://github.com/NowUSeeMee" className="nav-link">GitHub</a>
                        <a href="https://www.facebook.com/tablada.glen.1?rdid=hLoi9mDM5pzGDtuG&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1G78VoeFHk%2F#" className="nav-link">FaceBook</a>
                        <a href="https://www.instagram.com/glentablada?igsh=N2ttdTlhZnpiY216" className="nav-link">Instagram</a>
                    </div>
                </div>
                <div style={{
                    marginTop: '2rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid var(--glass-border)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                }}>
                    <p>&copy; {new Date().getFullYear()} Mark Glen Tablada. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
