"use client"

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";


export default function Home(){
    return(
        <div className="flex flex-row justify-between">
            <div className="gap-3 flex flex-col min-h-screen"> 
            {/* <div> */}
                <span className="pb-4">
                    Hello! Welcome to my site  :) <br/>
                </span>
                <span>
                    you can find a number of things on the site: <br/>
                </span>
                <span className="">
                    <a href="/projects" className="underline font-bold">projects</a> im working on
                    <span>, </span>
                    <a className="underline font-bold" href="/about">about me</a> 
                    <span>, </span>
                    <a href="/photos" className="underline font-bold">photos</a>
                    
                    <span>, </span>
                    <a href="/archive" className="underline font-bold">previous versions of this site</a>
                    <span>, </span>
                    <a href="/contact" className="underline font-bold">my contact info</a>, etc.
                </span>
                <span>
                    I haven’t yet finished building this site completely, it is still under works<br/>
                </span>
                <span className="pt-15">
                    Last updated: Feb 28, 2026 16:25
                </span>
                {/* </div> */}
                
            </div>
            <div className="mr-10">
                    <img src="https://www.famouspictures.org/wp-content/uploads/2013/06/I_want_to_believe_square_photo.jpg" alt="I want to believe" />   
            </div>
            
        </div>
    );
}
