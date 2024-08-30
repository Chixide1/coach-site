import Image from "next/image";
import config from '../payload.config'
import { getPayloadHMR } from "@payloadcms/next/utilities";
import Link from "next/link";
import { PaginatedDocs } from "payload";
import { Page } from "@/payload-types";

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
      <nav className="flex gap-12">
          <Link href={`/${pages.docs[0].page}`} 
          className="text-secondary font-medium transtion duration-700 hover:scale-110 hover:text-accent">
            <span className="fa-regular fa-user pe-2"></span>
            {pages.docs[0].page}
          </Link>
          <Link href={`/${pages.docs[1].page}`} 
          className="text-secondary font-medium transtion duration-700 hover:scale-110 hover:text-accent">
            <span className="fa-regular fa-comments pe-2"></span>
            {pages.docs[1].page}
          </Link>
          <Link href={`/${pages.docs[2].page}`} 
          className="text-secondary font-medium transtion duration-700 hover:scale-110 hover:text-accent">
            <span className="fa-regular fa-address-card pe-2"></span>
            {pages.docs[2].page}
          </Link>
      </nav>
    </header>
  )
}