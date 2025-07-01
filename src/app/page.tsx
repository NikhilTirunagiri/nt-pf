import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white group/design-root overflow-x-hidden" style={{fontFamily: 'Manrope, "Noto Sans", sans-serif'}}>
      {/* Fixed Sidebar - Desktop only */}
      <div className="hidden md:block fixed left-0 top-0 h-screen w-80 bg-white overflow-y-auto px-6 py-5">
        <div className="layout-content-container flex flex-col bg-white rounded-lg">
          <h1 className="text-black tracking-light text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">Nikhil Tirunagiri</h1>
          <p className="text-black text-base font-normal leading-normal pb-3 pt-1 px-4">
            I'm a computer science student at George Mason University, Virginia. I'm interested in software development, machine learning, and artificial intelligence.
          </p>
          <div className="px-4 py-2">
            <a href="mailto:ntirunag@gmu.edu" className="block text-black text-base font-normal leading-normal underline underline-offset-4 py-1">
              ntirunag@gmu.edu
            </a>
            <a href="https://github.com/NikhilTirunagiri" target="_blank" rel="noopener noreferrer" className="block text-black text-base font-normal leading-normal underline underline-offset-4 py-1">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/nikhiltirunagiri/" target="_blank" rel="noopener noreferrer" className="block text-black text-base font-normal leading-normal underline underline-offset-4 py-1">
              LinkedIn
            </a>
            <a href="#" className="block text-black text-base font-normal leading-normal underline underline-offset-4 py-1">
              Blogs
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile Header - Mobile only */}
      <div className="md:hidden w-full px-6 py-5 bg-white border-b">
        <h1 className="text-black tracking-light text-[24px] font-bold leading-tight mb-2">Nikhil Tirunagiri</h1>
        <p className="text-black text-sm font-normal leading-normal mb-4">
          Computer science student at GMU. Interested in software development, ML, and AI.
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
            <h2 className="text-black text-[32px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Projects</h2>
            
            {/* First Project - Full Width with Text Overlay */}
            <div className="relative mb-8 rounded-lg overflow-hidden bg-white">
              <div className="flex flex-col md:flex-row min-h-[400px]">
                <div className="md:w-1/2 p-8 flex flex-col justify-center bg-white">
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm font-normal leading-normal">Text Scraper</p>
                  </div>
                  <h3 className="text-black text-2xl font-bold leading-tight mb-4">Python script that extracts text from .png files</h3>
                  <p className="text-black text-base leading-relaxed mb-6">A powerful OCR tool that processes image files and converts them to readable text output in the terminal. Built with Python for efficient text extraction.</p>
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
            <div className="relative mb-8 rounded-lg overflow-hidden bg-white">
              <div className="flex flex-col md:flex-row-reverse min-h-[400px]">
                <div className="md:w-1/2 p-8 flex flex-col justify-center bg-white">
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm font-normal leading-normal">Earth PNG</p>
                  </div>
                  <h3 className="text-black text-2xl font-bold leading-tight mb-4">NASA API integration for Earth imagery</h3>
                  <p className="text-black text-base leading-relaxed mb-6">Python application that fetches the latest images of Earth from space using NASA's EPIC API. Displays real-time satellite imagery with automated downloads.</p>
                  <a href="#" className="text-gray-600 text-sm font-medium hover:text-black transition-colors">
                    View project →
                  </a>
                </div>
                <div
                  className="md:w-1/2 min-h-[300px] md:min-h-[400px] bg-center bg-cover bg-no-repeat bg-gradient-to-br from-gray-300 to-gray-500"
                />
              </div>
            </div>

            {/* Third Project - Transformer Model */}
            <div className="relative mb-8 rounded-lg overflow-hidden bg-white">
              <div className="flex flex-col md:flex-row min-h-[400px]">
                <div className="md:w-1/2 p-8 flex flex-col justify-center bg-white">
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm font-normal leading-normal">Solid Spork</p>
                  </div>
                  <h3 className="text-black text-2xl font-bold leading-tight mb-4">Transformer model implementation</h3>
                  <p className="text-black text-base leading-relaxed mb-6">Based on Google's groundbreaking 2016 Transformer research paper. A deep learning model implementation for natural language processing tasks.</p>
                  <a href="#" className="text-gray-600 text-sm font-medium hover:text-black transition-colors">
                    View project →
                  </a>
                </div>
                <div
                  className="md:w-1/2 min-h-[300px] md:min-h-[400px] bg-center bg-cover bg-no-repeat bg-gradient-to-br from-gray-300 to-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
