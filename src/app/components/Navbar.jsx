import Image from "next/image";
import Link from "next/link";



export default function Navbar() {
  return (
    <nav className="flex justify-between bg-[#EEFEDF] fixed inset-x-0">
    <ul className="px-20 py-4">
        <Image src='/abi.png' alt='logo' width={80} height={80}/>
      </ul>

      <ul className="flex justify-end gap-8 m-10 font-bold text-blue-950  ">
        <Link href='/'>
        <li className="text-xl">Home</li>
        </Link>

        <Link href='/About Us'>
        <li className="border-x-2 px-1  border-sky-500  hover:text-red-500">About Us</li>
        </Link>

        <Link href='/Services'>
        <li className="border-x-2 px-1  border-sky-500  hover:text-purple-500">Services</li>
        </Link>

        <Link href='/Estates'>
        <li className="border-x-2 px-1  border-sky-500  hover:text-green-500">Estates</li>
        </Link>

        <Link href='/Realtor`s Hub'>
        <li className="border-x-2 px-1  border-sky-500  hover:text-yellow-500">Realtor`s Hub</li>
        </Link>

        <Link href='/Public Relation'>
        <li className="border-x-2 px-1  border-sky-500  hover:text-gray-500">Public Relation</li>
        </Link>

        <Link href='/Log in'>
        <li className=" text-white font-bold bg-sky-900 border-sky-500 border-4 rounded-lg px-5">Log in</li>
        </Link>

        <Link href='/Get Started'>
        <li className=" text-white font-bold bg-blue-950 border-sky-500 border-4 rounded-lg px-5">Get Started</li>
        </Link>

</ul>
</nav>
  )
}
