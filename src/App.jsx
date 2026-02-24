import { useState, useEffect } from 'react'
import Preloader from './components/Preloader/Preloader'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Interests from './components/Interests/Interests'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Workshops from './components/Workshops/Workshops'
import Research from './components/Research/Research'
import Publications from './components/Publications/Publications'
import QuoteSection from './components/QuoteSection/QuoteSection'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import BackToTop from './components/BackToTop/BackToTop'
import Cursor from './components/Cursor/Cursor'

export default function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2200)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <Cursor />
            <Preloader loading={loading} />
            {!loading && (
                <>
                    <Navbar />
                    <main>
                        <Hero />
                        <About />
                        <Interests />
                        <Skills />
                        <Experience />
                        <Publications />
                        <Workshops />
                        <Research />
                        <QuoteSection />
                        <Contact />
                    </main>
                    <Footer />
                    <BackToTop />
                </>
            )}
        </>
    )
}
