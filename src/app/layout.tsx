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
          <div className="mx-auto my-auto max-w-2xl px-4 sm:px-6 xl:max-w-2xl xl:px-0">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}