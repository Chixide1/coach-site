import Image from "next/image";
import pic from '../../public/laptop.jpg'
import { Playfair_Display} from 'next/font/google'

const pdFont = Playfair_Display({
  subsets: ['latin']
})

export async function About() {
  return (
    <section className="pt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-20 pb-20">
      <hgroup className="md:col-span-2 md:pb-4 lg:pb-0 lg:col-auto">
        <h2 className={`${pdFont.className} text-secondary font-semibold text-2xl mb-6`}>Coaching With a Passion While Exploring The World.</h2>
        <hr className='bg-accent w-16 h-0.5 mr-auto my-4'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tempore. Officiis ad minima quo facere in facilis rerum, nihil odio officia dignissimos enim ab quae aperiam quod at hic mollitia.</p>
      </hgroup>
      <div className="lg:pt-[6.6rem]">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat ducimus eligendi amet, accusantium nobis quam nostrum vero nisi quisquam fugit ab quibusdam odit sequi, cumque laborum! A, asperiores doloremque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="p-3">
        <div className="w-[13rem] md:w-auto h-72 md:h-96 bg-accent rounded-lg relative m-auto">
          <Image src={pic.src} alt="abstract picture of labtop on table" width={640} height={814}
          className="max-w-full h-[93%] rounded-lg absolute right-3 top-3"/>
        </div>
      </div>
    </section>
  )
}