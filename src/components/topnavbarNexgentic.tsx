"use client"

import Link from "next/link";

export default function TopNavbarNexgentic() {
    return (
        <nav className="flex w-full items-center justify-between gap-8 px-4 py-3">
            <Link href="/nexgentic" className="text-4xl leading-none">
                Nexgentic
            </Link>
            <div className="flex flex-wrap items-center justify-end gap-10 text-xl">
                <a href="#about" className="leading-none">About</a>
                <a href="#services" className="leading-none">Services</a>
                <a href="#approach" className="leading-none">Approach</a>
                <a href="#team" className="leading-none">Team</a>
                <a href="#labs" className="leading-none">Labs</a>
                <a href="#contact" className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-lg leading-none backdrop-blur-md">Talk to an Expert</a>
            </div>
        </nav>
    );
}