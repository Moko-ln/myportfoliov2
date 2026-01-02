import "@/assets/scss/index.scss";
import { rubik } from "@/font/Fonts";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body suppressHydrationWarning className={`${rubik.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}