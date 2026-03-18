"use client"

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";


export default function Home() {
	return (
		<div className="flex flex-col">
			<div className="flex flex-col md:flex-row md:justify-between">
				<div className="gap-3 flex flex-col">
					{/* <div> */}
					<span className="pb-4">
						Hello! Welcome to my site  :) <br />
					</span>
					<span>
						you can find a number of things on the site: <br />
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
					{/* <span>
						I haven’t yet finished building this site completely, it is still under works<br />
					</span> */}
					<br/>
					<span className="">
						Last updated: Mar 18, 2026 16:09
					</span>
					{/* </div> */}

				</div>
				<div className="mt-4 md:mt-0 md:mr-10">
					<img src="https://www.famouspictures.org/wp-content/uploads/2013/06/I_want_to_believe_square_photo.jpg" alt="I want to believe" className="max-w-45 md:max-w-none" />
				</div>

			</div>
			<br/>
			<br/>
			<div className="flex flex-col md:flex-row">
				<div className="w-full md:w-1/2 md:min-h-screen">
					<h1>Latest Blogs</h1>
					<ul className="mt-5">
						<p className="text-black opacity-70 ">Mar 18, 2026</p>
						<li><a className="underline text-blue-600" href="/blog/thoughts-on-design">Product Design</a></li>
						<br/>
						<p className="text-black opacity-70 ">Feb 19, 2026</p>
						<li><a className="underline text-blue-600" href="/blog/AgentsInSimulation"> Agents in Simulation</a></li>
					</ul>
				</div>
				<div className="w-full md:w-1/2 mt-6 md:mt-0">
					<h1>Latest Photos</h1>
				</div>

			</div>
		</div>
	);
}
