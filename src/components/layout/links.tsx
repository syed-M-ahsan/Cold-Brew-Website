import { FacebookIcon, InstagramIcon, YoutubeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Links = () => {
  return (
           
        <div className='
        lg:absolute 
        lg:top-[50%] 
        lg:py-0 
        lg:px-[7%] 
        lg:translate-y-[-50] 
        lg:-mt-16 
        lg:block
        lg:ml-0
        lg:gap-0
        
         md:top-[85%]
         md:flex
         md:gap-28
         md:ml-56
         md:items-center 
        
        '>
            <Link href={"/"} className='icons '><FacebookIcon /></Link>
            <Link href={"/"} className='icons'><InstagramIcon /></Link>
            <Link href={"/"} className='icons'><YoutubeIcon /></Link>
        </div>
  )
}

export default Links