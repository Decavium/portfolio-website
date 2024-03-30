import '@/app/ui/css/main.css';
import type { Metadata } from "next";

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
