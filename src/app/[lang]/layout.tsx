import type { Metadata } from "next";
import { lato } from "@/font/Fonts";
import "@/assets/scss/index.scss";
import { Toaster } from "sonner";
import { DictionaryProvider } from "@/context/DictionaryProvider";
import LangProvider from "@/context/LangProvider";
import { Footer } from "@/components/partials/Footer";
import { Header } from "@/components/partials/Header";
import { SmoothLenis } from "@/components/SmoothLenis";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}

export async function generateMetadata({ params }: { params: { lang?: "en" | "fr" } }): Promise<Metadata> {
  const lang = params?.lang || "fr";
  
  return {
    title: lang === "fr" ? "Serge Lema | Développeur React & Designer" : "Serge Lema | React Developer & Designer",
    description: lang === "fr" 
      ? "Bienvenue sur mon portfolio – un espace où je présente mes projets, mon univers créatif, et mes expérimentations tech."
      : "Welcome to my portfolio – a space where I showcase my projects, creative vision, and tech experiments.",
    openGraph: {
      title: "Serge Lema | React Developer & Designer",
      description: lang === "fr" 
        ? "Bienvenue sur mon portfolio – un espace où je présente mes projets, ma vision créative et mes expérimentations technologiques."
        : "Welcome to my portfolio – a space where I showcase my projects, creative vision, and tech experiments.",
      type: "website",
    },
  };
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang?: "en" | "fr" };
}>) {
  const lang = params?.lang || "fr";

  return (
    <html lang={lang} dir={lang === "fr" ? "ltr" : "ltr"}>
      <body className={`flex flex-col ${lato.className} items-center`}>
          <LangProvider lang={lang}>
            <DictionaryProvider>
              <Header />
              <SmoothLenis>
                {children}
              </SmoothLenis>
              
              <div className="z-0 fixed h-screen w-10/12 flex justify-between mx-auto">
                {[1, 2, 3].map((line) => (
                  <span
                    key={line}
                    className={`w-[0.0625rem] h-screen bg-slate-300 ${line === 2 ? "lg:hidden" : "block"}`}
                  ></span>
                ))}
              </div>
              <Footer />
              <Toaster position="bottom-center" />
            </DictionaryProvider>
          </LangProvider>
      </body>
    </html>
  );
}