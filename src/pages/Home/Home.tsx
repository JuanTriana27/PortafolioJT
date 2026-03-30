// Home.tsx — Página de inicio
// Tres efectos coordinados: reveal del nombre, typewriter del rol, y dot grid reactivo.
// El canvas del fondo se inicializa después del mount para leer el tamaño real del DOM.

import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

// ─── Datos ────────────────────────────────────────────────────────────────────
// Las frases del typewriter describen tu propuesta de valor, no tu título.
// Rotan para que quien relee el portafolio vea algo distinto cada vez.
const TYPEWRITER_PHRASES = [
    'Construyo backends que escalan.',
    'React cuando el frontend lo necesita.',
    'SQL, Java, Spring Boot.',
    'Código que otros pueden mantener.',
]

// const STATS = [
//     { value: '+10', label: 'Tecnologías' },
//     { value: '1+', label: 'Año de exp.' },
// ]

// ─── Hook: dot grid reactivo ──────────────────────────────────────────────────
// Separar la lógica del canvas en un hook mantiene el componente principal limpio.
// El canvas escucha mousemove en el contenedor padre, no en window,
// para que las coordenadas sean siempre relativas al hero.
function useDotGrid(canvasRef: { readonly current: HTMLCanvasElement | null }) {
    useEffect(() => {
        const canvasEl = canvasRef.current
        if (!canvasEl) return
        const canvas = canvasEl as HTMLCanvasElement
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        const parent = canvas.parentElement as HTMLElement

        type Dot = { x: number; y: number; base: number; baseY: number; phase: number }
        let dots: Dot[] = []
        let animId: number
        let mouse = { x: -999, y: -999 }
        let t = 0

        function init() {
            const { width, height } = parent.getBoundingClientRect()
            canvas.width = width
            canvas.height = height
            const spacing = 28
            dots = []
            for (let x = spacing / 2; x < width; x += spacing)
                for (let y = spacing / 2; y < height; y += spacing)
                    dots.push({ x, y, base: x, baseY: y, phase: Math.random() * Math.PI * 2 })
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            t += 0.018

            dots.forEach(d => {
                const dx = d.x - mouse.x
                const dy = d.y - mouse.y
                const dist = Math.sqrt(dx * dx + dy * dy)
                const repel = Math.max(0, 1 - dist / 100)

                // La onda combina distancia al cursor + tiempo para el movimiento orgánico
                const px = dist > 0 ? d.base + (dx / dist) * repel * 14 : d.base
                const py = dist > 0 ? d.baseY + (dy / dist) * repel * 14 : d.baseY

                const alpha = 0.12 + repel * 0.5
                const r = 1.2 + repel * 2

                ctx.beginPath()
                ctx.arc(px, py, r, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(110,231,183,${alpha})`
                ctx.fill()
            })

            animId = requestAnimationFrame(draw)
        }

        function onMouseMove(e: MouseEvent) {
            const rect = canvas.getBoundingClientRect()
            mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top }
        }

        function onMouseLeave() {
            // Resetea suavemente al salir — los puntos vuelven a la posición base
            mouse = { x: -999, y: -999 }
        }

        init()
        draw()
        parent.addEventListener('mousemove', onMouseMove)
        parent.addEventListener('mouseleave', onMouseLeave)
        window.addEventListener('resize', init)

        return () => {
            cancelAnimationFrame(animId)
            parent.removeEventListener('mousemove', onMouseMove)
            parent.removeEventListener('mouseleave', onMouseLeave)
            window.removeEventListener('resize', init)
        }
    }, [canvasRef])
}

// ─── Hook: typewriter ─────────────────────────────────────────────────────────
// Estado interno con useRef para no forzar re-renders en cada keystroke.
// Manipulamos el DOM directamente — es el patrón correcto para animaciones
// de texto de alta frecuencia donde React sería overhead puro.
function useTypewriter(elementRef: { readonly current: HTMLSpanElement | null }, phrases: string[]) {
    useEffect(() => {
        const elRaw = elementRef.current
        if (!elRaw) return
        const el = elRaw as HTMLSpanElement

        let phraseIndex = 0
        let charIndex = 0
        let deleting = false
        let waiting = false
        let timeoutId: ReturnType<typeof setTimeout>

        function tick() {
            if (waiting) return
            const phrase = phrases[phraseIndex]

            if (!deleting) {
                el.textContent = phrase.slice(0, ++charIndex)
                if (charIndex === phrase.length) {
                    waiting = true
                    timeoutId = setTimeout(() => {
                        waiting = false
                        deleting = true
                        tick()
                    }, 2200)
                    return
                }
            } else {
                el.textContent = phrase.slice(0, --charIndex)
                if (charIndex === 0) {
                    deleting = false
                    phraseIndex = (phraseIndex + 1) % phrases.length
                }
            }

            timeoutId = setTimeout(tick, deleting ? 35 : 60)
        }

        // Arranca tras el delay del reveal de entrada
        timeoutId = setTimeout(tick, 1000)
        return () => clearTimeout(timeoutId)
    }, [elementRef, phrases])
}

// ─── Componente ───────────────────────────────────────────────────────────────

export default function Home() {
    const navigate = useNavigate()
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const typewriterRef = useRef<HTMLSpanElement>(null)

    useDotGrid(canvasRef)
    useTypewriter(typewriterRef, TYPEWRITER_PHRASES)

    return (
        <div className={styles.hero}>

            {/* Fondo animado — el canvas ocupa todo el hero via CSS absolute */}
            <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />

            <div className={styles.content}>

                <div className={styles.eyebrow} aria-hidden="true">
                    <span className={styles.eyebrowDot} />
                    Full Stack Developer
                    <span className={styles.eyebrowDot} />
                </div>

                {/* Cada palabra en su propio span para el reveal escalonado via CSS */}
                <h1 className={styles.name}>
                    <span className={styles.word}>Juan</span>{' '}
                    <span className={`${styles.word} ${styles.wordAccent}`}>Triana</span>{' '}
                </h1>

                {/* El span interior lo escribe el hook; el cursor parpadea solo via CSS */}
                <p className={styles.role}>
                    <span ref={typewriterRef} />
                    <span className={styles.cursor} aria-hidden="true" />
                </p>

                <div className={styles.ctas}>
                    <button
                        className={styles.btnPrimary}
                        onClick={() => navigate('/projects')}
                    >
                        Ver proyectos
                    </button>
                    <button
                        className={styles.btnSecondary}
                        onClick={() => navigate('/about')}
                    >
                        Sobre mí
                    </button>
                </div>
            </div>

            {/* Stats — ancladas al fondo del hero */}
            {/* <div className={styles.stats}>
                {STATS.map((stat, i) => (
                    <div key={stat.label} className={styles.statGroup}>
                        {i > 0 && <div className={styles.statSep} aria-hidden="true" />}
                        <div className={styles.stat}>
                            <span className={styles.statValue}>{stat.value}</span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </div>
                    </div>
                ))}
            </div> */}

        </div>
    )
}
