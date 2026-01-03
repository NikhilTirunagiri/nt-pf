"use client"
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { rotate } from "three/tsl";


export function useCurrentPath(){
    return usePathname()
}

export function pushToPage({children, href}){
    const router = useRouter()
    
    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }
}




export default function Sidebar(){
    const pathname = useCurrentPath()
    
    return(
        <div className="flex flex-col pr-10">  
            <div className="pb-5">
                <a className="font-bold" href="https://www.nikhilt.dev/">nikhilt.dev</a>
            </div>
            <div className="font-medium w-40">
                <ul>
                    <li className={pathname === "/" ? "bg-red-300" : "hover:bg-red-300 onClick={handleClick}"}><a href="/">Home</a></li>
                    <li className={pathname === "/about" ? "bg-red-300" : "hover:bg-red-200 onClick={handleClick}"}><a href="/about">About</a></li>
                    <li className={pathname === "/blogs" ? "bg-red-300" : "hover:bg-red-200 onClick={handleClick}"}><a href="/blogs">Blogs</a></li>
                    <li className={pathname === "/projexts" ? "bg-red-300" : "hover:bg-red-200 onClick={handleClick}"}><a href="/projexts">Projects</a></li>
                    <li className={pathname === "/archive" ? "bg-red-300" : "hover:bg-red-200 onClick={handleClick}"}><a href="/archive">Archive</a></li>
                    <li className={pathname === "/tags" ? "bg-red-300" : "hover:bg-red-200 onClick={handleClick}"}><a href="/tags">Tags</a></li>
                    <li className={pathname === "/contact" ? "bg-blue-300" : "hover:bg-blue-200 onClick={handleClick}"}><a href="/contact">links</a></li>    
                </ul>
            </div>
        </div>
    );
}