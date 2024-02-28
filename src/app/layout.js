import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Footnote from "@/components/Footnote";
import Pagenote from "@/components/Pagenote";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jaykhadine Farms Limited",
  description: "Elevating Agriculture: From Farm to Plate",
  icons: {
    icon: ["/favico?v=4"],
    apple: ["/apple-touch-icon?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <Navbar />
          <main>{children}</main>
          <Pagenote />
          <Footer />
          <Footnote />
        </ChakraProvider>
      </body>
    </html>
  );
}
