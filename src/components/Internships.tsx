import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Internships: React.FC = () => {
  const internships = [
    {
      company: 'LinuxWorld Informatics Pvt. Ltd.',
      role: 'DevOps Intern',
      period: 'Ongoing (2025)',
      location: 'Remote',
      status: 'Current',
      description: 'Working on advanced DevOps practices, cloud infrastructure automation, and CI/CD pipeline optimization.',
      technologies: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform'],
      achievements: [
        'Implemented automated deployment pipelines',
        'Optimized cloud infrastructure costs',
        'Enhanced monitoring and logging systems'
      ]
    },
    {
      company: 'Cynbit Technologies',
      role: 'Full Stack Developer Intern',
      period: 'July - Aug 2024',
      location: 'Jaipur',
      status: 'Completed',
      description: 'Developed full-stack web applications using modern technologies and contributed to multiple client projects.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript'],
      achievements: [
        'Built responsive web applications',
        'Integrated RESTful APIs',
        'Improved application performance by 30%'
      ]
    },
    {
      company: 'Devyut Technology Pvt. Ltd.',
      role: 'Software Development Intern',
      period: 'June - July 2023',
      location: 'Jaipur',
      status: 'Completed',
      description: 'Gained hands-on experience in software development lifecycle and worked on various development projects.',
      technologies: ['Python', 'JavaScript', 'HTML/CSS', 'Git', 'MySQL'],
      achievements: [
        'Developed multiple web components',
        'Learned version control best practices',
        'Collaborated in agile development environment'
      ]
    }
  ];

  return (
    <section id="internships" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2280%22 height=%2280%22 viewBox=%220 0 80 80%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2306b6d4%22 fill-opacity=%220.4%22%3E%3Cpath d=%22M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zM10 10c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm60 60c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
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
              Internships
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional experiences that shaped my skills and understanding of the industry
          </p>
        </motion.div>

        {/* Internships Timeline */}
        <div className="space-y-12">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Company Info */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{internship.company}</h3>
                        <span className={`text-sm px-3 py-1 rounded-full ${
                          internship.status === 'Current' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {internship.status}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                      {internship.role}
                    </h4>

                    <div className="space-y-2 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{internship.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{internship.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:w-2/3">
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {internship.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-cyan-400 mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {internship.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-sm text-gray-300 hover:border-cyan-400/50 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-sm font-semibold text-cyan-400 mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {internship.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            className="flex items-start gap-2 text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;