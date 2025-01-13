import { geistSans, geistMono } from "../fonts/fonts";
import "./../styles/globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "EGC Solutions - Innovación para tu Negocio",
  description:
    "Transformamos tus ideas en soluciones tecnológicas innovadoras.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} layout`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
