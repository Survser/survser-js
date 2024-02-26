import { Inter } from "next/font/google";
import "./globals.css";
import Survser from "./Survser";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Survser />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}