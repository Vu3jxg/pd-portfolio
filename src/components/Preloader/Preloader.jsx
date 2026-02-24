import { AnimatePresence, motion } from 'framer-motion'
import './Preloader.css'

export default function Preloader({ loading }) {
    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    <div className="preloader__inner">
                        <div className="preloader__dna" aria-hidden="true">
                            {Array.from({ length: 10 }).map((_, i) => (
                                <span key={i} style={{ animationDelay: `${i * 0.08}s` }} />
                            ))}
                        </div>
                        <p className="preloader__text">Initialising<span className="preloader__dots">...</span></p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
