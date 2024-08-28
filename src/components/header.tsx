import Image from "next/image";
import config from '../payload.config'
import { getPayloadHMR } from "@payloadcms/next/utilities";

export default async function Header(){
  const payload = await getPayloadHMR({config})
  const pages = await payload.find({
    collection: 'pages',
    depth: 0
  })
  const logo = await payload.findByID({
    collection: 'media',
    id: 1
  })

  pages.docs.sort((a, b) => {
    return new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf()
  })
  
  return (
    <header className="h-20 flex items-center justify-between px-20">
      <Image src={logo.url ? logo.url : ''} alt={logo.alt} width={75} height={75}/>
      <nav className="flex gap-8">
        {pages.docs.map((d) => (
          <a href={d.page === 'Home' ? '/' : `/${d.page.toLowerCase()}`}
          className="text-secondary text-sm font-medium" key={`navlink-${d.id}`}>
            {d.page}
          </a>
        ))}
      </nav>
    </header>
  )
}