import payload from "payload";
import Image from "next/image";
import logo from "../../public/FeeTee Logo.png";

export default async function Header(){

  const links = await payload.find({
    collection: 'pages',
    depth: 0
  })

  links.docs.sort((a, b) => {
    return new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf()
  })
  
  return (
    <header className="h-24 flex items-center justify-between px-12">
      <Image src={logo} alt="An image of the website logo" width={75}/>
      <nav className="flex gap-8">
        {links.docs.map((d) => (
          <a href="/" className="text-secondary">{d.page}</a>
        ))}
      </nav>
      <button className="bg-accent text-primary px-4 py-2 rounded-md">Contact me</button>
    </header>
  )
}