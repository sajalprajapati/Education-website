// src/constants/translations.js - COMPLETE VERSION

export const translations = {
  en: {
    brand: "CourseBrand",
    nav: {
      home: "Home",
      course: "Courses",
      preview: "Preview",
      materials: "Materials",
      faq: "FAQ",
      testimonials: "Testimonials",
      enroll: "Enroll",
      toggle: "Toggle navigation",
    },
    hero: {
      title: "Become a Full Stack Web Developer",
      subtitle: "Learn HTML, CSS, JavaScript and more by building real-world projects.",
      duration: "12-week intensive program",
      level: "Beginner to Job-Ready",
      highlight: "Next cohort starts soon!",
      points: [
        "Live mentoring sessions",
        "Hands-on projects",
        "Certificate on completion",
      ],
      ctaPrimary: "Enroll Now",
      ctaSecondary: "Watch Preview",
    },
    course: {
      title: "Course Overview",
      subtitle: "Everything you need to go from zero to hired.",
      overviewTitle: "What you'll learn",
      description: "This course covers the full web development stack including HTML5, CSS3, JavaScript, and backend fundamentals.",
      meta: {
        duration: "Duration: 12 weeks",
        level: "Level: Beginner–Intermediate",
        prereq: "Prerequisites: Basic computer skills",
      },
      objectivesTitle: "Learning Objectives",
      objectives: [
        "Build responsive websites with HTML & CSS.",
        "Create interactive pages with JavaScript.",
        "Understand APIs and JSON data.",
        "Deploy your projects to the web.",
      ],
      curriculumTitle: "Curriculum Outline",
      modules: [
        {
          title: "Module 1: HTML & Semantics",
          content: "Learn HTML5 structure, semantic tags, forms and accessibility basics.",
        },
        {
          title: "Module 2: CSS & Layouts",
          content: "Master Flexbox, Grid, responsive design and modern UI patterns.",
        },
        {
          title: "Module 3: JavaScript Essentials",
          content: "Work with the DOM, events, localStorage and APIs.",
        },
      ],
      instructorTitle: "Your Instructor",
      instructor: {
        name: "Alex Johnson",
        role: "Senior Full Stack Engineer",
        bio: "8+ years building web apps for startups and teaching developers.",
      },
      priceTitle: "Pricing",
      priceLabel: "Full Course Price",
      priceValue: "$399",
      priceNote: "Limited-time launch discount. Regular price $599.",
    },
    video: {
      title: "Course Preview",
      subtitle: "Watch the first lesson and see how the course is structured.",
      thankYou: "Thank you! Form is submitted.",
      blurTitle: "🔒 Complete the form to continue watching",
      blurSubtitle: "Fill out your details to unlock the full video",
    },
    modal: {
      title: "Enroll in the Course",
      subtitle: "Enter your details to get started with your learning journey",
      form: {
        name: "Name",
        namePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "your.email@example.com",
        phone: "Phone Number",
        phonePlaceholder: "+91 98765 43210",
        submit: "Submit & Continue",
      },
      errors: {
        required: "This field is required",
        email: "Please enter a valid email",
      },
    },
    downloads: {
      title: "Free Course Materials",
      subtitle: "Download these resources to get started",
      download: "Download",
      items: [
        {
          title: "Course Syllabus",
          description: "Complete course outline and schedule",
          size: "2.3 MB",
          file: "course-syllabus.pdf",
        },
        {
          title: "Sample Materials",
          description: "Preview lessons and code examples",
          size: "5.1 MB",
          file: "sample-materials.pdf",
        },
        {
          title: "Setup Guide",
          description: "Development environment setup instructions",
          size: "1.8 MB",
          file: "study-guide.pdf",
        },
      ],
    },
    faq: {
  title: "Frequently Asked Questions",
  items: [
    {
      q: "Do I need prior coding experience?",
      a: "No. This course starts from the basics and gradually increases in difficulty.",
    },
    {
      q: "How long do I have access to the materials?",
      a: "You get lifetime access to all videos and downloadable resources.",
    },
    {
      q: "Is there a certificate?",
      a: "Yes, you'll receive a certificate upon successful completion of the course.",
    },
    {
      q: "What if I can't keep up with the cohort schedule?",
      a: "You can learn at your own pace; live sessions are recorded.",
    },

    // ⭐ NEW FAQ 1
    {
      q: "Will I get help with building my portfolio?",
      a: "Yes! Throughout the course, you’ll build real-world projects that you can showcase in your professional portfolio.",
    },

    // ⭐ NEW FAQ 2
    {
      q: "Do you offer support if I get stuck?",
      a: "Absolutely. You’ll receive instructor and community support where you can ask questions and get guidance anytime.",
    },

    // ⭐ NEW FAQ 3
    {
      q: "Can I access the course on mobile?",
      a: "Yes, all lessons and materials are fully mobile-friendly so you can learn from any device.",
    },
  ],
},

    testimonials: {
      title: "What Students Say",
      items: [
        {
          name: "Sarah Lee",
          role: "Junior Frontend Developer",
          text: "This course gave me the confidence and portfolio I needed to land my first dev job.",
          rating: 5,
        },
        {
          name: "Michael Chen",
          role: "Career Switcher",
          text: "The projects and feedback were incredibly practical. Highly recommended!",
          rating: 5,
        },
        {
          name: "Priya Patel",
          role: "Freelancer",
          text: "Clear explanations and modern best practices. Perfect for building real-world skills.",
          rating: 4,
        },
      ],
    },
    cta: {
      mainTitle: "Ready to Start Your Developer Journey?",
      mainSubtitle: "Join the next cohort and build real projects you can show to employers.",
      button: "Enroll Now",
      sticky: "Enroll Now",
    },
    footer: {
      contactTitle: "Contact",
      email: "hello@example.com",
      phone: "+1 (555) 123-4567",
      address: "123 Web Dev Lane, Coding City",
      quickLinks: "Quick Links",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      social: "Follow Us",
      newsletterTitle: "Stay in the loop",
      newsletterPlaceholder: "Your email address",
      newsletterButton: "Subscribe",
      copyright: "© 2025 CourseBrand. All rights reserved.",
    },
    courses: {
      title: "Our Popular Courses",
      subtitle: "Choose the perfect course to start your journey",
      viewAll: "View All Courses",
      enrolled: "students enrolled",
      duration: "weeks",
      level: "Level:",
      rating: "rating",
      enrollNow: "Enroll Now",
      viewDetails: "View Details",
      list: [
        {
          id: 1,
          title: "Full Stack Web Development",
          shortDescription: "Master HTML, CSS, JavaScript, React, Node.js and MongoDB",
          image: "https://plus.unsplash.com/premium_photo-1682464651356-3c6780eff00c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2bG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
          category: "Web Development",
          level: "Beginner to Advanced",
          duration: 12,
          price: "$399",
          originalPrice: "$599",
          discount: "33% OFF",
          enrolled: 2847,
          rating: 4.8,
          reviews: 524,
          instructor: {
            name: "Alex Johnson",
            avatar: "images/instructor-alex.jpg"
          },
          features: [
            "Live mentoring sessions",
            "Hands-on projects",
            "Job placement assistance",
            "Lifetime access"
          ],
          modules: [
            {
              title: "Module 1: HTML & CSS Fundamentals",
              content: "Learn HTML5 structure, semantic tags, CSS3, Flexbox, Grid, and responsive design.",
              duration: "2 weeks"
            },
            {
              title: "Module 2: JavaScript Mastery",
              content: "ES6+, DOM manipulation, async programming, APIs, and modern JS patterns.",
              duration: "3 weeks"
            },
            {
              title: "Module 3: React Development",
              content: "Components, hooks, state management, routing, and building real applications.",
              duration: "3 weeks"
            },
            {
              title: "Module 4: Backend with Node.js",
              content: "Express, RESTful APIs, authentication, MongoDB, and deployment.",
              duration: "4 weeks"
            }
          ]
        },
        {
          id: 2,
          title: "UI/UX Design Masterclass",
          shortDescription: "Create beautiful user interfaces and exceptional user experiences",
          image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2bG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
          category: "Design",
          level: "Beginner to Intermediate",
          duration: 8,
          price: "$299",
          originalPrice: "$449",
          discount: "33% OFF",
          enrolled: 1923,
          rating: 4.9,
          reviews: 389,
          instructor: {
            name: "Sarah Williams",
            avatar: "images/instructor-sarah.jpg"
          },
          features: [
            "Figma & Adobe XD training",
            "Portfolio projects",
            "Design thinking workshops",
            "Industry mentorship"
          ],
          modules: [
            {
              title: "Module 1: Design Fundamentals",
              content: "Color theory, typography, layout principles, and visual hierarchy.",
              duration: "2 weeks"
            },
            {
              title: "Module 2: User Research & Testing",
              content: "User interviews, personas, journey mapping, and usability testing.",
              duration: "2 weeks"
            },
            {
              title: "Module 3: Prototyping & Wireframing",
              content: "Low-fidelity to high-fidelity prototypes using industry tools.",
              duration: "2 weeks"
            },
            {
              title: "Module 4: Advanced UI Patterns",
              content: "Micro-interactions, animations, responsive design, and accessibility.",
              duration: "2 weeks"
            }
          ]
        },
        {
          id: 3,
          title: "Python for Data Science",
          shortDescription: "Data analysis, visualization, and machine learning with Python",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2bG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
          category: "Data Science",
          level: "Intermediate",
          duration: 10,
          price: "$349",
          originalPrice: "$499",
          discount: "30% OFF",
          enrolled: 3156,
          rating: 4.7,
          reviews: 672,
          instructor: {
            name: "Dr. Michael Chen",
            avatar: "images/instructor-michael.jpg"
          },
          features: [
            "Real-world datasets",
            "Jupyter notebooks",
            "ML project portfolio",
            "Career guidance"
          ],
          modules: [
            {
              title: "Module 1: Python Basics",
              content: "Python syntax, data structures, OOP, and best practices.",
              duration: "2 weeks"
            },
            {
              title: "Module 2: Data Analysis",
              content: "NumPy, Pandas, data cleaning, and exploratory data analysis.",
              duration: "3 weeks"
            },
            {
              title: "Module 3: Data Visualization",
              content: "Matplotlib, Seaborn, Plotly, and creating compelling visualizations.",
              duration: "2 weeks"
            },
            {
              title: "Module 4: Machine Learning",
              content: "Scikit-learn, supervised/unsupervised learning, and model evaluation.",
              duration: "3 weeks"
            }
          ]
        }
      ]
    }
  },
  
  es: {
  brand: "CourseBrand",
  nav: {
    home: "Inicio",
    course: "Cursos",
    preview: "Vista previa",
    materials: "Materiales",
    faq: "Preguntas",
    testimonials: "Testimonios",
    enroll: "Inscribirse",
    toggle: "Alternar navegación",
  },
  hero: {
    title: "Conviértete en Desarrollador Web Full Stack",
    subtitle:
      "Aprende HTML, CSS, JavaScript y más construyendo proyectos del mundo real.",
    duration: "Programa intensivo de 12 semanas",
    level: "De principiante a listo para trabajar",
    highlight: "¡El próximo grupo comienza pronto!",
    points: [
      "Sesiones de mentoría en vivo",
      "Proyectos prácticos",
      "Certificado al completar",
    ],
    ctaPrimary: "Inscribirme ahora",
    ctaSecondary: "Ver vista previa",
  },
  course: {
    title: "Descripción del curso",
    subtitle: "Todo lo que necesitas para pasar de cero a contratado.",
    overviewTitle: "Lo que aprenderás",
    description:
      "Este curso cubre todo el stack de desarrollo web incluyendo HTML5, CSS3, JavaScript y fundamentos de backend.",
    meta: {
      duration: "Duración: 12 semanas",
      level: "Nivel: Principiante–Intermedio",
      prereq: "Requisitos previos: Conocimientos básicos de informática",
    },
    objectivesTitle: "Objetivos de aprendizaje",
    objectives: [
      "Crear sitios web responsivos con HTML y CSS.",
      "Construir páginas interactivas con JavaScript.",
      "Entender APIs y datos en formato JSON.",
      "Publicar tus proyectos en la web.",
    ],
    curriculumTitle: "Contenido del programa",
    modules: [
      {
        title: "Módulo 1: HTML y Semántica",
        content:
          "Aprende la estructura de HTML5, etiquetas semánticas, formularios y conceptos básicos de accesibilidad.",
      },
      {
        title: "Módulo 2: CSS y Maquetación",
        content:
          "Domina Flexbox, Grid, diseño responsivo y patrones modernos de interfaces.",
      },
      {
        title: "Módulo 3: Fundamentos de JavaScript",
        content:
          "Trabaja con el DOM, eventos, localStorage y consumo de APIs.",
      },
    ],
    instructorTitle: "Tu instructor",
    instructor: {
      name: "Alex Johnson",
      role: "Ingeniero Full Stack Senior",
      bio: "Más de 8 años construyendo aplicaciones web para startups y enseñando a desarrolladores.",
    },
    priceTitle: "Precio",
    priceLabel: "Precio completo del curso",
    priceValue: "$399",
    priceNote: "Descuento de lanzamiento por tiempo limitado. Precio regular $599.",
  },
  video: {
    title: "Vista previa del curso",
    subtitle:
      "Mira la primera lección y descubre cómo está estructurado el curso.",
    thankYou: "¡Gracias! El formulario se envió correctamente.",
    blurTitle: "🔒 Completa el formulario para seguir viendo",
    blurSubtitle: "Rellena tus datos para desbloquear el video completo",
  },
  modal: {
    title: "Inscríbete en el curso",
    subtitle:
      "Introduce tus datos para comenzar tu camino de aprendizaje",
    form: {
      name: "Nombre",
      namePlaceholder: "Tu nombre completo",
      email: "Correo electrónico",
      emailPlaceholder: "tu.email@ejemplo.com",
      phone: "Número de teléfono",
      phonePlaceholder: "+34 600 000 000",
      submit: "Enviar y continuar",
    },
    errors: {
      required: "Este campo es obligatorio",
      email: "Por favor, introduce un correo válido",
    },
  },
  downloads: {
    title: "Materiales de curso gratuitos",
    subtitle: "Descarga estos recursos para empezar",
    download: "Descargar",
    items: [
      {
        title: "Programa del curso",
        description: "Temario completo y calendario",
        size: "2.3 MB",
        file: "course-syllabus.pdf",
      },
      {
        title: "Materiales de muestra",
        description: "Lecciones de ejemplo y fragmentos de código",
        size: "5.1 MB",
        file: "sample-materials.pdf",
      },
      {
        title: "Guía de configuración",
        description: "Instrucciones para configurar tu entorno de desarrollo",
        size: "1.8 MB",
        file: "study-guide.pdf",
      },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Necesito experiencia previa en programación?",
        a: "No. Este curso empieza desde lo más básico y aumenta la dificultad gradualmente.",
      },
      {
        q: "¿Cuánto tiempo tendré acceso al material?",
        a: "Tendrás acceso de por vida a todos los videos y recursos descargables.",
      },
      {
        q: "¿Hay certificado?",
        a: "Sí, recibirás un certificado al completar el curso con éxito.",
      },
      {
        q: "¿Qué pasa si no puedo seguir el ritmo del grupo?",
        a: "Puedes aprender a tu propio ritmo; las sesiones en vivo quedan grabadas.",
      },
      {
        q: "¿Me ayudarán a construir mi portafolio?",
        a: "Sí. A lo largo del curso crearás proyectos reales que podrás mostrar en tu portafolio profesional.",
      },
      {
        q: "¿Ofrecen soporte si me quedo atascado?",
        a: "Por supuesto. Tendrás soporte del instructor y de la comunidad para resolver tus dudas.",
      },
      {
        q: "¿Puedo acceder al curso desde el móvil?",
        a: "Sí, todas las lecciones y recursos están optimizados para dispositivos móviles.",
      },
    ],
  },
  testimonials: {
    title: "Lo que dicen los estudiantes",
    items: [
      {
        name: "Sarah Lee",
        role: "Desarrolladora Frontend Junior",
        text: "Este curso me dio la confianza y el portafolio que necesitaba para conseguir mi primer trabajo como desarrolladora.",
        rating: 5,
      },
      {
        name: "Michael Chen",
        role: "Cambio de carrera",
        text: "Los proyectos y el feedback fueron muy prácticos. ¡Lo recomiendo totalmente!",
        rating: 5,
      },
      {
        name: "Priya Patel",
        role: "Freelancer",
        text: "Explicaciones claras y buenas prácticas modernas. Perfecto para adquirir habilidades reales.",
        rating: 4,
      },
    ],
  },
  cta: {
    mainTitle: "¿Listo para empezar tu camino como desarrollador?",
    mainSubtitle:
      "Únete a la próxima cohorte y construye proyectos reales que puedas mostrar a empleadores.",
    button: "Inscribirme ahora",
    sticky: "Inscribirse ahora",
  },
  footer: {
    contactTitle: "Contacto",
    email: "hello@example.com",
    phone: "+34 600 000 000",
    address: "123 Calle Web Dev, Ciudad del Código",
    quickLinks: "Enlaces rápidos",
    privacy: "Política de privacidad",
    terms: "Términos de uso",
    social: "Síguenos",
    newsletterTitle: "Mantente al día",
    newsletterPlaceholder: "Tu correo electrónico",
    newsletterButton: "Suscribirme",
    copyright: "© 2025 CourseBrand. Todos los derechos reservados.",
  },
  courses: {
    title: "Nuestros cursos más populares",
    subtitle: "Elige el curso perfecto para comenzar tu camino",
    viewAll: "Ver todos los cursos",
    enrolled: "estudiantes inscritos",
    duration: "semanas",
    level: "Nivel:",
    rating: "valoración",
    enrollNow: "Inscribirme",
    viewDetails: "Ver detalles",
    list: [
      {
        id: 1,
        title: "Desarrollo Web Full Stack",
        shortDescription:
          "Domina HTML, CSS, JavaScript, React, Node.js y MongoDB",
        image:
          "https://plus.unsplash.com/premium_photo-1682464651356-3c6780eff00c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2bG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
        category: "Desarrollo web",
        level: "De principiante a avanzado",
        duration: 12,
        price: "$399",
        originalPrice: "$599",
        discount: "33% de descuento",
        enrolled: 2847,
        rating: 4.8,
        reviews: 524,
        instructor: {
          name: "Alex Johnson",
          avatar: "images/instructor-alex.jpg",
        },
        features: [
          "Sesiones de mentoría en vivo",
          "Proyectos prácticos",
          "Ayuda para inserción laboral",
          "Acceso de por vida",
        ],
        modules: [
          {
            title: "Módulo 1: Fundamentos de HTML y CSS",
            content:
              "Aprende la estructura de HTML5, etiquetas semánticas, CSS3, Flexbox, Grid y diseño responsivo.",
            duration: "2 semanas",
          },
          {
            title: "Módulo 2: Dominando JavaScript",
            content:
              "ES6+, manipulación del DOM, programación asíncrona, APIs y patrones modernos.",
            duration: "3 semanas",
          },
          {
            title: "Módulo 3: Desarrollo con React",
            content:
              "Componentes, hooks, gestión de estado, enrutamiento y creación de aplicaciones reales.",
            duration: "3 semanas",
          },
          {
            title: "Módulo 4: Backend con Node.js",
            content:
              "Express, APIs REST, autenticación, MongoDB y despliegue.",
            duration: "4 semanas",
          },
        ],
      },
      {
        id: 2,
        title: "Masterclass de Diseño UI/UX",
        shortDescription:
          "Crea interfaces hermosas y experiencias de usuario excepcionales",
        image:
          "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2bG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
        category: "Diseño",
        level: "De principiante a intermedio",
        duration: 8,
        price: "$299",
        originalPrice: "$449",
        discount: "33% de descuento",
        enrolled: 1923,
        rating: 4.9,
        reviews: 389,
        instructor: {
          name: "Sarah Williams",
          avatar: "images/instructor-sarah.jpg",
        },
        features: [
          "Formación en Figma y Adobe XD",
          "Proyectos para portafolio",
          "Talleres de design thinking",
          "Mentoría con profesionales",
        ],
        modules: [
          {
            title: "Módulo 1: Fundamentos de diseño",
            content:
              "Teoría del color, tipografía, principios de maquetación y jerarquía visual.",
            duration: "2 semanas",
          },
          {
            title: "Módulo 2: Investigación y pruebas con usuarios",
            content:
              "Entrevistas, personas de usuario, mapas de experiencia y pruebas de usabilidad.",
            duration: "2 semanas",
          },
          {
            title: "Módulo 3: Wireframes y prototipos",
            content:
              "De prototipos de baja fidelidad a alta fidelidad con herramientas líderes.",
            duration: "2 semanas",
          },
          {
            title: "Módulo 4: Patrones avanzados de UI",
            content:
              "Microinteracciones, animaciones, diseño responsivo y accesibilidad.",
            duration: "2 semanas",
          },
        ],
      },
      {
        id: 3,
        title: "Python para Ciencia de Datos",
        shortDescription:
          "Análisis de datos, visualización y machine learning con Python",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2bG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
        category: "Ciencia de datos",
        level: "Intermedio",
        duration: 10,
        price: "$349",
        originalPrice: "$499",
        discount: "30% de descuento",
        enrolled: 3156,
        rating: 4.7,
        reviews: 672,
        instructor: {
          name: "Dr. Michael Chen",
          avatar: "images/instructor-michael.jpg",
        },
        features: [
          "Conjuntos de datos reales",
          "Jupyter Notebooks",
          "Proyecto de machine learning para portafolio",
          "Orientación profesional",
        ],
        modules: [
          {
            title: "Módulo 1: Fundamentos de Python",
            content:
              "Sintaxis, estructuras de datos, POO y buenas prácticas.",
            duration: "2 semanas",
          },
          {
            title: "Módulo 2: Análisis de datos",
            content:
              "NumPy, Pandas, limpieza de datos y análisis exploratorio.",
            duration: "3 semanas",
          },
          {
            title: "Módulo 3: Visualización de datos",
            content:
              "Matplotlib, Seaborn, Plotly y creación de visualizaciones impactantes.",
            duration: "2 semanas",
          },
          {
            title: "Módulo 4: Machine Learning",
            content:
              "Scikit-learn, aprendizaje supervisado/no supervisado y evaluación de modelos.",
            duration: "3 semanas",
          },
        ],
      },
    ],
  },
},

  
  fr: {
  brand: "CourseBrand",
  nav: {
    home: "Accueil",
    course: "Cours",
    preview: "Aperçu",
    materials: "Ressources",
    faq: "FAQ",
    testimonials: "Témoignages",
    enroll: "S'inscrire",
    toggle: "Basculer la navigation",
  },
  hero: {
    title: "Devenez Développeur Web Full Stack",
    subtitle:
      "Apprenez HTML, CSS, JavaScript et plus encore en réalisant des projets concrets.",
    duration: "Programme intensif de 12 semaines",
    level: "Débutant à prêt à l'emploi",
    highlight: "La prochaine cohorte commence bientôt !",
    points: [
      "Sessions de mentorat en direct",
      "Projets pratiques",
      "Certificat de fin de formation",
    ],
    ctaPrimary: "S'inscrire maintenant",
    ctaSecondary: "Voir l'aperçu",
  },
  course: {
    title: "Aperçu du cours",
    subtitle: "Tout ce dont vous avez besoin pour passer de zéro à embauché.",
    overviewTitle: "Ce que vous allez apprendre",
    description:
      "Ce cours couvre tout le stack de développement web : HTML5, CSS3, JavaScript et les bases du backend.",
    meta: {
      duration: "Durée : 12 semaines",
      level: "Niveau : Débutant–Intermédiaire",
      prereq:
        "Prérequis : Compétences informatiques de base",
    },
    objectivesTitle: "Objectifs pédagogiques",
    objectives: [
      "Créer des sites web responsives avec HTML et CSS.",
      "Construire des pages interactives avec JavaScript.",
      "Comprendre les APIs et les données JSON.",
      "Déployer vos projets sur le web.",
    ],
    curriculumTitle: "Plan du programme",
    modules: [
      {
        title: "Module 1 : HTML et sémantique",
        content:
          "Apprenez la structure HTML5, les balises sémantiques, les formulaires et les bases de l'accessibilité.",
      },
      {
        title: "Module 2 : CSS et mises en page",
        content:
          "Maîtrisez Flexbox, Grid, le design responsif et les modèles d'interface modernes.",
      },
      {
        title: "Module 3 : Fondamentaux de JavaScript",
        content:
          "Travaillez avec le DOM, les événements, le localStorage et les APIs.",
      },
    ],
    instructorTitle: "Votre formateur",
    instructor: {
      name: "Alex Johnson",
      role: "Ingénieur Full Stack Senior",
      bio: "Plus de 8 ans d'expérience dans le développement d'applications web pour des startups et la formation de développeurs.",
    },
    priceTitle: "Tarif",
    priceLabel: "Prix complet de la formation",
    priceValue: "$399",
    priceNote:
      "Remise de lancement limitée dans le temps. Prix normal : $599.",
  },
  video: {
    title: "Aperçu du cours",
    subtitle:
      "Regardez la première leçon et découvrez la structure de la formation.",
    thankYou: "Merci ! Votre formulaire a bien été envoyé.",
    blurTitle: "🔒 Complétez le formulaire pour continuer à regarder",
    blurSubtitle:
      "Renseignez vos informations pour débloquer la vidéo complète",
  },
  modal: {
    title: "Inscription à la formation",
    subtitle:
      "Entrez vos informations pour démarrer votre parcours d'apprentissage",
    form: {
      name: "Nom",
      namePlaceholder: "Votre nom complet",
      email: "E-mail",
      emailPlaceholder: "votre.email@exemple.com",
      phone: "Numéro de téléphone",
      phonePlaceholder: "+33 6 00 00 00 00",
      submit: "Envoyer et continuer",
    },
    errors: {
      required: "Ce champ est obligatoire",
      email: "Veuillez entrer une adresse e-mail valide",
    },
  },
  downloads: {
    title: "Ressources gratuites du cours",
    subtitle: "Téléchargez ces ressources pour bien commencer",
    download: "Télécharger",
    items: [
      {
        title: "Programme du cours",
        description: "Plan détaillé du cours et calendrier",
        size: "2.3 MB",
        file: "course-syllabus.pdf",
      },
      {
        title: "Exemples de contenu",
        description:
          "Extraits de leçons et exemples de code",
        size: "5.1 MB",
        file: "sample-materials.pdf",
      },
      {
        title: "Guide d'installation",
        description:
          "Instructions pour configurer votre environnement de développement",
        size: "1.8 MB",
        file: "study-guide.pdf",
      },
    ],
  },
  faq: {
    title: "Foire aux questions",
    items: [
      {
        q: "Ai-je besoin d'expérience en programmation ?",
        a: "Non. Le cours commence par les bases et augmente progressivement en difficulté.",
      },
      {
        q: "Combien de temps ai-je accès au contenu ?",
        a: "Vous avez un accès à vie à toutes les vidéos et ressources téléchargeables.",
      },
      {
        q: "Y a-t-il un certificat ?",
        a: "Oui, vous recevrez un certificat à la réussite de la formation.",
      },
      {
        q: "Et si je ne peux pas suivre le rythme de la cohorte ?",
        a: "Vous pouvez apprendre à votre propre rythme ; les sessions en direct sont enregistrées.",
      },
      {
        q: "M'aiderez-vous à construire mon portfolio ?",
        a: "Oui. Tout au long du cours, vous réaliserez des projets concrets que vous pourrez présenter dans votre portfolio.",
      },
      {
        q: "Proposez-vous du support si je bloque ?",
        a: "Bien sûr. Vous aurez accès au formateur et à la communauté pour poser vos questions.",
      },
      {
        q: "Puis-je suivre le cours sur mobile ?",
        a: "Oui, toutes les leçons et ressources sont adaptées aux appareils mobiles.",
      },
    ],
  },
  testimonials: {
    title: "Ce que disent les étudiants",
    items: [
      {
        name: "Sarah Lee",
        role: "Développeuse Frontend Junior",
        text: "Cette formation m'a donné la confiance et le portfolio dont j'avais besoin pour décrocher mon premier poste.",
        rating: 5,
      },
      {
        name: "Michael Chen",
        role: "Reconvertion professionnelle",
        text: "Les projets et les retours étaient très concrets. Je recommande vivement !",
        rating: 5,
      },
      {
        name: "Priya Patel",
        role: "Freelance",
        text: "Explications claires et bonnes pratiques modernes. Parfait pour développer des compétences applicables.",
        rating: 4,
      },
    ],
  },
  cta: {
    mainTitle:
      "Prêt à démarrer votre parcours de développeur ?",
    mainSubtitle:
      "Rejoignez la prochaine cohorte et créez des projets réels à présenter aux recruteurs.",
    button: "S'inscrire maintenant",
    sticky: "S'inscrire maintenant",
  },
  footer: {
    contactTitle: "Contact",
    email: "hello@example.com",
    phone: "+33 6 00 00 00 00",
    address: "123 Rue Web Dev, Ville du Code",
    quickLinks: "Liens rapides",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
    social: "Suivez-nous",
    newsletterTitle: "Restez informé",
    newsletterPlaceholder: "Votre adresse e-mail",
    newsletterButton: "S'abonner",
    copyright:
      "© 2025 CourseBrand. Tous droits réservés.",
  },
  courses: {
    title: "Nos cours les plus populaires",
    subtitle: "Choisissez la formation idéale pour commencer",
    viewAll: "Voir tous les cours",
    enrolled: "étudiants inscrits",
    duration: "semaines",
    level: "Niveau :",
    rating: "note",
    enrollNow: "S'inscrire",
    viewDetails: "Voir les détails",
    list: [
      {
        id: 1,
        title: "Développement Web Full Stack",
        shortDescription:
          "Maîtrisez HTML, CSS, JavaScript, React, Node.js et MongoDB",
        image:
          "https://plus.unsplash.com/premium_photo-1682464651356-3c6780eff00c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2bG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
        category: "Développement web",
        level: "Débutant à avancé",
        duration: 12,
        price: "$399",
        originalPrice: "$599",
        discount: "33 % de réduction",
        enrolled: 2847,
        rating: 4.8,
        reviews: 524,
        instructor: {
          name: "Alex Johnson",
          avatar: "images/instructor-alex.jpg",
        },
        features: [
          "Sessions de mentorat en direct",
          "Projets pratiques",
          "Aide à l'insertion professionnelle",
          "Accès à vie",
        ],
        modules: [
          {
            title: "Module 1 : Bases de HTML et CSS",
            content:
              "Structure HTML5, balises sémantiques, CSS3, Flexbox, Grid et design responsif.",
            duration: "2 semaines",
          },
          {
            title: "Module 2 : Maîtriser JavaScript",
            content:
              "ES6+, manipulation du DOM, programmation asynchrone, APIs et modèles modernes.",
            duration: "3 semaines",
          },
          {
            title: "Module 3 : Développement avec React",
            content:
              "Composants, hooks, gestion d'état, routing et création d'applications réelles.",
            duration: "3 semaines",
          },
          {
            title: "Module 4 : Backend avec Node.js",
            content:
              "Express, APIs REST, authentification, MongoDB et déploiement.",
            duration: "4 semaines",
          },
        ],
      },
      {
        id: 2,
        title: "Masterclass UI/UX Design",
        shortDescription:
          "Créez de belles interfaces et des expériences utilisateur remarquables",
        image:
          "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2bG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
        category: "Design",
        level: "Débutant à intermédiaire",
        duration: 8,
        price: "$299",
        originalPrice: "$449",
        discount: "33 % de réduction",
        enrolled: 1923,
        rating: 4.9,
        reviews: 389,
        instructor: {
          name: "Sarah Williams",
          avatar: "images/instructor-sarah.jpg",
        },
        features: [
          "Formation sur Figma et Adobe XD",
          "Projets pour votre portfolio",
          "Ateliers de design thinking",
          "Mentorat par des professionnels",
        ],
        modules: [
          {
            title: "Module 1 : Fondamentaux du design",
            content:
              "Théorie des couleurs, typographie, principes de mise en page et hiérarchie visuelle.",
            duration: "2 semaines",
          },
          {
            title: "Module 2 : Recherche utilisateur et tests",
            content:
              "Interviews, personas, parcours utilisateur et tests d'utilisabilité.",
            duration: "2 semaines",
          },
          {
            title: "Module 3 : Wireframes et prototypes",
            content:
              "De prototypes basse fidélité à haute fidélité avec les outils du marché.",
            duration: "2 semaines",
          },
          {
            title: "Module 4 : Modèles UI avancés",
            content:
              "Micro-interactions, animations, design responsif et accessibilité.",
            duration: "2 semaines",
          },
        ],
      },
      {
        id: 3,
        title: "Python pour la Data Science",
        shortDescription:
          "Analyse de données, visualisation et machine learning avec Python",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2bG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
        category: "Data science",
        level: "Intermédiaire",
        duration: 10,
        price: "$349",
        originalPrice: "$499",
        discount: "30 % de réduction",
        enrolled: 3156,
        rating: 4.7,
        reviews: 672,
        instructor: {
          name: "Dr. Michael Chen",
          avatar: "images/instructor-michael.jpg",
        },
        features: [
          "Jeux de données réels",
          "Jupyter Notebooks",
          "Projet de machine learning pour votre portfolio",
          "Accompagnement carrière",
        ],
        modules: [
          {
            title: "Module 1 : Bases de Python",
            content:
              "Syntaxe, structures de données, POO et bonnes pratiques.",
            duration: "2 semaines",
          },
          {
            title: "Module 2 : Analyse de données",
            content:
              "NumPy, Pandas, nettoyage des données et analyse exploratoire.",
            duration: "3 semaines",
          },
          {
            title: "Module 3 : Visualisation de données",
            content:
              "Matplotlib, Seaborn, Plotly et création de visualisations percutantes.",
            duration: "2 semaines",
          },
          {
            title: "Module 4 : Machine Learning",
            content:
              "Scikit-learn, apprentissage supervisé / non supervisé et évaluation des modèles.",
            duration: "3 semaines",
          },
        ],
      },
    ],
  },
},

};
