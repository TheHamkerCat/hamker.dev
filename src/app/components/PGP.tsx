'use client';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const pgpKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEaJopdhYJKwYBBAHaRw8BAQdADy3B0qW1OHxp9MmNlmzDh+N6qZQxqfiGNwXS
FRa+lsi0IFRoZUhhbWtlckNhdCA8YWtzaGF5QGhhbWtlci5kZXY+iJkEExYKAEEW
IQT0/A548+JDXSEAw/kLhz1IGyjZgwUCaJopdgIbIwUJBaOagAULCQgHAgIiAgYV
CgkICwIEFgIDAQIeBwIXgAAKCRALhz1IGyjZg0RNAQDkmGUXif2tT9Ghh3PIK8wK
RP7Q6J05pweblt4hh0h5ZgEArY/MwuC83aooam61HJ5Uy989goNa5M62YTsKVHHv
WAk=
=hnlr
-----END PGP PUBLIC KEY BLOCK-----`;

export default function Pgp() {
    const [isRevealed, setIsRevealed] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(pgpKey);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <div id="pgp" className="mt-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">
                PGP
            </h2>
            {!isRevealed ? (
                <button
                    onClick={() => setIsRevealed(true)}
                    className="group bg-white/60 dark:bg-black/40 rounded-none p-4
                    border border-white/20 dark:border-white/10 transition-all duration-300
                    hover:border-yellow-500/50 w-full text-zinc-700 dark:text-zinc-300
                    hover:text-yellow-500 font-medium"
                >
                    Show
                </button>
            ) : (
                <div className="bg-white/60 dark:bg-black/40 rounded-none p-4 border border-white/20 dark:border-white/10">
                    <div className="bg-zinc-100 dark:bg-zinc-900 rounded-none p-4 border border-zinc-200 dark:border-zinc-800">
                        <pre className="text-sm font-mono text-zinc-800 dark:text-zinc-300 whitespace-pre-wrap overflow-x-auto">
                            {pgpKey}
                        </pre>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <button
                            onClick={handleCopy}
                            className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-none transition-colors"
                        >
                            {isCopied ? (
                                <>
                                    <Check className="w-4 h-4" />
                                    Copied!
                                </>
                            ) : (
                                <>
                                    <Copy className="w-4 h-4" />
                                    Copy
                                </>
                            )}
                        </button>
                        <button
                            onClick={() => setIsRevealed(false)}
                            className="bg-zinc-500 hover:bg-zinc-600 text-white px-4 py-2 rounded-none transition-colors"
                        >
                            Hide
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}