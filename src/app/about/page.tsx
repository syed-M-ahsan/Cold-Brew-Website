import Image from 'next/image'
import React from 'react'
import coffe from "/public/coffecups.png"

const About = () => {
  return (
    
       
        <div className='
        lg:grid 
        lg:gap-20 
        lg:items-center 
        lg:justify-center
        lg:grid-cols-2
        lg:ml-16 
        lg:mt-20
        
        md:block
        md:flex-col
        md:justify-center
        md:items-center
        md:mx-12
        md:my-20 
        
        sm:block
        sm:flex-col
        sm:justify-center
        sm:items-center
        sm:mx-6
        sm:my-10 
        
        block
        flex-col
        justify-center
        items-center
        mx-6
        my-8
        '>
           <div>
        <Image src={coffe} alt='Cold Coffee'width={400} height={500}  draggable="false" className='bg-transparent 
         
         justify-self-center  select-none
        '/>
        </div>
        <div className='select-none'>
        <h4 className='font-Paci  
        lg:text-[2.0rem]  
        lg:inline-block 
        lg:pb-10 

        md:text-[1.8rem]
        md:pb-8 

        sm:text-[1.5rem]
        sm:pb-8

        text-[17.4px]
        pb-6
        
        '> # Chill your day, sip away  cold coffee joy on display! </h4>
            <p>

Welcome to <big className='font-normal font-Paci'>Cold brew</big>, where every cup is an experience. Nestled in the heart of the city, our café offers an exceptional variety of cold coffee blends that promise to awaken your senses. Whether you're looking for a smooth, frosty classic or an adventurous iced concoction, we craft each drink with the finest beans and a touch of love. Our laid-back vibe, coupled with cozy seating, makes it the perfect spot to chill out with friends or get lost in your thoughts. We're all about creating a space where coffee lovers can come together to indulge, relax, and refresh!
           </p>
           <br />
           <p>
           Satisfy your cravings with our signature cold brews, expertly chilled to perfection. Ready to sip, chill, and repeat? We've got your fix
           </p>
        </div>
       
        </div>
        
   
  )
}

export default About