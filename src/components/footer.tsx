import { getPayloadHMR } from "@payloadcms/next/utilities"
import config from '../payload.config'
import { Playfair_Display } from 'next/font/google'
import { Socials } from "./socials"
import { Page } from "@/payload-types"
import {ServicesBlock} from './services'

const pdFont = Playfair_Display({
  subsets: ['latin']
})

export default async function Footer() {
  const payload = await getPayloadHMR({ config })

  const footer = await payload.findGlobal({
    slug: 'footer'
  })

  const home = await payload.findByID({
    collection: 'pages',
    id: 1
  })

  const services = home.content?.find(section => section.blockName === 'Services') as ServicesBlock

  const quickLinks = footer.quicklinks as Page[]

  return (
    <footer className="bg-secondary">
      <div className="flex gap-12 p-14 text-white text-xs *:flex-grow *:basis-0">
        <div className="!basis-2/12">
          <hgroup className="">
            <h2 className={`${pdFont.className} text-3xl mb-4 font-medium`}>{footer.heading}</h2>
            <p className="text-balance mb-4 text-neutral-300">{footer.content}</p>
          </hgroup>
          <Socials direction='horizontal' color='white' className="!gap-1" />
        </div>
        <div>
          <h2>Services</h2>
          <hr className='bg-accent w-8 h-px my-4 border-0' />
          <ul className="text-neutral-300 *:py-2">
            {services.services?.map(service => (
              <li>{service.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Quick Links</h2>
          <hr className='bg-accent w-8 h-px my-4 border-0' />
          <ul className="text-neutral-300 *:py-2">
            {quickLinks.map(page => (
              <li><a href="#">{page.title}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-7 mx-14">
        <hr className="bg-white mb-7" />
        <span className="text-white text-xs text-center block w-fit">{footer.copyright}</span>
      </div>
    </footer>
  )
}