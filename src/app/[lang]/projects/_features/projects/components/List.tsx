"use client"

import { Item } from "./Item"

export const List = (activId : number) => {
    const newItem = data?.filter(item => item.id === activId)

    return (
        <ul className="flex items-center gap-4 overflow-hidden">
            { newItem?.map(item =>
                <Item item={item} key={item.id} />
            )}
        </ul>
    )
}

const data = [
    {
        id: 1,
        enterprise: "Lemiza traiteur",
        title: "Nextjs project",
        description: "Une application de gestion de tâches permettant aux utilisateurs de créer, modifier et supprimer des tâches. Intégration de fonctionnalités avancées telles que les rappels et les priorités.",
        technologies: ["React", "Node.js", "MongoDB"],
        image: "image1",
        status: "Finish"
    },
    {
        id: 2,
        enterprise: "Mobali production",
        title: "MERN stack project",
        description: "Développement d'un blog personnel avec des fonctionnalités telles que la publication d'articles, les commentaires et l'authentification des utilisateurs. Interface conviviale et responsive.",
        technologies: ["Django", "React", "SQLite"],
        image: "image2",
        status: "Finish"
    }
]