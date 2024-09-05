import Image from 'next/image'
import { Media } from '../payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '../payload.config'
import { Socials } from './socials'
import { removeHtmlTags } from '../lib/utils'
import Link from 'next/link'
import { Playfair_Display, Playwrite_CU} from 'next/font/google'

const pdFont = Playfair_Display({
  subsets: ['latin']
})

const Pw_CU = Playwrite_CU()

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

  const heading = home.sections?.find(section => section.title === 'intro-heading')
  const content = home.sections?.find(section => section.title === 'intro-content')

  // console.log(heading)
  
  return (
    <section className="w-full intro-hero pt-36 pb-20 h-auto flex">
      <Socials/>
        <div className='bg-[#d7d9de] w-[60%] mx-20 ml-auto relative'>
          <div className='text-primary absolute top-[-13%] left-[-42%]'>
            <span className='${pdFont.className} inline-block leading-[0.85] font-extrabold text-8xl max-w-[10ch]'>I REALLY LOVE TO TALK WITH PEOPLE</span>
            <br />
            <span className={`text-4xl pt-2 inline-block ${Pw_CU.className}`}>Funmi Onuoha</span>
          </div>
          <Image src={portrait.url ? portrait.url : ''} alt={portrait.alt} width={330} height={330}
          className='ml-auto pr-20 h-auto w-2/4'/>
          <div className='bg-[#EDEDED] w-full grid grid-cols-2 gap-8 pt-10 text-sm font-medium'>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, doloribus ratione ipsa culpa nulla laborum vel saepe cupiditate voluptatum similique ea, eum laudantium, aperiam illo. Mollitia asperiores dicta molestias nulla!
              <br />
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ex similique, asperiores quia omnis perferendis nemo repellat optio illo, quaerat quod deserunt. Alias quaerat, vero tempore pariatur necessitatibus quos magnam.
            </p>
            <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti corporis laudantium ducimus, dicta earum quasi et repellat placeat ipsa vero dolore cumque quae iure provident incidunt tenetur pariatur fugit numquam!</p>
          </div>
        </div>
    </section>
  )
}