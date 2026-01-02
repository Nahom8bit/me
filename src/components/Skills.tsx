import { getSkills } from '@/lib/data';

const proficiencyColors = {
    Native: 'bg-emerald-500',
    Fluent: 'bg-blue-500',
    Conversational: 'bg-amber-500',
    Basic: 'bg-zinc-400',
};

const proficiencyWidths = {
    Native: 'w-full',
    Fluent: 'w-4/5',
    Conversational: 'w-3/5',
    Basic: 'w-2/5',
};

export default function Skills() {
    const { categories, languages } = getSkills();

    return (
        <section id="skills" className="py-20 lg:py-32 bg-zinc-50 dark:bg-zinc-800/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        Skills & Expertise
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full" />
                </div>

                {/* Skill Categories */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-zinc-100 dark:border-zinc-700"
                        >
                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4 pb-4 border-b border-zinc-100 dark:border-zinc-700">
                                {category.name}
                            </h3>
                            <ul className="space-y-3 mb-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <li
                                        key={skillIndex}
                                        className="text-zinc-600 dark:text-zinc-300 flex items-start gap-2"
                                    >
                                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                            {category.tools && (
                                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-700">
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">Tools:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {category.tools.map((tool, toolIndex) => (
                                            <span
                                                key={toolIndex}
                                                className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm rounded-full"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {category.projects && (
                                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-700">
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                        {category.projects}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Languages */}
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-100 dark:border-zinc-700">
                    <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-8 text-center">
                        Languages
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {languages.map((lang, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium text-zinc-900 dark:text-white">
                                        {lang.name}
                                    </span>
                                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                                        {lang.proficiency}
                                    </span>
                                </div>
                                <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full ${proficiencyColors[lang.proficiency]} ${proficiencyWidths[lang.proficiency]} rounded-full transition-all duration-500`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
