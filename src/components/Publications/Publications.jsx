import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './Publications.css'

const publications = [
    {
        id: 'pub1',
        doi: 'https://doi.org/10.1002/agm2.12236',
        short: '10.1002/agm2.12236',
        title: 'Epigenetic alterations — The silent indicator for early aging and age-associated health-risks',
        journal: 'Aging Medicine (Wiley)',
        icon: '📄',
        hue: 175,
    },
    {
        id: 'pub2',
        doi: 'https://doi.org/10.51248/.v43i02.2326',
        short: '10.51248/.v43i02.2326',
        title: 'A cross-sectional survey of platelet transfusion practices from a tertiary care center',
        journal: 'Biomedical Journal',
        icon: '📄',
        hue: 240,
    },
    {
        id: 'pub3',
        doi: 'https://doi.org/10.1002/agm2.12330',
        short: '10.1002/agm2.12330',
        title: 'A hypothesis: MiRNA-124 mediated regulation of sirtuin 1 and vitamin D receptor gene expression accelerates aging',
        journal: 'Aging Medicine (Wiley)',
        icon: '📄',
        hue: 175,
    },
    {
        id: 'pub4',
        doi: 'https://doi.org/10.1002/cph4.70047',
        short: '10.1002/cph4.70047',
        title: 'Influence of Serum Vitamin D on Age-Related Physiological Changes: A Cross-Sectional Study in Middle-Aged Adults',
        journal: 'CPH Journal (Wiley)',
        icon: '📄',
        hue: 280,
    },
    {
        id: 'pub5',
        doi: null,
        short: 'Copyright Registration · L-143216/2024',
        title: 'MicroRNA Mediated Regulation of Sirtuin 1 and Vitamin D Receptor Expression — Accelerated Early Onset of Ageing',
        journal: 'Government of India — Copyright Publication',
        icon: '©️',
        hue: 45,
        isCopyright: true,
    },
]

export default function Publications() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="section" id="publications" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-tag">05 / Publications</span>
                    <h2 className="section-title">Published Research</h2>
                    <p className="section-subtitle">Peer-reviewed journal articles and registered copyright works.</p>
                </motion.div>

                <div className="pub-list">
                    {publications.map((p, i) => (
                        <motion.div
                            key={p.id}
                            id={p.id}
                            className="pub-card"
                            style={{ '--pub-hue': p.hue }}
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            whileHover={{ x: 8, transition: { duration: 0.2 } }}
                        >
                            <div className="pub-card__icon">{p.icon}</div>
                            <div className="pub-card__body">
                                <span className="pub-card__journal">{p.journal}</span>
                                {p.title && (
                                    <p className="pub-card__title">{p.title}</p>
                                )}
                                <p className="pub-card__doi">
                                    {p.doi ? (
                                        <a href={p.doi} target="_blank" rel="noopener noreferrer">{p.short}</a>
                                    ) : (
                                        <span>{p.short}</span>
                                    )}
                                </p>
                            </div>
                            {p.doi && (
                                <a
                                    href={p.doi}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pub-card__link"
                                    aria-label="Open publication"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
