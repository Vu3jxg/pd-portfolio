import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ParticleCanvas from './ParticleCanvas'
import './Hero.css'

const typewriterWords = [
    'Medical Science',
    'Bioethics',
    'Health Technology',
    'Philosophy of Medicine',
    'Precision Medicine',
    'AI in Healthcare',
]

export default function Hero() {
    const [currentWord, setCurrentWord] = useState('')
    const [wordIndex, setWordIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const word = typewriterWords[wordIndex]
        let timeout

        if (!isDeleting && currentWord === word) {
            timeout = setTimeout(() => setIsDeleting(true), 1800)
        } else if (isDeleting && currentWord === '') {
            setIsDeleting(false)
            setWordIndex(i => (i + 1) % typewriterWords.length)
        } else {
            const speed = isDeleting ? 55 : 90
            timeout = setTimeout(() => {
                setCurrentWord(prev =>
                    isDeleting ? word.slice(0, prev.length - 1) : word.slice(0, prev.length + 1)
                )
            }, speed)
        }
        return () => clearTimeout(timeout)
    }, [currentWord, isDeleting, wordIndex])

    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 36 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay, ease: [0.19, 1, 0.22, 1] },
    })

    const scrollDown = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="hero" id="hero" aria-label="Hero section">
            <ParticleCanvas />

            {/* Floating molecular nodes */}
            <div className="hero__nodes" aria-hidden="true">
                {['DNA', 'AI', 'φ', 'Rx', '∑'].map((label, i) => (
                    <motion.div
                        key={label}
                        className={`mol-node n${i + 1}`}
                        animate={{ y: [0, -16, 8, 0], rotate: [0, 4, -3, 0] }}
                        transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 1.1 }}
                    >
                        <span>{label}</span>
                    </motion.div>
                ))}
            </div>

            <div className="hero__content">

                <motion.h1 className="hero__name" {...fadeUp(0.4)}>
                    Poulami
                    <span className="hero__name--accent"> Dhar</span>
                </motion.h1>

                <motion.div className="hero__typewriter" {...fadeUp(0.55)} aria-live="polite">
                    <span className="tw-prefix">I explore </span>
                    <span className="tw-word">{currentWord}</span>
                    <span className="tw-cursor">|</span>
                </motion.div>

                <motion.p className="hero__bio" {...fadeUp(0.7)}>
                    Medical researcher at the intersection of{' '}
                    <em>science</em>, <em>technology</em>, and <em>philosophy</em> —
                    driven by curiosity and a commitment to advancing human health through
                    evidence-based innovation.
                </motion.p>

                <motion.div className="hero__actions" {...fadeUp(0.85)}>
                    <button
                        className="btn btn--primary"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        id="heroContactBtn"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <polyline points="2,4 12,13 22,4" />
                        </svg>
                        Get in Touch
                    </button>
                    <button className="btn btn--ghost" onClick={scrollDown} id="heroExploreBtn">
                        Explore My Work
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 5v14M5 12l7 7 7-7" />
                        </svg>
                    </button>
                </motion.div>
            </div>

            {/* Scroll hint */}
            <motion.div
                className="hero__scroll-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
                aria-hidden="true"
                onClick={scrollDown}
            >
                <div className="scroll-mouse"><div className="scroll-wheel" /></div>
                <span>Scroll</span>
            </motion.div>
        </section>
    )
}
