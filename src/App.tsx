import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import AIAssistant from './components/AIAssistant';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Internships from './components/Internships';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = ['home', 'about', 'education', 'internships', 'projects', 'techstack', 'terminal', 'contact'];
          const scrollPosition = window.scrollY + 100;

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Set loaded state after initial render
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Scroll to home section on initial load (after DOM is ready)
    setTimeout(() => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'auto' });
        // Force scroll to top to ensure home is visible
        window.scrollTo(0, 0);
      }
    }, 200); // Increased timeout for mobile devices

    return () => clearTimeout(timer);
  }, []);

  // Custom cursor effect (desktop only)
  useEffect(() => {
    // Only add custom cursor on desktop devices
    if (window.innerWidth > 768) {
      // Debug: Check if cursor is working
      console.log('Initializing custom cursor for desktop');
      
      // Add a test to ensure cursor is visible
      const testCursorVisibility = () => {
        if (cursor && cursor.style.opacity === '1') {
          console.log('Custom cursor is visible');
        } else {
          console.log('Custom cursor visibility issue detected');
        }
      };
      
      setTimeout(testCursorVisibility, 500);
      const cursor = document.createElement('div');
      cursor.className = 'custom-cursor';
      cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: linear-gradient(45deg, #06b6d4, #3b82f6);
        border: 2px solid rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        pointer-events: none;
        z-index: 99999;
        mix-blend-mode: difference;
        transform: translate3d(0, 0, 0);
        will-change: transform;
        transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 1;
        box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
        top: 0;
        left: 0;
      `;
      document.body.appendChild(cursor);
      
      // Set initial position immediately
      cursor.style.transform = 'translate3d(0, 0, 0)';

      let rafId: number;
      let currentX = 0;
      let currentY = 0;
      
      const moveCursor = (e: MouseEvent) => {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          currentX = e.clientX - 10;
          currentY = e.clientY - 10;
          cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        });
      };

      const scaleCursor = () => {
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(1.5)`;
      };

      const resetCursor = () => {
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(1)`;
      };

      document.addEventListener('mousemove', moveCursor, { passive: true });
      document.addEventListener('mousedown', scaleCursor);
      document.addEventListener('mouseup', resetCursor);

      // Add hover effects for interactive elements
      const interactiveElements = document.querySelectorAll('button, a, input, textarea');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', scaleCursor);
        el.addEventListener('mouseleave', resetCursor);
      });

      // Fallback: show default cursor if custom cursor fails
      const fallbackTimer = setTimeout(() => {
        if (!cursor.parentNode || cursor.style.opacity === '0') {
          console.log('Custom cursor failed, showing default cursor');
          document.body.style.cursor = 'auto';
          // Remove the cursor: none from CSS
          const style = document.createElement('style');
          style.textContent = `
            @media (min-width: 769px) {
              * { cursor: auto !important; }
              button, a, input, textarea, select { cursor: pointer !important; }
            }
          `;
          document.head.appendChild(style);
        }
      }, 1000);

      return () => {
        document.removeEventListener('mousemove', moveCursor);
        document.removeEventListener('mousedown', scaleCursor);
        document.removeEventListener('mouseup', resetCursor);
        cancelAnimationFrame(rafId);
        clearTimeout(fallbackTimer);
        if (document.body.contains(cursor)) {
          document.body.removeChild(cursor);
        }
        // Restore default cursor
        document.body.style.cursor = 'auto';
      };
    }
  }, []);

  return (
    <ThemeProvider>
      <div className={`min-h-screen bg-gray-900 dark:bg-gray-900 bg-white text-gray-900 dark:text-white overflow-x-hidden transition-all duration-1000 ease-out smooth-animate ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <Hero />
        <About />
        <Education />
        <Internships />
        <Projects />
        <TechStack />
        <Terminal />
        <Contact />
        <AIAssistant />
        
        {/* Footer */}
        <footer className="bg-black dark:bg-black bg-gray-100 py-8 border-t border-gray-800 dark:border-gray-800 border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400 dark:text-gray-400 text-gray-600">
                © 2025 Avi Sharma. Built with React, TypeScript, and Tailwind CSS.
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-gray-500 text-sm mt-2">
                Designed and developed with ❤️ for the developer community
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;