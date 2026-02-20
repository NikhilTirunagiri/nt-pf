"use client"

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";


export default function Home(){
    return(
        <div className="gap-3 min-h-screen">
            <div className="pb-4 flex flex-row items-end">
                <img src="/photos/john-nash.webp" alt="john-nash"  className="h-175 w-150" />
                <p className="pl-2">@HackPrinceton</p>
            </div>
            <div className="flex flex-row items-end">
                <img src="/photos/james-webb.webp" alt="james-webb"  className="h-175 w-150" />
                <p className="pl-2">a picture of James-Webb Telescope launch 10,000+ miles away from my view. <br/>Shot on OnePlus 6</p>
            </div>
            <div className="flex flex-row pt-4 items-end">
                <img src="/photos/metallica.webp" alt="metallica"  className="h-175 w-150" />
                <p className="pl-2">\m/ <br/> James & Kirk from metallica <br/> Kirk is playing ‘Greeny,’ the legendary guitar once owned by Peter Green and Gary Moore.</p>
            </div>
            <div className="flex flex-row pt-4 items-end">
                <img src="/photos/bagheera.webp" alt="bagghi"  className="h-175 w-150" />
                <p className="pl-2">@shenandoah <br/> my friend Bagheera likes to star gaze</p> 
            </div>
            <div className="flex flex-col pt-4">
                <p className="text-lg font-semibold">The Appalachian: One of the oldest biome on the planet.</p>
                    <div className="flex flex-row items-end" >
                    <img src="/photos/appalachian-1.webp" alt="appalachian-1"  className="pb-2" />
                    <p className="pl-2 mb-1 text-lg ">.1</p>
                    </div>
                    <div className="flex flex-row items-end" >
                    <img src="/photos/appalachian-2.webp" alt="appalachian-2"  className="pb-2" />
                    <p className="pl-2 mb-1 text-lg ">.2</p>
                    </div>
                    <div className="flex flex-row items-end" >
                    <img src="/photos/appalachian-3.webp" alt="appalachian-3"  className="pb-2" />
                    <p className="pl-2 mb-1 text-lg ">.3</p>
                    </div>
                    <div className="flex flex-row items-end" >
                    <img src="/photos/appalachian-4.webp" alt="appalachian-4"  className="pb-2" />
                    <p className="pl-2 mb-1 text-lg ">.4</p>
                    </div>

            </div>
            <div className="flex flex-col pt-4">
                <p className="text-lg font-semibold">Shenandoah</p>
                <div className="flex flex-row items-end" >
                    <img src="/photos/shenandoah-1.webp" alt="shenandoah-1"  className="pb-2" />
                    <p className="pl-2 mb-1 text-lg">.1</p>
                </div>
                <div className="flex flex-row items-end" >
                    <img src="/photos/shenandoah-2.webp" alt="shenandoah-2"  className="pb-2" />
                    <p className="pl-2 mb-1 text-lg ">.2</p>
                </div>
            </div>
        </div>
        
    );
}