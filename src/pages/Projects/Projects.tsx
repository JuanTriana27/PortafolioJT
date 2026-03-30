import { useState, useMemo } from 'react'
import { PROJECTS, type Category } from './projects.data'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

// Definimos los filtros como datos para que agregar una nueva
// categoría sea un cambio de una sola línea
const FILTERS: { value: 'all' | Category; label: string }[] = [
    { value: 'all', label: 'Todos' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' },
]

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState<'all' | Category>('all')

    // useMemo evita recalcular el filtro en cada render no relacionado
    const filteredProjects = useMemo(
        () =>
            activeFilter === 'all'
                ? PROJECTS
                : PROJECTS.filter(p => p.category === activeFilter),
        [activeFilter]
    )

    return (
        <section className={styles.section} aria-labelledby="projects-heading">
            <div className={styles.container}>

                {/* Header de sección */}
                <header className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Portafolio</span>
                    <h2 id="projects-heading" className={styles.sectionTitle}>
                        Proyectos
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Una selección de lo que he construido — desde interfaces hasta
                        servicios en producción.
                    </p>
                </header>

                {/* Filtros de categoría */}
                <div
                    className={styles.filterBar}
                    role="group"
                    aria-label="Filtrar proyectos por categoría"
                >
                    {FILTERS.map(({ value, label }) => (
                        <button
                            key={value}
                            className={`${styles.filterBtn} ${activeFilter === value ? styles.filterActive : ''}`}
                            onClick={() => setActiveFilter(value)}
                            aria-pressed={activeFilter === value}
                        >
                            {label}
                            {/* Contador de proyectos por categoría */}
                            <span className={styles.filterCount}>
                                {value === 'all'
                                    ? PROJECTS.length
                                    : PROJECTS.filter(p => p.category === value).length}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Grid de proyectos */}
                <div
                    className={styles.grid}
                    // key fuerza re-render del grid al cambiar filtro,
                    // lo que dispara las animaciones de entrada nuevamente
                    key={activeFilter}
                >
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                {/* Estado vacío — edge case si un filtro no tuviera proyectos */}
                {filteredProjects.length === 0 && (
                    <div className={styles.empty} role="status">
                        <p>No hay proyectos en esta categoría todavía.</p>
                    </div>
                )}
            </div>
        </section>
    )
}