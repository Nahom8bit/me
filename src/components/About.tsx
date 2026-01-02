import { getProfile, getExperience } from '@/lib/data';

export default function About() {
    const profile = getProfile();
    const { approach } = getExperience();

    return (
        <section id="about" className="py-20 lg:py-32 bg-white dark:bg-zinc-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full" />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Bio */}
                    <div>
                        <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-6">
                            Who I Am
                        </h3>
                        <div className="space-y-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                            {profile.bio.description.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        {/* Availability */}
                        <div className="mt-8 p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
                            <h4 className="font-semibold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                Currently Available For
                            </h4>
                            <ul className="space-y-2">
                                {profile.availability.for.map((item, index) => (
                                    <li key={index} className="text-zinc-600 dark:text-zinc-300 flex items-center gap-2">
                                        <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                                ⏱ {profile.availability.responseTime}
                            </p>
                        </div>
                    </div>

                    {/* Approach */}
                    <div>
                        <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-6">
                            {approach.title}
                        </h3>
                        <blockquote className="text-xl italic text-zinc-600 dark:text-zinc-300 border-l-4 border-blue-500 pl-6 mb-8">
                            &quot;{approach.philosophy}&quot;
                        </blockquote>

                        <h4 className="font-semibold text-zinc-900 dark:text-white mb-4">
                            My Process
                        </h4>
                        <ol className="space-y-4">
                            {approach.process.map((step, index) => (
                                <li key={index} className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center font-semibold text-sm">
                                        {index + 1}
                                    </span>
                                    <p className="text-zinc-600 dark:text-zinc-300 pt-1">
                                        {step}
                                    </p>
                                </li>
                            ))}
                        </ol>

                        <p className="mt-8 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                            {approach.values}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
