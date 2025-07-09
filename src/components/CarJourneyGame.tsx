import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Play, RotateCcw, Trophy, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

interface GameState {
  carPosition: { x: number; y: number };
  currentSection: number;
  score: number;
  isPlaying: boolean;
  gameCompleted: boolean;
}

const CarJourneyGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    carPosition: { x: 50, y: 80 },
    currentSection: 0,
    score: 0,
    isPlaying: false,
    gameCompleted: false
  });

  const sections = [
    { name: 'About Me', color: '#06b6d4', description: 'Learn about my background' },
    { name: 'Education', color: '#3b82f6', description: 'My academic journey' },
    { name: 'Internships', color: '#8b5cf6', description: 'Professional experience' },
    { name: 'Projects', color: '#10b981', description: 'My development work' },
    { name: 'Tech Stack', color: '#f59e0b', description: 'Technologies I use' },
    { name: 'Contact', color: '#ef4444', description: 'Get in touch with me' }
  ];

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (!gameState.isPlaying) return;

    const { key } = event;
    const speed = 5;

    setGameState(prev => {
      let newX = prev.carPosition.x;
      let newY = prev.carPosition.y;
      let newSection = prev.currentSection;
      let newScore = prev.score;

      switch (key) {
        case 'ArrowUp':
          newY = Math.max(10, prev.carPosition.y - speed);
          break;
        case 'ArrowDown':
          newY = Math.min(90, prev.carPosition.y + speed);
          break;
        case 'ArrowLeft':
          newX = Math.max(5, prev.carPosition.x - speed);
          break;
        case 'ArrowRight':
          newX = Math.min(95, prev.carPosition.x + speed);
          break;
        default:
          return prev;
      }

      // Check if car reached a new section
      const sectionWidth = 100 / sections.length;
      const targetSection = Math.floor(newX / sectionWidth);
      
      if (targetSection !== prev.currentSection && targetSection < sections.length) {
        newSection = targetSection;
        newScore += 100;
        
        // Scroll to the actual section on the page
        const sectionElement = document.getElementById(sections[targetSection].name.toLowerCase().replace(' ', ''));
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
      }

      const gameCompleted = newSection === sections.length - 1 && newX > 90;

      return {
        ...prev,
        carPosition: { x: newX, y: newY },
        currentSection: newSection,
        score: newScore,
        gameCompleted
      };
    });
  }, [gameState.isPlaying, sections]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const startGame = () => {
    setGameState({
      carPosition: { x: 5, y: 80 },
      currentSection: 0,
      score: 0,
      isPlaying: true,
      gameCompleted: false
    });
  };

  const resetGame = () => {
    setGameState({
      carPosition: { x: 5, y: 80 },
      currentSection: 0,
      score: 0,
      isPlaying: false,
      gameCompleted: false
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Car className="text-cyan-400" />
          Portfolio Journey Game
        </h3>
        <div className="flex items-center gap-4">
          <div className="text-cyan-400 font-mono">Score: {gameState.score}</div>
          {!gameState.isPlaying && !gameState.gameCompleted && (
            <motion.button
              onClick={startGame}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={16} />
              Start Journey
            </motion.button>
          )}
          {(gameState.isPlaying || gameState.gameCompleted) && (
            <motion.button
              onClick={resetGame}
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RotateCcw size={16} />
              Reset
            </motion.button>
          )}
        </div>
      </div>

      {/* Game Area */}
      <div className="relative w-full h-64 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg border border-gray-600 overflow-hidden">
        {/* Road */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600">
          {/* Road markings */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-yellow-400 opacity-60"></div>
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white opacity-40 transform -translate-y-8"></div>
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white opacity-40 transform translate-y-8"></div>
        </div>

        {/* Section Markers */}
        {sections.map((section, index) => (
          <div
            key={index}
            className="absolute top-0 bottom-0 w-1 opacity-60"
            style={{
              left: `${(index + 1) * (100 / sections.length)}%`,
              backgroundColor: section.color
            }}
          >
            <div 
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-white font-semibold whitespace-nowrap px-2 py-1 rounded"
              style={{ backgroundColor: section.color }}
            >
              {section.name}
            </div>
          </div>
        ))}

        {/* Car */}
        <motion.div
          className="absolute w-8 h-6 text-cyan-400 z-10"
          style={{
            left: `${gameState.carPosition.x}%`,
            top: `${gameState.carPosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          animate={{
            rotate: gameState.isPlaying ? [0, 5, -5, 0] : 0
          }}
          transition={{
            duration: 0.5,
            repeat: gameState.isPlaying ? Infinity : 0
          }}
        >
          <Car size={32} />
        </motion.div>

        {/* Current Section Highlight */}
        {gameState.isPlaying && (
          <motion.div
            className="absolute top-0 bottom-0 bg-cyan-400/20"
            style={{
              left: `${gameState.currentSection * (100 / sections.length)}%`,
              width: `${100 / sections.length}%`
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-400">
            Use arrow keys to drive through my portfolio journey
          </div>
          <div className="flex gap-1">
            <div className="p-1 bg-gray-700 rounded text-xs text-gray-300 flex items-center">
              <ArrowUp size={12} />
            </div>
            <div className="p-1 bg-gray-700 rounded text-xs text-gray-300 flex items-center">
              <ArrowDown size={12} />
            </div>
            <div className="p-1 bg-gray-700 rounded text-xs text-gray-300 flex items-center">
              <ArrowLeft size={12} />
            </div>
            <div className="p-1 bg-gray-700 rounded text-xs text-gray-300 flex items-center">
              <ArrowRight size={12} />
            </div>
          </div>
        </div>
        
        {gameState.currentSection < sections.length && (
          <div className="text-sm text-cyan-400">
            Current: {sections[gameState.currentSection]?.name}
          </div>
        )}
      </div>

      {/* Game Completed Modal */}
      <AnimatePresence>
        {gameState.gameCompleted && (
          <motion.div
            className="absolute inset-0 bg-black/80 flex items-center justify-center rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-cyan-400/50 text-center"
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
            >
              <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Journey Complete!</h3>
              <p className="text-gray-300 mb-4">
                You've successfully navigated through my entire portfolio!
              </p>
              <div className="text-cyan-400 font-mono text-xl mb-6">
                Final Score: {gameState.score}
              </div>
              <motion.button
                onClick={resetGame}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Play Again
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CarJourneyGame;