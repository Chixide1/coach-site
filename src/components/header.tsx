import Image from "next/image";
import config from '../payload.config'
import { getPayloadHMR } from "@payloadcms/next/utilities";
import Link from "next/link";
import NavDropdown from "./nav-dropdown";
import { Media, Page } from "@/payload-types";

export default async function Header() {
  const payload = await getPayloadHMR({ config })
  const info = await payload.findGlobal({slug: 'header', depth: 1})

  const logo = info.logo as Media
  const nav = info.nav as Page[]

  if(!logo){
    console.error('Logo data is incorrect')
  }

  if(!nav){
    throw('nav data is incorrect')
  }

  return (
    <header className="md:h-20 md:px-20 flex items-center justify-between">
      <Link href={'/'} className="transtion duration-1000 hover:scale-110 p-5 md:p-0">
         <Image src={logo.url || ''} alt={logo.alt} width={75} height={75} className="w-14" />
      </Link>
      <nav className="md:flex gap-12 text-sm hidden">
        {nav.map(page => ( typeof(page) !== 'number' &&
          <Link href={page.title} className="transtion duration-700 hover:text-secondary flex items-center gap-2" key={page.id}>
            {page.title}
          </Link>
        ))}
      </nav>
      <NavDropdown pages={nav}/>
    </header>
  )
}