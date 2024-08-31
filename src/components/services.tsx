import { getPayloadHMR } from "@payloadcms/next/utilities"
import config from '../payload.config'

export default async function Services(){
  const payload = await getPayloadHMR({config})

  const services = await payload.findByID({
    collection: 'pages',
    id: 1
  }).then(
    pages => pages.sections?.filter(
      section => section.title.includes('services')
    )
  )

  return (
    <section className="min-h-screen bg-white px-20 py-28">
      <div className="flex flex-col gap-4 bg-primary rounded-lg p-9 w-fit">
        {services?.map(service => (
          <hgroup dangerouslySetInnerHTML={{__html: service.content_html || ''}}
          className="bg-white [&>h2]:text-2xl [&>h2]:text-secondary [&>p]:text-accent   rounded-lg p-5 border-accent/30 border max-w-96 shadow-lg"/>
        ))}
      </div>
    </section>
  )
}