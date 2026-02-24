import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './Contact.css'

const emailIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,13 22,4" />
    </svg>
)

const contactItems = [
    {
        id: 'contactEmailInstitutional',
        icon: emailIcon,
        label: 'Institutional Email',
        value: 'poulami.dhar@nitte.edu.in',
        href: 'mailto:poulami.dhar@nitte.edu.in',
    },
    {
        id: 'contactEmailPersonal',
        icon: emailIcon,
        label: 'Personal Email',
        value: 'poulamidhar1995@gmail.com',
        href: 'mailto:poulamidhar1995@gmail.com',
    },
    {
        id: 'contactLinkedIn',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="4" />
                <path d="M7 10v7M7 7v.01M12 10v7M12 14a3 3 0 0 1 6 0v3" />
            </svg>
        ),
        label: 'LinkedIn',
        value: 'linkedin.com/in/poulami-dhar-a8477b182',
        href: 'https://www.linkedin.com/in/poulami-dhar-a8477b182/',
    },

    {
        id: 'contactLocation',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s-8-7.3-8-13a8 8 0 0 1 16 0c0 5.7-8 13-8 13z" />
                <circle cx="12" cy="8" r="3" />
            </svg>
        ),
        label: 'Location',
        value: 'India · Open to Remote',
        href: null,
    },
]

export default function Contact() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [sent, setSent] = useState(false)

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

    const handleSubmit = e => {
        e.preventDefault()
        const { name, email, subject, message } = form
        const mailto = `mailto:poulami.dhar@nitte.edu.in?cc=poulamidhar1995@gmail.com&subject=${encodeURIComponent(subject || 'Portfolio Enquiry')}&body=${encodeURIComponent(`Hi Poulami,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`)}`
        window.location.href = mailto
        setSent(true)
        setTimeout(() => setSent(false), 3000)
    }

    return (
        <section className="section" id="contact" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-tag">06 / Contact</span>
                    <h2 className="section-title">Let's Connect</h2>
                    <p className="section-subtitle">
                        I'm always open to conversations about research, internship opportunities, and collaborative projects.
                    </p>
                </motion.div>

                <div className="contact__grid">
                    {/* Info */}
                    <motion.div
                        className="contact__info"
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {contactItems.map((item, i) => (
                            <motion.div
                                key={item.id}
                                id={item.id}
                                className="contact-item"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                            >
                                <div className="contact-item__icon">{item.icon}</div>
                                <div>
                                    <span className="contact-item__label">{item.label}</span>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="contact-item__value"
                                            target={item.href.startsWith('http') ? '_blank' : undefined}
                                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <span className="contact-item__value">{item.value}</span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        className="contact__form"
                        id="contactForm"
                        onSubmit={handleSubmit}
                        noValidate
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.25 }}
                    >
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="formName">Your Name</label>
                                <input
                                    type="text" id="formName" name="name"
                                    placeholder="Dr. Jane Smith" required
                                    value={form.name} onChange={handleChange}
                                    autoComplete="name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="formEmail">Your Email</label>
                                <input
                                    type="email" id="formEmail" name="email"
                                    placeholder="jane@example.com" required
                                    value={form.email} onChange={handleChange}
                                    autoComplete="email"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formSubject">Subject</label>
                            <input
                                type="text" id="formSubject" name="subject"
                                placeholder="Research Collaboration / Internship Opportunity"
                                value={form.subject} onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formMessage">Message</label>
                            <textarea
                                id="formMessage" name="message" rows="5"
                                placeholder="Tell me about the opportunity or your thoughts…"
                                required value={form.message} onChange={handleChange}
                            />
                        </div>
                        <motion.button
                            type="submit"
                            className="btn btn--primary btn--full"
                            id="formSubmitBtn"
                            whileTap={{ scale: 0.97 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            {sent ? (
                                <>✓ Opening Email Client…</>
                            ) : (
                                <>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="22" y1="2" x2="11" y2="13" />
                                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                    </svg>
                                    Send Message
                                </>
                            )}
                        </motion.button>
                        <p className="form-note">Your message will open in your default email client.</p>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}
