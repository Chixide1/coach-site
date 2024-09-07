import Image from "next/image";
import config from '../payload.config'
import { getPayloadHMR } from "@payloadcms/next/utilities";
import Link from "next/link";
import { PaginatedDocs } from "payload";
import { Page } from "@/payload-types";
import { Contact, MessageSquare, User } from "lucide-react";
import NavDropdown from "./nav-dropdown";

export default async function Header() {
  const payload = await getPayloadHMR({ config })

  const pages = await payload.find({
    collection: 'pages',
    depth: 0
  }).then(pages => pages.docs)

  const logo = await payload.findByID({
    collection: 'media',
    id: 1
  })

  const contactLinkIndex = pages.findIndex(page => page.page === 'Contact me')
  pages.push(pages.splice(contactLinkIndex, 1)[0])

  return (
    <header className="md:h-20 md:px-20 flex items-center justify-between">
      <Link href={'/'} className="transtion duration-1000 hover:scale-110 p-5 md:p-0">
        <Image src={logo.url ? logo.url : ''} alt={logo.alt} width={75} height={75} className="w-14" />
      </Link>
      <nav className="md:flex gap-12 text-sm hidden">
        {pages.map(page => (page.page != 'Home' &&
          <Link href={`/${page.page.toLowerCase()}`} className="transtion duration-700 hover:text-secondary flex items-center gap-2" key={page.id}>
            {page.page}
          </Link>
        ))}
      </nav>
      <NavDropdown pages={pages}/>
    </header>
  )
}