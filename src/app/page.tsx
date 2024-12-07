import Header from "@/components/layout/header";
import Links from "@/components/layout/links";
import Signup from "@/components/layout/signup";
import { ScrollIcon, ScrollText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Order from "./order/page";

export default function Home() {
  return (
    <div className=" overflow-x-hidden select-none ">
      <main>
        <section className="
        lg:padding1
        lg:w-full
        lg:h-screen  
        lg:grid 
        lg:grid-cols-2 
        lg:items-center 
        lg:gap-2 
        lg:-mt-24 
        
        md:block
        md:mt-12
        md:ml-12

        sm:block
        sm:mt-12

        block
        ml-10
        mt-8
        ">
          {/* 9-19 */}
          <div className="lg:pl-24 mg:pl-8 sm:pl-10">
            <h5 className="text-[18px] font-normal tracking-[1px] ">
              #Coffee for hot days
            </h5>
            <h1 className="lg:flex gap-4 text-[3.3rem] font-black font-Paci my-15 mx-0 lg:text-[4rem] ">
              <span>$ Cold </span>
              <span>Brew</span> 
            </h1>
            <p className="w-full max-w-[620px] md:text-sml font-normal leading-[32px] text-tcolor mb-[40px] text-xs  sm:m-0 sm:pr-0 pr-10">
              
              boots your productivity and build your mood with a glass of coffee
              in the morning .Coffee that has a Stimulating effect!
            </p>

            <div className="flex items-center">
              <Link
                href={"/order"}
                className=" block bg-mcolor border-2 border-solid border-transparent rounded-[7px] text-tcolor sm:text-sm font-medium transition-all duration-[.6sec] ease-in-out mr-[20px] hover:scale-110    
                lg:text-xs 
                lg:py-3 
                lg:px-5
                
                md:mt-6
                sm:py-[13px]
                sm:px-[32px]
                
                py-2
                px-2
                text-[10px]
                "
              >
                Order Now
              </Link>

              <Link
                href={"/order"}
                className="flex items-center sm:text-[24px] font-bold text-tcolor text-xs md:mt-6 "
              >
                $16.00 |
                <span className="text-[17px] font-normal text-mcolor ml-[10px] sm:text-sm text-xs">
                  
                  Discounted price
                </span>
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={"/hero.png"}
              alt="hero image"
              height={400}
              width={400}
              className="
              object-contain
               w-full 
               max-h-[400px]
              -ml-6
              "
               

              
            />
          </div>
        </section>

        <div className="">
          <Links />
        </div>
      </main>
      {/* <h4 className="flex justify-center font-Paci text-big">
        {" "}
        Chill scene!Order now
      </h4>
      <Order /> */}
    </div>
  );
}
