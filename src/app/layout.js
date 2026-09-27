import { Montserrat, Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import Analytics from "./components/Analytics";
import ThemeEffects from "./components/ThemeEffects";

// Avataar theme typography: Montserrat (body), Playfair Display (headings), Cormorant Garamond italic (accents)
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['italic'],
  variable: '--font-cormorant',
  display: 'swap',
})


export const metadata = {
  metadataBase: new URL("https://www.luxuryrussianspa.com"),
  verification: {
    google: "O30WbPyf0dfqhA8OsJQzIrJzej3_esZlxTAaeC_3EaE",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable} ${cormorant.variable}`}>
      <body className="font-sans">
         <Analytics />
        {/* <TopBar /> */}
        <Navbar />
        {children}
        <Footer />
        <ThemeEffects />
      </body>
    </html>
  );
}
