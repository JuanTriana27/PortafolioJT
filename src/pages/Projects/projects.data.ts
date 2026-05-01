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
        id: 'jtmail-react-spring',
        title: 'JTmail - Aplicación de Correos Electrónicos',
        description:
            'Plataforma de gestión de correos electrónicos con funcionalidades completas de envío, recepción y organización.',
        category: 'fullstack',
        featured: true,
        tags: [
            { label: 'Spring Boot', color: 'green' },
            { label: 'React', color: 'blue' },
            { label: 'PostgreSQL', color: 'blue' },
            { label: 'Docker', color: 'blue' },
        ],
        githubUrl: 'https://github.com/JuanTriana27/JTmail',
        demoUrl: 'https://j-tmail-frontend.vercel.app/',
    },
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
            'CMS de noticias con panel administrativo, comentarios y gestión de usuarios.\n\nAdmin: http://blognoticreo.liveblog365.com/login.php (usuario: admin, contraseña: admin)',
        category: 'fullstack',
        featured: false,
        tags: [
            { label: 'PHP', color: 'purple' },
            { label: 'MariaDB', color: 'blue' },
            { label: 'CSS', color: 'blue' },
        ],
        githubUrl: 'https://github.com/JuanTriana27/Blog_Noticias',
        demoUrl: 'http://blognoticreo.liveblog365.com/',
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
        id: 'Jtmail-API',
        title: 'JTmail API',
        description: 'API RESTful para gestión de correos electrónicos. Implementa autenticación JWT y está desplegada en Render.',
        category: 'backend',
        tags: [
            { label: 'Spring Boot', color: 'green' },
            { label: 'JWT', color: 'amber' },
            { label: 'PostgreSQL', color: 'blue' },
            { label: 'Render', color: 'purple' },
            { label: 'Neon', color: 'teal' },
            { label: 'Docker', color: 'teal' },
        ],
        githubUrl: 'https://github.com/JuanTriana27/JTmail---bakend',
    },

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
        id: 'JTmail-Frontend',
        title: 'JTmail Frontend',
        description:
            'Frontend de la aplicación JTmail. Desarrollado con React y TypeScript. Desplegado en Vercel.',
        category: 'frontend',
        tags: [
            { label: 'React', color: 'blue' },
            { label: 'TypeScript', color: 'blue' },
            { label: 'CSS Modules', color: 'purple' },
            { label: 'EmailJS', color: 'teal' },
            { label: 'Vercel', color: 'teal' },

        ],
        githubUrl: 'https://github.com/JuanTriana27/JTmail---frontend'
    },

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
        githubUrl: 'https://github.com/JuanTriana27/PortafolioJT'
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
    },

    {
        id: 'login-js',
        title: 'Login con Validación',
        description:
            'Aplicación de login con validación de email, contraseña y confirmación. Incluye validación de campos, mostrar/ocultar contraseña y almacenamiento en localStorage.',
        category: 'frontend',
        tags: [
            { label: 'HTML', color: 'amber' },
            { label: 'CSS', color: 'blue' },
            { label: 'JavaScript', color: 'amber' },
        ],
        githubUrl: 'https://github.com/JuanTriana27/LoginJS',
        demoUrl: 'https://login-js-tan.vercel.app/',
    },

    {
        id: 'formulario-js',
        title: 'Formulario de Registro',
        description:
            'Formulario interactivo con validación completa de campos de texto, email, edad, select y checkboxes. Incluye manejo de errores dinámicos y estilos tipo Apple.',
        category: 'frontend',

        tags: [
            { label: 'HTML', color: 'amber' },
            { label: 'CSS', color: 'blue' },
            { label: 'JavaScript', color: 'amber' },
        ],
        githubUrl: 'https://github.com/JuanTriana27/FormularioJS',
        demoUrl: 'https://formulario-js-ebon.vercel.app/',
    },

    {
        id: 'weather-app-openmeteo',
        title: 'Weather App con Autocompletado',
        description:
            'Aplicación de clima en tiempo real con autocompletado de ciudades, debounce para optimización de consultas y consumo de APIs de Open-Meteo. Incluye manejo de estados, sugerencias dinámicas y renderizado de condiciones climáticas.',
        category: 'frontend',
        featured: false,
        tags: [
            { label: 'JavaScript', color: 'amber' },
            { label: 'HTML', color: 'amber' },
            { label: 'CSS', color: 'blue' },
            { label: 'API REST', color: 'green' },
        ],
        githubUrl: 'https://github.com/JuanTriana27/AppClimaJS',
        demoUrl: 'https://app-clima-js-sepia.vercel.app/',
    },

    {
        id: 'social-app-js',
        title: 'Red Social Simple (CRUD Posts)',
        description:
            'Aplicación tipo red social con creación, edición y eliminación de posts. Manejo de estado en memoria, renderizado dinámico del DOM y consumo de API REST. Incluye lógica para mostrar últimos posts y UI interactiva con acciones por elemento.',
        category: 'frontend',
        featured: false,
        tags: [
            { label: 'JavaScript', color: 'amber' },
            { label: 'HTML', color: 'amber' },
            { label: 'CSS', color: 'blue' },
            { label: 'API REST', color: 'green' },
        ],
        githubUrl: 'https://github.com/JuanTriana27/AppRedSocialJS',
        demoUrl: 'https://red-social-js.vercel.app/',
    }
]