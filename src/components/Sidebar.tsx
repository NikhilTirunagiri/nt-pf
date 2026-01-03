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
        <div className="flex flex-col pr-10 sticky">  
            <div className="pb-4">
                <a className="font-bold" href="https://www.nikhilt.dev/">nikhilt.dev</a>
            </div>
            <div className="font-normal w-40">
                <ul>
                    <button className={pathname === "/" ? "bg-red-300  w-full text-left" : "hover:bg-red-200 w-full text-left"} onClick={() => handleClick("/")}>home</button>
                    <button className={pathname === "/about" ? "bg-red-300 w-full text-left" : "hover:bg-red-200 w-full text-left"} onClick={() => handleClick("/about")}>about</button>
                    <button className={pathname === "/blog" ? "bg-red-300 w-full text-left" : "hover:bg-red-200 w-full text-left"} onClick={() => handleClick("/blog")}>blog</button>
                    <button className={pathname === "/projects" ? "bg-red-300 w-full text-left" : "hover:bg-red-200 w-full text-left"} onClick={() => handleClick("/projexts")}>projects</button>
                    <button className={pathname === "/archive" ? "bg-red-300 w-full text-left" : "hover:bg-red-200 w-full text-left"} onClick={() => handleClick("/archive")}>archive</button>
                    <button className={pathname === "/contact" ? "bg-red-300 w-full text-left" : "hover:bg-red-200 w-full text-left"} onClick={() => handleClick("/contact")}>links</button>    
                    <button className={pathname === "/tags" ? "bg-red-300 w-full text-left" : "hover:bg-red-200 w-full text-left"} onClick={() => handleClick("/tags")}>tags</button>
                </ul>
            </div>
        </div>
    );
}