"use client";

import { useState, useRef, useEffect, KeyboardEvent, ReactNode } from "react";
import { Analytics } from '@vercel/analytics/react';
const asciiFirstName = String.raw`

███╗   ██╗ ██╗ ██╗  ██╗ ██╗  ██╗ ██╗ ██╗
████╗  ██║ ██║ ██║ ██╔╝ ██║  ██║ ██║ ██║
██╔██╗ ██║ ██║ █████╔╝  ███████║ ██║ ██║
██║ ╚██ █║ ██║ ██║  ██╗ ██║  ██║ ██║ ██║
██║ ╚████║ ██║ ██║  ██╗ ██║  ██║ ██║ ███████╗
╚═╝  ╚═══╝ ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝ ╚══════╝
`;

const asciiLastName = String.raw`

████████╗██╗ ██████╗  ██╗   ██╗ ███╗   ██╗  █████╗   ██████╗ ██╗ ██████╗ ██╗
╚══██╔══╝██║ ██╔══██╗ ██║   ██║ ████╗  ██║ ██╔══██╗ ██╔════╝ ██║ ██╔══██╗██║
   ██║   ██║ ██████╔╝ ██║   ██║ ██╔██╗ ██║ ███████║ ██║  ███╗██║ ██████╔╝██║
   ██║   ██║ ██╔══██╗ ██║   ██║ ██║╚██╗██║ ██╔══██║ ██║   ██║██║ ██╔══██╗██║
   ██║   ██║ ██║  ██║ ╚██████╔╝ ██║ ╚████║ ██║  ██║ ╚██████╔╝██║ ██║  ██║██║
   ╚═╝   ╚═╝ ╚═╝  ╚═╝  ╚═════╝  ╚═╝  ╚═══╝ ╚═╝  ╚═╝  ╚═════╝ ╚═╝ ╚═╝  ╚═╝╚═╝

`;

const commands = ['list', 'about', 'projects','github', 'socials', 'home', 'sources'];

interface PopupPosition {
  x: number;
  y: number;
}

const sourcesContent = {
  title: 'sources',
  content:(
    <div className="p-4 text-sm text-black max-h-96 overflow-y-auto" style={{ fontFamily: 'Chicago, Geneva, monospace' }}>
      <p className="mb-4 font-semibold">Sources: </p>
      <ul className="space-y-2 list-disc list-inside mb-4">
        <li>Happy Mac: <span style={{ color: '#000080' }}>https://commons.wikimedia.org/wiki/File:Happy_Mac.svg</span> </li>
        <li>Wallpapers: <span style={{ color: '#000080' }}>https://basicappleguy.com/haberdashery/macintoshwallpapers; https://512pixels.net/projects/default-mac-wallpapers-in-5k/</span></li>
        <li>Sad Mac:<span style={{ color: '#000080' }}>https://commons.wikimedia.org/wiki/File:Sad_mac_(white).jpg</span></li>
      </ul>
    </div>
  )
}

const welcomeContent = {
  title: 'Welcome',
  content: (
    <div className="p-4 text-sm text-black max-h-96 overflow-y-auto" style={{ fontFamily: 'Chicago, Geneva, monospace' }}>
      <p className="mb-4 font-semibold">Hello! I'm Nikhil</p>
      <p className="mb-4">
        a developer passionate about building cool and useful stuff. This is an interactive terminal-based macintosh style portfolio where you can explore my work.
      </p>
      <div className="flex flex-row">
      <p>Enjoy your time on the site! </p> 
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Happy_Mac.svg"></img>
      </div>
      <p className="mb-4 font-semibold">Quick Start:</p>
      <ul className="space-y-2 list-disc list-inside mb-4">
        <li>Type <span style={{ color: '#000080' }}>list</span> to see all available commands</li>
        <li>Type <span style={{ color: '#000080' }}>about</span> to learn more about me</li>
        <li>Type <span style={{ color: '#000080' }}>projects</span> to see my work</li>
        <li>Type <span style={{ color: '#000080' }}>socials</span> to find me online</li>
      </ul>
      <p className="text-xs" style={{ color: '#808080' }}>
        Use the command terminal above to get started. All commands support autocomplete - just start typing!
      </p>
      <br/>
      <p>like this site? make your clone <a 
                  href="https://github.com/NikhilTirunagiri/happy-mac-porftolio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#000080', textDecoration: 'underline' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0000FF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#000080'}
                >
                  github/happy-mac-portfolio
                </a></p>
    </div>
  )
};

