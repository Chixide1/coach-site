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
      <Link href={'/'} className="transtion duration-1000 hover:scale-125">
        <Image src={logo.url ? logo.url : ''} alt={logo.alt} width={75} height={75}/>
      </Link>
      <nav className="flex gap-12 text-sm">
          <Link href={`/${pages.docs[0].page.toLowerCase()}`} 
          className="transtion duration-700 hover:text-secondary flex items-center gap-2">
            <User className="w-[1em] h-[1em]"/>
            <span className="font-medium">{pages.docs[0].page}</span>
          </Link>
          <Link href={`/${pages.docs[1].page.toLowerCase()}`} 
          className="transtion duration-700 hover:text-secondary flex items-center gap-2">
            <MessageSquare className="w-[1em] h-[1em]"/>
            {pages.docs[1].page}
          </Link>
          <Link href={`/${pages.docs[2].page.toLowerCase()}`} 
          className="transtion duration-700 hover:text-secondary flex items-center gap-2">
            <Contact className="w-[1em] h-[1em]"/>
            {pages.docs[2].page}
          </Link>
      </nav>
    </header>
  )
}