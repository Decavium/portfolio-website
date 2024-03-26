import '@/app/ui/css/globals.css';
import type { Metadata } from "next";

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"; 
config.autoAddCss = false;



export const metadata: Metadata = {
  title: "LKW's Portfolio",
  description: "Leo Kabir Williams's portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
