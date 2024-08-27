import Image from 'next/image'
import { Media } from '../payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '../payload.config'

export default async function Intro(){
  const payload = await getPayloadHMR({config})

  const portrait: Media = await payload.findByID({
    collection: 'media', id: 2
  })

  const intro = await payload.findByID({
    collection: 'pages',
    id: 1
  }).then(home => home.sections?.find(section => section.title === 'intro-content'))

  return (
    <section className="h-[80vh] grid grid-cols-2 px-12">
      <div className="flex flex-col justify-center">
        <h1 className="text-6xl text-secondary font-medium pb-6">Financial Coach<br/>Funmi Onuoha</h1>
        <p>{intro?.content}</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <Image src={portrait.url ? portrait.url : ''} alt={portrait.alt} width={300} height={300}
        className='rounded-[50%] border border-secondary'/>
      </div>
    </section>
  )
}