import type { Metadata } from "next";
import {lato} from "@/font/Fonts";
import "../assets/scss/index.scss";
import {Header} from "@/components/partials/Header";
import {Footer} from "@/components/partials/Footer";
import {Toaster} from "react-hot-toast";

export const metadata: Metadata = {
  title: "My portfolio",
  description: "This is Serge Lema v2 portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`flex flex-col ${lato.className} flex flex-col items-center` }>
        <div className="fixed h-full lg:w-11/12 w-9/12 flex justify-between mx-auto">
          {[1,2].map(line =>
              <span key={line} className="block border lg:border-slate-200 border-slate-100 h-full"></span>
          )}
        </div>
        <Header />
        <main className="relative w-full">{ children }</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
