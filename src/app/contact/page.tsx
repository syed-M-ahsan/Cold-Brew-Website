import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="grid grid-cols-2 place-items-center mt-12 mr-14 ">
      <div>
        <Image
          src="/CoffeBag.png"
          alt="coffee cup "
          width={450}
          height={400}
          className=""
        />
      </div>

      {/* FeedBack Dialog Box */}
      <div className="grid grid-cols-2 gap-10 bg-[#11110b] p-16 rounded-full borders">
        <div className="col-span-2 flex justify-center text-big text-tcolor font-Paci hover:text-mcolor">
        <h1>#Feedbacks</h1>
        </div>
        <div>
              <label className="p-3 ">Name:</label>
              <input
            type="text"
            id="Name"
            required
            min={6}
            max={50}
            className="text-black h-8 w-30 rounded-2xl px-3 bg-stone-400  "
              />

        </div>
        <div>
            <label className="p-3 ">Email:</label>
            <input
            type="email"
            id="email"
            required
            className="text-black  h-8 w-30 rounded-2xl px-3 bg-stone-400"
             />
        </div>
        <div className="col-span-2 flex  ">
            <label className=" p-3 ">Message :</label>
            <textarea
            id="Message"
            required
            maxLength={550}
            className="text-black  w-[80%] h-36 rounded-2xl px-3 bg-stone-400"
            />


        </div>
      </div>
    </div>
  );
}
