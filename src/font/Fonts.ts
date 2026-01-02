import { Montserrat, Poppins, Rubik} from 'next/font/google'


export const rubik = Rubik({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
});

export const poppins = Poppins({
    weight:['400', '600', '700', '900'],
    style: ['normal'],
    subsets: ['latin'],
})

export const montserrat = Montserrat({
    weight:['400', '600', '700', '900'],
    style: ['normal'],
    subsets: ['latin'],
})