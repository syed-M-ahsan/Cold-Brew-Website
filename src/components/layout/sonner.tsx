"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { Toaster } from "../ui/sonner"

export function SonnerDemo() {
  return (
<div>
<Toaster richColors />
    <Button
      variant="outline"
      onClick={() =>
        toast.success("Added to Cart", {
          description: "Congratulations ^_^",
        //   action: {
        //     label: "Undo",
        //     onClick: () => console.log("Undo"),
        //   },
        })
      }
      className='flex justify-center py-3 mt-4 px-20 ml-4 items-center  rounded-2xl text-black' >
 <ShoppingCart/>Add to cart 
    </Button>

</div>
  )
}
