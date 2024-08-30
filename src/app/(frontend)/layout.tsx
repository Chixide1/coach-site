import Header from "@/components/header";
import "../globals.css";
import { Inter } from 'next/font/google'

const font = Inter({
  subsets: ['latin']
})

export default async function RootLayout({ children, }: { children: React.ReactNode }) {

  return (
    <html lang="en" className={font.className}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
      </head>
      <body className="bg-primary max-w-screen-2xl mx-auto">
          <Header/>
          {children}
      </body>
    </html>
  )
}