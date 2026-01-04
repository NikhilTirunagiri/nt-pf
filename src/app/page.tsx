"use client"

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";


export default function Home(){
    return(
        <div className="gap-2 flex flex-col"> 
            <span className="pb-4">
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
                <span className="underline">about me</span>
                <span>, </span>
                <span className="underline">and my contact info</span>
                <span></span>
                </span>
        </div>
    );
}