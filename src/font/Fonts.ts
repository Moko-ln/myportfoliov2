import { Lato, Montserrat, Poppins} from 'next/font/google'


export const lato = Lato({
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