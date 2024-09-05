import Image from "next/image";
import config from '../payload.config'
import { getPayloadHMR } from "@payloadcms/next/utilities";
import Link from "next/link";
import { PaginatedDocs } from "payload";
import { Page } from "@/payload-types";
import { Contact, MessageSquare, User } from "lucide-react";

export default async function Header(){
  const payload = await getPayloadHMR({config})

  const pages = await payload.find({
    collection: 'pages',
    depth: 0
  }).then(pages => pages.docs)

  const logo = await payload.findByID({
    collection: 'media',
    id: 1
  })

  const contactLinkIndex = pages.findIndex(page => page.page === 'Contact me')
  pages.push(pages.splice(contactLinkIndex,1)[0])
  // console.log(pages)

  return (
    <header className="h-20 flex items-center px-20">
      <nav className="flex gap-12 text-sm items-center w-full">
        <div className="pe-10 border-r border-primary/60 py-0.5">
          <Link href={'/'} className="transtion duration-1000 hover:scale-125">
            <Image src={logo.url ? logo.url : ''} alt={logo.alt} width={55} height={55}/>
          </Link>
        </div>
        {pages.map(page => ( page.page != 'Home' && 
          <Link href={`/${page.page.toLowerCase()}`} className="font-[650] text-xs last:ml-auto">
            {page.page.toUpperCase()}
          </Link>
        ))}
      </nav>
    </header>
  )
}