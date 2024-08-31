import Image from 'next/image'
import { Media } from '../payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '../payload.config'
import { Socials } from './socials'

export default async function Intro(){
  const payload = await getPayloadHMR({config})

  const portrait: Media = await payload.findByID({
    collection: 'media', id: 2
  })

  const home = await payload.findByID({
    collection: 'pages',
    id: 1,
    depth: 5
  })

  const intro = home.sections?.find(section => section.title === 'intro')

  function setContent(){
    if (intro?.content_html){
      return {__html: intro?.content_html}
    } 
  }
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 px-20 pt-12 pb-28 w-full">
      <div className="flex flex-col justify-center">
        <hgroup className='[&>h2]:text-secondary [&>h2]:font-medium [&>h2]:text-5xl [&>p]:pt-2 [&>p]:text-accent [&>p]:text-pretty [&>h2]:text-balance'
        dangerouslySetInnerHTML={setContent()}/>
        <Socials/>
      </div>
      <div className='flex justify-center items-center row-start-1 md:row-start-auto'>
        <Image src={portrait.url ? portrait.url : ''} alt={portrait.alt} width={330} height={330}
        className='rounded-[50%] border border-secondary shadow-lg '/>
      </div>
    </section>
  )
}