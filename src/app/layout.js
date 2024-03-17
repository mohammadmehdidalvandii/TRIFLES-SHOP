import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import AosInit from "@/utils/Aos";
import ScrollToTop from "@/utils/ScrollToTop";
import Navbar from "@/components/module/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TRIFLES | سبزیجات",
  description: "فروشگاه سبزیجات ارگانیک",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-fa">
      <body dir="rtl" className={inter.className}>
        <Navbar/>
        <AosInit/>
        {children}
        <ScrollToTop/>
        </body>
    </html>
  );
}
