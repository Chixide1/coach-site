import Image from "next/image";
import pic from '../../public/laptop.jpg'
import { Playfair_Display} from 'next/font/google'

const pdFont = Playfair_Display({
  subsets: ['latin']
})

export async function About() {
  return (
    <section className="grid auto-cols-fr md:grid-cols-2 pt-16 gap-8 px-6 md:px-20 pb-20 lg:grid-cols-3 lg:auto-rows-fr lg:gap-y-4">
      <hgroup className="md:col-span-2 lg:col-span-1 lg:grid lg:row-span-2 lg:grid-rows-subgrid">
        <div className="">
          <h2 className={`${pdFont.className} text-secondary font-semibold text-2xl mb-6 text-balance`}>Coaching With a Passion While Exploring The World.</h2>
          <hr className='bg-accent w-16 h-0.5 mr-auto mt-3 mb-6 lg:mb-3'/>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tempore. Officiis ad minima quo facere in facilis rerum, nihil odio officia dignissimos enim ab quae aperiam quod at hic mollitia.</p>
          <br />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, praesentium. Corrupti, modi voluptas? Consectetur, beatae nobis quod at cumque temporibus ducimus.</p>
        </div>
      </hgroup>
      <div className="lg:col-start-2 lg:row-start-2">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat ducimus eligendi amet, accusantium nobis quam nostrum vero nisi quisquam fugit ab quibusdam odit sequi, cumque laborum! A, asperiores doloremque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="lg:row-span-2 p-3">
        <div className="w-[13rem] md:w-auto h-72 md:h-96 bg-accent rounded-lg relative m-auto">
          <Image src={pic.src} alt="abstract picture of labtop on table" width={640} height={814}
          className="max-w-full h-[93%] rounded-lg absolute right-3 top-3"/>
        </div>
      </div>
    </section>
  )
}