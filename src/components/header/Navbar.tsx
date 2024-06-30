import Link from "next/link";
import {FaGithub, FaInstagram} from "react-icons/fa";


export const Navbar = () => {
    return (
        <nav>
            <ul className="flex items-center gap-4 justify-center">
                { listNav.map( item =>
                    <li key={item.id}>
                        <Link href={item.link} title={item.title}>{item.title}</Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

const listNav = [
    {
        id:1,
        title:"About",
        link:"#about"

    },
    {
        id:2,
        title:"Works",
        link:"#work"

    },
    {
        id:3,
        title:"Experience",
        link:"#experiences"

    },
    {
        id:3,
        title:"Get in Touch",
        link:"#getintouch"

    }
]