import {montserrat} from "@/font/Fonts";
import {contentMentionsLegales} from "@/utils/Data";

export default function Mentions() {
    const isEnterpriseProject = false;

    return (
        <article className="min-h-screen py-10">
            <div className="container-root flex items-center justify-center">
                <div className={`xl:w-6/12 w-9/12 gap-10 flex flex-col`}>
                    <h2 className={`font-bold text-2xl ${montserrat.className} underline`}>Me mentions légales</h2>

                    <ul className="flex flex-col gap-8">
                        <li className="flex flex-col gap-2">
                            <h3 className="text-lg font-medium">Présentation du site</h3>
                            <p className="text-slate-500 text-sm">En vertu de l‘article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l‘économie numérique, il est précisé aux utilisateurs du site www.sergelema.fr, l‘identité des différents intervenants dans le cadre de sa réalisation et de son suivi:</p>
                            {isEnterpriseProject &&
                                <div className="my-4 border border-slate-200 rounded-sm p-2 text-slate-700">
                                    Lemiza, SAS, ( société par actions simplifiée ), dont le siège social se situe au 1
                                    RUE DE GRENOBLE 94140 ALFORTVILLE, identifiée sous le numéro RCS 948 295 498
                                </div>

                            }


                            <ul className="flex flex-col gap-2">
                                <li className="text-sm text-slate-700 ">Créateur: <span className="font-semibold">Serge Lema</span>
                                </li>
                                <li className="text-sm text-slate-700 ">Responsable de publication: <span className="font-semibold">Serge Lema</span></li>
                                <li className="text-sm text-slate-700 ">Webmaster: <span className="font-semibold">Serge Lema</span></li>
                                <li className="text-sm text-slate-700 ">Hebergeur: <span className="font-semibold">Vercel</span></li>
                            </ul>
                        </li>
                        {contentMentionsLegales.map(item =>
                            <li key={item.id}>
                                <h3 className="text-lg font-medium">{item.title}</h3>
                                <p className="text-slate-500 text-sm">{item.content}</p>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </article>

    );
}