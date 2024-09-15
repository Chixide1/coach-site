import { getPayloadHMR } from "@payloadcms/next/utilities"
import config from '../payload.config'
import Heading from "./heading"
import { Playfair_Display } from 'next/font/google'
import Link from "next/link"
import { CircleChevronRight } from "lucide-react"
import { Media, Page } from "@/payload-types"
import Image from "next/image"

const pdFont = Playfair_Display({
  subsets: ['latin']
})

export type ServicesBlock = {
  services?:
  | {
    picture?: Media;
    title?: string | null;
    content?: string | null;
    links?:
    | {
      link: {
        name: string;
        type?: ('reference' | 'custom') | null;
        newTab?: boolean | null;
        reference?: {
          relationTo: 'pages';
          value: number | Page;
        } | null;
        url?: string | null;
        label: string;
      };
      id?: string | null;
    }[]
    | null;
    id?: string | null;
  }[]
  | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'homepage-services';
}

export default async function Services() {
  const payload = await getPayloadHMR({ config })

  const home = await payload.findByID({
    collection: 'pages',
    id: 1
  })

  const services = home.content?.find(section => section.blockName === 'Services') as ServicesBlock

  // services?.map(service => {
  //   service.content_html = service.content_html?.replace(new RegExp('<h2>', 'g'), `<h2 class=${pdFont.className}>`);
  // });

  return (
    <div className="bg-accent/5 py-12">
      <Heading heading="Services Provided" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, consequuntur?" />
      <section className="px-6 md:px-20 py-16 flex flex-wrap md:flex-nowrap gap-8 md:gap-4">
        {services.services?.map(service => (
          <div className="rounded-lg p-4 lg:p-8 bg-white h-fit" key={service.id}>
            <hgroup className='flex flex-col items-center [&>img]:h-auto [&>img]:max-w-20 [&>img]:mb-4 [&>svg]:w-20  [&>h2]:text-xl [&>h2]:mb-4 [&>h2]:font-semibold [&>h2]:text-secondary [&>p]:text-center [&>p]:text-pretty'>
              <h2 className={`${pdFont.className}`}>{service.title}</h2>
              <Image src={service.picture?.url || ''} alt={service.picture?.alt || ''} height={service.picture?.height || 0} width={service.picture?.width || 0} />
              <p>{service.content}</p>
              <Link href="#" className="block max-w-12 mt-4 m-auto p-2 hover:text-accent transition-colors duration-700">
                <CircleChevronRight className="w-full h-auto" />
              </Link>
            </hgroup>
          </div>
        ))}
      </section>
    </div>
  )
}