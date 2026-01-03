"use client"



import Sidebar from "@/components/Sidebar";

export default function Home(){
    return(
        <div className="flex flex-row justify-items-start pt-3 pl-2 text-m pr-2">
            <div className="max-h-full">
                <Sidebar ></Sidebar>
            </div>
            <div className="w-full flex flex-col">
                <div className="justify-items-end text-m font-medium" ><p>📌 Fairfax, VA; 12:49</p></div>
                <div> <h1> This is the home page</h1></div>
            </div>
        </div>
    );
}