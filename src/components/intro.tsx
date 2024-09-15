import Image from 'next/image'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '../payload.config'
import { Socials } from './socials'
import Link from 'next/link'
import { Playfair_Display} from 'next/font/google'
import { IntroBlock } from '@/lib/block-types'

const pdFont = Playfair_Display({
  subsets: ['latin']
})

export default async function Intro({intro}: {intro: IntroBlock}){
  const payload = await getPayloadHMR({config})

  const portrait = await payload.findByID({
    collection: 'media',
    id: 1
  })
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 px-6 md:px-20 pt-12 pb-24 w-full">
      <div className="flex flex-col justify-center row-start-2 md:row-auto">
        <div className='flex flex-col-reverse md:flex-row gap-2 md:gap-5 items-center mb-4'>
          <Socials/>
          <h2 className={`${pdFont.className} text-secondary text-center md:text-left font-medium text-4xl md:text-6xl text-balance heigh leading-tight`}>{intro.title}</h2>
        </div>
        <div className='md:pl-12'>
          <p className='text-center md:text-left text-pretty mb-8'>{intro.content}</p>
          <Link href='/contact me' className='mx-auto md:mx-0 bg-accent text-white px-4 py-2 block w-fit rounded-lg transition duration-500 hover:scale-110'>Contact me</Link>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <Image src={portrait.url ? portrait.url : ''} alt={portrait.alt} width={330} height={330}
        className='rounded-[50%] border border-secondary shadow-lg w-3/4 sm:w-2/4 md:w-[330px]'/>
      </div>
    </section>
  )
}