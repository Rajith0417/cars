import Image from "next/image"
import Link from "next/link"
import { CustomButton } from "."


function Navbar() {
  return (
    <header className="absolute w-full z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link 
            href={"/"}>
                <Image 
                src={"/logo.svg"} 
                alt={"car hub logo"} 
                width={118}
                height={18}
                className="object-contain bg-gray"
                />
            </Link>
            <CustomButton 
            title={"Sign In"}
            containerStyles="text-primary-blue rounded-full min-w-[130px] bg-white hover:bg-gray-50"
            btnType="button"/>
            
        </nav>
    </header>
  )
}

export default Navbar
