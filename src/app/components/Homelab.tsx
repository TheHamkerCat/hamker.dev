'use client';
import 'highlight.js/styles/github-dark.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import { useEffect, useRef, useState } from 'react';

hljs.registerLanguage('javascript', javascript);

const homelabSetup = {
    nodes: {
        primary: {
            cpu: "Ryzen 7 7800X3D",
            gpu: ["RTX 3060", "RX 6600"],
            ram: "64GB DDR5",
            role: "primary_node"
        },
        secondary: {
            cpu: "Intel i7-7700T",
            ram: "32GB",
            role: "backup_node"
        }
    },
    infrastructure: {
        hypervisor: "Proxmox VE",
        firewall: "OPNsense",
        storage: "TrueNAS",
        mainWorkstation: {
            os: "Arch Linux",
            type: "Virtualized in primary_node with GPU PCIE Passthrough",
        }
    }
};

export default function Homelab() {
    const [isRevealed, setIsRevealed] = useState(false);
    const codeRef = useRef(null);

    useEffect(() => {
        if (codeRef.current && isRevealed) {
            hljs.highlightElement(codeRef.current);
        }
    }, [isRevealed]);

    const codeSnippet = `
const homelab = {
    proxmoxCluster: {
        ${homelabSetup.nodes.primary.role}: {
            cpu: "${homelabSetup.nodes.primary.cpu}",
            gpu: ["${homelabSetup.nodes.primary.gpu.join('", "')}"],
            ram: "${homelabSetup.nodes.primary.ram}",
        },
        ${homelabSetup.nodes.secondary.role}: {
            cpu: "${homelabSetup.nodes.secondary.cpu}",
            ram: "${homelabSetup.nodes.secondary.ram}",
        }
    },
    infra: {
        hypervisor: "${homelabSetup.infrastructure.hypervisor}",
        firewall: "${homelabSetup.infrastructure.firewall}",
        storage: "${homelabSetup.infrastructure.storage}",
        main_workstation: {
            os: "${homelabSetup.infrastructure.mainWorkstation.os}",
            type: "${homelabSetup.infrastructure.mainWorkstation.type}",
        }
    }
};`;

    return (
        <div id="homelab" className="mt-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Homelab Setup
            </h2>
            {!isRevealed ? (
                <button
                    onClick={() => setIsRevealed(true)}
                    className="group backdrop-blur-xl bg-white/60 dark:bg-black/40 rounded-2xl p-6
                    border border-white/20 dark:border-white/10 transition-all duration-300
                    hover:border-blue-500/50 w-full text-zinc-700 dark:text-zinc-300
                    hover:text-blue-500 font-medium"
                >
                    Show
                </button>
            ) : (
                <div className="space-y-4">
                    <div className="backdrop-blur-xl bg-white/60 dark:bg-black/40 rounded-2xl p-4 font-mono text-base border border-white/20 dark:border-white/10">
                        <pre>
                            <code ref={codeRef} className="language-javascript !bg-transparent">
                                {codeSnippet}
                            </code>
                        </pre>
                    </div>
                    <button
                        onClick={() => setIsRevealed(false)}
                        className="group backdrop-blur-xl bg-white/60 dark:bg-black/40 rounded-2xl p-4
                        border border-white/20 dark:border-white/10 transition-all duration-300
                        hover:border-blue-500/50 w-full text-zinc-700 dark:text-zinc-300
                        hover:text-blue-500 font-medium"
                    >
                        Hide
                    </button>
                </div>
            )}
        </div>
    );
}