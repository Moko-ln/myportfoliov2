import Image1 from "../assets/images/image1.jpg"
import Image2 from "../assets/images/about.jpg"
import Image3 from "../assets/images/banner.jpg"

import ReactJS from "../assets/images/react_light.svg"
import NextJs from "../assets/images/nextjs_icon_dark.svg"
import TailWindCSS from "../assets/images/tailwindcss.svg"
import TypeScript from "../assets/images/typescript.svg"


import { FaGithub, FaInstagram } from "react-icons/fa"
import { FiLinkedin } from "react-icons/fi"

export const Data = [
    {
        id:1,
        title: "AboutBox me",
        image:Image2,
        link:"about"
    },
    {
        id:2,
        title: "My Experience",
        image:Image1,
        link:"experiences"
    },
    {
        id:3,
        title: "My works",
        image:Image3,
        link:"works"
    }
]

export const contentMentionsLegales = [
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

export const langages = ["NextJs", "ReactJs", "TypeScript", "TailWindCSS"]

export const socialList = [
    {
        id: 1,
        title: "Github",
        icon: <FaGithub/>,
        link: "https://github.com/Moko-ln"

    },
    {
        id: 2,
        title: "LinkedIn",
        icon: <FiLinkedin/>,
        link: "https://www.linkedin.com/in/serge-lema-140953206/"

    },
    {
        id: 3,
        title: "Instagram",
        icon: <FaInstagram/>,
        link: "https://www.instagram.com/serges.codes/"

    }
]

export const skillsList = [
    {
        id: 1,
        title: "ReactJS",
        image: ReactJS,

    },
    {
        id: 2,
        title: "TypeScript",
        image: TypeScript,

    },
    {
        id: 3,
        title: "NextJs",
        image: NextJs,

    },
    {
        id: 4,
        title: "TailWindCSS",
        image: TailWindCSS,

    },
]
