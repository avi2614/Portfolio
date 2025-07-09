import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Download, Terminal, Github, Linkedin, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const phrases = [
    'Building CI/CD pipelines...',
    'Automating infrastructure...',
    'Creating scalable systems...',
    'Bridging dev and ops...'
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex < currentPhrase.length) {
        setTypedText(currentPhrase.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
          setTypedText('');
        }, 2000);
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Avi_Sharma_Resume.pdf';
    link.click();
  };

  const openTerminal = () => {
    const terminalSection = document.getElementById('terminal');
    if (terminalSection) {
      terminalSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate stable random positions for floating particles
  const floatingParticles = useMemo(() => (
    [...Array(20)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      duration: Math.random() * 10 + 10
    }))
  ), []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Matrix-style background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400 font-mono text-xs opacity-30"
              initial={{
                x: Math.random() * window.innerWidth,
                y: -20,
              }}
              animate={{
                y: window.innerHeight + 20,
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.div>
          ))}
        </div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-40 right-32 w-24 h-24 border border-blue-400/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-16 h-16 border border-purple-400/20 transform rotate-45"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
        
        {/* Floating particles */}
        {floatingParticles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{ x: particle.x, y: particle.y }}
            animate={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            transition={{ duration: particle.duration, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
                <img
                  src="/profile.jpg/profile.jpg"
                  alt="Avi Sharma"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-cyan-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              Avi Sharma
            </span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-cyan-400 mb-6 font-mono"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            DevOps Engineer | Full Stack Developer
          </motion.h2>

          {/* Bio */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I'm a problem-solving enthusiast who builds scalable systems, automates infrastructure, 
            and creates powerful full-stack apps. I bridge the gap between development and operations.
          </motion.p>

          {/* Typing Animation */}
          <motion.div
            className="text-green-400 font-mono text-lg mb-8 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="text-cyan-400">{'>'}</span> {typedText}
            <motion.span
              className="inline-block w-2 h-5 bg-green-400 ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            />
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              onClick={downloadResume}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(6, 182, 212, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
            </motion.button>
            
            <motion.button
              onClick={openTerminal}
              className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Terminal size={20} />
              Open Terminal
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { icon: Github, href: 'https://github.com/avi2614', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/avi-sharma', label: 'LinkedIn' },
              { icon: Instagram, href: 'https://instagram.com/av.eeei', label: 'Instagram' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-cyan-400 text-gray-400 hover:text-cyan-400 transition-all duration-300"
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)" }}
                whileTap={{ scale: 0.9 }}
                title={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;