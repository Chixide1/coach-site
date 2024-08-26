import Header from "@/components/header";
import "../globals.css";
import payload from "payload";
import conf from "../../payload.config";

export default async function RootLayout({ children, }: { children: React.ReactNode }) {
  await payload.init({config: conf})

  return (
    <html lang="en">
      <body className="bg-primary">
          <Header/>
          {children}
      </body>
    </html>
  )
}