"use client"
import { ShoppingCart, Star } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { toast, Toaster } from 'sonner';
import { SonnerDemo } from '@/components/layout/sonner'

interface MenuI{
  id :number ;
  image: {
    src: string; 
    alt: string;
  };
  flavour: string;
  price: number;
  priceBefore: number;
}

export const menuData: MenuI[] = [
  {
    id :1 ,
    image: {
      src: "/IcedCaramelMacchiato.png",
      alt: 'coffee card',
    },
    flavour: 'Iced Caramel Macchiato',
    price: 16.00,
    priceBefore: 32.00
  },
  {
    id :2 ,
    image: {
      src: "/IcedMocha.png",
      alt: 'coffee card',
    },
    flavour: 'Iced Mocha',
    price: 16.00,
    priceBefore: 20.00
  },{
    id :3 ,
    image: {
      src: "/MochaSmoothie.png",
      alt: 'coffee card',
    },
    flavour: 'Mocha Smoothie',
    price: 16.00,
    priceBefore: 40.00
  },{
    id: 4,
    image: {
      src: "/VanillaIcedCoffe.png",
      alt: 'coffee card',
    },
    flavour: 'Vanilla Iced Coffee',
    price: 16.00,
    priceBefore: 40.00
  },{
    id:5,
    image: {
      src: "/VietnemeseCoconutCoffe.png",
      alt: 'coffee card',
    },
    flavour: 'Vietnemese Coconut Coffee',
    price: 16.00,
    priceBefore: 40.00
  },{
    id:6,
    image: {
      src: "/SaltedCaramelLatte.png",
      alt: 'coffee card',
    },
    flavour: 'Salted Caramel Latte',
    price: 20.00,
    priceBefore: 50.00
  }
]


export default function Order() {


  return (
    <div className="select-none
    md:grid 
    lg:grid-cols-3
    
    md:grid-cols-2
    lg:gap-4 
    lg:justify-center 
    lg:items-center 
    lg:mt-32 
    lg:mb-10  

    sm:block
    block

    
     ">
       {menuData.map((coffeeMenu)=>{
        return(
          
          <div className='' key={coffeeMenu.id}>
          <div className='grid items-center justify-center md:gird-cols-2
          py-4  '>
                <div className='bg-[#241a16] rounded-3xl p-3'>
                <div > <Image src={coffeeMenu.image.src} alt={coffeeMenu.image.alt} height={250} width={300}  className='rounded-full drop-shadow-[2px 2px 2px white ] p-6'/></div>
                <div> <p className=' font-bold text-mcolor'>{coffeeMenu.flavour}</p> </div>
                <div className='flex justify-between items-center'>
                      <div> {`$${coffeeMenu.price.toFixed(2)}`} <span className='text-[10px]'><del>{`$${coffeeMenu.priceBefore.toFixed(2)}`}</del></span></div>
                      <div className='flex text-yellow-500 '><Star /><Star /><Star /><Star /><Star /><h4 className=''>5.0</h4></div>
                </div>
                <div> 
                  <SonnerDemo />
                </div>
                </div>
          </div>
          </div>
          
          )
    })}
   </div>
  )
}
