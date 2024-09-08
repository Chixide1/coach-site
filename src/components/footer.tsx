import { getPayloadHMR } from "@payloadcms/next/utilities"
import config from '../payload.config'
import { removeHtmlTags } from "@/lib/utils"
import { Playfair_Display } from 'next/font/google'
import { Socials } from "./socials"

const pdFont = Playfair_Display({
  subsets: ['latin']
})

export default async function Footer() {
  const payload = await getPayloadHMR({ config })

  const sections = await payload.findByID({
    collection: 'pages',
    id: 1
  }).then(page => page.sections)

  const footerCopyright = sections?.find((section => section.title === 'footer-copyright'))

  return (
    <footer className="bg-secondary">
      <div className="flex gap-12 p-14 text-white text-xs *:flex-grow *:basis-0">
        <div className="!basis-2/12">
          <hgroup className="">
            <h2 className={`${pdFont.className} text-3xl mb-4 font-medium`}>Feetee Coach</h2>
            <p className="text-balance mb-4 text-neutral-300">Elevate yourself with my coaching services and take your aspirations to the next level. Grow yourself today.</p>
          </hgroup>
          <Socials direction='horizontal' color='white' className="!gap-1" />
        </div>
        <div>
          <h2>Services</h2>
          <hr className='bg-accent w-8 h-px my-4 border-0' />
          <ul className="text-neutral-300 *:py-2">
            <li>
              <span>Growing</span>
            </li>
            <li>
              <span>Protecting</span>
            </li>
            <li>
              <span>Planning</span>
            </li>
          </ul>
        </div>
        <div>
          <h2>Quick Links</h2>
          <hr className='bg-accent w-8 h-px my-4 border-0' />
            <ul className="text-neutral-300 *:py-2">
              <li><a href="#">Finance</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Speaking</a></li>
              <li><a href="#"></a>Contact Me</li>
            </ul>
        </div>
      </div>
      <div className="py-7 mx-14">
        <hr className="bg-white mb-7" />
        <span className="text-white text-xs text-center block w-fit">{removeHtmlTags(footerCopyright?.content_html)}</span>
      </div>
    </footer>
  )
}