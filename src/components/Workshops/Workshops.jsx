import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './Workshops.css'

const workshops = [
    {
        year: 'Nov 2018',
        title: 'EEG and ERP — Recording and Analysis',
        type: 'Workshop',
        org: 'APPICON',
        icon: '🧠',
    },
    {
        year: 'Jan – Jun 2019',
        title: 'Research Methodology and Statistics',
        type: 'Short Course',
        org: 'MAHE, Karnataka',
        icon: '📊',
    },
    {
        year: 'Sep – Nov 2019',
        title: 'Bioethics',
        type: 'Short Course',
        org: 'Centre of Bioethics, MAHE, Karnataka',
        icon: '⚖️',
    },
    {
        year: 'Feb 2022',
        title: 'Basic Statistics',
        type: 'Short Course',
        org: 'University of Amsterdam (Coursera)',
        icon: '📐',
    },
    {
        year: 'Mar 2022',
        title: 'Health Research Fundamentals',
        type: 'Short Course',
        org: 'ICMR (NPTEL)',
        icon: '🏥',
    },
    {
        year: 'Apr 2022',
        title: 'Inferential Statistics',
        type: 'Short Course',
        org: 'University of Amsterdam (Coursera)',
        icon: '🔢',
    },
    {
        year: 'Apr 2022',
        title: 'FDP on Academic Writing',
        type: 'Workshop',
        org: 'St. Joseph Engineering College, Mangaluru',
        icon: '✍️',
    },
    {
        year: 'May 2022',
        title: 'Statistical Data Analysis using R-Programming',
        type: 'Workshop',
        org: 'NITTE (Deemed to be University)',
        icon: '📈',
    },
    {
        year: 'May 2022',
        title: 'Data Analysis for Biologists',
        type: 'Short Course',
        org: 'IIT Guwahati (NPTEL)',
        icon: '🧬',
    },
    {
        year: 'Jun – Jul 2022',
        title: 'Cancer Genomics and Bioinformatics',
        type: 'International Workshop',
        org: 'Decode Life (1-Month Digital Module)',
        icon: '🔬',
    },
]

const typeColors = {
    'Workshop': { bg: 'rgba(34,197,181,0.08)', border: 'rgba(34,197,181,0.22)', text: 'var(--c-teal-300)' },
    'Short Course': { bg: 'rgba(155,110,224,0.08)', border: 'rgba(155,110,224,0.22)', text: 'var(--c-purple-300)' },
    'International Workshop': { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.22)', text: '#fbbf24' },
}

export default function Workshops() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

    return (
        <section className="section section--alt" id="workshops" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-tag">07 / Training</span>
                    <h2 className="section-title">Workshops &amp; Short Courses</h2>
                    <p className="section-subtitle">Continuous learning across statistics, genomics, bioethics, and data science.</p>
                </motion.div>

                <div className="workshops-grid">
                    {workshops.map((w, i) => {
                        const style = typeColors[w.type] || typeColors['Short Course']
                        return (
                            <motion.div
                                key={i}
                                className="workshop-card"
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.55, delay: i * 0.07 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="wc-top">
                                    <span className="wc-icon">{w.icon}</span>
                                    <span
                                        className="wc-badge"
                                        style={{ background: style.bg, border: `1px solid ${style.border}`, color: style.text }}
                                    >
                                        {w.type}
                                    </span>
                                </div>
                                <h3 className="wc-title">{w.title}</h3>
                                <p className="wc-org">{w.org}</p>
                                <span className="wc-year">{w.year}</span>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
