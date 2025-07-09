import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TechStack: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const techCategories = [
    {
      title: 'Languages',
      color: 'from-yellow-400 to-orange-500',
      technologies: [
        { 
          name: 'JavaScript', 
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          color: '#F7DF1E' 
        },
        { 
          name: 'Python', 
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
          color: '#3776AB' 
        },
        { 
          name: 'Java', 
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
          color: '#ED8B00' 
        }
      ]
    },
    {
      title: 'Frontend',
      color: 'from-blue-400 to-purple-500',
      technologies: [
        { 
          name: 'React', 
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          color: '#61DAFB' 
        },
        { 
          name: 'HTML5', 
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
          color: '#E34F26' 
        },
        { 
          name: 'CSS3', 
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
          color: '#1572B6' 
        },
        { 
          name: 'Tailwind CSS', 
          iconUrl: '/icons/tailwindcss-plain.svg',
          color: '#06B6D4' 
        },
        { 
          name: 'Framer Motion', 
          iconUrl: 'https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png',
          color: '#0055FF' 
        }
      ]
    },
    {
      title: 'Backend',
      color: 'from-green-400 to-emerald-500',
      technologies: [
        { 
          name: 'Node.js', 
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
          color: '#339933' 
        },
        { 
          name: 'Express.js', 
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
          color: '#000000' 
        },
        { 
          name: 'MongoDB', 
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          color: '#47A248' 
        }
      ]
    },
    {
      title: 'DevOps Tools',
      color: 'from-red-400 to-pink-500',
      technologies: [
        { 
          name: 'Docker', 
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
          color: '#2496ED' 
        },
        { 
          name: 'Jenkins', 
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
          color: '#D24939' 
        },
        { 
          name: 'Git', 
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
          color: '#F05032' 
        },
        { 
          name: 'GitHub', 
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
          color: '#181717' 
        },
        { 
          name: 'GitHub Actions', 
          iconUrl: '/icons/githubactions-icon.svg',
          color: '#2088FF' 
        }
      ]
    },
    {
      title: 'Infrastructure & Cloud',
      color: 'from-cyan-400 to-blue-500',
      technologies: [
        { 
          name: 'Linux', 
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
          color: '#FCC624' 
        },
        { 
          name: 'AWS', 
          iconUrl: '/icons/amazonwebservices-original.svg',
          color: '#FF9900' 
        }
      ]
    }
  ];

  return (
    <section id="techstack" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to build amazing solutions
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="space-y-12">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <motion.div
                className="text-center mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent inline-block`}>
                  {category.title}
                </h3>
              </motion.div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    className="relative group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + techIndex * 0.05,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                    onHoverStart={() => setHoveredTech(tech.name)}
                    onHoverEnd={() => setHoveredTech(null)}
                  >
                    <motion.div
                      className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group-hover:shadow-2xl"
                      whileHover={{ 
                        scale: 1.1, 
                        y: -10,
                        boxShadow: `0 20px 40px rgba(6, 182, 212, 0.3)`
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Tech Icon */}
                      <motion.div
                        className="flex items-center justify-center mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <img 
                          src={tech.iconUrl}
                          alt={tech.name}
                          className="w-12 h-12 drop-shadow-lg"
                          style={{ filter: `drop-shadow(0 0 10px ${tech.color}30)` }}
                        />
                      </motion.div>

                      {/* Tech Name */}
                      <motion.h4
                        className="text-center text-white font-semibold text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: hoveredTech === tech.name ? 1 : 0.8 
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech.name}
                      </motion.h4>

                      {/* Hover Glow Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(circle at center, ${tech.color}15 0%, transparent 70%)`
                        }}
                      />

                      {/* Floating Animation */}
                      <motion.div
                        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                          boxShadow: [
                            `0 0 20px ${tech.color}30`,
                            `0 0 40px ${tech.color}50`,
                            `0 0 20px ${tech.color}30`
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>

                    {/* Tooltip */}
                    <motion.div
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ 
                        y: hoveredTech === tech.name ? 0 : 10,
                        opacity: hoveredTech === tech.name ? 1 : 0
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Languages', count: '3+' },
              { label: 'Frontend Tools', count: '5+' },
              { label: 'Backend Tools', count: '3+' },
              { label: 'DevOps Tools', count: '5+' },
              { label: 'Infrastructure', count: '2+' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.count}
                </motion.div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;