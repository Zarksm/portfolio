import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Personal Portfolio | Riyan Nugraha",
  description: "Portfolio of Riyan Nugraha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
