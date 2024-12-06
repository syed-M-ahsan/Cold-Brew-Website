"use client"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link";

export default function SheetDemo() {

  const pathname= usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open menu">
          <Menu className="h-8 w-8" />
        </Button>
      </SheetTrigger>
      <SheetContent  className="bgimg ">
        <SheetHeader>
          <SheetTitle className="font-Paci text-white flex justify-center">Pages ☕</SheetTitle>
        </SheetHeader>
        <div>
            <ul className="text-white py-10">
                    <li><Link href={"/"} className={`links py-10 ${pathname === '/' ? 'text-mcolor font-Paci' : ""}`}>Home</Link></li>
                    <hr />
                    <li><Link href={"/about"} className={`links py-10 ${pathname === '/about' ? 'text-mcolor font-Paci' : ""}`}>About</Link></li>
                    <hr />
                    <li><Link href={"/contact"} className={`links py-10 ${pathname === '/contact' ? 'text-mcolor font-Paci' : ""}`}>Contact Us</Link></li>
            </ul>
        </div>
       
   
  
      </SheetContent>
    </Sheet>
  )
}