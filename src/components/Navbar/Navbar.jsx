import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const links = ['About', 'Interests', 'Skills', 'Experience', 'Workshops', 'Research', 'Publications', 'Contact']

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('')
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40)
            // Highlight active section
            const sections = links.map(l => document.getElementById(l.toLowerCase()))
            const current = sections.find(s => {
                if (!s) return false
                const rect = s.getBoundingClientRect()
                return rect.top <= 120 && rect.bottom >= 120
            })
            setActive(current ? current.id : '')
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNav = (anchor) => {
        setMenuOpen(false)
        const el = document.getElementById(anchor.toLowerCase())
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <motion.nav
            className={`navbar${scrolled ? ' scrolled' : ''}`}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <span className="logo-brackets">&lt;</span>PD<span className="logo-brackets">/&gt;</span>
            </div>

            <button
                className={`nav__hamburger${menuOpen ? ' open' : ''}`}
                onClick={() => setMenuOpen(v => !v)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                id="navHamburger"
            >
                <span /><span /><span />
            </button>

            <ul className={`nav__links${menuOpen ? ' open' : ''}`} role="menubar">
                {links.map((link, i) => (
                    <motion.li
                        key={link}
                        role="none"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.07 }}
                    >
                        <button
                            className={`nav-link${active === link.toLowerCase() ? ' active' : ''}`}
                            onClick={() => handleNav(link)}
                            role="menuitem"
                            id={`navLink${link}`}
                        >
                            {link}
                        </button>
                    </motion.li>
                ))}
            </ul>
        </motion.nav>
    )
}
