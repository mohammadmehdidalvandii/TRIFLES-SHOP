import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import AosInit from "@/utils/Aos";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-fa">
      <body dir="rtl" className={inter.className}>
        <AosInit/>
        {children}
        </body>
    </html>
  );
}
