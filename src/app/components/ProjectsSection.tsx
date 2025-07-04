import React from 'react';
import { Star, GitFork, ExternalLink } from 'lucide-react';

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  stats: {
    stars: number;
    forks: number;
  };
  link: string;
}

const FEATURED_REPOS: string[] = [
  'WilliamButcherBot',
  'llm-receipt-scanner',
  'Telegram_VC_Bot',
  'NSFW_Detection_API',
  'wallrus',
  'telegram-antispam-rs',
] as const;

async function getGithubProjects(): Promise<{ projects: Project[], error?: string }> {
  try {
    const response = await fetch('https://api.github.com/users/thehamkercat/repos', {
      next: { revalidate: 21600 }
    });

    if (!response.ok) throw new Error('Failed to fetch repositories');

    const repos: GitHubRepo[] = await response.json();

    const projects = repos
      .filter((repo): repo is GitHubRepo => FEATURED_REPOS.includes(repo.name))
      .sort((a, b) =>
        FEATURED_REPOS.indexOf(a.name) -
        FEATURED_REPOS.indexOf(b.name)
      )
      .map(repo => ({
        title: repo.name.replaceAll("_", "-").toLowerCase(),
        description: repo.description || '',
        tech: getTechStack(repo),
        stats: {
          stars: repo.stargazers_count,
          forks: repo.forks_count
        },
        link: repo.html_url
      }))
      ;

    return { projects };
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return { projects: [], error: 'Failed to load projects' };
  }
}

function getTechStack(repo: GitHubRepo): string[] {
  const techStack: string[] = [];
  if (repo.language) techStack.push(repo.language);
  if (repo.topics) {
    const filteredTopics = repo.topics
      .filter(topic =>
        !topic.toLowerCase().includes(repo.language?.toLowerCase() || '') &&
        !['bot', 'telegram', 'telegram-bot', 'gram', 'ai', 'heroku-telegram', 'heroku', 'jiosaavn', 'antinsfw', 'groupmanager'].includes(topic)
      )
      .slice(0, 2)
      .map(topic => topic.replace(/-/g, ' ').split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
    techStack.push(...filteredTopics);
  }
  return techStack;
}

export default async function ProjectsSection() {
  const { projects, error } = await getGithubProjects();

  if (error) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="bg-white/60 dark:bg-black/40 rounded-none p-6 text-red-500">
          Error loading projects: {error}
        </div>
      </div>
    );
  }

  return (
    <div id="projects">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative h-56"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-none blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-white/60 dark:bg-black/40 rounded-none p-6 border border-white/20 dark:border-white/10 transition-all duration-300 group-hover:border-blue-500/50 h-full flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                      rounded-full text-xs text-zinc-700 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-auto">
                <div className="flex gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" /> {project.stats.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" /> {project.stats.forks}
                  </span>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}