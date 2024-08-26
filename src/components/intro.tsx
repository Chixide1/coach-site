import Image from 'next/image'
import { Media } from '../payload-types'

export default async function Intro(){

  // const portrait = await payload.findByID({
  //   collection: 'media',
  //   id: 2
  // })

  const portrait: Media =  await fetch('http://localhost:3000/api/media/2').then(data => data.json())

  return (
    <section className="h-[80vh] grid grid-cols-2 px-12">
      <div className="flex flex-col justify-center">
        <h1 className="text-5xl text-secondary pb-6">Financial Coach<br/>Funmi Onuoha</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, suscipit eveniet. Non culpa minus ad incidunt repudiandae iusto consequuntur nesciunt, accusantium cum. Reprehenderit perferendis, dolorum nostrum tempore veritatis commodi ut!
        </p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <Image src={portrait.url ? portrait.url : ''} alt={portrait.alt} width={300} height={300}
        className='rounded-3xl'/>
      </div>
    </section>
  )
}