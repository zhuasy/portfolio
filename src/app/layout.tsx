import "./globals.css";
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
        <Providers>
          <div className="flex flex-col justify-center px-8">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
