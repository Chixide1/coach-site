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

  const intro = home.sections?.find(section => section.title === 'Intro')
  console.log(intro?.content?.root.children)

  function test(){
    if (intro?.content_html){
      return {__html: intro?.content_html}
    } 
  }
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 px-20 mt-8 w-full">
      <div className="flex flex-col justify-center pb-4">
        {/* <h1 className="text-6xl text-secondary font-medium pb-6">Financial Coach<br/>Funmi Onuoha</h1> */}
        <div className='intro' dangerouslySetInnerHTML={test()}></div>
        <Socials/>
      </div>
      <div className='flex justify-end items-center'>
        <Image src={portrait.url ? portrait.url : ''} alt={portrait.alt} width={1} height={1}
        className='rounded-[50%] border border-secondary shadow-lg w-7/12'/>
      </div>
    </section>
  )
}