import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import poulamiPhoto from '../../assets/poulami.png'
import './About.css'

const stats = [
    { num: 3, label: 'Domains of Interest' },
    { num: 12, label: 'Courses Completed' },
    { num: 5, label: 'Projects' },
]

function AnimatedNumber({ target, inView }) {
    const [val, setVal] = React.useState(0)

    React.useEffect(() => {
        if (!inView) return
        let start = 0
        const step = Math.ceil(target / 30)
        const timer = setInterval(() => {
            start += step
            if (start >= target) { setVal(target); clearInterval(timer) }
            else setVal(start)
        }, 40)
        return () => clearInterval(timer)
    }, [inView, target])

    return <span className="stat-num">{val}</span>
}

import React from 'react'

export default function About() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

    return (
        <section className="section" id="about" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-tag">01 / About</span>
                    <h2 className="section-title">Who I Am</h2>
                </motion.div>

                <div className="about__grid">
                    {/* Avatar */}
                    <motion.div
                        className="about__avatar-wrap"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="avatar-card">
                            <div className="avatar-art">
                                <div className="avatar-circle">
                                    <img
                                        src={poulamiPhoto}
                                        alt="Poulami Dhar"
                                        className="avatar-photo"
                                    />
                                </div>
                                <div className="avatar-ring r1" />
                                <div className="avatar-ring r2" />
                                {[1, 2, 3, 4].map(i => (
                                    <span key={i} className={`ap ap${i}`} aria-hidden="true" />
                                ))}
                            </div>
                            <div className="avatar-info">
                                <strong>Poulami Dhar</strong>
                                <span>Medical Researcher</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        className="about__text"
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <p className="about__lead">
                            Hello! I'm <strong>Poulami Dhar</strong>, a passionate medical researcher on a mission to understand the human body, the technologies that heal it, and the philosophical questions that surround it.
                        </p>
                        <p>
                            My academic journey has taken me deep into life sciences — from cellular biology and pharmacology to the ethics of emerging medical technologies. I believe the most meaningful breakthroughs happen at the intersection of disciplines.
                        </p>
                        <p>
                            Currently, I am actively seeking <strong>research collaborations</strong> that will allow me to contribute to cutting-edge projects, work alongside experienced scientists and clinicians, and grow as a multidisciplinary thinker.
                        </p>

                        <div className="about__stats">
                            {stats.map(({ num, label }) => (
                                <div className="stat-card" key={label}>
                                    <AnimatedNumber target={num} inView={inView} />
                                    <span className="stat-plus">+</span>
                                    <span className="stat-label">{label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
