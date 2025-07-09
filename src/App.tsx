import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
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

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Scroll to home section on initial load
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'auto' });
    }
  }, []);

  // Custom cursor effect
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: linear-gradient(45deg, #06b6d4, #3b82f6);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
      transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 10 + 'px';
      cursor.style.top = e.clientY - 10 + 'px';
    };

    const scaleCursor = () => {
      cursor.style.transform = 'scale(1.5)';
    };

    const resetCursor = () => {
      cursor.style.transform = 'scale(1)';
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', scaleCursor);
    document.addEventListener('mouseup', resetCursor);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', scaleCursor);
      el.addEventListener('mouseleave', resetCursor);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', scaleCursor);
      document.removeEventListener('mouseup', resetCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-900 dark:bg-gray-900 bg-white text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300">
        <ThemeToggle />
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