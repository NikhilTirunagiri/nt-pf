import Image from "next/image";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FDFBFF] group/design-root overflow-x-hidden" style={{fontFamily: 'Manrope, "Noto Sans", sans-serif'}}>
      {/* Fixed Sidebar - Desktop only */}
      <div className="hidden md:block fixed left-0 top-0 h-screen w-80 bg-[#F2ECEE] overflow-y-auto px-6 py-5">
        <div className="layout-content-container flex flex-col">
          <h1 className="text-black tracking-light text-[56px] leading-tight px-4 text-left pb-3 pt-6">Hi! I'm Nikhil.</h1>
          <p className="text-black text-base font-normal leading-normal pb-3 pt-1 px-4">
          Full Stack Developer · AI · Data Science
          </p>
          <div className="px-4 py-2">
            <a
              href="mailto:ntirunag@gmu.edu"
              className="group block text-black text-base font-normal leading-normal underline underline-offset-4 py-1 transition-colors"
            >
              <span className="inline-flex items-center underline underline-offset-5">
                ntirunag@gmu.edu
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
                GitHub
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
                LinkedIn
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
            </a>
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
          <a href="#" className="text-black underline underline-offset-4">Blogs</a>
        </div>
      </div>
      
      {/* Scrollable Content Area */}
      <div className="md:ml-80 min-h-screen overflow-y-auto">
          <div className="layout-content-container flex flex-col max-w-none px-6 py-5">
            <h2 className="text-black text-[32px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">About Me</h2>
            
            {/* About Me Section */}
            <div className="relative mb-8 rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row min-h-[400px]">
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-black text-2xl font-bold leading-tight mb-4">I'm a Developer & a Computer Science Student.</h3>
                  <p className="text-black text-base leading-relaxed mb-4">
                    Currently working on my bachelor's in Computer Science at George Mason University. I'm all about building cool stuff—whether it's a large-scale app, a small-scale side project, or even a machine learning model. <b>If it's interesting, I'm in.</b>
                  </p>
                  <p className="text-black text-base leading-relaxed mb-4">
                    Love exploring new tech ( especially Quantum Computing! ), finding creative solutions to everyday problems, and building cool interesting projects that push my skills a little further each time.
                  </p>
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm font-medium mb-2">Interests & Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Full-Stack Development</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">AI</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Machine Learning</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Data Science</span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Problem Solving</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Open Source</span>
                      <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">Music Composition & Production</span>
                    </div>
                  </div>
                </div>
                <div
                  className="md:w-1/2 min-h-[300px] md:min-h-[400px] bg-center bg-cover bg-no-repeat bg-gradient-to-br from-blue-300 to-indigo-500"
                />
              </div>
            </div>

            <h2 className="text-black text-[32px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Work Experience</h2>
            
            {/* Data Analytics Intern */}
            <div className="relative mb-8 rounded-lg overflow-hidden">
              <div className="p-8">
                <div className="mb-4">
                  <p className="text-gray-600 text-sm font-normal leading-normal">Jan 2025 – May 2025</p>
                </div>
                <h3 className="text-black text-2xl font-bold leading-tight mb-4">Data Analytics Intern</h3>
                <p className="text-black text-base leading-relaxed mb-4">Eera Technology, Virginia</p>
                <ul className="text-black text-sm leading-relaxed mb-4 space-y-2">
                  <li>• Built and tested AI/ML use cases for healthcare analytics: Researched, designed, and implemented machine learning models to address specific challenges in healthcare analytics</li>
                  <li>• Developed AI/ML solutions for retail analytics: Implemented machine learning use cases tailored to retail analytics, including recommendation systems and sales forecasting optimization</li>
                  <li>• Data preparation and visualization: Prepared raw datasets by cleaning, transforming, and standardizing data; created interactive visualizations and dashboards using Tableau</li>
                  <li>• Conducted market research on analytics: Investigated current trends and emerging opportunities in data analytics across industries to inform business strategies</li>
                  <li>• Feature development for applications: Contributed to building new features for analytics applications, writing and testing code, and integrating APIs</li>
                </ul>
                <div className="mb-6">
                  <p className="text-gray-600 text-sm font-medium mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Python</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Tableau</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">React</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">RESTful APIs</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Machine Learning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* IT Technician */}
            <div className="relative mb-8 rounded-lg overflow-hidden">
              <div className="p-8">
                <div className="mb-4">
                  <p className="text-gray-600 text-sm font-normal leading-normal">Jan 2024 – Present</p>
                </div>
                <h3 className="text-black text-2xl font-bold leading-tight mb-4">CEC IT Technician and Help Desk</h3>
                <p className="text-black text-base leading-relaxed mb-4">George Mason University</p>
                <ul className="text-black text-sm leading-relaxed mb-4 space-y-2">
                  <li>• Provided first-level technical support to Faculty and staff, ensuring uninterrupted academic and research activities</li>
                  <li>• Customized Linux, Windows, and Mac operating systems and software to meet the unique needs of each user, optimizing their work environments for maximum efficiency</li>
                  <li>• Oversaw and resolved complex technical issues across the College of Engineering's student and research labs, managing over 250 workstations and handling network requests</li>
                  <li>• Imaged, troubleshot, and set up Linux and Windows workstations for both personal and research purposes, tailoring operating systems and software to meet specific requirements</li>
                </ul>
                <div className="mb-6">
                  <p className="text-gray-600 text-sm font-medium mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">Linux</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Windows</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">macOS</span>
                    {/* <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">MATLAB</span> */}
                    {/* <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Clonezilla</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">PXE Boot</span> */}
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-black text-[32px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Projects</h2>
            
            {/* First Project - Full Width with Text Overlay */}
            <div className="relative mb-8 rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row min-h-[400px]">
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm font-normal leading-normal">PlaceEasy</p>
                  </div>
                  <h3 className="text-black text-2xl font-bold leading-tight mb-4">Comprehensive placement management platform</h3>
                  <p className="text-black text-base leading-relaxed mb-4">A full-stack web application designed to streamline the campus placement process. Features student profile management, company registration, application tracking, and automated matching between students and job opportunities.</p>
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm font-medium mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Next.js</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">REST API</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Python</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Django</span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">SQLite</span>
                      <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">Git</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Tailwind CSS</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">TypeScript</span>
        
                    </div>
                  </div>
                  <a href="#" className="text-gray-600 text-sm font-medium hover:text-black transition-colors">
                    View project →
                  </a>
                </div>
                <div
                  className="md:w-1/2 min-h-[300px] md:min-h-[400px] bg-center bg-cover bg-no-repeat bg-gradient-to-br from-gray-300 to-gray-500"
                />
              </div>
            </div>

            {/* Second Project - Full Width with Text Overlay */}
            <div className="relative mb-8 rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row-reverse min-h-[400px]">
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm font-normal leading-normal">Vidya LMS</p>
                  </div>
                  <h3 className="text-black text-2xl font-bold leading-tight mb-4">Modern learning management system</h3>
                  <p className="text-black text-base leading-relaxed mb-4">A comprehensive educational platform built to facilitate online learning. Features course management, assignment submission, grade tracking, and interactive communication tools for students and instructors.</p>
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm font-medium mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Next.js</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">REST API</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Python</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Supabase</span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">SQLite</span>
                      <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">Git</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Tailwind CSS</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">JavaScript</span>
                      <span className="px-3 py-1 bg-gray-100 text-blue-800 text-xs rounded-full">TypeScript</span>
                      
                    </div>
                  </div>
                  <a href="#" className="text-gray-600 text-sm font-medium hover:text-black transition-colors">
                    View project →
                  </a>
                </div>
                <div
                  className="md:w-1/2 min-h-[300px] md:min-h-[400px] bg-center bg-cover bg-no-repeat bg-gradient-to-br from-gray-300 to-gray-500"
                />
              </div>
            </div>

            {/* Third Project - Data Analytics Workflow Automation */}
            <div className="relative mb-8 rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row min-h-[400px]">
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  {/* <div className="mb-4">
                    <p className="text-gray-600 text-sm font-normal leading-normal">Feb 2025 – In progress</p>
                  </div> */}
                  <h3 className="text-black text-2xl font-bold leading-tight mb-4">Data Analytics Workflow Automation</h3>
                  <ul className="text-black text-sm leading-relaxed mb-4 space-y-2">
                    <li>• Develop an AI-driven platform that automates data analysis, insight generation, and executive-level summarization using advanced machine learning models, aiming to reduce manual analytics effort for business users.</li>
                    <li>• Leverage LangChain to interpret both structured and unstructured data from diverse sources, enabling intelligent context-aware reporting with automated summaries for datasets.</li>
                    <li>• Engineered a React.js front end for AI-driven analytics platform; empowered business users to configure models and upload CSV files, resulting in generation of insights.</li>
                    <li>• Orchestrated backend infrastructure with Django, managing REST API endpoints to trigger machine learning model execution and asynchronous processing of complex data workflows, improving pipeline efficiency.</li>
                    <li>• Deployed the application on scalable cloud infrastructure using AWS EC2 and Azure VMs, ensuring high availability, low-latency processing, and secure access for up to 100 concurrent users in pilot testing.</li>
                  </ul>
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm font-medium mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Python</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">LangChain</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Django</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">AWS</span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Azure</span>
                    </div>
                  </div>
                </div>
                <div
                  className="md:w-1/2 min-h-[300px] md:min-h-[400px] bg-center bg-cover bg-no-repeat bg-gradient-to-br from-yellow-100 to-blue-200"
                />
              </div>
            </div>
          </div>
        </div>
      <Analytics />
    </div>
  );
}
