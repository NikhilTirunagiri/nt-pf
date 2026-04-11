"use client"

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";


export default function Home() {
	return (
		<div className="flex flex-col md:flex-row">
			<div className="gap-5 flex flex-col md:h-screen max-w-3xl text-[15px]">
				<h1 className="text-3xl font-bold pb-4">Projects</h1>
				{/* <span className="pb-4 "> */}
					{/* I use <a href="https://neovim.io/" className="underline text-blue-600">neovim</a> and <a href="https://github.com/tmux/tmux/wiki" className="underline text-blue-600">tmux</a> as my main dev environment and VScode too. */}
				{/* </span> */}
				<ul className="">
					<li className="mb-2"><a className="underline text-blue-600" href="https://www.toolhunt.tech">ToolHunt</a>: Discover trendy tools, frameworks, and more.</li>
					<li	className="mb-2"><span className="font-bold">Petal</span>: (Currently paused) building AI powered personal smart glasses. Imagine this: you just ask the AI that can send emails, reply to messages, draft an essay, start a timer, listen to music, trigger actions on your PC with a voice command etc.</li>
					<li	className="mb-2"><span className="font-bold">HTTP server in C</span>: was curious about how http servers work under the hood, so i built one.</li>
					<li	className="mb-2"><span className="font-bold">Text manager in C</span>: a text manager (something like vim) that maintains a list of buffers, handles concurrent processes, and performs limited signal and I/O controls.</li>
					<li	className="mb-2"><span className="font-bold">Go Web Crawler</span></li>
					<li	className="mb-2"><span className="font-bold">Peer to Peer file sharing platform: a python project</span></li>
					<li	className="mb-2"><span className="font-bold">TheCollegeTech</span>: designed and built MVPs for Management systems for educational institutions</li>
				</ul>

				<span className="pt-6">
					Tech-stack I usually work with:
				</span>
				<ul>
					<li><span className="font-bold">Languages</span>: Python, Java, C, Rust, C++, TypeScript, JavaScript, PHP, R, Bash</li>
					<li><span className="font-bold">Frameworks</span>: Django, React, Next.js, FastAPI, RESTful APIs</li>
					<li><span className="font-bold">Databases</span>: PostgreSQL, Redis, Supabase</li>
					<li><span className="font-bold">Cloud & DevTools</span>: AWS (EC2, S3), Docker, Git</li>
				</ul>
			</div>
			<div className="ml-0 mt-8 border-t-2 pt-4 md:ml-20 md:mt-15 md:border-t-0 md:border-l-2 md:pt-0 md:pl-5 h-100">
				<h1 className="mb-2">Project ideas in my todo list:</h1>
				<ol>
					<li>1. </li>
					{/* <li>2. </li> */}
					<li></li>

				</ol>
			</div>
		</div>


	);
}
