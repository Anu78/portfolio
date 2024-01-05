import { Inter } from "next/font/google";
import "./globals.css";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "a portfolio website",
  description: "a showcase of my work over the years.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      
      <Link href="/" className="back-to-home"><FaHome color="white" size={35}/></Link>
      </body>
    </html>
  );
}
