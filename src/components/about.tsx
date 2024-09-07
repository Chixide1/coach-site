import Image from "next/image";
import { Playfair_Display } from 'next/font/google'
import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from '../payload.config'
import { removeHtmlTags } from "@/lib/utils";
import Heading from "./heading";

const pdFont = Playfair_Display({
  subsets: ['latin']
})

export async function About() {
  const payload = await getPayloadHMR({ config })

  const colPic = await payload.findByID({
    collection: 'media',
    id: 5
  })

  const sections = await payload.findByID({
    collection: 'pages',
    id: 1
  }).then(page => page.sections)

  sections?.map(section => {
    section.content_html = section.content_html?.replace(/<hr\/>/g, '<br/>');
  });

  const aboutTitleIntro = sections?.find(section => section.title === 'about-title-intro');
  const aboutSubtitle = sections?.find(section => section.title === 'about-subtitle');
  const aboutCol1 = sections?.find(section => section.title === 'about-col-1');
  const aboutCol2 = sections?.find(section => section.title === 'about-col-2');

  return (
    <>
      <Heading heading="About Me" description={removeHtmlTags(aboutTitleIntro?.content_html)}/>
      <section className="grid auto-cols-fr md:grid-cols-2 pt-8 gap-8 px-6 md:px-20 pb-20 lg:grid-cols-3 lg:auto-rows-[0fr_1fr] lg:gap-y-4">
        <hgroup className="md:col-span-2 lg:col-span-1 lg:grid lg:row-span-2 lg:grid-rows-subgrid">
          <div className="lg:h-fit">
            <h2 className={`${pdFont.className} text-secondary font-semibold text-2xl mb-6 text-balance`}>{removeHtmlTags(aboutSubtitle?.content_html)}</h2>
            <hr className='bg-accent w-16 h-0.5 mr-auto mt-3 mb-6 lg:mb-3' />
          </div>
          <div dangerouslySetInnerHTML={{ __html: aboutCol1?.content_html || '' }} />
        </hgroup>
        <div className="lg:col-start-2 lg:row-start-2" dangerouslySetInnerHTML={{ __html: aboutCol2?.content_html || '' }} />
        <div className="lg:row-span-2 p-3">
          <div className="w-[13rem] md:w-auto h-72 md:h-96 bg-accent rounded-lg relative m-auto">
            <Image src={colPic.url || ''} alt={colPic.alt} width={colPic.width || 0} height={colPic.height || 0}
              className="max-w-full w-auto h-[93%] rounded-lg absolute right-3 top-3" />
          </div>
        </div>
      </section>
    </>
  )
}