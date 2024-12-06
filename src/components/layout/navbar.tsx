"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function Navbar(){

const pathname= usePathname()

    return(

        <div className="">
            <ul className="flex gap-x-11  ">
                <li><Link href={"/"} className={`links ${pathname === '/' ? 'text-mcolor font-Paci' : ""}`}>Home</Link></li>
                <li><Link href={"/about"} className={`links ${pathname === '/about' ? 'text-mcolor font-Paci' : ""}`}>About</Link></li>
                <li><Link href={"/contact"} className={`links ${pathname === '/contact' ? 'text-mcolor font-Paci' : ""}`}>Contact Us</Link></li>
            </ul>
        </div>
    )
}