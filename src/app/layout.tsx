import "./globals.css";
import Navbar from "../components/navbar";
import { Providers } from "./providers";

export const metadata = {
  title: "Alex Zhu",
  description: "Alex Zhu's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Navbar />
        <Providers>
          <div className="mx-auto my-auto max-w-4xl px-5">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
