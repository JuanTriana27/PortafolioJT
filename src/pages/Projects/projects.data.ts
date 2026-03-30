// Separar los datos de la UI es fundamental — cuando quieras
// actualizar un proyecto, tocas solo este archivo.
// En el futuro esto puede venir de una API o un CMS headless.

export type Category = 'frontend' | 'backend' | 'fullstack'

export interface TechTag {
    label: string
    // El color ayuda a identificar el ecosistema tecnológico de un vistazo
    color: 'blue' | 'green' | 'amber' | 'coral' | 'teal' | 'purple'
}

export interface Project {
    id: string
    title: string
    description: string
    category: Category
    tags: TechTag[]
    githubUrl: string
    demoUrl?: string  // Opcional: no todos los proyectos tienen deploy público
    featured?: boolean
}

// Reemplaza estos proyectos con los tuyos reales
export const PROJECTS: Project[] = [

    // Full Stack
    {
        id: 'inmobiliaria-react-spring',
        title: 'Sistema Inmobiliario',
        description:
            'Plataforma de gestión inmobiliaria con CRUD completo, búsqueda avanzada y despliegue con Docker.',
        category: 'fullstack',
        featured: true,
        tags: [
            { label: 'Spring Boot', color: 'green' },
            { label: 'React', color: 'blue' },
            { label: 'PostgreSQL', color: 'blue' },
            { label: 'Docker', color: 'blue' },
        ],
        githubUrl: 'https://github.com/JuanTriana27/Ecommerce',
        demoUrl: 'https://uni-front-seven.vercel.app/',
    },

    {
        id: 'cali-travel-guide',
        title: 'Cali Travel Guide',
        description:
            'Plataforma de turismo local con mapa interactivo, recomendaciones y contacto.',
        category: 'fullstack',
        featured: true,
        tags: [
            { label: 'React', color: 'blue' },
            { label: 'Node.js', color: 'green' },
            { label: 'MongoDB', color: 'green' },
            { label: 'Bootstrap', color: 'purple' },
        ],
        githubUrl: 'https://github.com/JuanTriana27/Tienda-Aviones',
        demoUrl: 'https://calitravelguide.netlify.app/',
    },

    {
        id: 'gimnasio-fullstack',
        title: 'Sistema de Gestión de Gimnasio',
        description:
            'Aplicación completa para gestión de miembros, reservas y analítica administrativa.',
        category: 'fullstack',
        featured: true,
        tags: [
            { label: 'React', color: 'blue' },
            { label: 'Spring Boot', color: 'green' },
            { label: 'PostgreSQL', color: 'blue' },
            { label: 'Supabase', color: 'green' },
        ],
        githubUrl: 'https://github.com/JuanTriana27/Gimansio-Spring',
        demoUrl: 'https://frontend-fitbooker.vercel.app/usuarios',
    },

    {
        id: 'store-fly-ecommerce',
        title: 'Store Fly - E-commerce de Aviones',
        description:
            'E-commerce especializado en venta de aviones y productos aeronáuticos con modelos 3D interactivos.',
        category: 'fullstack',
        featured: false,
        tags: [
            { label: 'HTML', color: 'amber' },
            { label: 'CSS', color: 'blue' },
            { label: 'JavaScript', color: 'amber' },
            { label: 'Three.js', color: 'blue' },
        ],
        githubUrl: 'https://github.com/JuanTriana27/Tienda-Aviones',
        demoUrl: 'https://tienda-aviones.vercel.app/',
    },

    {
        id: 'juego-dibujo-react-spring',
        title: 'Juego de Dibujo Multijugador',
        description:
            'Juego online en tiempo real con chat y sistema de puntuación usando WebSockets.',
        category: 'fullstack',
        featured: false,
        tags: [
            { label: 'Spring Boot', color: 'green' },
            { label: 'React', color: 'blue' },
            { label: 'WebSockets', color: 'amber' },
            { label: 'Bootstrap', color: 'purple' },
        ],
        githubUrl: 'https://github.com/JuanTriana27/Pintandoando',
        demoUrl: 'https://pintandoandamos.netlify.app/',
    },

    {
        id: 'calculadora-node-angular',
        title: 'Calculadora Full Stack',
        description:
            'Aplicación de cálculos básicos con historial y arquitectura Node.js + Angular.',
        category: 'fullstack',
        featured: false,
        tags: [
            { label: 'Node.js', color: 'green' },
            { label: 'Angular', color: 'blue' },
            { label: 'Bootstrap', color: 'purple' },
        ],
        githubUrl: 'https://github.com/JuanTriana27/CalcNodeBack',
        demoUrl: 'https://calculadora-front-node.vercel.app/',
    },

    {
        id: 'blog-noticias-php',
        title: 'Blog de Noticias',
        description:
            'CMS de noticias con panel administrativo, comentarios y gestión de usuarios.\n\nAdmin: http://blog-curso.rf.gd/login.php (usuario: admin, contraseña: admin)',
        category: 'fullstack',
        featured: false,
        tags: [
            { label: 'PHP', color: 'purple' },
            { label: 'MariaDB', color: 'blue' },
            { label: 'CSS', color: 'blue' },
        ],
        githubUrl: 'https://github.com/JuanTriana27/Blog_Noticias',
        demoUrl: 'http://blog-curso.rf.gd/login.php',
    },

    {
        id: 'galeria-imagenes-php',
        title: 'Galería de Imágenes',
        description:
            'Sistema de gestión de imágenes con organización por categorías y generación de miniaturas.',
        category: 'fullstack',
        featured: false,
        tags: [
            { label: 'PHP', color: 'purple' },
            { label: 'MariaDB', color: 'blue' },
            { label: 'CSS', color: 'blue' },
        ],
        githubUrl: 'https://github.com/JuanTriana27/Galeria_Imagenes',
    },

    // Backend
    {
        id: 'Inmobiliaria-API',
        title: 'Inmobiliaria API',
        description: 'API RESTful para gestión de propiedades, agentes y clientes. Implementa autenticación JWT y está desplegada en Render.',
        category: 'backend',
        tags: [
            { label: 'Spring Boot', color: 'green' },
            { label: 'JWT', color: 'amber' },
            { label: 'PostgreSQL', color: 'blue' },
            { label: 'Render', color: 'purple' },
            { label: 'Neon', color: 'teal' },
            { label: 'Docker', color: 'teal' },
        ],
        githubUrl: 'https://github.com/JuanTriana27/uniBack',
    },

    {
        id: 'Gimnasio-v1',
        title: 'Gimnasio V1',
        description: 'API RESTful para gestión de un gimnasio, con endpoints para clientes, entrenadores y clases. Implementa asistente de ia para recomendaciones personalizadas. Desplegada en Render.',
        category: 'backend',
        tags: [
            { label: 'Spring Boot', color: 'green' },
            { label: 'JWT', color: 'amber' },
            { label: 'PostgreSQL', color: 'blue' },
            { label: 'Render', color: 'purple' },
            { label: 'Neon', color: 'teal' },
            { label: 'Docker', color: 'teal' },
        ],
        githubUrl: 'https://github.com/JuanTriana27/backend-fitbooker',
    },

    // Frontend
    {
        id: 'Portafolio-v2',
        title: 'Portafolio v2',
        description:
            'Segunda versión del portafolio personal. Diseño responsivo con animaciones CSS y formulario de contacto con emailJS. Desplegado en Vercel.',
        category: 'frontend',
        tags: [
            { label: 'React', color: 'blue' },
            { label: 'TypeScript', color: 'blue' },
            { label: 'CSS Modules', color: 'purple' },
            { label: 'EmailJS', color: 'teal' },
            { label: 'Vercel', color: 'teal' },

        ],
        githubUrl: '',
        demoUrl: '',
    },

    {
        id: 'Gimnasio V1',
        title: 'Gimnasio V1',
        description: 'Frontend de aplicación web para gestión de un gimnasio. Desarrollada con React. Se consume una API REST para manejar datos de clientes, entrenadores y clases. Desplegada en Vercel.',
        category: 'frontend',
        tags: [
            { label: 'React', color: 'blue' },
            { label: 'CSS Modules', color: 'purple' },
            { label: 'Bootstrap', color: 'purple' },
            { label: 'Vercel', color: 'teal' },
        ],
        githubUrl: 'https://github.com/JuanTriana27/frontend-fitbooker',
    }
]