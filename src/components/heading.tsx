import { Playfair_Display} from 'next/font/google'

const pdFont = Playfair_Display({
  subsets: ['latin']
})

type TitleProps = {
  heading?: string
  description?: string
}

export default function Heading({heading, description}: TitleProps){
  return (
    <div className="p-3 text-center">
      <h2 className={`text-secondary text-3xl font-semibold ${pdFont.className} mb-5`}>{heading}</h2>
      <span>{description}</span>
      <hr className='bg-accent w-16 h-0.5 mx-auto my-4'/>
    </div>
  )
}