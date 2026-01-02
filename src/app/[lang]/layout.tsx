import { Header } from "@/partials/Header";
import { Footer } from "@/partials/Footer";
import { MyTemplate } from "@/components/templates/MyTemplate";
import { getDictionary } from "@/utils/dictionaries";
import { BoxNav } from "@/components/molecules/BoxNav";
import { Overlay } from "@/components/atoms/Overlay";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {

  const { lang } = await params;
  
  const dictionary = await getDictionary(lang as any);

  return (
    <MyTemplate lang={lang} dictionary={dictionary}>
      <Header/>
      {children}
      <BoxNav />
      <Overlay />
      <Footer />
    </MyTemplate>
  );
}