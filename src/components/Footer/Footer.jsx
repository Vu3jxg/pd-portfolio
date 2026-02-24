import './Footer.css'

const LINKEDIN = 'https://www.linkedin.com/in/poulami-dhar-a8477b182/'

const navLinks = ['About', 'Interests', 'Skills', 'Experience', 'Publications', 'Research', 'Contact']

export default function Footer() {
    const year = new Date().getFullYear()

    const scrollTo = (id) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer className="footer" role="contentinfo">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__brand">
                        <span
                            className="footer__logo"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <span className="logo-brackets">&lt;</span>PD<span className="logo-brackets">/&gt;</span>
                        </span>
                        <p>Poulami Dhar · Medical Researcher</p>
                        {/* LinkedIn */}
                        <a
                            href={LINKEDIN}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__linkedin"
                            aria-label="LinkedIn profile"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <rect x="2" y="2" width="20" height="20" rx="4" />
                                <path d="M7 10v7M7 7v.01M12 10v7M12 14a3 3 0 0 1 6 0v3" />
                            </svg>
                            linkedin.com/in/poulami-dhar-a8477b182
                        </a>
                        {/* Emails */}
                        <a
                            href="mailto:poulami.dhar@nitte.edu.in"
                            className="footer__email"
                            aria-label="Institutional email"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <polyline points="2,4 12,13 22,4" />
                            </svg>
                            poulami.dhar@nitte.edu.in
                        </a>
                        <a
                            href="mailto:poulamidhar1995@gmail.com"
                            className="footer__email"
                            aria-label="Personal email"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <polyline points="2,4 12,13 22,4" />
                            </svg>
                            poulamidhar1995@gmail.com
                        </a>
                    </div>

                    <nav className="footer__nav" aria-label="Footer navigation">
                        {navLinks.map(l => (
                            <button key={l} className="footer__nav-link" onClick={() => scrollTo(l)}>
                                {l}
                            </button>
                        ))}
                    </nav>

                    <p className="footer__copy">
                        &copy; {year} Poulami Dhar &nbsp;·&nbsp; Crafted with passion &amp; purpose.
                    </p>
                </div>
            </div>
        </footer>
    )
}
