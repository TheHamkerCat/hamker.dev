import ProjectsSection from './components/ProjectsSection';
import { Github, Mail, MapPin, Send } from 'lucide-react';
import { NavigationBar } from './components/NavigationBar';
import LinkedIn from './components/icons/LinkedIn';
// import Image from 'next/image';
import Skills from './components/Skills';
import Homelab from './components/Homelab';



export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <NavigationBar />

      <div className="relative pt-20 pb-5 overflow-clip">
        <div className="max-w-6xl mx-auto px-6 pt-12">
          {/* About Card */}
          <div id="about" className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-none"></div>
            <div className="relative  bg-white/60 dark:bg-black/40 rounded-none p-8 border border-white/20 dark:border-white/10 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  {/* <Image
                    src="/pfp.png"
                    alt="Profile"
                    width={128}
                    height={128}
                    className="relative rounded-full object-cover border-2 border-white/50 dark:border-white/20"
                    priority
                  /> */}
                </div>
                <div>
                  <h1 className="text-4xl lg:text-6xl py-3 font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
                    Akshay
                  </h1>
                  <p className="text-2xl text-zinc-700 dark:text-zinc-300 mb-3">Full Stack Developer</p>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 max-w-2xl">
                    21-year-old friendly neighbourhood programmer from India.
                  </p>
                  <div className="flex flex-wrap gap-4 text-zinc-600 dark:text-zinc-400">
                    <div className="flex items-center gap-2  bg-white/60 dark:bg-black/40 rounded-none py-2 px-4 border border-white/20 dark:border-white/10 transition-all duration-300 hover:border-blue-500/50">
                      <MapPin className="w-4 h-4" />
                      <span>New Delhi, India</span>
                    </div>
                    <div className="flex items-center gap-2  bg-white/60 dark:bg-black/40 rounded-none py-2 px-4 border border-white/20 dark:border-white/10 transition-all duration-300 hover:border-blue-500/50">
                      <Mail className="w-4 h-4" />
                      <a href="mailto:thehamkercat@gmail.com" className="hover:text-zinc-700 dark:hover:text-zinc-300">thehamkercat@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mt-16">
            <ProjectsSection />
          </div>


          {/* Skills section */}
          <Skills />


          {/* Contact Section */}
          <div id="contact" className="mt-16 mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Come Talk
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/TheHamkerCat" },
                { icon: Send, label: "Telegram", href: "https://t.me/TheHamkerCat" },
                { icon: Mail, label: "Email", href: "mailto:thehamkercat@gmail.com" },
                { icon: LinkedIn, label: "LinkedIn", href: "https://www.linkedin.com/in/thehamkercat" }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group  bg-white/60 dark:bg-black/40 rounded-none p-6
                    border border-white/20 dark:border-white/10 transition-all duration-300
                    hover:border-blue-500/50 flex flex-col items-center gap-3"
                >
                  <item.icon className="w-6 h-6 text-zinc-700 dark:text-zinc-300 group-hover:text-blue-500 transition-colors" />
                  <span className="text-zinc-700 dark:text-zinc-300 group-hover:text-blue-500 transition-colors">{item.label}</span>
                </a>
              ))}
            </div>

            {/* Homelab */}
            <Homelab />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                hamker.dev
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">Building cool stuff since 2020</p>
            </div>

            <div className="flex flex-col items-center md:flex-row md:gap-8">
              <div className="flex flex-col items-center md:items-end">
                <p className="text-zinc-600 dark:text-zinc-400 font-medium">Next.js & Tailwind</p>
                <p className="text-zinc-500 dark:text-zinc-500 text-sm mt-1">
                  CopyLeft {new Date().getFullYear()}, No Rights Reserved
                </p>
              </div>

              <a
                href="https://github.com/TheHamkerCat/hamker.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 md:mt-0  bg-white/60 dark:bg-black/40 px-4 py-2 rounded-none
            border border-white/20 dark:border-white/10 transition-all duration-300
            hover:border-blue-500/50 flex items-center gap-2"
              >
                <span className="text-zinc-600 dark:text-zinc-400 group-hover:text-blue-500 transition-colors">
                  Source Code
                </span>
                <Github className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:text-blue-500 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}