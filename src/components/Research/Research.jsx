import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import './Research.css'

/* ─── Project data ─────────────────────────────────────────────────────── */
const categories = ['All', 'Medical Research', 'Data Science', 'Bioinformatics']

const projects = [
    {
        id: 'proj-anthro',
        category: 'Medical Research',
        emoji: '🏋️',
        hue: 175,
        type: 'Field Study',
        title: 'Anthropometric Assessment on Rickshaw-Pullers',
        period: 'Aug – Oct 2017',
        desc: 'Evaluated ergonomic and physiological parameters of rickshaw-pullers at Rajabazar area, Kolkata, assessing occupational health impact through physical measurements.',
        stack: ['Anthropometry', 'Occupational Health', 'Field Research'],
    },
    {
        id: 'proj-nutrition',
        category: 'Medical Research',
        emoji: '🥗',
        hue: 120,
        type: 'Observational Study',
        title: 'Day-to-Day Nutritional Impact on Health',
        period: 'Dec 2017 – Mar 2018',
        desc: 'Observational study examining how daily dietary patterns influence general health outcomes across a participant cohort.',
        stack: ['Nutrition Science', 'Public Health', 'Observational Design'],
    },
    {
        id: 'proj-platelet',
        category: 'Medical Research',
        emoji: '🩸',
        hue: 0,
        type: 'Retrospective Study',
        title: 'Analysis of Platelet Component Utilisation',
        period: 'Jul 2019 – Aug 2020',
        desc: 'Retrospective analysis of platelet transfusion data from a hospital blood bank to evaluate component utilisation rates and identify optimisation opportunities.',
        stack: ['Hematology', 'Blood Bank', 'Retrospective Analysis'],
    },
    {
        id: 'proj-uber',
        category: 'Data Science',
        emoji: '🚖',
        hue: 200,
        type: 'Python Analysis',
        title: 'Uber Trips Analysis',
        period: 'Feb 2022',
        desc: 'Analysed Uber driver trip data using Python, exploring patterns across distance, time, speed, and route efficiency using Pandas and Matplotlib.',
        stack: ['Python', 'Pandas', 'Data Visualisation'],
    },
    {
        id: 'proj-stats',
        category: 'Data Science',
        emoji: '📊',
        hue: 240,
        type: 'Statistical Analysis',
        title: 'Statistical & Probabilistic Analysis — Store, Survey & Manufacturing',
        period: 'Mar 2022',
        desc: 'Inferences drawn from three case studies (Wholesale Customer Data, University Survey, Manufacturing Shingles) using descriptive statistics, probability distributions, and hypothesis testing.',
        stack: ['Statistics', 'Probability', 'Hypothesis Testing', 'R'],
    },
    {
        id: 'proj-anova',
        category: 'Data Science',
        emoji: '🎓',
        hue: 260,
        type: 'Multivariate Analysis',
        title: 'Salary Analysis — ANOVA & PCA on College Admissions Data',
        period: 'Apr 2022',
        desc: 'Conducted EDA, one-way ANOVA, and Principal Component Analysis on salary and college admissions datasets to uncover latent variables and variance drivers.',
        stack: ['ANOVA', 'PCA', 'EDA', 'Python'],
    },
    {
        id: 'proj-ml',
        category: 'Data Science',
        emoji: '🤖',
        hue: 280,
        type: 'Machine Learning',
        title: 'Bank Customer Segmentation & Insurance Claim Prediction',
        period: 'May 2022',
        desc: 'Applied Clustering, CART, Random Forest, and Artificial Neural Networks to segment bank customers and predict insurance claims. Validated with accuracy, precision, recall, and F1 metrics.',
        stack: ['Random Forest', 'ANN', 'Clustering', 'CART', 'Python'],
    },
    {
        id: 'proj-gems',
        category: 'Data Science',
        emoji: '💎',
        hue: 320,
        type: 'Regression Modelling',
        title: 'Gems Price Prediction & Holiday Package Prediction',
        period: 'Jun 2022',
        desc: 'Predicted gem prices using multiple linear regression and holiday package purchase using logistic regression and Linear Discriminant Analysis to target relevant customers.',
        stack: ['Linear Regression', 'Logistic Regression', 'LDA', 'Python'],
    },
    {
        id: 'proj-election',
        category: 'Data Science',
        emoji: '🗳️',
        hue: 340,
        type: 'ML & NLP',
        title: 'Election Exit Poll Prediction & Presidential Speech Analysis',
        period: 'Jul 2022',
        desc: 'Built vote-prediction classifier and performed text analysis on U.S. Presidential inaugural speeches using NLP techniques to extract patterns and sentiments.',
        stack: ['NLP', 'Text Analysis', 'Classification', 'Python'],
    },
    {
        id: 'proj-retail',
        category: 'Data Science',
        emoji: '🛒',
        hue: 30,
        type: 'SQL Analysis',
        title: 'Online Retail Orders Analysis',
        period: 'Feb 2023',
        desc: 'Queried an "orders" database to extract business insights supporting data-driven decisions on inventory, logistics, and customer behaviour for an online retail store.',
        stack: ['SQL', 'Database Querying', 'Business Intelligence'],
    },
    {
        id: 'proj-wine',
        category: 'Data Science',
        emoji: '🍷',
        hue: 350,
        type: 'Time Series Forecasting',
        title: 'Forecasting Wine Sales — ABC Estate Wines',
        period: 'Mar 2023',
        desc: 'Built multiple forecast models on historical monthly sales data for two wine products, recommending the optimal model with 12-month projections and confidence intervals.',
        stack: ['Time Series', 'Forecasting', 'R', 'Business Analytics'],
    },
    {
        id: 'proj-tableau',
        category: 'Data Science',
        emoji: '📈',
        hue: 210,
        type: 'Data Visualisation',
        title: 'Visualising Insurance Claims Using Tableau',
        period: 'Apr 2023',
        desc: 'Created interactive Tableau dashboards providing CEO-level insights into insurance claims data to support policy-making through visual analytics.',
        stack: ['Tableau', 'Dashboard Design', 'Visual Analytics'],
    },
    {
        id: 'proj-bioinf',
        category: 'Bioinformatics',
        emoji: '🧬',
        hue: 145,
        type: 'Genomics',
        title: 'Cancer Genomics & Bioinformatics',
        period: 'Jun – Jul 2022',
        desc: 'One-month international digital workshop module on cancer genomics, covering next-generation sequencing analysis pipelines, variant calling, and bioinformatics tools.',
        stack: ['Genomics', 'NGS Analysis', 'Bioinformatics', 'Cancer Biology'],
    },
]