export default function Home() {
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [popupContent, setPopupContent] = useState<{ title: string; content: ReactNode }>(welcomeContent);
  const [popupPosition, setPopupPosition] = useState<PopupPosition>({ x: 0, y: 0 });
  const [popupSize, setPopupSize] = useState({ width: 600, height: 500 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Handle autocomplete suggestions
  useEffect(() => {
    if (input.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = commands.filter(cmd => 
      cmd.toLowerCase().startsWith(input.toLowerCase())
    );
    setSuggestions(filtered);
    setSelectedSuggestion(0);
  }, [input]);

  // Reset position when not dragging (for relative positioning)
  useEffect(() => {
    if (!isDragging) {
      // Position will be handled by CSS, just reset if needed
    }
  }, [isDragging]);

  // Handle popup dragging
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!popupRef.current) return;
      const container = popupRef.current.parentElement;
      if (!container) return;
      
      // Calculate position relative to the container
      const containerRect = container.getBoundingClientRect();
      const newY = e.clientY - containerRect.top - dragOffset.y;
      const newX = e.clientX - containerRect.left - dragOffset.x;
      
      setPopupPosition({
        x: newX,
        y: newY,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  // Handle window resizing
  useEffect(() => {
    if (!isResizing) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!popupRef.current) return;
      
      const deltaX = e.clientX - resizeStart.x;
      const deltaY = e.clientY - resizeStart.y;
      
      const newWidth = Math.max(400, resizeStart.width + deltaX);
      const newHeight = Math.max(200, resizeStart.height + deltaY);
      
      setPopupSize({
        width: newWidth,
        height: newHeight,
      });
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, resizeStart]);

  const handleDragStart = (e: React.MouseEvent) => {
    if (!popupRef.current) return;
    const container = popupRef.current.parentElement;
    if (!container) return;
    
    const containerRect = container.getBoundingClientRect();
    const popupRect = popupRef.current.getBoundingClientRect();
    
    // Calculate offset from mouse position to popup's top-left corner, relative to container
    setDragOffset({
      x: e.clientX - containerRect.left - (popupRect.left - containerRect.left),
      y: e.clientY - containerRect.top - (popupRect.top - containerRect.top),
    });
    setIsDragging(true);
  };

  const handleResizeStart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!popupRef.current) return;
    
    const rect = popupRef.current.getBoundingClientRect();
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: rect.width,
      height: rect.height,
    });
    setIsResizing(true);
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === "") return;

    // Add to history
    setCommandHistory(prev => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    // Handle commands
    switch (trimmedCmd) {
      case 'list':
        setPopupContent({
          title: 'Available Commands',
          content: (
            <div className="p-4 text-sm text-black" style={{ fontFamily: 'Chicago, Geneva, monospace' }}>
              <ul className="space-y-2">
                {commands.map(cmd => (
                  <li key={cmd} className="flex items-center gap-2">
                    <span style={{ color: '#000080' }}>{cmd}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        });
        break;

      case 'about':
        setPopupContent({
          title: 'About',
          content: (
            <div className="p-4 text-sm text-black max-h-96 overflow-y-auto" style={{ fontFamily: 'Chicago, Geneva, monospace' }}>
              <p className="mb-4">
                Studying Computer Science at George Mason University. 
                Passionate about building cool and useful stuff — I worked, and have been working in Agentic 
                Development, AI memory systems, and Management Systems for Universities. I love exploring new 
                tech and work on projects that solve real problems and push my skills a little further every time. 
                If it's interesting, I'm ready to dive in.
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li><span style={{ fontWeight: 'bold' }}>Founded Petal</span> (My latest project) - working on an AI powered personal smart glasses</li>
                <li><span style={{ fontWeight: 'bold' }}>Co-founded TheCollegeTech,</span> where I designed and developed management systems for universities</li>
                <li><span style={{ fontWeight: 'bold' }}>Worked as Data Analytics Intern</span> at Eera Tech (Virginia) where I optimized existing agentic workflows and brain stormed AI use cases in company's products</li>
                <li>Exploring AI, Data Analytics Automation, and Quantum Computing</li>
                <li>Love hiking 🏞️</li>
                <p className="font-semibold">My Resume:    
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#000080', textDecoration: 'underline' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0000FF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#000080'}
                >
                   nikhilt.dev/resume.pdf
                </a>
                </p>
              </ul>
            </div>
          )
        });
        break;

      case 'experience':
        setPopupContent({
          title: 'Experience',
          content: (
            <div className="p-4 text-sm text-black" style={{ fontFamily: 'Chicago, Geneva, monospace' }}>
              <p>Experience information coming soon...</p>
            </div>
          )
        });
        break;

      case 'github':
        setPopupContent({
          title: 'GitHub',
          content: (
            <div className="p-4 text-sm text-black" style={{ fontFamily: 'Chicago, Geneva, monospace' }}>
              <p className="mb-4">Visit my GitHub profile:</p>
              <a 
                href="https://github.com/NikhilTirunagiri" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#000080', textDecoration: 'underline' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0000FF'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#000080'}
              >
                https://github.com/NikhilTirunagiri
              </a>
            </div>
          )
        });
        break;

      case 'socials':
        setPopupContent({
          title: 'Social Links',
          content: (
            <div className="p-4 text-sm text-black space-y-3" style={{ fontFamily: 'Chicago, Geneva, monospace' }}>
              <div>
                <p className="font-semibold mb-1">Email:</p>
                <a 
                  href="mailto:ntirunag@gmu.edu" 
                  style={{ color: '#000080', textDecoration: 'underline' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0000FF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#000080'}
                >
                  ntirunag@gmu.edu
                </a>
              </div>
              <div>
                <p className="font-semibold mb-1">GitHub:</p>
                <a 
                  href="https://github.com/NikhilTirunagiri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#000080', textDecoration: 'underline' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0000FF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#000080'}
                >
                  https://github.com/NikhilTirunagiri
                </a>
              </div>
              <div>
                <p className="font-semibold mb-1">LinkedIn:</p>
                <a 
                  href="https://www.linkedin.com/in/nikhiltirunagiri/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#000080', textDecoration: 'underline' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0000FF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#000080'}
                >
                  https://www.linkedin.com/in/nikhiltirunagiri/
                </a>
              </div>
            </div>
          )
        });
        break;

      case 'projects':
        setPopupContent({
          title: 'Projects',
          content: (
            <div className="p-4 text-sm text-black max-h-96 overflow-y-auto" style={{ fontFamily: 'Chicago, Geneva, monospace' }}>
              <ul className="space-y-4">
                <li>
                  <p className="font-semibold mb-1">Petal</p>
                  <p>Building AI powered personal smart glasses</p>
                </li>

                <li>
                  <p className="font-semibold mb-1">TheCollegeTech</p>
                  <p>Designed and built MVPs for Management systems for universities deployed across colleges in India</p>
                </li>
                <li>
                  <p className="font-semibold mb-1">Skills</p>
                  <p> <span className="font-semibold mb-1">Programming Languages: </span>Python, Java, C, C++, Rust, Go, TypeScript, JavaScript, PHP, R, Bash</p>
                  <p> <span className="font-semibold mb-1">Frameworks: </span>Django, React, Next.js, FastAPI, RESTful APIs</p>
                  <p> <span className="font-semibold mb-1">Databases: </span>PostgreSQL, Redis, Supabase</p>
                  <p> <span className="font-semibold mb-1">Cloud & DevOps: </span>AWS (EC2, S3), Microsoft Azure, Docker, Git</p>
                </li>
              </ul>
            </div>                     
          )
        });
        break;

      case 'home':
        setPopupContent(welcomeContent);
        break;
      case 'sources':
        setPopupContent(sourcesContent);
        break;
      default:
        setPopupContent({
          title: 'Error',
          content: (
            <div className="p-4 text-sm text-black" style={{ fontFamily: 'Chicago, Geneva, monospace' }}>
              <div className="flex items-center gap-3 mb-1">
                <p style={{ color: '#800000', margin: 0 }}>System didn't recognize the command</p>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Sad_mac_%28white%29.jpg" 
                  alt="Sad Mac icon" 
                  width={28}
                  height={28}
                  style={{ display: 'inline-block', verticalAlign: 'middle', background: '#fff', borderRadius: '4px', border: '1px solid #bbb' }}
                />
              </div>
              <p className="mt-2">Type "list" to see available commands.</p>
            </div>
          )
        });
        break;
    }

    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (suggestions.length > 0 && selectedSuggestion >= 0) {
        executeCommand(suggestions[selectedSuggestion]);
      } else {
        executeCommand(input);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex >= 0) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'Tab' && suggestions.length > 0) {
      e.preventDefault();
      executeCommand(suggestions[selectedSuggestion]);
    }
  };

  return (
    <div 
      className="min-h-screen m-0 mt-0 p-5"
      style={{
        backgroundColor: '#B0B0B0',
        backgroundImage: 'url(/wallpaper3.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        fontFamily: 'Chicago, Geneva, "MS Sans Serif", monospace'
      }}
    >
      {/* ASCII Art Window */}
      <div className="mb-5" style={{ maxWidth: '800px', margin: '20px auto' }}>
        <div className="bg-white overflow-hidden border-2 border-black" style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' }}>
          {/* Title bar */}
          <div
            className="px-2 py-1 flex items-center gap-1.5 cursor-move select-none border-b border-black"
            style={{ 
              fontFamily: 'Chicago, "MS Sans Serif", monospace',
              fontSize: '12px',
              fontWeight: 'bold',
              color: '#000000',
              backgroundColor: '#C0C0C0',
              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(0,0,0,0.05) 1px, rgba(0,0,0,0.05) 2px)',
              height: '20px',
              lineHeight: '18px',
            }}
          >
            <span className="flex-1 text-center" style={{ letterSpacing: '0.5px' }}>
              ~ Nikhil Tirunagiri ~
            </span>
          </div>
          
          {/* Window content */}
          <div className="bg-white p-4">
            <div className="flex flex-row gap-2 justify-center">
              <pre className="text-black leading-3 overflow-none" style={{ fontSize: "0.4rem", fontFamily: 'monospace' }}>
                {asciiFirstName}
              </pre>
              <pre className="text-black leading-3 overflow-none" style={{ fontSize: "0.4rem", fontFamily: 'monospace' }}>
                {asciiLastName}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Input Window */}
      <div className="flex flex-column w-full" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div className="bg-white border-2 border-black relative w-full" style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))', width: '100%', minHeight: '60px' }}>
          {/* Title bar */}
          <div
            className="px-2 py-1 flex items-center gap-1.5 cursor-move select-none border-b border-black"
            style={{ 
              fontFamily: 'Chicago, "MS Sans Serif", monospace',
              fontSize: '12px',
              fontWeight: 'bold',
              color: '#000000',
              backgroundColor: '#C0C0C0',
              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(0,0,0,0.05) 1px, rgba(0,0,0,0.05) 2px)',
              height: '20px',
              lineHeight: '18px',
            }}
          >
            {/* Close button */}
            <button
              className="w-4 h-4 flex items-center justify-center flex-shrink-0 border border-black"
              style={{ 
                backgroundColor: '#C0C0C0',
                boxShadow: 'inset -1px -1px 0 #000, inset 1px 1px 0 #fff',
                marginRight: '2px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E0E0E0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#C0C0C0';
              }}
            >
              <span 
                className="text-black leading-none font-bold" 
                style={{ 
                  fontSize: '10px',
                  lineHeight: '1',
                  marginTop: '-1px'
                }}
              >
                ×
              </span>
            </button>
            <span className="flex-1 text-center" style={{ letterSpacing: '0.5px' }}>
              Command Terminal
            </span>
          </div>
          
          {/* Window content */}
          <div className="bg-white p-4" style={{ minHeight: '40px' }}>
            <div className="flex flex-row gap-2 w-full items-center">
              <span className="text-black font-mono" style={{ fontFamily: 'monospace' }}>$</span>
              <div className="flex-1 relative" style={{ zIndex: 1000 }}>
                <input 
                  ref={inputRef}
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="bg-transparent border-none outline-none text-black font-mono w-full placeholder:text-gray-500 placeholder:opacity-70"
                  style={{ fontFamily: 'monospace' }}
                  autoComplete="off"
                  placeholder="type `$list` for a list of commands"
                />
                {/* Autocomplete suggestions */}
                {suggestions.length > 0 && input.trim() !== "" && (
                  <div 
                    className="absolute top-full left-0 mt-1 z-[1001] min-w-[200px] border-2 border-black"
                    style={{
                      backgroundColor: '#FFFFFF',
                      filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
                      position: 'absolute',
                    }}
                  >
                    {suggestions.map((suggestion, index) => (
                      <div
                        key={suggestion}
                        className={`px-3 py-1 text-black font-mono text-sm cursor-pointer border-b border-black ${
                          index === selectedSuggestion ? 'bg-blue-200' : 'hover:bg-blue-100'
                        }`}
                        style={{ 
                          fontFamily: 'monospace',
                          backgroundColor: index === selectedSuggestion ? '#B0D0FF' : 'transparent'
                        }}
                        onClick={() => executeCommand(suggestion)}
                        onMouseEnter={(e) => {
                          if (index !== selectedSuggestion) {
                            e.currentTarget.style.backgroundColor = '#E0E8FF';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (index !== selectedSuggestion) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }
                        }}
                      >
                        {suggestion}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Retro Macintosh Window - System 7 Style */}
      {popupContent && (
        <div className="w-full flex justify-center mt-5 relative" style={{ maxWidth: '800px', margin: '20px auto 0', minHeight: '200px' }}>
          <div
            ref={popupRef}
            className="absolute z-50"
            style={{
              left: popupPosition.x === 0 ? '50%' : `${popupPosition.x}px`,
              top: popupPosition.y === 0 ? '0' : `${popupPosition.y}px`,
              transform: popupPosition.x === 0 ? 'translateX(-50%)' : 'none',
              minWidth: '400px',
              width: `${popupSize.width}px`,
              height: `${popupSize.height}px`,
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
            }}
          >
          {/* Classic Mac OS System 7 style window */}
          <div className="bg-white overflow-hidden border-2 border-black relative" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Title bar with pinstripe pattern */}
            <div
              className="px-2 py-1 flex items-center gap-1.5 cursor-move select-none border-b border-black flex-shrink-0"
              onMouseDown={handleDragStart}
              style={{ 
                fontFamily: 'Chicago, "MS Sans Serif", monospace',
                fontSize: '12px',
                fontWeight: 'bold',
                color: '#000000',
                backgroundColor: '#C0C0C0',
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(0,0,0,0.05) 1px, rgba(0,0,0,0.05) 2px)',
                height: '20px',
                lineHeight: '18px',
              }}
            >
              {/* Close button - black square with 3D effect */}
              <button
                onClick={() => {
                  setPopupContent(welcomeContent);
                }}
                className="w-4 h-4 flex items-center justify-center flex-shrink-0 border border-black"
                style={{ 
                  backgroundColor: '#C0C0C0',
                  boxShadow: 'inset -1px -1px 0 #000, inset 1px 1px 0 #fff',
                  marginRight: '2px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E0E0E0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#C0C0C0';
                }}
              >
                <span 
                  className="text-black leading-none font-bold" 
                  style={{ 
                    fontSize: '10px',
                    lineHeight: '1',
                    marginTop: '-1px'
                  }}
                >
                  ×
                </span>
              </button>
              <span className="flex-1 text-center" style={{ letterSpacing: '0.5px' }}>
                {popupContent.title}
              </span>
            </div>
            
            {/* Window content */}
            <div 
              className="bg-white flex-1 overflow-auto"
              style={{
                backgroundColor: '#FFFFFF',
                minHeight: '100px',
              }}
            >
              {popupContent.content}
            </div>
            
            {/* Resize handle - bottom right corner */}
            <div
              onMouseDown={handleResizeStart}
              className="absolute bottom-0 right-0 cursor-nwse-resize"
              style={{
                width: '16px',
                height: '16px',
                backgroundColor: '#C0C0C0',
                borderTop: '1px solid #000',
                borderLeft: '1px solid #000',
                backgroundImage: `
                  repeating-linear-gradient(135deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)
                `,
                zIndex: 10,
              }}
            />
          </div>
          </div>
        </div>
      )}
      <Analytics />
    </div>
  );
}
