import type { Project } from './projects.data'
import styles from './Projects.module.css'

// Mapeo de colores de tag a clase CSS — evitamos lógica de color
// dispersa en el template
const TAG_COLOR_CLASS: Record<string, string> = {
    blue: styles.tagBlue,
    green: styles.tagGreen,
    amber: styles.tagAmber,
    coral: styles.tagCoral,
    teal: styles.tagTeal,
    purple: styles.tagPurple,
}

interface ProjectCardProps {
    project: Project
    // El índice sirve para escalonar la animación de entrada
    index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const { title, description, tags, githubUrl, demoUrl, featured } = project

    return (
        <article
            className={`${styles.card} ${featured ? styles.cardFeatured : ''}`}
            style={{ '--card-index': index } as React.CSSProperties}
        >
            {featured && (
                <span className={styles.featuredBadge} aria-label="Proyecto destacado">
                    ★ Destacado
                </span>
            )}

            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
            </div>

            {/* Tags de tecnología */}
            <ul className={styles.tagList} aria-label="Tecnologías usadas">
                {tags.map(tag => (
                    <li
                        key={tag.label}
                        className={`${styles.tag} ${TAG_COLOR_CLASS[tag.color] ?? ''}`}
                    >
                        {tag.label}
                    </li>
                ))}
            </ul>

            {/* Acciones — siempre al fondo de la card gracias a flex column */}
            <div className={styles.cardActions}>
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnGithub}
                    aria-label={`Ver código de ${title} en GitHub`}
                >
                    {/* Ícono GitHub inline — sin dependencia de librería de íconos */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.071 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    GitHub
                </a>

                {/* Solo renderizamos el botón de demo si el proyecto tiene deploy */}
                {demoUrl && (
                    <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btnDemo}
                        aria-label={`Ver demo de ${title}`}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Live Demo
                    </a>
                )}
            </div>
        </article>
    )
}