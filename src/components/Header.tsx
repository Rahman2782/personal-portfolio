import Link from "next/link"

const Header: React.FC = () => {
  return (
    <div className="flex fixed items-center justify-between px-7 w-full h-[60px] text-green-300 z-20">
        <div>
            <Link href='/' className="hover:text-green-500 bg-black">Home</Link>
        </div>

        <ul className="flex items-center gap-9">
            <li className="">
                <Link href='/' className="hover:text-green-500 bg-black">About Me</Link> {/* using the traidional anchor tag 'a' will create a new html page, this will not re-render*/}
            </li>   
            <li className="hover:text-green-500 bg-black">
                <Link href='/'>Experience/Projects</Link>
            </li>             
        </ul>
    </div>
  )
}

export default Header
