
import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { toast } from "sonner";

interface NewspaperLayoutProps {
  children: React.ReactNode;
  title?: string;
  date?: string;
}

const pages = [
  { path: "/", label: "Dashboard" },
  { path: "/education", label: "Education" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" }
];

export const NewspaperLayout: React.FC<NewspaperLayoutProps> = ({
  children,
  title = "My Portfolio",
  date = "May 22, 2025"
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<"forward" | "backward" | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const [currentPageIndex, setCurrentPageIndex] = useState(() => {
    return pages.findIndex(page => page.path === location.pathname);
  });

  useEffect(() => {
    // Update the current page index when location changes
    const index = pages.findIndex(page => page.path === location.pathname);
    setCurrentPageIndex(index !== -1 ? index : 0);
  }, [location.pathname]);

  const handlePageTurn = (direction: "forward" | "backward") => {
    if (isAnimating) return;
    
    let nextPageIndex;
    if (direction === "forward") {
      nextPageIndex = (currentPageIndex + 1) % pages.length;
    } else {
      nextPageIndex = (currentPageIndex - 1 + pages.length) % pages.length;
    }

    setIsAnimating(true);
    setAnimationDirection(direction);

    const nextPath = pages[nextPageIndex].path;
    
    // Apply animation class
    if (pageRef.current) {
      pageRef.current.classList.add(direction === "forward" ? "animate-page-turn" : "animate-page-turn-reverse");
      
      // After animation completes, navigate and reset
      setTimeout(() => {
        navigate(nextPath);
        setIsAnimating(false);
        setAnimationDirection(null);
        
        if (pageRef.current) {
          pageRef.current.classList.remove("animate-page-turn", "animate-page-turn-reverse");
        }
        
        toast(`Turned to ${pages[nextPageIndex].label} page`);
      }, 600); // Match the animation duration
    }
  };

  const getPageColor = () => {
    switch(currentPageIndex) {
      case 0: return "bg-gradient-to-br from-paper to-paper-sepia/80";
      case 1: return "bg-gradient-to-br from-paper to-paper-blue/50";
      case 2: return "bg-gradient-to-br from-paper to-paper-green/50";
      case 3: return "bg-gradient-to-br from-paper to-paper-yellow/50";
      case 4: return "bg-gradient-to-br from-paper to-paper-pink/50";
      default: return "bg-gradient-to-br from-paper to-paper-sepia/80";
    }
  };

  return (
    <div className="min-h-screen bg-paper-aged p-2 md:p-6 bg-paper-texture">
      <div className="w-full bg-paper border-b-4 border-double border-paper-fold p-3 md:p-4 shadow-newspaper mb-4">
        <div className="newspaper-title">{title}</div>
        <div className="flex justify-between items-center text-sm mt-2">
          <span className="text-newspaper-accent1 font-semibold">Vol. 1, No. 1</span>
          <span className="text-newspaper-accent2 font-semibold">{date}</span>
        </div>
      </div>
      
      <div className="newspaper-page shadow-page">
        <div 
          ref={pageRef} 
          className={`newspaper-page-content ${getPageColor()}`}
        >
          {!isAnimating && (
            <>
              <button 
                onClick={() => handlePageTurn("backward")} 
                className="page-turn-btn page-turn-btn-left"
                disabled={isAnimating}
                aria-label="Previous page"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <button 
                onClick={() => handlePageTurn("forward")} 
                className="page-turn-btn page-turn-btn-right"
                disabled={isAnimating}
                aria-label="Next page"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
          
          <div className="mb-4 text-center">
            <div className="inline-block border-b-2 border-newspaper-accent1 pb-1 px-6">
              <h2 className="newspaper-headline">
                {pages[currentPageIndex]?.label || "Dashboard"}
              </h2>
            </div>
          </div>
          
          <div className="newspaper-divider"></div>
          
          {children}
        </div>
      </div>
    </div>
  );
};

export default NewspaperLayout;
