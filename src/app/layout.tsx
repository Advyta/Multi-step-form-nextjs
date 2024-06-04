import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multi-step-form",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="../../public/images/favicon-32x32.png" sizes="any" />
      </head>
      <body className='h-full bg-magnolia font-ubuntu flex flex-col justify-center items-center'>
        {/* main content */}
        <main className="font-normal relative w-full max-w-lg lg:max-w-[940px]">
          <div className="lg:bg-white w-full flex flex-col lg:flex-row px-4 lg:p-4 rounded-2xl lg:shadow-lg">
            {/* Sidebar component */}
            <Sidebar />
            {/* Children / Form component */}
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
