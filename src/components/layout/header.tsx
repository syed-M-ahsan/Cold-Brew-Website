import Image from "next/image";
import Navbar from "./navbar";
import Signup from "./signup";
import SheetDemo from "./sheet";

export default function Header(){
    return(
        <div className=" pt-8 flex  justify-between items-center   w-full top-0 right-0 z-50 py-35px px-14 transition-all duration-500ms ease-in-out">
            <Image src={"/logo.png"} alt="logo" width={100} height={100} className="lg:ml-4" />
            <Navbar />
         <div className="md:hidden">   <SheetDemo /></div>

        </div>
    )
}