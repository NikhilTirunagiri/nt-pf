"useclient"

export default function Sidebar(){
    return(
        <div className="flex flex-col pr-10">  
            <div className="pb-5">
                <h1 className="font-bold">nikhilt.dev</h1>
            </div>
            <div className="font-medium w-40">
                <ul>
                    <li className="hover:bg-red-200"><a href="/">Home</a></li>
                    <li className="hover:bg-red-200"><a href="/about">About</a></li>
                    <li className="hover:bg-red-200"><a href="/blogs">Blogs</a></li>
                    <li className="hover:bg-red-200"><a href="/projexts">Projects</a></li>
                    <li className="hover:bg-red-200"><a href="/archive">Archive</a></li>
                    <li className="hover:bg-red-200"><a href="/tags">Tags</a></li>
                    <li className="hover:bg-indigo-200"><a href="/contact">Contact</a></li>    
                </ul>
            </div>
        </div>
    );
}