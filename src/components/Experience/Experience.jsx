import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './Experience.css'

const typeConfig = {
    education: { icon: '🎓', label: 'Education', dotColor: 'var(--c-teal-400)' },
    award: { icon: '🏆', label: 'Fellowship / Award', dotColor: 'var(--c-purple-400)' },
    teaching: { icon: '📚', label: 'Teaching', dotColor: '#f59e0b' },
    work: { icon: '💼', label: 'Work Experience', dotColor: 'var(--c-blue-400)' },
}

const items = [
    {
        type: 'education',
        date: '2018',
        role: 'Bachelor of Science — Human Physiology',
        org: 'University of Calcutta, West Bengal',
        desc: 'Foundational undergraduate training in human physiology, covering cardiovascular, respiratory, neurological, renal, and endocrine systems. Developed strong grounding in life sciences and scientific methodology that underpinning all subsequent research.',
        tags: ['Human Physiology', 'Life Sciences', 'B.Sc.'],
    },
    {
        type: 'education',
        date: '2020',
        role: 'M.Sc. — Medical Physiology',
        org: 'Kasturba Medical College, Manipal (Manipal Academy of Higher Education)',
        desc: 'Advanced postgraduate study in medical physiology with emphasis on clinical applications, experimental techniques, and integrative physiological mechanisms. Developed expertise in laboratory-based physiological research methods and data analysis.',
        tags: ['Medical Physiology', 'M.Sc.', 'Clinical Physiology', 'Research Methods'],
    },
    {
        type: 'education',
        date: 'January 2021 – October 2023',
        role: 'Post Graduate — Data Science & Business Analytics',
        org: 'The University of Texas at Austin',
        desc: 'Rigorous postgraduate programme in data science and business analytics, covering statistical modelling, machine learning, and data-driven decision-making. Applied analytical techniques to real-world datasets across healthcare and business domains.',
        grade: 'B+',
        tags: ['Data Mining', 'Tableau', 'Machine Learning', 'Statistics', 'Business Analytics'],
    },
    {
        type: 'education',
        date: 'October 2021 – Present',
        role: 'Ph.D. — Epigenetic Biomarkers for Gerontogenes',
        org: 'NITTE (Deemed to be University) · K. S. Hegde Medical Academy, Mangalore, Karnataka',
        desc: 'Pursuing a doctorate under the Medical Faculty focused on identifying and characterising epigenetic biomarkers associated with gerontogenes. Research integrates molecular biology, epigenomics, and ageing science to uncover mechanisms underlying age-related disease.',
        tags: ['Epigenetics', 'Gerontology', 'Biomarkers', 'Molecular Biology'],
    },
    {
        type: 'award',
        date: 'October 2021',
        role: 'NITTE University Ph.D. Fellowship',
        org: 'NITTE (Deemed to be University)',
        desc: 'Awarded a full-time Ph.D. Fellowship by NITTE (Deemed to be University) in recognition of academic merit and research potential. The fellowship fully supports doctoral research activities on a full-time basis.',
        tags: ['Fellowship', 'Academic Merit', 'Full-Time Research'],
    },
    {
        type: 'teaching',
        date: 'August 2022 – Present · Full-time',
        role: 'Teacher',
        org: 'K. S. Hegde Medical Academy, Mangaluru, Karnataka',
        desc: 'Full-time teaching faculty at K. S. Hegde Medical Academy (NITTE University), delivering instruction in medical and life-science subjects. Combines active doctoral research with hands-on student engagement in an academic medical institution.',
        tags: ['Teaching', 'Medical Education', 'Physiology', 'Academic Faculty'],
    },
    {
        type: 'work',
        date: 'July 2019 – July 2020',
        role: 'Project Work in Blood Bank',
        org: 'Kasturba Medical College, Manipal',
        desc: 'Managed and maintained medical records relating to platelet transfusion procedures. Responsible for systematic collection, organisation, and quality assurance of clinical data to support hematological research and operational decision-making.',
        tags: ['Hematology', 'Medical Records', 'Platelet Transfusion', 'Data Collection'],
    },
    {
        type: 'work',
        date: 'October 2020 – December 2020',
        role: 'Subject Matter Expert',
        org: 'Great Champ Technologies Ltd.',
        desc: 'Served as a Subject Matter Expert for research articles in the medical domain. Responsible for reviewing, validating, and enriching medical content to ensure accuracy, clinical relevance, and adherence to evidence-based standards.',
        tags: ['Medical Writing', 'Research Review', 'Content Accuracy', 'SME'],
    },
]

export default function Experience() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="section section--alt" id="experience" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-tag">04 / Journey</span>
                    <h2 className="section-title">Education &amp; Experience</h2>
                    <p className="section-subtitle">A record of academic pursuit, fellowship achievement, and hands-on research work.</p>
                </motion.div>

                <div className="timeline" role="list">
                    {items.map((item, i) => {
                        const config = typeConfig[item.type] || typeConfig.work
                        return (
                            <motion.div
                                key={i}
                                className="timeline__item"
                                role="listitem"
                                initial={{ opacity: 0, x: -40 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.7, delay: i * 0.15 }}
                            >
                                <div
                                    className="timeline__dot"
                                    style={{ borderColor: config.dotColor, boxShadow: `0 0 14px ${config.dotColor}55` }}
                                    title={config.label}
                                />
                                <div className="timeline__card">
                                    <div className="tl-header">
                                        <span className="tl-icon" aria-hidden="true">{config.icon}</span>
                                        <div>
                                            <span className="tl-type-badge" style={{ '--badge-color': config.dotColor }}>
                                                {config.label}
                                            </span>
                                            <span className="tl-date">{item.date}</span>
                                        </div>
                                    </div>
                                    <h3 className="tl-role">{item.role}</h3>
                                    <p className="tl-org">{item.org}</p>
                                    {item.grade && (
                                        <p className="tl-grade">
                                            <span className="tl-grade__label">Grade</span>
                                            <span className="tl-grade__value">{item.grade}</span>
                                        </p>
                                    )}
                                    <p className="tl-desc">{item.desc}</p>
                                    <div className="tl-tags">
                                        {item.tags.map(t => <span key={t}>{t}</span>)}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
