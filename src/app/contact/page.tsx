import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="

   

    lg:grid 
    lg:grid-cols-[1fr_2fr]
    lg:place-items-center
    lg:mt-12
    lg:mr-14

    md:block
    md:mt-10
   

    
    ">
      <div>
        <Image
          src="/CoffeBag.png"
          alt="coffee cup "
          width={300}
          height={300}
          draggable="false"
          className="col-start-1 col-end-1 

          md: justify-self-center
           
          select-none

          "
        />
      </div>

      {/* FeedBack Dialog Box */}
      <div className="
      lg:grid 
      lg:grid-cols-2 
      lg:gap-10 
      lg:bg-[#11110b]/50
      lg:p-16 
      lg:rounded-2xl
      borders

      md:grid
      md:grid-cols-1
      md:gap-8
      md:bg-[#11110b]/50
      md:p-12
      md:rounded-3xl 
      md:m-10

      sm:grid
      sm:grid-cols-1
      sm:gap-4
     sm:bg-[#11110b]/50
      sm:p-10
      sm:rounded-2xl 
      sm:m-10

      
      grid
      grid-cols-1
      gap-2
     bg-[#11110b]/50
      p-8
      rounded-2xl 
      m-4
      select-none
      
      
      ">
        <div className=" font-Paci
        sm:col-span-1
        lg:col-span-2
        sm:flex 
        sm:justify-center 

        sm:text-[1.2rem]
        md:text-[1.8rem]
        lg:text-big


        sm:text-tcolor 
        sm:font-Paci 
        sm:hover:text-mcolor

        text-[1.2rem]
        justify-self-center
        font-semi-bold




        
        ">
        <h1>#Feedbacks</h1>
        </div>
        <div className=" flex
            justify-self-center items-center">
              <label className="p-3 ">Name:</label>
              <input
            type="text"
            id="Name"
            required
            min={6}
            max={50}
            className="text-black bg-stone-400
            h-8 
            lg:w-52
            sm:w-40
            mr-10
            rounded-2xl 
            px-3  
           
             "
              />

        </div>
        <div className=" 
          flex
          justify-self-center 
          items-center">
            <label className="p-3 ">Email:</label>
            <input
            type="email"
            id="email"
            required
            className="text-black  h-8 w-30 rounded-2xl px-3 bg-stone-400"
             />
        </div>
        <div className=" 
        flex
        justify-self-center 
        items-center 
        -ml-4 
        lg:col-span-2 ">
            <label className=" p-5 ">Message:</label>
            <textarea
            id="Message"
            required
            maxLength={550}
            className="text-black  md:w-[60vw] lg:w-[40vw] md:h-36   rounded-2xl px-3 bg-stone-400"
            />


        </div>
      </div>
    </div>
  );
}
