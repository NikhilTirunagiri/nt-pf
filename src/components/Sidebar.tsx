"use client"
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";


export function useCurrentPath(){
    return usePathname()
}


export default function Sidebar(){
    const pathname = useCurrentPath()
    const router = useRouter()
    
    const handleClick = (href: string) => {
        router.push(href)
    }
    
    return(
        <div className="flex flex-row items-center gap-2 md:flex-col md:items-start md:sticky overflow-x-auto">
            <div className="pb-0 md:pb-4 pr-2 md:pr-0 shrink-0">
                <a className="font-bold" href="https://www.nikhilt.dev/">nikhilt.dev</a>
            </div>
            <div className="font-normal md:w-40">
                <ul className="flex flex-row md:flex-col">
                    <button className={pathname === "/" ? "bg-red-300 px-2 md:px-0 md:w-full text-left whitespace-nowrap" : "hover:bg-red-200 px-2 md:px-0 md:w-full text-left whitespace-nowrap"} onClick={() => handleClick("/")}>home</button>
                    <button className={pathname === "/about" ? "bg-red-300 px-2 md:px-0 md:w-full text-left whitespace-nowrap" : "hover:bg-red-200 px-2 md:px-0 md:w-full text-left whitespace-nowrap"} onClick={() => handleClick("/about")}>about</button>
                    <button className={pathname === "/blog" ? "bg-red-300 px-2 md:px-0 md:w-full text-left whitespace-nowrap" : "hover:bg-red-200 px-2 md:px-0 md:w-full text-left whitespace-nowrap"} onClick={() => handleClick("/blog")}>blog</button>
                    <button className={pathname === "/projects" ? "bg-red-300 px-2 md:px-0 md:w-full text-left whitespace-nowrap" : "hover:bg-red-200 px-2 md:px-0 md:w-full text-left whitespace-nowrap"} onClick={() => handleClick("/projects")}>projects</button>
                    <button className={pathname === "/photos" ? "bg-red-300 px-2 md:px-0 md:w-full text-left whitespace-nowrap" : "hover:bg-red-200 px-2 md:px-0 md:w-full text-left whitespace-nowrap"} onClick={() => handleClick("/photos")}>photos</button>
                    <button className={pathname === "/archive" ? "bg-red-300 px-2 md:px-0 md:w-full text-left whitespace-nowrap" : "hover:bg-red-200 px-2 md:px-0 md:w-full text-left whitespace-nowrap"} onClick={() => handleClick("/archive")}>archive</button>
                    <button className={pathname === "/contact" ? "bg-red-300 px-2 md:px-0 md:w-full text-left whitespace-nowrap" : "hover:bg-red-200 px-2 md:px-0 md:w-full text-left whitespace-nowrap"} onClick={() => handleClick("/contact")}>contact</button>
                </ul>
            </div>
        </div>
    );
}