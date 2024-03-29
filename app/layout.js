import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DVolk Racing",
  description:
    "Personal website for professional triathlete and endurance sports coach, Devin Volk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ maxWidth: '2300px', margin: '0 auto'}}>
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
