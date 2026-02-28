"use client"

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";


export default function Home(){
    return(
        <div className="gap-5 flex flex-col h-screen max-w-3xl text-[15px]"> 
        <h1 className="text-3xl font-bold pb-4">Projects</h1>
            <span className="pb-4 ">
                I use <a href="https://neovim.io/" className="underline text-blue-600">neovim</a> and <a href="https://github.com/tmux/tmux/wiki" className="underline text-blue-600">tmux</a> as my main dev environment and VScode too.
            </span>
            <ul>
                <li><span className="font-bold">Petal</span> <br/>-building AI powered personal smart glasses. Imagine this: you just ask the AI that can send emails, reply to messages, draft an essay, start a timer, listen to music, trigger actions on your PC with a voice command etc.</li>
                <li><span className="font-bold">HTTP server in C</span><br/> -where I designed and developed management systems for educational institutions.</li>
                <li><span className="font-bold">Text manager in C</span><br/> -a text manager (like a shell) that maintains a list of buffers, handles concurrent processes, and performs limited signal and I/O controls.</li>
                <li><span className="font-bold">Go Web Crawler</span></li>
                <li><span className="font-bold">Peer to Peer file sharing platform</span></li>
                <li><span className="font-bold">TheCollegeTech</span><br/>-designed and built Full-Stack MVPs for Management systems for educational institutions planned to deploy across colleges in India.</li>
            </ul>

            <span className="pt-6">
                tech-stack i'm comfortable and proficient with:
            </span>
            <ul>
                <li><span className="font-bold">Languages</span>: Python, Java, C, Rust, C++, TypeScript, JavaScript, PHP, R, Bash</li>
                <li><span className="font-bold">Frameworks</span>: Django, React, Next.js, FastAPI, RESTful APIs</li>
                <li><span className="font-bold">Databases</span>: PostgreSQL, Redis, Supabase</li>
                <li><span className="font-bold">Cloud & DevTools</span>: AWS (EC2, S3), Docker, Git</li>
            </ul>
        </div>
        

    );
}
