// About.tsx — Página "Sobre mí"
// Los datos del perfil viven en about.data.ts.
// Los datos de experiencia y formación son locales — no están en el data file.

import { useEffect, useRef } from 'react'
import { ABOUT_CONTENT } from './about.data'
import styles from './About.module.css'
import { SOCIAL_LINKS } from './about.data'

// ─── Datos que no están en about.data.ts ─────────────────────────────────────
// Experiencia, educación y cursos son más estáticos y específicos del CV;
// se mantienen aquí hasta que decidas moverlos al data file.

const experience = [
    {
        company: 'Semillero Técnico',
        role: 'Consultor técnico Jr.',
        period: 'jul. 2025 – sep. 2025',
        location: 'Las Condes, Santiago, Chile',
        description: 'Configuración de módulos financieros y contables en SAP Business One. Generación de reportes mediante consultas SQL con Query Generator y Cockpits.',
        tags: ['SAP B1', 'SQL', 'Finanzas'],
    },
    {
        company: 'Think2Process',
        role: 'Desarrollador Web Junior',
        period: 'dic. 2024 – jun. 2025',
        location: 'Las Condes, Santiago, Chile',
        description: 'Desarrollo y mantenimiento de módulos web en producción con JavaScript, PHP y SQL. Modelado de bases de datos, documentación técnica y trabajo directo bajo requerimientos de cliente real.',
        tags: ['JavaScript', 'PHP', 'SQL', 'MySQL'],
    },
]

const education = [
    {
        institution: 'Universidad de San Buenaventura Cali',
        degree: 'Ingeniería Multimedia',
        period: '2025',
        detail: 'Diseño y desarrollo de aplicaciones web, recursos digitales y experiencia de usuario.',
    },
    {
        institution: 'Colegio León de Greiff',
        degree: 'Bachiller en Informática',
        period: '2020',
        detail: '',
    },
]

const courses = [
    { platform: 'Udemy', name: 'Java' },
    { platform: 'Udemy', name: 'PHP / MySQL' },
    { platform: 'Udemy', name: 'JavaScript' },
    { platform: 'Udemy', name: 'SQL Total' },
]

