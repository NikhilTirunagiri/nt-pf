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
                <div className="gap-2 flex flex-col"> 
                    <span>
                        Welcome to my website :) <br/>
                    </span>
                    <span>
                        You can find a number of things on the site: <br/>
                    </span>
                    <span className="font-bold">
                        <span className="underline">projects im working on</span> 
                        <span>, </span>
                        <span className="underline">blogs</span> 
                        <span>, </span>
                        <span className="underline">and my contact info</span>
                        <span></span>
                        </span>
                
                </div>
            </div>
        </div>
    );
}