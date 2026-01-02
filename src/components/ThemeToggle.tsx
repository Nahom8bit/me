'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();

    const cycleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else if (theme === 'dark') {
            setTheme('system');
        } else {
            setTheme('light');
        }
    };

    return (
        <button
            onClick={cycleTheme}
            className="relative p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label={`Current theme: ${theme}. Click to change.`}
            title={`Theme: ${theme}`}
        >
            {/* Sun icon - shown in light mode */}
            <svg
                className={`w-5 h-5 transition-all ${resolvedTheme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90 absolute'
                    }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>

            {/* Moon icon - shown in dark mode */}
            <svg
                className={`w-5 h-5 transition-all ${resolvedTheme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90 absolute'
                    }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
            </svg>

            {/* System indicator dot */}
            {theme === 'system' && (
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-blue-500 rounded-full" />
            )}
        </button>
    );
}
