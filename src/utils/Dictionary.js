import {FiBell, FiBox, FiGlobe, FiHexagon} from "react-icons/fi";

export const dictionaryFr = {
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
        text: "Je suis développeur frontend spécialisé en React. Je crée des sites web complets en gérant toutes les étapes, de la planification au lancement."
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
                periode: "Avril - Sept 2023",
                enterprise: "Freelance",
                logo: <FiBox />,
                city: "Melun",
                languages:["MERN Stack", "TypeScript"],
            },
            {
                id: 33,
                title: "Développeur FrontEnd",
                periode: "Mars - Aout 2022",
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
                title: "Isia cnrs - Centre National de la Recherche Scientifique",
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
                title: "Lemiza  traiteur",
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
                title: "Mobalicorp",
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
    }
}

export const dictionaryAng = {
    dataHero:
        {
            id:1,
            title:"Hi! I am",
            subText:"Serge Lema",
            text: "A Front-End developer based in France 🇫🇷. I&lsquo;m passionnate on build things for the web"
        },
    dataAbout: {
        id:2,
        title:"About me",
        textfollow:"Follow me",
        textbtn:"My resume",
        text: "I am a frontend developer specializing in React. I build complete websites, handling everything from planning to launch."
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
                periode: "April - Sept 2023",
                enterprise: "Freelance",
                logo: <FiBox />,
                city: "Melun",
                languages:["MERN Stack", "TypeScript"],
            },
            {
                id: 33,
                title: "Front-End developer",
                periode: "March - Aug 2022",
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
                title: "Isia cnrs - National Centre for Scientific Research",
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
                Content: "This site showcases the main characters from the Netflix series. It offers an engaging interface and rich content to enhance the viewers' connection to the Cyberpunk universe.",
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
                title: "Lemiza  traiteur",
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
                title: "Mobalicorp",
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
    }
}