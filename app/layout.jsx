import "./globals.css";

export const metadata = {
  title: "Faiz Adhytia Portfolio",
  description: "Software Engineer building thoughtful digital products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}