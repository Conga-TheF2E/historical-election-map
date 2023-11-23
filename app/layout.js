import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "全台開票地圖",
  description: "全台開票地圖",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
