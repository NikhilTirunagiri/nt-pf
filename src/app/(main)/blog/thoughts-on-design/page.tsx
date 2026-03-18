

"use client"

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";


export default function Home() {
    return (
        <div>
            <h1 className="text-xl font-bold mb-3">My thoughts on product design</h1>
            <p className="text-red-400 mb-1">Wed Mar 18 14:44 EST</p>
            <p className="w-full md:w-150">
                Always design to experience the innate purpose of the product. Focus on the meaningfulness of the product, the comfort the design provides to the user, and the ease-of-use 
                in critical situations. 
                The design doesn't necessarily have to be a paradigm, but the user should feel like they've used the product a countless times. If not, it should feel natural--it should feel like home. 
                This is where Human Centered Design Strategy comes in. A perfect example would be how <a href="https://www.vastspace.com/" className="underline">Vast</a> is building space stations that feel like home and not like the island of snakes and switches.
                <br/>
                <br/>
                Vast's Haven-1 Space Station
                <img src="/photos/vast-haven-1.png" alt="Vast-haven-1" className="max-w-full"/>
                <br/>
                Now take a look at this:
                <img src="https://static01.nyt.com/images/2020/10/30/science/00SCI-OUTTHERE-SCENES12/00SCI-OUTTHERE-SCENES12-mediumSquareAt3X.jpg" className="max-w-full"/>
                Ironically, NY Times titled this article "<a href="https://www.nytimes.com/2020/11/02/science/space-station-astronomy.html" className="underline italic">Home Sweet Home in Orbit</a>". 
                <br/>
                <br/>
                A "home" that most likely doesn't make astronauts feel like home at all and isn't sweet either.

                I do agree the second image, with all the cables and switches looks more cooler, but doesn't make you feel comfortable, whereas the first image does. 
                If there's no need to show something, then definitely don't show it or make it accessible without overwhelming the user. 
                Remember that the design should always be meaningful and purposeful. 
                Sometimes it is easy to design something; othertimes, it requires a lot of thought and I think that's why it is time-consuming to thoughtfully designing something.
            </p>
            <br/>
            <p className="">If you want to learn a little more, I would highly recommend watching this talk by Hillary Coe at OSMED 2025 (<a href="https://youtu.be/C5im-9pX7d0" className="text-red-400 underline">link</a>)</p> 
        </div>

    );
}
