import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'alex zhu',
  description: 'alex zhu\'s portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>
          <div className="mx-auto my-auto max-w-4xl px-5">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}