const SHOWN_INITIAL = 6

export default function Research() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
    const [activeCategory, setActiveCategory] = useState('All')
    const [showAll, setShowAll] = useState(false)

    const filtered = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory)

    const visible = showAll ? filtered : filtered.slice(0, SHOWN_INITIAL)

    return (
        <section className="section" id="research" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-tag">08 / Research</span>
                    <h2 className="section-title">Projects &amp; Research</h2>
                    <p className="section-subtitle">A selection of academic investigations, data science projects, and bioinformatics explorations.</p>
                </motion.div>

                {/* Filter tabs */}
                <motion.div
                    className="project-filters"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn${activeCategory === cat ? ' filter-btn--active' : ''}`}
                            onClick={() => { setActiveCategory(cat); setShowAll(false) }}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                <div className="projects__grid">
                    <AnimatePresence mode="popLayout">
                        {visible.map((p, i) => (
                            <motion.article
                                key={p.id}
                                id={p.id}
                                className="project-card"
                                style={{ '--card-hue': p.hue }}
                                layout
                                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.92 }}
                                transition={{ duration: 0.5, delay: i * 0.06 }}
                                whileHover={{ y: -6 }}
                            >
                                <div className="project-card__header">
                                    <div className="project-card__icon">{p.emoji}</div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', alignItems: 'flex-end' }}>
                                        <span className="project-card__type">{p.type}</span>
                                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--c-text-faint)' }}>{p.period}</span>
                                    </div>
                                </div>
                                <h3 className="project-card__title">{p.title}</h3>
                                <p className="project-card__desc">{p.desc}</p>
                                <div className="project-card__stack">
                                    {p.stack.map(s => <span key={s}>{s}</span>)}
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>

                {filtered.length > SHOWN_INITIAL && (
                    <motion.div
                        className="projects__more"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 }}
                    >
                        <button
                            className="btn btn--ghost"
                            onClick={() => setShowAll(v => !v)}
                        >
                            {showAll ? '← Show Less' : `Show All ${filtered.length} Projects ↓`}
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
