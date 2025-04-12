import {FiBell, FiBox, FiGlobe, FiHexagon} from "react-icons/fi";

export const dictionaryFr = {
    lan:"fr",
    dataHero: {
        id:1,
        title:"Salut! je m'appelle",
        subText:"Serge Lema",
        text: "Développeur Front-End basé en France 🇫🇷. Je suis passionné par la création de projets pour le web."
    },
    dataAbout: {
        id:2,
        title:"À propos de moi",
        textbtn:"Mon CV",
        textfollow:"Suivez-moi",
        text: "En tant que développeur frontend spécialisé en React, je donne vie à vos idées en créant des interfaces utilisateur élégantes, réactives et performantes. De la conception initiale à la mise en œuvre finale, je m’assure que chaque pixel correspond parfaitement à votre vision.",
        text2:"Que vous soyez un fondateur non technique développant votre première application ou une entreprise établie cherchant à améliorer votre expérience frontend, je suis là pour offrir des expériences utilisateur fluides et intuitives, adaptées à vos besoins. Transformons votre prochaine grande idée en réalité !"
    },
    dataExperience: {
        id:3,
        title:"Expérience pertinente",
        text:"Écrire du code moderne, performant et robuste pour une variété de projets clients et internes.",
        experiences: [
            {
                id: 31,
                title: "Développeur FrontEnd",
                periode: "2023 - Aujourd\'hui",
                enterprise: "Centre Natianal de la Recherche Scientifique (CNRS)",
                logo: <FiHexagon />,
                city: "Nemours",
                languages:["ReactJS", "AdobeXD", "Tailwind"],
                linkEnterprise:"https://www.cnrs.fr/fr"
            },
            {
                id: 32,
                title: "Développeur FullStack",
                periode: "Dec - Sept 2023",
                enterprise: "Freelance",
                logo: <FiBox />,
                city: "Melun",
                languages:["MERN Stack", "TypeScript"],
            },
            {
                id: 33,
                title: "Développeur FrontEnd",
                periode: "Sept - Aout 2022",
                enterprise: "D\'or et de vin",
                logo: <FiBell />,
                city: "Paris",
                languages:["Wordpress", "Oxygen"],
                linkEnterprise:"https://doretdevins.com/"
            }
        ],
    },
    dataWork:{
        title:"Serge Lema",
        subtitle:"développeur frontend",
        text:"Disponible pour travailler",
        works:[
            {
                id: 1,
                title: "Isia-CNRS",
                description: "Voici l'application ISIA. C'est une plateforme développée avec le framework Symfony pour le backend et React pour le frontend. Mon travail consistait à une refonte de l'application.",
                content: "ISIA est conçue pour répondre aux besoins des chercheurs, des responsables de laboratoire et des étudiants en offrant une interface intuitive et des fonctionnalités avancées. Notre objectif est de faciliter le travail scientifique et d'améliorer la productivité de nos utilisateurs.",
                image: "isia",
                done: true,
                private: false,
                bgColor: "bg-blue-200",
                share: [
                    {
                        id: 1,
                        title: "Visitez le site web",
                        icon: <FiGlobe />,
                        link: "https://isia.cnrs.fr/",
                    },
                ]
            },
            {
                id: 2,
                title: "Cyberpunk: Edgerunners",
                description: "Ce projet a été réalisé avec Next.js et TailwindCSS. Mon objectif est de créer une expérience immersive pour les fans de la série.",
                content: "Ce site met en avant les personnages principaux de la série Netflix. Il offre une interface engageante et un contenu riche pour renforcer la connexion des visiteurs à l'univers de Cyberpunk.",
                image: "cyberpunk",
                done: true,
                private: false,
                bgColor: "bg-yellow-200",
                share: [
                    {
                        id: 1,
                        title: "Visitez le site web",
                        icon: <FiGlobe />,
                        link: "https://cyberpunk-edgerunners.netlify.app/",
                    },
                ],
            },
            {
                id: 3,
                title: "Lemiza",
                description: "Voici un site web conçu pour un client dans le secteur de la restauration, développé avec Next.js et intégrant TypeScript pour une expérience de développement robuste et sécurisée.",
                content: "Ce site web présente une interface conviviale et une fonctionnalité principale : un formulaire de contact. Le formulaire permet aux visiteurs de contacter facilement le traiteur pour des commandes, des demandes de renseignements ou des demandes spéciales.",
                image: "lemiza",
                done: true,
                private: false,
                bgColor: "bg-green-200",
                share: [
                    {
                        id: 1,
                        title: "Visitez le site web",
                        icon: <FiGlobe/>,
                        link: "https://www.lemiza.fr/",
                    },
                ]
            },
            {
                id: 4,
                title: "Mobali-Lab",
                description: "Voici une application web de gestion d'actualités en ligne, développée avec la stack MERN (MongoDB, Express.js, React.js, Node.js). Cette application a été conçue pour MobaliCorp, une agence d'influence.",
                content: "L'application offre une interface conviviale pour gérer efficacement les actualités en ligne, avec des fonctionnalités avancées telles que la gestion des utilisateurs et la publication d'articles.",
                image: "mobaliold",
                done: true,
                private: true,
                bgColor: "bg-rose-200",
                share: [
                    {
                        id: 1,
                        title: "Visitez le site web",
                        icon: <FiGlobe/>,
                        link: "https://mblcorps.com/",
                    },
                ]
            },
        ]
    },
    dataHeader: [
        {
            id:1,
            title:"À propos",
            link:"/apropos"
    
        },
        {
            id:2,
            title:"Projet",
            link:"#projet"
    
        },
        {
            id:3,
            title:"CVSense",
            link:"#CVSense"
    
        },
        {
            id:4,
            title:"Me contacter",
            link:"#mecontacter"
    
        }
    ],
    dataMentions: {
        id:1,
        title: "Mentions legales",
        link: "mentionslegales",
        lists:[
            {
                id:1,
                title: "Propriété Intellectuelle",
                content:"Le contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit d‘auteur et appartient à Mobalicorps sauf mention contraire. Toute reproduction, diffusion ou utilisation non autorisée est strictement interdite.",
            },
            {
                id:2,
                title: "Collecte de Données Personnelles",
                content:"Lemiza peut collecter des données personnelles, telles que nom, prenom, E-mail, Adresse, lorsque les utilisateurs remplissent un formulaire de contact. Ces données seront utilisées uniquement dans le but de fournir les services demandés. Lemiza ne partage pas les données personnelles des utilisateurs avec des tiers sans leur consentement.",
            },
            {
                id:3,
                title: "Cookies",
                content:"Ce site utilise des cookies pour améliorer l‘expérience utilisateur. Les cookies sont de petits fichiers stockés sur votre appareil pour collecter des informations sur la manière dont vous interagissez avec le site. Vous pouvez gérer les cookies dans les paramètres de votre navigateur.",
            },
            {
                id:4,
                title: "Responsabilité",
                content:"Lemiza ne peut être tenu responsable des erreurs ou omissions sur le site. Les informations fournies sont à titre indicatif et peuvent être modifiées sans préavis.",
            },
            {
                id:5,
                title: "Liens Externes",
                content:"Ce site peut contenir des liens vers des sites externes. Lemiza ne contrôle pas ces sites et décline toute responsabilité quant à leur contenu.",
            },
            {
                id:5,
                title: "Litiges",
                content:"Tout litige en relation avec l‘utilisation de ce site est soumis à la législation en vigueur.",
            },
        ]
    },
    dataVelocity:["Disponible pour des missions freelance et en contrat", "Plus de 3 ans d’expérience en développement Frontend", "Basé en France", "Création d’expériences web modernes et accessibles", "Développement d’applications web interactives et évolutives"]

}

