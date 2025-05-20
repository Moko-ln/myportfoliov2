import { Footer } from "@/components/partials/Footer";
import { Header } from "@/components/partials/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
        <Header />
            <main>{ children }</main>
        <Footer />
    </>
  );
}