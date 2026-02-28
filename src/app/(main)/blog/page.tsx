"use client"

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";


export default function Home(){
    return(
        <div>
            <h1 className="text-3xl font-bold pb-4">Blogs</h1>
            <ul>
                <li>
                    1. <a href="/blog/AgentsInSimulation" className="underline">Agents in real-world simulations</a>
                </li>
            </ul>
        </div>
    );
}