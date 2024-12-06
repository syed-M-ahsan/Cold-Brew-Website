import Image from 'next/image'
import React from 'react'
import coffe from "/public/coffecups.png"

const About = () => {
  return (
    
       
        <div className='grd ml-28 mt-20 '>
        <div>
        <h4 className='font-Paci  text-[2.0rem]  inline-block pb-10  '> # Chill your day, sip away  cold coffee joy on display! </h4>
            <p>

Welcome to <big className='font-normal font-Paci'>Cold brew</big>, where every cup is an experience. Nestled in the heart of the city, our café offers an exceptional variety of cold coffee blends that promise to awaken your senses. Whether you're looking for a smooth, frosty classic or an adventurous iced concoction, we craft each drink with the finest beans and a touch of love. Our laid-back vibe, coupled with cozy seating, makes it the perfect spot to chill out with friends or get lost in your thoughts. We're all about creating a space where coffee lovers can come together to indulge, relax, and refresh!
           </p>
           <br />
           <p>
           Satisfy your cravings with our signature cold brews, expertly chilled to perfection. Ready to sip, chill, and repeat? We've got your fix
           </p>
        </div>
        <div>
        <Image src={coffe} alt='Cold Coffee'width={500} height={500} className='bg-transparent pl-40 justify-center'/>
        </div>
        </div>
        
   
  )
}

export default About