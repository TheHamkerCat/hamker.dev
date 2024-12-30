import React from 'react';
import { Github, Mail, MapPin, ExternalLink, Star, GitFork } from 'lucide-react';
import { NavigationBar } from './components/NavigationBar';
import LinkedIn from './components/icons/LinkedIn';


const projects = [
  {
    title: "WilliamButcherBot",
    description: "Telegram Group Manager Bot Written In Python Using Pyrogram. Features include anti-spam, moderation tools, and custom commands.",
    tech: ["Python", "Pyrogram", "MongoDB"],
    stats: {
      stars: 370,
      forks: 654
    },
    link: "https://github.com/TheHamkerCat/WilliamButcherBot"
  },
  {
    title: "Telegram VC Bot",
    description: "Voice Chat Bot for Telegram written in Python using Pytgcalls & Pyrogram. Supports music streaming and playlist management.",
    tech: ["Python", "Pyrogram", "Pytgcalls"],
    stats: {
      stars: 362,
      forks: 749
    },
    link: "https://github.com/TheHamkerCat/Telegram_VC_Bot"
  },
  {
    title: "NSFW Detection API",
    description: "REST API Written In Python To Classify NSFW Images using machine learning.",
    tech: ["Python", "FastAPI", "TensorFlow"],
    stats: {
      stars: 66,
      forks: 34
    },
    link: "https://github.com/TheHamkerCat/NSFW_Detection_API"
  },
  {
    title: "Telegram Antispam RS",
    description: "Blazingly fast spam classification API built using Rocket Web Framework in Rust.",
    tech: ["Rust", "Rocket", "Machine Learning"],
    stats: {
      stars: 17,
      forks: 3
    },
    link: "https://github.com/TheHamkerCat/telegram-antispam-rs"
  },
  {
    title: "Wallrus",
    description: "A simple and efficient wallpaper manager for Linux written in Rust.",
    tech: ["Rust", "CLI", "Linux"],
    stats: {
      stars: 9,
      forks: 1
    },
    link: "https://github.com/TheHamkerCat/wallrus"
  },
  {
    title: "LLM Receipt Scanner",
    description: "An app to scan and store your receipts using vision LLMs.",
    tech: ["Kotlin", "JetPack-Compose", "Android", "OpenAI", "Anthropic"],
    stats: {
      stars: 1,
      forks: 0
    },
    link: "https://github.com/TheHamkerCat/llm-receipt-scanner"
  }
];

const technologies = [
  { name: "Languages", items: ["GO", "Rust", "Python", "Kotlin", "C/C++"] },
  { name: "Frontend", items: ["React/Next.js", "SvelteKit", "Tailwind CSS"] },
  { name: "Databases", items: ["SQLite", "Postgres", "MongoDB", "Redis"] },
  { name: "Tools", items: ["Docker", "K8s", "Nginx", "OPNsense", "Proxmox"] }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <NavigationBar />
      
      {/* Hero Section */}
      <div className="relative pt-16">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-6xl mx-auto px-6 pt-20">
          <div className="relative backdrop-blur-lg bg-white/10 rounded-3xl p-8 mb-8 border border-white/10 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img 
                src="/pfp.png"
                alt="Profile" 
                className="rounded-full w-32 h-32 border-4 border-blue-500/30 shadow-lg"
              />
              <div>
                <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  Akshay
                </h1>
                <p className="text-xl text-gray-300 mb-4">Full Stack Developer</p>
                <div className="flex gap-4 text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>New Delhi, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>thehamkercat@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div id="about" className="relative backdrop-blur-lg bg-white/10 rounded-3xl p-8 mb-8 border border-white/10 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              About Me
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              20-year-old friendly neighbourhood programmer from India. Currently working on LLM stuff
              and learning K8s. Fun fact: I like cats (also, I use arch btw).
            </p>
          </div>

          {/* Projects Section */}
          <div id="projects" className="mb-8">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.title} className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/10 shadow-2xl 
                  hover:bg-white/20 transition-all duration-300 group">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-500/20 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4 text-sm text-gray-400">
                      <span className="items-center flex">
                        <Star className="w-4 h-4 mr-1" /> {project.stats.stars}
                      </span>
                      <span className="flex items-center">
                        <GitFork className="w-4 h-4 mr-1" /> {project.stats.forks}
                      </span>
                    </div>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div id="skills" className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 mb-8 border border-white/10 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Tech Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technologies.map((tech) => (
                <div key={tech.name} className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-4">{tech.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item) => (
                      <span 
                        key={item}
                        className="px-3 py-1 bg-blue-500/20 rounded-full text-sm hover:bg-blue-500/30 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/10 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Let's Connect
            </h2>
            <div className="flex gap-4">
              <a 
                href="https://github.com/TheHamkerCat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all
                  border border-white/10 hover:border-white/20"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a 
                href="mailto:thehamkercat@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all
                  border border-white/10 hover:border-white/20"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/thehamkercat"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all
                  border border-white/10 hover:border-white/20"
              >
                <LinkedIn className="w-5 h-5 mb-1" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="mt-16 backdrop-blur-lg bg-black/20 border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="font-medium text-lg bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                hamker.dev
              </div>
              <p className="text-gray-400 text-sm mt-1">Building cool stuff since 2020</p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">Next.js & Tailwind</p>
              <p className="text-gray-500 text-sm mt-1">CopyLeft {new Date().getFullYear()}, No Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
