import "./globals.css";
import Image from "next/image";
import {Inter} from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="flex flex-col justify-between min-h-screen">
            <header className="min-w-full bg-default fixed z-10 top-0">
                <div className="flex justify-around items-center px-20 shadow-type1 min-h-20">
                    <div>
                        <Image src="/maxlogo.png" alt="max-logo" width={70} height={70}/></div>
                    <div><Image src="/mpro.png" alt="mpro-logo" width={170} height={170}/></div>
                </div>
            </header>
            {children}
            <footer className="max-w-full flex justify-center gap-5 text-primary text-lg items-center">
                <div><Image src="/footer.png" alt="max-logo" width={270} height={270}/></div>
                <div>© All rights reserved.</div>
            </footer>
        </div>
        </body>
        </html>
    );
}