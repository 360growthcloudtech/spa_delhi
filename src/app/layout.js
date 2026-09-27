import { Afacad, Figtree, Kaushan_Script } from 'next/font/google'
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import Analytics from "./components/Analytics";
import ThemeEffects from "./components/ThemeEffects";

// Travlla theme typography: Figtree (body), Afacad (titles), Kaushan Script (display accents)
const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
})

const afacad = Afacad({
  subsets: ['latin'],
  variable: '--font-afacad',
  display: 'swap',
})

const kaushan = Kaushan_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-kaushan',
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
    <html lang="en" className={`${figtree.variable} ${afacad.variable} ${kaushan.variable}`}>
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
