"use client"

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { h1, li } from "framer-motion/client";


export default function Home(){
    return(
        <div>
            <h1 className="text-3xl font-bold pb-4">Conact Links</h1>
            <ul>
                <li>email: <a href="mailto:ntirunag@gmu.edu" className="underline text-blue-600">ntirunag@gmu.edu</a></li>
                <li>linkedin: <a href="https://www.linkedin.com/in/nikhiltirunagiri/" className="underline text-blue-600">https://www.linkedin.com/in/nikhiltirunagiri/</a></li>
                <li>github: <a href="https://github.com/NikhilTirunagiri" className="underline text-blue-600">https://github.com/NikhilTirunagiri</a></li>
            </ul>
        </div>
    );
}
