import Image from "next/image";
import { Playfair_Display } from 'next/font/google'
import Heading from "./heading";
import { Media } from "@/payload-types";
import { AboutBlock } from "@/lib/block-types";

const pdFont = Playfair_Display({
  subsets: ['latin']
})

export async function About({about}: {about: AboutBlock}) {
  const pic = about.picture as Media

  return (
    <>
      <Heading heading="About Me" description={about.title || ''}/>
      <section className="grid auto-cols-fr md:grid-cols-2 pt-8 gap-8 px-6 md:px-20 pb-20 lg:grid-cols-3 lg:auto-rows-[0fr_1fr] lg:gap-y-4">
        <hgroup className="md:col-span-2 lg:col-span-1 lg:grid lg:row-span-2 lg:grid-rows-subgrid">
          <div className="lg:h-fit">
            <h2 className={`${pdFont.className} text-secondary font-semibold text-2xl mb-6 text-balance`}>{about.title}</h2>
            <hr className='bg-accent w-16 h-0.5 mr-auto mt-3 mb-6 lg:mb-3' />
          </div>
          <div>
            <p className="whitespace-pre-line">{about.col_1}</p>
          </div>
        </hgroup>
        <div className="lg:col-start-2 lg:row-start-2">
          <p>{about.col_2}</p>
        </div>
        <div className="lg:row-span-2 p-3">
          <div className="w-[13rem] md:w-auto h-72 md:h-96 bg-accent rounded-lg relative m-auto">
            <Image src={pic.url || ''} alt={pic.alt} width={pic.width || 0} height={pic.height || 0}
              className="max-w-full w-auto h-[93%] rounded-lg absolute right-3 top-3" />
          </div>
        </div>
      </section>
    </>
  )
}