export const dictionaryAng = {
    lan:"en",
    dataHero:
        {
            id:1,
            title:"Hi! I am",
            subText:"Serge Lema",
            text: "A Front-End developer based in France 🇫🇷. I'm passionnate on build things for the web"
        },
    dataAbout: {
        id:2,
        title:"About me",
        textfollow:"Follow me",
        textbtn:"My resume",
        text: "As a frontend developer specialized in React, I bring your ideas to life by creating sleek, responsive, and high-performing user interfaces. From initial design to final implementation, I ensure every pixel aligns perfectly with your vision. Whether you’re a non-technical founder building your first app or an established enterprise looking to enhance your frontend experience, I’m here to deliver seamless and intuitive user experiences tailored to your needs. Let’s turn your next big idea into reality!",
        text2: "Whether you’re a non-technical founder building your first app or an established enterprise looking to enhance your frontend experience, I’m here to deliver seamless and intuitive user experiences tailored to your needs. Let’s turn your next big idea into reality!"
    },
    dataExperience: {
        id:3,
        title:"Relevant Experience",
        text:"Write modern, performant, and robust code for a diverse array of client and internal projects",
        experiences: [
            {
                id: 31,
                title: "FrontEnd developer",
                periode: "2023 - Present",
                enterprise: "National Centre for Scientific Research (CNRS)",
                logo: <FiHexagon />,
                city: "Nemours",
                languages:["ReactJS", "AdobeXD", "Tailwind"],
                linkEnterprise:"https://www.cnrs.fr/fr"
            },
            {
                id: 32,
                title: "FullStack developer",
                periode: "Dec - Sept 2023",
                enterprise: "Freelance",
                logo: <FiBox />,
                city: "Melun",
                languages:["MERN Stack", "TypeScript"],
            },
            {
                id: 33,
                title: "Front-End developer",
                periode: "Sept - Aug 2022",
                enterprise: "D\'or et de vin",
                logo: <FiBell />,
                city: "Paris",
                languages:["Wordpress", "Oxygen"],
                linkEnterprise:"https://doretdevins.com/"
            }
        ],

    },
    dataWork:{
        id:4,
        title:"Serge Lema",
        subtitle:"FrontEnd Developer",
        text:"Available for work",
        works:[
            {
                id: 1,
                title: "Isia-CNRS",
                description: "Here is the ISIA application. It is a platform developed using the Symfony framework for the backend and React for the frontend. My work involved redesigning the application.",
                content: "ISIA is designed to meet the needs of researchers, laboratory managers, and students by offering an intuitive interface and advanced functionalities. Our goal is to facilitate scientific work and enhance the productivity of our users.",
                image: "isia",
                done: true,
                private: false,
                bgColor: "bg-blue-200",
                share: [
                    {
                        id: 1,
                        title: "Visit the website",
                        icon: <FiGlobe />,
                        link: "https://isia.cnrs.fr/",
                    },
                ]
            },
            {
                id: 2,
                title: "Cyberpunk: Edgerunners",
                Description: "This project was built with Next.js and TailwindCSS. My goal is to create an immersive experience for fans of the series.",
                content: "This site showcases the main characters from the Netflix series. It offers an engaging interface and rich content to enhance the viewers' connection to the Cyberpunk universe.",
                image: "cyberpunk",
                done: true,
                private: false,
                bgColor: "bg-yellow-200",
                share: [
                    {
                        id: 1,
                        title: "Visit the website",
                        icon: <FiGlobe />,
                        link: "https://cyberpunk-edgerunners.netlify.app/",
                    },
                ],
            },
            {
                id: 3,
                title: "Lemiza",
                description: "Here is a website designed for a client in the catering industry, developed using Next.js and incorporating TypeScript for a robust and secure development experience.",
                content: "This website features a user-friendly interface and a primary functionality: a contact form. The form allows visitors to easily contact the caterer for orders, inquiries, or special requests.",
                image: "lemiza",
                done: true,
                private: false,
                bgColor: "bg-green-200",
                share: [
                    {
                        id: 1,
                        title: "Visit the website",
                        icon: <FiGlobe/>,
                        link: "https://www.lemiza.fr/",
                    },
                ]
            },
            {
                id: 4,
                title: "Mobali-Lab",
                description: "Here is an online news management web app, powered by the MERN stack (MongoDB, Express.js, React.js, Node.js). This app was designed for MobaliCorp, an influence agency.",
                content: "The app provides a user-friendly interface for efficiently managing online news, with advanced features such as user management and article publishing.",
                image: "mobaliold",
                done: true,
                private: true,
                bgColor: "bg-rose-200",
                share: [
                    {
                        id: 1,
                        title: "Visit the website",
                        icon: <FiGlobe/>,
                        link: "https://mblcorps.com/",
                    },
                ]
            },
        ]
    },
    dataHeader: [
        {
            id:1,
            title:"About",
            link:"/about"
    
        },
        {
            id:2,
            title:"Works",
            link:"#work"
    
        },
        {
            id:3,
            title:"CVSense",
            link:"#CVSense"
    
        },
        {
            id:4,
            title:"Get in Touch",
            link:"#getintouch"
    
        }
    ],
    dataMentions: {
        id:1,
        title: "Legal Notices",
        link: "mentionslegales",
        lists:[
            {
                id: 1,
                title: "Intellectual Property",
                content: "The content of this site (texts, images, videos, etc.) is protected by copyright and belongs to Mobalicorps unless otherwise stated. Any unauthorized reproduction, distribution, or use is strictly prohibited.",
            },
            {
                id: 2,
                title: "Collection of Personal Data",
                content: "Lemiza may collect personal data, such as name, first name, email, and address, when users fill out a contact form. This data will only be used for the purpose of providing the requested services. Lemiza does not share users' personal data with third parties without their consent.",
            },
            {
                id: 3,
                title: "Cookies",
                content: "This site uses cookies to enhance the user experience. Cookies are small files stored on your device to collect information about how you interact with the site. You can manage cookies in your browser settings.",
            },
            {
                id: 4,
                title: "Liability",
                content: "Lemiza cannot be held responsible for errors or omissions on the site. The information provided is for informational purposes only and may be modified without notice.",
            },
            {
                id: 5,
                title: "External Links",
                content: "This site may contain links to external websites. Lemiza does not control these sites and disclaims any responsibility for their content.",
            },
            {
                id: 6,
                title: "Disputes",
                content: "Any dispute related to the use of this site is subject to applicable laws.",
            },
        ]
    },
    dataVelocity:["Available for freelance & contract work", "3+ years of experience in Frontend Development", "Based in France", "Creating modern and accessible web experiences", "Building interactive and scalable web applications"]
}

