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
        lg:-ml-12
        lg:gap-0
        
         md:top-[85%]
         md:flex
         md:gap-x-28
         md:justify-center
         md:items-center 

         sm:flex
         sm:item-center
         sm:gap-x-14
         sm:justify-center

         flex
         items-center
         gap-x-7
         justify-center
        
        '>
            <Link href={"/"} className='icons '><FacebookIcon /></Link>
            <Link href={"/"} className='icons'><InstagramIcon /></Link>
            <Link href={"/"} className='icons'><YoutubeIcon /></Link>
        </div>
  )
}

export default Links