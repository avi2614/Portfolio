import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Minimize2, Maximize2, X } from 'lucide-react';

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: string; type: 'command' | 'output' | 'error' }>>([
    { command: '', output: 'Welcome to Avi\'s Terminal! Type "help" to see available commands.', type: 'output' }
  ]);
  const [isMinimized, setIsMinimized] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: (_args?: string) => `Available commands:
• sudo hire avi        - Download resume
• avi --journey        - Start portfolio journey game
• avi --projects       - Show GitHub projects
• avi --linkedin       - Open LinkedIn profile
• avi --instagram      - Open Instagram profile
• avi --techstack      - Display tech skills
• avi --contact        - Show contact information
• avi --about          - About Avi Sharma
• avi --internships    - Show internship experience
• avi --education      - Display education background
• weather              - Check current weather
• joke                 - Get a programming joke
• quote                - Get an inspirational quote
• matrix               - Enter the matrix
• clear                - Clear terminal
• whoami               - Current user info
• neofetch             - System information
• cowsay <message>     - Make the cow say something`,

    'sudo hire avi': (_args?: string) => {
      // Trigger resume download
      const link = document.createElement('a');
      link.href = '/Avi_Sharma_Resume.pdf';
      link.download = 'Avi_Sharma_Resume.pdf';
      link.click();
      return 'Resume downloaded successfully! 📄';
    },

    'avi --journey': (_args?: string) => {
      const journeySection = document.getElementById('terminal');
      return 'Portfolio journey game is available in the terminal section below! 🚗';
    },

    'avi --projects': (_args?: string) => {
      window.open('https://github.com/avi2614', '_blank');
      return `Opening GitHub projects...
• Smart Code Explainer
• Multi Utility App  
• DevOps Project (Ongoing)
• File Manager
Visit: https://github.com/avi2614`;
    },

    'avi --linkedin': (_args?: string) => {
  window.open('https://www.linkedin.com/in/avi-sharma-48b514277/', '_blank');
  return 'Opening LinkedIn profile... 🔗';
    },

    'avi --instagram': (_args?: string) => {
      window.open('https://instagram.com/av.eeei', '_blank');
      return 'Opening Instagram profile... 📸';
    },

    'avi --techstack': (_args?: string) => `Tech Stack:
Languages: JavaScript, Python, Java
Frontend: React, HTML5, CSS3, Tailwind CSS
Backend: Node.js, Express.js, MongoDB
DevOps: Docker, Jenkins, Git, GitHub Actions
Infrastructure: Linux, AWS`,

    'avi --contact': (_args?: string) => `Contact Information:
📧 Email: avisharma2614@gmail.com
📱 Phone: +91 9828012393
📍 Location: Jaipur, Rajasthan
💼 Role: DevOps Engineer & Full Stack Developer`,

    'avi --about': (_args?: string) => `About Avi Sharma:
🎓 B.Tech Student at Poornima College of Engineering
💻 DevOps Engineer & Full Stack Developer
🚀 Problem-solving enthusiast
🔧 Building scalable systems and automating infrastructure
🌉 Bridging the gap between development and operations`,

    'avi --internships': (_args?: string) => `Internship Experience:
🏢 LinuxWorld Informatics Pvt. Ltd. (2025 - Ongoing)
   Role: DevOps Intern
   Focus: Advanced DevOps practices, cloud automation

🏢 Cynbit Technologies (July - Aug 2024)
   Role: Full Stack Developer Intern
   Focus: React, Node.js, MongoDB development

🏢 Devyut Technology Pvt. Ltd. (June - July 2023)
   Role: Software Development Intern
   Focus: Software development lifecycle`,

    'avi --education': (_args?: string) => `Education Background:
🎓 B.Tech - Poornima College of Engineering (2022-2026)
   Major: Computer Science Engineering
🎓 12th Grade - Gyan Ashram, Jaipur (2021-2022)
🎓 10th Grade - St. Xavier's School, Jaipur (2019-2020)`,

    whoami: (_args?: string) => 'guest@avi-portfolio:~$ You are viewing Avi Sharma\'s portfolio',

    clear: (_args?: string) => 'CLEAR_TERMINAL',

    ls: (_args?: string) => `total 8
drwxr-xr-x  2 avi  staff   64 Jan 15 2025 projects/
drwxr-xr-x  2 avi  staff   64 Jan 15 2025 skills/
-rw-r--r--  1 avi  staff 1024 Jan 15 2025 resume.pdf
-rw-r--r--  1 avi  staff  512 Jan 15 2025 contact.txt`,

    pwd: (_args?: string) => '/home/avi/portfolio',

    date: (_args?: string) => new Date().toString(),

    weather: (_args?: string) => `Weather in Jaipur, Rajasthan:
🌤️  Partly Cloudy, 28°C
💨 Wind: 12 km/h
💧 Humidity: 45%
Perfect weather for coding! ☀️`,

    joke: (_args?: string) => {
      const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem! 💡",
        "Why do Java developers wear glasses? Because they can't C# 👓",
        "There are only 10 types of people: those who understand binary and those who don't 🤓"
      ];
      return jokes[Math.floor(Math.random() * jokes.length)];
    },

    quote: (_args?: string) => {
      const quotes = [
        "\"Code is like humor. When you have to explain it, it's bad.\" - Cory House",
        "\"First, solve the problem. Then, write the code.\" - John Johnson",
        "\"The best error message is the one that never shows up.\" - Thomas Fuchs",
        "\"Programming isn't about what you know; it's about what you can figure out.\" - Chris Pine"
      ];
      return quotes[Math.floor(Math.random() * quotes.length)];
    },

    matrix: (_args?: string) => `Wake up, Neo... 
The Matrix has you... 
Follow the white rabbit 🐰

⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⣤⣤⣤⣤⣶⣦⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⡿⠛⠉⠙⠛⠛⠛⠛⠻⢿⣿⣷⣤⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⠋⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠈⢻⣿⣿⡄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣸⣿⡏⠀⠀⠀⣠⣶⣾⣿⣿⣿⠿⠿⠿⢿⣿⣿⣿⣄⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⣿⠁⠀⠀⢰⣿⣿⣯⠁⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣷⡄⠀
⠀⠀⣀⣤⣴⣶⣶⣿⡟⠀⠀⠀⢸⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣷⠀
⠀⢰⣿⡟⠋⠉⣹⣿⡇⠀⠀⠀⠘⣿⣿⣿⣿⣷⣦⣤⣤⣤⣶⣶⣶⣶⣿⣿⣿⠀
⠀⢸⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀
⠀⣸⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠉⠻⠿⣿⣿⣿⡿⠿⠿⠛⢻⣿⡇⠀⠀
⠀⣿⣿⠁⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣧⠀⠀
⠀⣿⣿⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀
⠀⣿⣿⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀
⠀⢿⣿⡆⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀
⠀⠸⣿⣧⡀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠃⠀⠀
⠀⠀⠛⢿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⣰⣿⣿⣷⣶⣶⣶⣶⠶⠀⢠⣿⣿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⣿⣿⡇⠀⣽⣿⡏⠁⠀⠀⢸⣿⡇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⣿⣿⡇⠀⢹⣿⡆⠀⠀⠀⣸⣿⠇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢿⣿⣦⣄⣀⣠⣴⣿⣿⠁⠀⠈⠻⣿⣿⣿⣿⡿⠏⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠛⠻⠿⠿⠿⠿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`,

    neofetch: (_args?: string) => `
                    avi@portfolio
                    -------------
        .-.         OS: Portfolio OS
       (.. |        Host: Avi Sharma's Portfolio
       <>  |        Kernel: React 18.3.1
      / --- \\       Uptime: ${Math.floor(Math.random() * 100)} days
     ( |   | |      Packages: npm, yarn, docker
   |\\_)___/\\)/|     Shell: zsh
  <__)------(__>    Resolution: Responsive
                    DE: VS Code
                    WM: Vite
                    Theme: Dark Cyberpunk
                    Icons: Lucide React
                    Terminal: Custom Terminal
                    CPU: Brain.js (Overclocked)
                    GPU: Imagination Engine
                    Memory: Unlimited Creativity`,

    echo: (args: string) => args || '',

    cowsay: (args: string) => {
      const message = args || 'Hello from Avi!';
      const border = '_'.repeat(message.length + 2);
      return `
 ${border}
< ${message} >
 ${'-'.repeat(message.length + 2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;
    },
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const [command, ...args] = trimmedCmd.split(' ');
    
    if (trimmedCmd === '') return;

    let output = '';
    let type: 'output' | 'error' = 'output';

    if (commands[trimmedCmd as keyof typeof commands]) {
      output = commands[trimmedCmd as keyof typeof commands](args.join(' '));
    } else if (command === 'echo') {
      output = commands.echo(args.join(' '));
    } else if (command === 'cowsay') {
      output = commands.cowsay(args.join(' '));
    } else if (trimmedCmd.startsWith('avi ')) {
      output = 'Unknown flag. Type "avi --help" or "help" for available commands.';
      type = 'error';
    } else {
      output = `Command not found: ${cmd}. Type "help" for available commands.`;
      type = 'error';
    }

    if (output === 'CLEAR_TERMINAL') {
      setHistory([]);
    } else {
      setHistory(prev => [
        ...prev,
        { command: cmd, output: '', type: 'command' },
        { command: '', output, type }
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
    setInput('');
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (!isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isMinimized]);

  return (
    <section id="terminal" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Interactive Terminal
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience my portfolio through a developer's favorite interface
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          className="bg-gray-900 rounded-lg border border-gray-700 shadow-2xl overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <TerminalIcon size={16} />
                <span className="text-sm font-mono">avi@portfolio:~</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <motion.button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-gray-700 rounded text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
              </motion.button>
            </div>
          </div>

          {/* Terminal Content */}
          <motion.div
            className={`transition-all duration-300 ${isMinimized ? 'h-0' : 'h-96'}`}
            style={{ overflow: isMinimized ? 'hidden' : 'visible' }}
          >
            <div
              ref={terminalRef}
              className="p-4 h-full overflow-y-auto bg-black font-mono text-sm"
              style={{ scrollbarWidth: 'thin', scrollbarColor: '#374151 #111827' }}
            >
              {/* Terminal History */}
              {history.map((entry, index) => (
                <motion.div
                  key={index}
                  className="mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {entry.type === 'command' && (
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">guest@avi-portfolio:~$</span>
                      <span className="text-white">{entry.command}</span>
                    </div>
                  )}
                  {entry.type === 'output' && (
                    <div className="text-gray-300 whitespace-pre-line pl-4">
                      {entry.output}
                    </div>
                  )}
                  {entry.type === 'error' && (
                    <div className="text-red-400 whitespace-pre-line pl-4">
                      {entry.output}
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Current Input Line */}
              {!isMinimized && (
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                  <span className="text-green-400">guest@avi-portfolio:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent text-white outline-none font-mono"
                    placeholder="Type a command..."
                    autoComplete="off"
                    spellCheck="false"
                  />
                  <motion.div
                    className="w-2 h-5 bg-green-400"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                  />
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Command Hints */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4">Quick commands to try:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['help', 'sudo hire avi', 'avi --journey', 'avi --projects', 'joke', 'matrix'].map((cmd) => (
              <motion.button
                key={cmd}
                onClick={() => {
                  setInput(cmd);
                  if (inputRef.current) {
                    inputRef.current.focus();
                  }
                }}
                className="px-3 py-1 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-green-400 rounded text-green-400 font-mono text-sm transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cmd}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Terminal;