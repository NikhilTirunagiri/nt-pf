"use client"

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";


export default function Home(){
    return(
        <div>
            <span>
                You can view the old versions of this site here:<br/>
            </span>
            <ul>
                <li><a href="https://www.nikhilt.dev/mac" className="underline text-blue-600">v1 - macintosh style</a></li>
            </ul>
        </div>
    );
}