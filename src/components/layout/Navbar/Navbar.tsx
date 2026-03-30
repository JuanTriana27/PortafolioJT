import { useState, useEffect, useCallback } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

// Definimos los enlaces como datos, no como JSX hardcodeado.
// Si el portafolio crece, solo tocamos este array.
const NAV_LINKS = [
    { path: '/', label: 'Inicio' },
    { path: '/about', label: 'Sobre mí' },
    { path: '/projects', label: 'Proyectos' },
    { path: '/contact', label: 'Contacto' },
] as const

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    // Cierra el menú móvil en cada cambio de ruta
    useEffect(() => {
        setMenuOpen(false)
    }, [location.pathname])

    // Detecta si el usuario scrolleó para aplicar fondo al navbar
    // Usamos useCallback para no recrear la función en cada render
    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 20)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    // Bloquea el scroll del body cuando el menú móvil está abierto
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    return (
        <header
            className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
            role="banner"
        >
            <nav
                className={styles.inner}
                aria-label="Navegación principal"
            >
                {/* Logo / nombre — enlaza siempre al inicio */}
                <NavLink to="/" className={styles.logo} aria-label="Ir al inicio">
                    <span className={styles.logoAccent}>&lt;</span>
                    Juan Triana
                    <span className={styles.logoAccent}>/&gt;</span>
                </NavLink>

                {/* Links de escritorio */}
                <ul className={styles.navLinks} role="list">
                    {NAV_LINKS.map(({ path, label }) => (
                        <li key={path}>
                            <NavLink
                                to={path}
                                // React Router inyecta isActive; lo usamos para el estilo activo
                                className={({ isActive }) =>
                                    `${styles.navLink} ${isActive ? styles.active : ''}`
                                }
                                // Caso borde: "/" matchea con todo; end lo restringe a exacto
                                end={path === '/'}
                            >
                                {label}
                                <span className={styles.linkUnderline} aria-hidden="true" />
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* CTA — descarga del CV */}
                <a
                    href="/pdf/CV.pdf"
                    download
                    className={styles.ctaButton}
                    aria-label="Descargar CV en PDF"
                >
                    Descargar CV
                </a>

                {/* Botón hamburguesa — solo visible en móvil */}
                <button
                    className={`${styles.menuToggle} ${menuOpen ? styles.menuOpen : ''}`}
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                >
                    <span className={styles.bar} />
                    <span className={styles.bar} />
                    <span className={styles.bar} />
                </button>
            </nav>

            {/* Overlay + menú móvil */}
            <div
                className={`${styles.mobileOverlay} ${menuOpen ? styles.overlayVisible : ''}`}
                onClick={() => setMenuOpen(false)}
                aria-hidden="true"
            />

            <div
                id="mobile-menu"
                className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
                role="dialog"
                aria-label="Menú de navegación móvil"
                aria-modal="true"
            >
                <ul role="list">
                    {NAV_LINKS.map(({ path, label }, index) => (
                        <li
                            key={path}
                            // El delay escalonado crea el efecto de entrada en cascada
                            style={{ '--item-index': index } as React.CSSProperties}
                            className={styles.mobileNavItem}
                        >
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    `${styles.mobileNavLink} ${isActive ? styles.active : ''}`
                                }
                                end={path === '/'}
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <a href="/pdf/CV.pdf" download className={styles.mobileCta}>
                    Descargar CV
                </a>
            </div>
        </header>
    )
}