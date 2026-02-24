import { useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './Skills.css'

const bars = [
    { label: 'Python', pct: 82 },
    { label: 'R & R Studio', pct: 80 },
    { label: 'Tableau', pct: 78 },
    { label: 'SQL', pct: 75 },
    { label: 'Research Methodology & Biostatistics', pct: 90 },
    { label: 'Scientific Writing & Academic Communication', pct: 88 },
    { label: 'Bioethics & Critical Thinking', pct: 87 },
    { label: 'Literature Review & Systematic Synthesis', pct: 85 },
]

const tools = [
    { name: 'Python', color: 'teal' }, { name: 'R', color: 'purple' },
    { name: 'SQL', color: 'blue' }, { name: 'Tableau', color: 'teal' },
    { name: 'MS Excel', color: 'purple' }, { name: 'MS PowerPoint', color: 'blue' },
    { name: 'MS Word', color: 'teal' }, { name: 'SPSS', color: 'purple' },
    { name: 'PubMed', color: 'blue' }, { name: 'GraphPad Prism', color: 'teal' },
    { name: 'Zotero', color: 'purple' }, { name: 'Biorender', color: 'blue' },
]

const soft = [
    'Critical Thinking', 'Collaboration', 'Scientific Communication',
    'Problem Solving', 'Data Storytelling', 'Adaptability',
    'Academic Writing', 'Presentation Skills',
]

export default function Skills() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

    return (
        <section className="section" id="skills" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-tag">03 / Skills</span>
                    <h2 className="section-title">Competencies</h2>
                    <p className="section-subtitle">A blend of scientific rigor, analytical thinking, and interdisciplinary communication.</p>
                </motion.div>

                <div className="skills__wrapper">
                    {/* Bars */}
                    <motion.div
                        className="skills__bars"
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {bars.map(({ label, pct }, i) => (
                            <div className="skill-bar" key={label} id={`skillBar${i + 1}`}>
                                <div className="skill-bar__header">
                                    <span className="skill-bar__name">{label}</span>
                                    <span className="skill-bar__pct">{pct}%</span>
                                </div>
                                <div className="skill-bar__track">
                                    <motion.div
                                        className="skill-bar__fill"
                                        initial={{ width: 0 }}
                                        animate={inView ? { width: `${pct}%` } : { width: 0 }}
                                        transition={{ duration: 1.4, delay: 0.3 + i * 0.1, ease: [0.19, 1, 0.22, 1] }}
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Chips */}
                    <motion.div
                        className="skills__chips"
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h3 className="chips-title">Tools &amp; Technologies</h3>
                        <div className="chips-wrap">
                            {tools.map(({ name, color }) => (
                                <span key={name} className={`chip chip--${color}`}>{name}</span>
                            ))}
                        </div>
                        <h3 className="chips-title" style={{ marginTop: '2rem' }}>Soft Skills</h3>
                        <div className="chips-wrap">
                            {soft.map(s => (
                                <span key={s} className="chip chip--glass">{s}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
