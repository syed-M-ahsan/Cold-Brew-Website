import Header from "@/components/layout/header";
import Links from "@/components/layout/links";
import Signup from "@/components/layout/signup";
import { ScrollIcon, ScrollText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Order from "./order/page";

export default function Home() {
  return (
    <div className=" ">
      <main>
        <section className="padding1  w-full h-screen  gridd -mt-24  ">
          {/* 9-19 */}
          <div className="">
            <h5 className="text-[18px] font-normal tracking-[1px] ">
              #Coffee for hot days
            </h5>
            <h1 className="lg:flex gap-4 text-[3.3rem] font-black font-Paci my-15 mx-0 lg:text-[4rem] ">
              <span>$ Cold </span>
              <span>Brew</span> 
            </h1>
            <p className="w-full max-w-[620px] text-sml font-normal leading-[32px] text-tcolor mb-[40px]">
              
              boots your productivity and build your mood with a glass of coffee
              in the morning .Coffee that has a Stimulating effect!
            </p>

            <div className="flex items-center">
              <Link
                href={"/order"}
                className=" inline-block py-[13px]  px-[32px] bg-mcolor border-2 border-solid border-transparent rounded-[7px] text-tcolor text-sm font-medium transition-all duration-[.6sec] ease-in-out mr-[20px] hover:scale-110 lg:text-xs lg:py-3 lg:px-5 "
              >
                Order Now
              </Link>

              <Link
                href={"/"}
                className="flex items-center text-[24px] font-bold text-tcolor "
              >
                $16.00 |
                <span className="text-[17px] font-normal text-mcolor ml-[10px] lg:text-sm">
                  
                  Discounted price
                </span>
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={"/hero.png"}
              alt="hero image"
              height={700}
              width={550}
              className="w-full h-auto"
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