// ─── Avatar ───────────────────────────────────────────────────────────────────
// Componente aislado — muestra la foto si existe, iniciales si no.
// De esta forma el JSX padre no tiene condicionales de presentación.
function Avatar() {
    const { name, photo } = ABOUT_CONTENT

    // "Juan Esteban Triana González" → palabras 0 y 2 → "JT"
    const initials = name
        .split(' ')
        .filter((_, i) => i === 0 || i === 2)
        .map(w => w[0])
        .join('')

    return (
        <div className={styles.avatarWrap}>
            {photo ? (
                <img
                    src={photo}
                    alt={`Foto de ${name}`}
                    className={styles.avatar}
                />
            ) : (
                <div className={styles.avatarPlaceholder} aria-label={initials}>
                    {initials}
                </div>
            )}
            <div className={styles.avatarRing} aria-hidden="true" />
        </div>
    )
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function About() {
    const observerRef = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible)
                        // Una vez animado no necesitamos seguir observando el elemento
                        observerRef.current?.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1 }
        )

        document.querySelectorAll(`.${styles.reveal}`).forEach((el) => {
            observerRef.current?.observe(el)
        })

        return () => observerRef.current?.disconnect()
    }, [])

    // Extraemos el email de details para el enlace del hero
    const emailDetail = ABOUT_CONTENT.details.find(d => d.label === 'Email')
    const locationDetail = ABOUT_CONTENT.details.find(d => d.label === 'Ubicación')
    const locationDetail2 = ABOUT_CONTENT.details.find(d => d.label === 'Ubicación2')

    return (
        <div className={styles.page}>

            {/* ── Hero ─────────────────────────────────────────────────────── */}
            <section className={styles.hero}>

                {/* Avatar a la izquierda — se apila arriba en móvil (ver CSS) */}
                <Avatar />

                <div className={styles.heroContent}>
                    <span className={styles.eyebrow}>Sobre mí</span>


                    <h1 className={styles.heroName}>
                        {/* Divide nombre en dos líneas: nombre y apellido */}
                        {ABOUT_CONTENT.name.split(' ').slice(0, 2).join(' ')}<br />
                        <span className={styles.accent}>
                            {ABOUT_CONTENT.name.split(' ').slice(2).join(' ')}
                        </span>

                    </h1>

                    <p className={styles.heroRole}>{ABOUT_CONTENT.role}</p>

                    <div className={styles.heroBio}>
                        {ABOUT_CONTENT.bio.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                    </div>


                    <div className={styles.heroMeta}>
                        {locationDetail && (
                            <span className={styles.metaItem}>
                                <span className={styles.metaDot} aria-hidden="true" />
                                {locationDetail.value}
                            </span>
                        )}

                        {locationDetail2 && (
                            <span className={styles.metaItem}>
                                <span className={styles.metaDot} aria-hidden="true" />
                                {locationDetail2.value}
                            </span>
                        )}


                        {emailDetail && (
                            <a
                                href={emailDetail.href}
                                className={styles.metaLink}
                            >
                                {emailDetail.value}
                            </a>
                        )}
                    </div>


                </div>
            </section>

            <div className={styles.container}>

                {/* ── Stack técnico ─────────────────────────────────────────── */}
                <section className={`${styles.section} ${styles.reveal}`}>
                    <h2 className={styles.sectionTitle}>Stack técnico</h2>
                    <div className={styles.skillsGrid}>
                        {ABOUT_CONTENT.skills.map((group) => (
                            <div key={group.category} className={styles.skillCard}>
                                <h3 className={styles.skillLabel}>{group.category}</h3>
                                <ul className={styles.skillList} role="list">
                                    {group.items.map((skill) => (
                                        <li key={skill} className={styles.skillTag}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Experiencia ───────────────────────────────────────────── */}
                <section className={`${styles.section} ${styles.reveal}`}>
                    <h2 className={styles.sectionTitle}>Experiencia</h2>
                    <div className={styles.timeline}>
                        {experience.map((job, index) => (
                            <article
                                key={index}
                                className={styles.timelineItem}
                                style={{ '--delay': `${index * 120}ms` } as React.CSSProperties}
                            >
                                <div className={styles.timelineLine} aria-hidden="true">
                                    <div className={styles.timelineDot} />
                                </div>
                                <div className={styles.timelineContent}>
                                    <div className={styles.timelineHeader}>
                                        <div>
                                            <h3 className={styles.jobRole}>{job.role}</h3>
                                            <p className={styles.jobCompany}>{job.company}</p>
                                        </div>
                                        <div className={styles.timelineMeta}>
                                            <span className={styles.jobPeriod}>{job.period}</span>
                                            <span className={styles.jobLocation}>{job.location}</span>
                                        </div>
                                    </div>
                                    <p className={styles.jobDescription}>{job.description}</p>
                                    <div className={styles.jobTags}>
                                        {job.tags.map((tag) => (
                                            <span key={tag} className={styles.jobTag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* ── Formación ─────────────────────────────────────────────── */}
                <section className={`${styles.section} ${styles.reveal}`}>
                    <h2 className={styles.sectionTitle}>Formación</h2>
                    <div className={styles.formationGrid}>
                        <div>
                            <h3 className={styles.formationSubtitle}>Académica</h3>
                            <div className={styles.educationList}>
                                {education.map((edu, i) => (
                                    <div key={i} className={styles.eduItem}>
                                        <span className={styles.eduPeriod}>{edu.period}</span>
                                        <div>
                                            <p className={styles.eduDegree}>{edu.degree}</p>
                                            <p className={styles.eduInstitution}>{edu.institution}</p>
                                            {edu.detail && (
                                                <p className={styles.eduDetail}>{edu.detail}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className={styles.formationSubtitle}>Cursos complementarios</h3>
                            <div className={styles.coursesList}>
                                {courses.map((course, i) => (
                                    <div key={i} className={styles.courseItem}>
                                        <span className={styles.coursePlatform}>{course.platform}</span>
                                        <span className={styles.courseName}>{course.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Redes Sociales ────────────────────────────────────────── */}
                <section>

                    <h2 className={styles.sectionTitle}>Conecta conmigo</h2>

                    <div className={styles.socialLinks}>

                        {SOCIAL_LINKS.map((social) => (
                            <a
                                key={social.platform}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={social.platform}
                                className={styles.socialLink}
                                aria-label={`Visita mi ${social.platform}`}
                            >
                                <i className={social.icon} aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
