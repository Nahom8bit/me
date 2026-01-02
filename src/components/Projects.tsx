import { getFeaturedProjects } from '@/lib/data';
import type { Project } from '@/types';

function ProjectCard({ project }: { project: Project }) {
    const hasLinks = project.links && Object.values(project.links).some(link => link);

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 dark:border-zinc-700 group">
            {/* Header */}
            <div className="p-6 pb-4">
                {project.featured && (
                    <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-medium rounded-full mb-4">
                        ⭐ Featured
                    </span>
                )}
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.name}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 font-medium">
                    {project.tagline}
                </p>
            </div>

            {/* Content */}
            <div className="px-6 pb-6">
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">
                    {project.description}
                </p>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                    <div className="mb-4">
                        <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                                <li key={index} className="text-sm text-zinc-600 dark:text-zinc-300 flex items-start gap-2">
                                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Tech Stack */}
                {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, index) => (
                            <span
                                key={index}
                                className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-md"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {/* Status */}
                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-700">
                    <div className="flex items-center gap-2 mb-2">
                        <span className={`w-2 h-2 rounded-full ${project.status.toLowerCase().includes('development')
                                ? 'bg-blue-500 animate-pulse'
                                : project.status.toLowerCase().includes('design')
                                    ? 'bg-amber-500'
                                    : 'bg-emerald-500'
                            }`} />
                        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                            {project.status}
                        </span>
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {project.statusDetail}
                    </p>
                </div>
            </div>

            {/* Links */}
            {hasLinks && (
                <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-800/50 border-t border-zinc-100 dark:border-zinc-700">
                    <div className="flex flex-wrap gap-3">
                        {project.links.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub
                            </a>
                        )}
                        {project.links.demo && (
                            <a
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Demo
                            </a>
                        )}
                        {project.links.website && (
                            <a
                                href={project.links.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                                Website
                            </a>
                        )}
                        {project.links.catalog && (
                            <a
                                href={project.links.catalog}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Catalog
                            </a>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default function Projects() {
    const projects = getFeaturedProjects();

    return (
        <section id="projects" className="py-20 lg:py-32 bg-white dark:bg-zinc-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        Projects
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
                        A collection of projects I&apos;m currently working on—building solutions for real-world problems.
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mt-6" />
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
