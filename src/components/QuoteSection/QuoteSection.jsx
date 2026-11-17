import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './QuoteSection.css'

export default function QuoteSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

    return (
        <section className="section section--quote" ref={ref} aria-label="Guiding philosophy">
            <div className="container">
                <motion.blockquote
                    className="quote-block"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
                >
                    <span className="quote-mark" aria-hidden="true">"</span>
                    <p>
                        Science without philosophy is lame; philosophy without science is blind.
                        Together, they chart the most honest path toward understanding what it
                        means to be well, to be human, and to heal.
                    </p>
                    <footer>
                        <cite>— Dr. Poulami Dhar, Personal Research Philosophy</cite>
                    </footer>
                    <span className="quote-mark quote-mark--close" aria-hidden="true">"</span>
                </motion.blockquote>
            </div>
        </section>
    )
}
