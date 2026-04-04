// about.data.ts
// Misma filosofía que projects.data.ts — los datos fuera del componente.
// Cuando Juan cambie de ciudad o email, toca solo este archivo.

export interface PersonalDetail {
    label: string
    value: string
    // Algunos datos son enlaces (email, LinkedIn) — otros son texto plano
    href?: string
}

export interface AboutContent {
    name: string
    role: string
    // Ruta resuelta por Vite al importar la imagen — undefined muestra iniciales
    photo?: string
    bio: string[]   // Párrafos separados para más flexibilidad en el render
    details: PersonalDetail[]
    skills: SkillGroup[]
}

export interface SkillGroup {
    category: string
    items: string[]
}

export interface SocialLink {
    platform: string
    url: string
    icon: string
}

export const SOCIAL_LINKS: SocialLink[] = [
    {
        platform: 'GitHub',
        url: 'https://github.com/JuanTriana27',
        icon: 'fab fa-github',
    },
    {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/juan-triana27/',
        icon: 'fab fa-linkedin',
    },
    {
        platform: 'Instagram',
        url: 'https://www.instagram.com/juan_triiana/',
        icon: 'fab fa-instagram',
    },
]

// La imagen se importa aquí y no en el componente — si cambia el archivo,
// solo se toca este import y el resto del código no sabe nada de rutas.
import fotoJuan from './../../assets/img/Foto_Juan_Triana.png'

export const ABOUT_CONTENT: AboutContent = {
    name: 'Juan Esteban Triana González',
    role: 'Ingeniero Multimedia · Frontend Developer',

    photo: fotoJuan,

    bio: [
        'Ingeniero Multimedia con orientación hacia el desarrollo frontend y la creación de experiencias digitales atractivas e intuitivas. Actualmente amplío mis conocimientos en desarrollo backend para complementar mi perfil técnico.',
        'Mi objetivo es crear soluciones web que no solo sean visualmente atractivas, sino también funcionales, accesibles y optimizadas para el usuario.',
    ],

    details: [
        { label: 'Ubicación', value: 'Santiago de Cali, Colombia' },
        { label: 'Ubicación2', value: 'Bogotá, Colombia' },
        { label: 'Experiencia', value: '1 año en desarrollo web' },
        {
            label: 'Email',
            value: 'trianajuan28@gmail.com',
            href: 'mailto:trianajuan28@gmail.com',
        },
    ],

    // Separar por categoría permite renderizar grupos visuales distintos
    skills: [
        {
            category: 'Frontend',
            items: ['React', 'TypeScript', 'CSS Modules', 'HTML5', 'Figma'],
        },
        {
            category: 'Backend',
            items: ['Node.js', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Docker'],
        },
        {
            category: 'Herramientas',
            items: ['Git', 'Vite', 'Vercel', 'Postman'],
        },
    ],
}