import Header from "@/components/header";
import "../globals.css";
import { Open_Sans} from 'next/font/google'
import Footer from "@/components/footer";

const font = Open_Sans({
  subsets: ['latin']
})

export default async function RootLayout({ children, }: { children: React.ReactNode }) {

  return (
    <html lang="en" className={font.className}>
      <body className={`text-primary max-w-[1300px] mx-auto`}>
          <Header/>
          {children}
          <Footer/>
      </body>
    </html>
  )
}