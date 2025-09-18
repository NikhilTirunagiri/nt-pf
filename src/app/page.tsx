import Image from "next/image";
import { Analytics } from "@vercel/analytics/next"
// import TextPressure from "@/components/TextPressure"
import DecryptedText from "@/components/DecryptedText"
import GridDistortion from "@/components/GridDistortion"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FDFBFF] group/design-root overflow-x-hidden" style={{fontFamily: 'Manrope, "Noto Sans", sans-serif'}}>
      {/* Fixed Sidebar - Desktop only */}
      <div className="hidden md:block fixed left-0 top-0 h-screen w-80 bg-[#F2ECEE] overflow-y-auto px-6 py-5">
        <div className="layout-content-container flex flex-col" >
          <h1 className="text-black tracking-light text-[56px] leading-tight px-4 text-left pb-3 pt-6"><DecryptedText
            text="Hi! I'm Nikhil."
            animateOn="view"
            revealDirection="start"
            speed={60}
            maxIterations={20}
            useOriginalCharsOnly={false}/>
          </h1> 
          <p className="text-black text-base font-normal leading-normal pb-3 pt-1 px-4">
            <DecryptedText
            text="Full Stack Developer · AI · Data Science"
            animateOn="view"
            revealDirection="start"
            speed={65}
            maxIterations={25}
            useOriginalCharsOnly={false}/>
          {/* Full Stack Developer · AI · Data Science */}  
          </p>
          <div className="px-4 py-2">
            <a
              href="mailto:ntirunag@gmu.edu"
              className="group block text-black text-base font-normal leading-normal underline underline-offset-4 py-1 transition-colors"
            >
              <span className="inline-flex items-center underline underline-offset-5">
                <DecryptedText
                text="ntirunag@gmu.edu"
                animateOn="view"
                revealDirection="start"
                speed={70}
                maxIterations={30}
                useOriginalCharsOnly={false}/>
                <span
                  className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  aria-hidden="true"
                >
                  <svg
                    className="inline-block w-4 h-4 align-middle"
                    viewBox="0 0 16 16"
                    fill="none"
                    
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L12 4M12 4H6M12 4V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      transform="rotate(0 8 8)"
                    />
                  </svg>
                </span>
              </span>
            </a>
            <a
              href="https://github.com/NikhilTirunagiri"
              target="_blank"
              rel="noopener noreferrer"
              className="group block text-black text-base font-normal leading-normal underline underline-offset-4 py-1 transition-colors"
            >
              <span className="inline-flex items-center underline underline-offset-5">
                <DecryptedText
                text="GitHub"
                animateOn="view"
                revealDirection="start"
                speed={70}
                maxIterations={30}
                useOriginalCharsOnly={false}/>
                <span
                  className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  aria-hidden="true"
                >
                  <svg
                    className="inline-block w-4 h-4 align-middle"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L12 4M12 4H6M12 4V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      transform="rotate(0 8 8)"
                    />
                  </svg>
                </span>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/nikhiltirunagiri/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block text-black text-base font-normal leading-normal underline underline-offset-4 py-1 transition-colors"
            >
              <span className="inline-flex items-center underline underline-offset-5">
                <DecryptedText
                text="LinkedIn"
                animateOn="view"
                revealDirection="start"
                speed={70}
                maxIterations={30}
                useOriginalCharsOnly={false}/>
                <span
                  className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  aria-hidden="true"
                >
                  <svg
                    className="inline-block w-4 h-4 align-middle"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L12 4M12 4H6M12 4V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      transform="rotate(0 8 8)"
                    />
                  </svg>
                </span>
              </span>
            </a>
            {/* <a
              href="#"
              className="group block text-black text-base font-normal leading-normal underline underline-offset-4 py-1 transition-colors"
            >
              <span className="inline-flex items-center underline underline-offset-5">
                Blogs
                <span
                  className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  aria-hidden="true"
                >
                  <svg
                    className="inline-block w-4 h-4 align-middle"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L12 4M12 4H6M12 4V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      transform="rotate(0 8 8)"
                    />
                  </svg>
                </span>
              </span>
            </a> */}
          </div>
        </div>
      </div>
      
      {/* Mobile Header - Mobile only */}
      <div className="md:hidden w-full px-6 py-5 bg-[#FDFBFF] border-b">
        <h1 className="text-black tracking-light text-[24px] font-bold leading-tight mb-2 text-[#C1E7FE]"> Hi! I'm Nikhil.</h1>
        <p className="text-black text-sm font-normal leading-normal mb-4">
          Full Stack Developer · AI · Data Science
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <a href="mailto:ntirunag@gmu.edu" className="text-black underline underline-offset-4">Email</a>
          <a href="https://github.com/NikhilTirunagiri" target="_blank" rel="noopener noreferrer" className="text-black underline underline-offset-4">GitHub</a>
          <a href="https://www.linkedin.com/in/nikhiltirunagiri/" target="_blank" rel="noopener noreferrer" className="text-black underline underline-offset-4">LinkedIn</a>
          {/* <a href="#" className="text-black underline underline-offset-4">Blogs</a> */}
        </div>
      </div>
      
      {/* Scrollable Content Area */}
      <div className="md:ml-80 min-h-screen overflow-y-auto">
          <div className="layout-content-container flex flex-col max-w-none px-6 py-5">
            {/* Main Content Section */}
            <div className="relative mb-8 rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row min-h-[400px]">
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="text-black text-2xl font-bold leading-tight mb-4">
                      <DecryptedText
                        text="About me :)"
                        animateOn="view"
                        revealDirection="start"
                        speed={50}
                        maxIterations={15}
                        useOriginalCharsOnly={false}
                      />
                    </h3>
                    <p className="text-black text-base leading-relaxed mb-6">
                      <DecryptedText
                        text="I'm currently working on getting my Comp. Sci Bachelor's Degree at George Mason University. Passionate about building cool and useful stuff — I worked, and have been working in Agentic Development, AI memory systems, and Management Systems for Universities. I love exploring new tech and creating projects that solve real problems and push my skills a little further every time. If it's interesting, I'm ready to dive in."
                        animateOn="view"
                        revealDirection="start"
                        speed={45}
                        maxIterations={20}
                        useOriginalCharsOnly={false}
                      />
                    </p>
                    <ul className="text-black text-base leading-relaxed space-y-3">
                      <li>
                        <DecryptedText
                          text="• Founded Petal (My latest project) - working on an AI powered personal memory system with cross-platform integration"
                          animateOn="view"
                          revealDirection="start"
                          speed={40}
                          maxIterations={18}
                          useOriginalCharsOnly={false}
                        />
                      </li>
                      <li>
                        <DecryptedText
                          text="• Co-founded TheCollegeTech, where I designed and developed management systems for universities that are currently being deployed across colleges in India"
                          animateOn="view"
                          revealDirection="start"
                          speed={40}
                          maxIterations={18}
                          useOriginalCharsOnly={false}
                        />
                      </li>
                      <li>
                        <DecryptedText
                          text="• Built full-stack applications including PlaceEasy and Vidya LMS platforms"
                          animateOn="view"
                          revealDirection="start"
                          speed={40}
                          maxIterations={18}
                          useOriginalCharsOnly={false}
                        />
                      </li>
                      <li>
                        <DecryptedText
                          text="• Exploring AI, Data Analytics Automation, and Quantum Computing"
                          animateOn="view"
                          revealDirection="start"
                          speed={40}
                          maxIterations={18}
                          useOriginalCharsOnly={false}
                        />
                      </li>
                      <li>• Love Hiking <span className="text-xl">🏞️</span></li>
                    </ul>
                  </div>
                <div className="md:w-1/2 min-h-[300px] md:min-h-[400px] flex items-start justify-start pt-6 pl-15">
                  <div className="relative w-72 h-72 md:w-96 md:h-96">
                    <div className="absolute inset-0">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <GridDistortion
                          imageSrc="/IMG_1316.png"
                          grid={400}
                          mouse={0.1}
                          strength={0.05}
                          relaxation={0.9}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Analytics />
    </div>
  );
}
