"use client"

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";


export default function Home(){
    return(
        <div className="gap-5 flex flex-col h-screen max-w-3xl"> 
        <h1 className="text-3xl font-bold pb-4">About</h1>
            <span className="pb-4 ">
                I'm Nikhil, Nice to meet you! :D  
                <br/>
                I am a senior year computer science student at George Mason University.
            </span>
            <span>
                I spend most of my time building what interests me – from Agentic workflow development to modding my guitar, building a NAS and a http server from scratch, etc. I love exploring new tech and working on projects that solve real problems (at least for me  lol) to push my skills further. <br/>
            </span>
            <span>
                Apart from my coding journey, I like to go on hikes and spend most of my time outdoors in the summer. I’ve been playing guitar for over 5 years now and have developed a relative pitch. I also have a passion for photography. 
            </span>
            <ul>
                <li><span className="font-bold">Founded Petal</span> - working on an AI powered personal smart glasses.</li>
                <li><span className="font-bold">Co-founded TheCollegeTech</span>, where I designed and developed management systems for educational institutions.</li>
                <li><span className="font-bold">Worked as Data Analytics Intern</span> at Eera Tech (Virginia) where I optimized existing agentic workflows and brain stormed AI use cases in company's products.</li>
            </ul>

        </div>
        

    );
}