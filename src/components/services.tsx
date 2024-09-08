import { getPayloadHMR } from "@payloadcms/next/utilities"
import config from '../payload.config'
import Heading from "./heading"
import { Playfair_Display } from 'next/font/google'

const pdFont = Playfair_Display({
  subsets: ['latin']
})

export default async function Services() {
  const payload = await getPayloadHMR({ config })

  const services = await payload.findByID({
    collection: 'pages',
    id: 1
  }).then(
    pages => pages.sections?.filter(
      section => section.title.includes('services')
    )
  )

  services?.map(service => {
    service.content_html = service.content_html?.replace(new RegExp('<h2>', 'g'), `<h2 class=${pdFont.className}>`);
  });

  return (
    <div className="bg-accent/5 pt-8">
      <Heading heading="Services Provided" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, consequuntur?"/>
      <section className="min-h-screen px-20 py-6 flex gap-4">
          {services?.map(service => (
            <hgroup
              dangerouslySetInnerHTML={{ __html: service.content_html || '' }}
              className={`rounded-lg p-8 flex flex-col items-center bg-white [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:text-secondary h-fit`}
            />
          ))}
      </section>
    </div>
  )
}