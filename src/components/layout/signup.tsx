import { Menu } from "lucide-react";
import SheetDemo from "./sheet";
import { CardWithForm } from "./card";

export default function Signup(){
    return(
        <div className="flex items-center gap-x-3">
            <button className="inline-block py-3 px-10 bg-transparent borders">Sign up</button>
            <SheetDemo />
            <CardWithForm />
        </div>
    )
}        