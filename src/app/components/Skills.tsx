'use client';

import 'highlight.js/styles/github-dark.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import { useEffect, useRef } from 'react';



hljs.registerLanguage('javascript', javascript);

const technologies = {
    languages: ["GO", "Rust", "Python", "Kotlin"],
    frontend: ["React/Next.js", "SvelteKit", "Tailwind CSS"],
    database: ["SQLite", "Postgres", "MongoDB", "Redis"],
    tools: ["Docker", "K8s", "Nginx", "OPNsense", "Proxmox"]
};



export default function Skills() {
    const codeRef = useRef(null);

    useEffect(() => {
        if (codeRef.current) {
            hljs.highlightElement(codeRef.current);
        }
    }, []);

    const codeSnippet = `
let techStack = {
  languages: ["${technologies.languages.join('", "')}"],
  frontend: ["${technologies.frontend.join('", "')}"],
  databases: ["${technologies.database.join('", "')}"],
  tools: ["${technologies.tools.join('", "')}"]
};
  `;
    return (
        <div id="skills" className="mt-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Tech Stack
            </h2>
            <div className="bg-white/60 dark:bg-black/40 rounded-none p-4 font-mono text-base border border-white/20 dark:border-white/10">
                <pre>
                    <code ref={codeRef} className="language-javascript !bg-transparent">
                        {codeSnippet}
                    </code>
                </pre>
            </div>
        </div>
    )
}