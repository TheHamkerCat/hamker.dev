import ProjectsSection from './components/ProjectsSection';
import { Github, Mail, MapPin, Send } from 'lucide-react';
import { NavigationBar } from './components/NavigationBar';
import LinkedIn from './components/icons/LinkedIn';
import Image from 'next/image';

const technologies = {
  languages: ["GO", "Rust", "Python", "Kotlin"],
  frontend: ["React/Next.js", "SvelteKit", "Tailwind CSS"],
  database: ["SQLite", "Postgres", "MongoDB", "Redis"],
  tools: ["Docker", "K8s", "Nginx", "OPNsense", "Proxmox"]
};

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <NavigationBar />

      <div className="relative pt-20">
        <div className="absolute inset-0 max-w-6xl mx-auto">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 transform rotate-12 blur-3xl opacity-20 animate-pulse duration-1000"></div> */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 transform rotate-12 blur-3xl opacity-20 [animation:pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>

        </div>

        <div className="max-w-6xl mx-auto px-6 pt-12">
          {/* About Card */}
          <div id="about" className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
            <div className="relative backdrop-blur-xl bg-white/60 dark:bg-black/40 rounded-2xl p-8 border border-white/20 dark:border-white/10 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <Image
                    src="/pfp.png"
                    alt="Profile"
                    width={128}
                    height={128}
                    className="relative rounded-full object-cover border-2 border-white/50 dark:border-white/20"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-6xl py-3 font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    Akshay
                  </h1>
                  <p className="text-2xl text-zinc-700 dark:text-zinc-300 mb-3">Full Stack Developer</p>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 max-w-2xl">
                    20-year-old friendly neighbourhood programmer from India, passionate about building elegant solutions.
                  </p>
                  <div className="flex flex-wrap gap-4 text-zinc-600 dark:text-zinc-400">
                    <div className="flex items-center gap-2 backdrop-blur-xl bg-white/60 dark:bg-black/40 rounded-none py-2 px-4 border border-white/20 dark:border-white/10 transition-all duration-300 hover:border-blue-500/50">
                      <MapPin className="w-4 h-4" />
                      <span>New Delhi, India</span>
                    </div>
                    <div className="flex items-center gap-2 backdrop-blur-xl bg-white/60 dark:bg-black/40 rounded-none py-2 px-4 border border-white/20 dark:border-white/10 transition-all duration-300 hover:border-blue-500/50">
                      <Mail className="w-4 h-4" />
                      <span>thehamkercat@gmail.com</span>
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

          <div id="skills" className="mt-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Tech Stack
            </h2>
            <div className="backdrop-blur-xl bg-white/60 dark:bg-black/40 rounded-2xl p-8 font-mono text-sm border border-white/20 dark:border-white/10">
              <div className="flex gap-4">
                <div className="select-none text-zinc-400">1</div>
                <span className="text-purple-500">let</span>
                <span className="text-emerald-500">techStack</span>
                <span className="text-zinc-400">=</span>
                <span className="text-zinc-400">{'{'}</span>
              </div>

              <div className="flex gap-4">
                <div className="select-none text-zinc-400">2</div>
                <span className="text-blue-400 ml-8">&quot;languages&quot;</span>
                <span className="text-zinc-400">:</span>
                <span className="text-zinc-400">[</span>
                {technologies.languages.map((lang, i, arr) => (
                  <span key={lang}>
                    <span className="text-amber-500">&quot;{lang}&quot;</span>
                    {i !== arr.length - 1 && <span className="text-zinc-400">,</span>}
                  </span>
                ))}
                <span className="text-zinc-400">],</span>
              </div>

              <div className="flex gap-4">
                <div className="select-none text-zinc-400">3</div>
                <span className="text-blue-400 ml-8">&quot;frontend&quot;</span>
                <span className="text-zinc-400">:</span>
                <span className="text-zinc-400">[</span>
                {technologies.frontend.map((tech, i, arr) => (
                  <span key={tech}>
                    <span className="text-amber-500">&quot;{tech}&quot;</span>
                    {i !== arr.length - 1 && <span className="text-zinc-400">,</span>}
                  </span>
                ))}
                <span className="text-zinc-400">],</span>
              </div>

              <div className="flex gap-4">
                <div className="select-none text-zinc-400">4</div>
                <span className="text-blue-400 ml-8">&quot;databases&quot;</span>
                <span className="text-zinc-400">:</span>
                <span className="text-zinc-400">[</span>
                {technologies.database.map((db, i, arr) => (
                  <span key={db}>
                    <span className="text-amber-500">&quot;{db}&quot;</span>
                    {i !== arr.length - 1 && <span className="text-zinc-400">,</span>}
                  </span>
                ))}
                <span className="text-zinc-400">],</span>
              </div>

              <div className="flex gap-4">
                <div className="select-none text-zinc-400">5</div>
                <span className="text-blue-400 ml-8">&quot;tools&quot;</span>
                <span className="text-zinc-400">:</span>
                <span className="text-zinc-400">[</span>
                {technologies.tools.map((tool, i, arr) => (
                  <span key={tool}>
                    <span className="text-amber-500">&quot;{tool}&quot;</span>
                    {i !== arr.length - 1 && <span className="text-zinc-400">,</span>}
                  </span>
                ))}
                <span className="text-zinc-400">]</span>
              </div>

              <div className="flex gap-4">
                <div className="select-none text-zinc-400">6</div>
                <span className="text-zinc-400">{'}'}</span>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div id="contact" className="mt-16 mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Let&apos;s Connect
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
                  className="group backdrop-blur-xl bg-white/60 dark:bg-black/40 rounded-xl p-6
                    border border-white/20 dark:border-white/10 transition-all duration-300
                    hover:border-blue-500/50 flex flex-col items-center gap-3"
                >
                  <item.icon className="w-6 h-6 text-zinc-700 dark:text-zinc-300 group-hover:text-blue-500 transition-colors" />
                  <span className="text-zinc-700 dark:text-zinc-300 group-hover:text-blue-500 transition-colors">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                hamker.dev
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">Building cool stuff since 2020</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-zinc-600 dark:text-zinc-400">Next.js & Tailwind</p>
              <p className="text-zinc-500 dark:text-zinc-500 mt-1">CopyLeft {new Date().getFullYear()}, No Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}