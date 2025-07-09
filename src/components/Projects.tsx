import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Zap, FileText, Folder } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Smart Code Explainer',
      description: 'An intelligent tool that analyzes and explains code snippets using AI, helping developers understand complex codebases quickly.',
      icon: Code,
      technologies: ['Python', 'AI/ML', 'Natural Language Processing', 'Flask'],
      github: 'https://github.com/avi2614/smart-code-explainer',
      demo: '#',
      status: 'Completed',
      features: [
        'AI-powered code analysis',
        'Multi-language support',
        'Interactive explanations',
        'Code optimization suggestions'
      ]
    },
    {
      title: 'Multi Utility App',
      description: 'A comprehensive utility application with multiple tools and features for everyday productivity and development tasks.',
      icon: Zap,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/avi2614/multi-utility-app',
      demo: '#',
      status: 'Completed',
      features: [
        'Multiple utility tools',
        'Responsive design',
        'User authentication',
        'Real-time updates'
      ]
    },
    {
      title: 'DevOps Project',
      description: 'A comprehensive DevOps project showcasing CI/CD pipelines, containerization, and cloud deployment strategies.',
      icon: FileText,
      technologies: ['Docker', 'Jenkins', 'AWS', 'Kubernetes', 'Terraform'],
      github: 'https://github.com/avi2614/devops-project',
      demo: '#',
      status: 'Ongoing',
      features: [
        'Automated CI/CD pipelines',
        'Container orchestration',
        'Infrastructure as Code',
        'Monitoring and logging'
      ]
    },
    {
      title: 'File Manager',
      description: 'A modern file management system with advanced features for organizing, searching, and managing files efficiently.',
      icon: Folder,
      technologies: ['JavaScript', 'Node.js', 'File System APIs', 'Electron'],
      github: 'https://github.com/avi2614/file-manager',
      demo: '#',
      status: 'Completed',
      features: [
        'Advanced file operations',
        'Search and filter',
        'Drag and drop interface',
        'Cross-platform support'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22120%22 height=%22120%22 viewBox=%220 0 120 120%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M9 0h2v20H9V0zm25.134 0h2v20h-2V0zm25.134 0h2v20h-2V0zm25.132 0h2v20h-2V0zm25.134 0h2v20h-2V0zM0 9v2h20V9H0zm25.134 0v2h20v-2h-20zm25.134 0v2h20v-2h-20zm25.132 0v2h20v-2h-20zm25.134 0v2h20v-2h-20z%22 fill=%22%2306b6d4%22 fill-opacity=%220.4%22 fill-rule=%22evenodd%22/%3E%3C/svg%3E')]"></div>
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
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects and contributions to the development community
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        project.status === 'Ongoing' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-gray-400 hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-gray-400 hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start gap-2 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-sm text-gray-300 hover:border-cyan-400/50 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />

                {/* 3D Tilt Effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/avi2614"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700 hover:border-cyan-400/50 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;