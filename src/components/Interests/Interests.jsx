import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './Interests.css'

const interests = [
    {
        id: 'interestScience',
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="2.5" />
                <ellipse cx="32" cy="32" rx="10" ry="25" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />
                <ellipse cx="32" cy="32" rx="25" ry="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />
                <circle cx="32" cy="7" r="3" fill="currentColor" opacity="0.6" />
                <circle cx="55" cy="44" r="3" fill="currentColor" opacity="0.6" />
                <circle cx="9" cy="44" r="3" fill="currentColor" opacity="0.6" />
            </svg>
        ),
        title: 'Medical Science',
        desc: 'From molecular biology and genomics to clinical pharmacology, I am fascinated by the mechanisms that govern human health and disease — and the research methodologies that illuminate them.',
        tags: ['Pharmacology', 'Genomics', 'Pathophysiology', 'Clinical Trials'],
        featured: false,
    },
    {
        id: 'interestTech',
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="20" width="48" height="30" rx="4" stroke="currentColor" strokeWidth="2.5" />
                <path d="M20 14h24v6H20z" stroke="currentColor" strokeWidth="2" />
                <path d="M24 35l4-5 4 3 4-6 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="44" cy="29" r="2" fill="currentColor" />
            </svg>
        ),
        title: 'Medical Technology',
        desc: 'AI diagnostics, wearable biosensors, precision medicine — I explore how cutting-edge technology is transforming healthcare delivery and opening new frontiers in patient care and research.',
        tags: ['AI in Medicine', 'Bioinformatics', 'Wearables', 'Telemedicine'],
        featured: true,
    },
    {
        id: 'interestPhilosophy',
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 8C20 8 12 18 12 28c0 8 6 14 12 16v8h16v-8c6-2 12-8 12-16 0-10-8-20-20-20z" stroke="currentColor" strokeWidth="2.5" />
                <path d="M24 36c0-4 4-8 8-8s8 4 8 8" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" />
                <line x1="32" y1="8" x2="32" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="20" y1="12" x2="23" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="44" y1="12" x2="41" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        title: 'Philosophy of Medicine',
        desc: 'What is health? What constitutes ethical research? I seek to ground scientific progress in robust philosophical and bioethical frameworks that respect human dignity.',
        tags: ['Bioethics', 'Philosophy of Biology', 'Medical Epistemology', 'Research Ethics'],
        featured: false,
    },
]

export default function Interests() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="section section--alt" id="interests" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-tag">02 / Interests</span>
                    <h2 className="section-title">Areas of Passion</h2>
                    <p className="section-subtitle">Three pillars that shape my research outlook and career vision.</p>
                </motion.div>

                <div className="interests__grid">
                    {interests.map((item, i) => (
                        <motion.article
                            key={item.id}
                            id={item.id}
                            className={`interest-card${item.featured ? ' interest-card--featured' : ''}`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: i * 0.15 }}
                            whileHover={{ y: -8 }}
                        >
                            {item.featured && <div className="interest-card__badge">Core Focus</div>}
                            <div className="interest-card__icon">{item.icon}</div>
                            <h3 className="interest-card__title">{item.title}</h3>
                            <p className="interest-card__desc">{item.desc}</p>
                            <ul className="interest-card__tags">
                                {item.tags.map(t => <li key={t}>{t}</li>)}
                            </ul>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}
