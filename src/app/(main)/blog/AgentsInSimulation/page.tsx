"use client"

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";


export default function Home(){
    return(
        <div>
        <p className="text-red-400">Thu Feb 19 14:44 EST</p>
        <br></br>
        <p className="w-150">
            While scrolling on LinkedIn today I found about this really interesting <a href="https://www.simile.ai/" className="underline italic">startup</a> and they raised 100M$! Series A. 
            I got this very same interesting idea last week -- to understand how Agents living in an apartment/small town would live while I orchestrate all the real-world problems 
            (corruption, politics, social heirarchy, professions, etc.) and ofcourse these agents will have a emotional persona injected into them either by me or an Agent itself. 
            This is kind of like an aquarium, while we observe how the Agents react, interact with each other. 
            <br/>
            <br/>
            I'm particularly curious how they would react if the simulation were run in oppressive empire? maybe they'll overthrow the empire? in a non-violent way??
            <br/>
            <br/>
            The more I think about it, the more I realize we're basically just glorified fish keepers, except our fish have PhDs and existential crises. 
            But here's the thing -- what would we actually learn? Would these simulations tell us something profound about human nature, or would they just reflect 
            our own biases in how we program them? Like, I could code an agent to be "resilient" but my definition of resilience is probably different from someone 
            who grew up in a completely different environment than me.
            <br/>
            <br/>
            Still, there's something compelling about the idea. Maybe it's not about predicting human behavior but understanding the edge cases — the weird, 
            emergent behaviors that nobody expected. The moments where the agents surprise you. That's probably where the real insights are hiding.
            <br/>
            <br/>
            Anyway, I might actually try building a small prototype. Nothing as ambitious as 100M worth of infrastructure, but maybe a small sandbox with like 
            10-15 agents in a neighborhood. See what happens. Worst case scenario, I waste a weekend and have a cool story. Best case? I stumble onto something 
            interesting that's worth exploring further.
            <br/>
            <br/>
            I'll probably write a follow-up if I end up building anything. Or maybe I'll just forget about this idea like the other 50 side project ideas I had this month. 
            We'll see.
        </p>
        </div>
    
    );
}