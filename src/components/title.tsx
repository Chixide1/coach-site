import { Playfair_Display} from 'next/font/google'

const pdFont = Playfair_Display({
  subsets: ['latin']
})

export default function Title(){
  return (
    <div className="p-3 text-center pt-16">
      <h2 className={`text-secondary text-3xl font-semibold ${pdFont.className} mb-5`}>About Me</h2>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      <hr className='bg-accent w-16 h-0.5 mx-auto my-4'/>
    </div>
  )
}