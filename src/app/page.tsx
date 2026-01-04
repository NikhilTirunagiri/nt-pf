"use client"

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";


export default function Home(){
    return(
        <div className="gap-3 flex flex-col min-h-screen"> 
            <span className="pb-4">
                Hello! Welcome to my site  :) <br/>
            </span>
            <span>
                you can find a number of things on the site: <br/>
            </span>
            <span className="">
                <span className="underline font-bold">projects</span> im working on
                <span>, </span>
                <span className="underline font-bold">about me</span> 
                <span>, </span>
                <span className="underline font-bold">photos</span>
                <span>, </span>
                <span className="underline font-bold">an archive of the site</span>
                <span>, </span>
                <span className="underline font-bold">my contact info</span>, etc.
            </span>
            <span>
                I haven’t yet finished building this site completely, it is still under works<br/>
            </span>
            <span className="pt-15">
                Last updated: Jan 4, 2026 11:41
            </span>
        </div>
    );
}
