import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
    const dotRef = useRef(null)
    const ringRef = useRef(null)

    useEffect(() => {
        const dot = dotRef.current
        const ring = ringRef.current
        let raf
        let mouse = { x: 0, y: 0 }
        let ringPos = { x: 0, y: 0 }

        const onMove = (e) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
            dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        }

        const animate = () => {
            ringPos.x += (mouse.x - ringPos.x) * 0.12
            ringPos.y += (mouse.y - ringPos.y) * 0.12
            ring.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px)`
            raf = requestAnimationFrame(animate)
        }

        const onEnter = () => document.body.classList.add('cursor-hover')
        const onLeave = () => document.body.classList.remove('cursor-hover')

        window.addEventListener('mousemove', onMove)
        document.querySelectorAll('a,button,[role="button"]').forEach(el => {
            el.addEventListener('mouseenter', onEnter)
            el.addEventListener('mouseleave', onLeave)
        })
        raf = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('mousemove', onMove)
            cancelAnimationFrame(raf)
        }
    }, [])

    return (
        <>
            <div className="cursor-dot" ref={dotRef} />
            <div className="cursor-ring" ref={ringRef} />
        </>
    )
}
