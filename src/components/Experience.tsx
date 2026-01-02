import { getExperience } from '@/lib/data';

export default function Experience() {
    const { experiences } = getExperience();

    return (
        <section id="experience" className="py-20 lg:py-32 bg-zinc-50 dark:bg-zinc-800/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        Experience
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full" />
                </div>

                {/* Experience Timeline */}
                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 pb-12 last:pb-0">
                            {/* Timeline Line */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-700" />

                            {/* Timeline Dot */}
                            <div className={`absolute left-0 top-0 w-3 h-3 -translate-x-1/2 rounded-full ${exp.current
                                    ? 'bg-emerald-500 ring-4 ring-emerald-100 dark:ring-emerald-900/50'
                                    : 'bg-zinc-400 dark:bg-zinc-500'
                                }`} />

                            {/* Content */}
                            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-700 ml-4">
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                                        {exp.title}
                                    </h3>
                                    {exp.current && (
                                        <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium rounded-full">
                                            Current
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                                    {exp.period}
                                </p>
                                <p className="text-zinc-600 dark:text-zinc-300 mb-6">
                                    {exp.description}
                                </p>

                                {/* Responsibilities */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3 uppercase tracking-wide">
                                        Responsibilities
                                    </h4>
                                    <ul className="space-y-2">
                                        {exp.responsibilities.map((resp, respIndex) => (
                                            <li key={respIndex} className="text-sm text-zinc-600 dark:text-zinc-300 flex items-start gap-2">
                                                <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                                {resp}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Highlights */}
                                <div>
                                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3 uppercase tracking-wide">
                                        Highlights
                                    </h4>
                                    <ul className="space-y-2">
                                        {exp.highlights.map((highlight, highlightIndex) => (
                                            <li key={highlightIndex} className="text-sm text-zinc-600 dark:text-zinc-300 flex items-start gap-2">
                                                <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                </svg>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
