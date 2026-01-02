import { getProfile } from '@/lib/data';

export default function Contact() {
    const profile = getProfile();

    return (
        <section id="contact" className="py-20 lg:py-32 bg-white dark:bg-zinc-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? I&apos;d love to hear from you.
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mt-6" />
                </div>

                <div className="max-w-xl mx-auto">
                    {/* Contact Card */}
                    <div className="bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-zinc-800 dark:to-zinc-800 rounded-3xl p-8 md:p-10 border border-zinc-100 dark:border-zinc-700">
                        {/* Email */}
                        <a
                            href={`mailto:${profile.contact.email}`}
                            className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 rounded-2xl mb-4 hover:shadow-md transition-shadow group"
                        >
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">Email</p>
                                <p className="font-medium text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {profile.contact.email}
                                </p>
                            </div>
                        </a>

                        {/* Phone */}
                        <a
                            href={`tel:${profile.contact.phone}`}
                            className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 rounded-2xl mb-4 hover:shadow-md transition-shadow group"
                        >
                            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">Phone</p>
                                <p className="font-medium text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                    {profile.contact.phone}
                                </p>
                            </div>
                        </a>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-6">
                            <a
                                href={profile.contact.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 p-4 bg-white dark:bg-zinc-900 rounded-2xl hover:shadow-md transition-shadow group"
                            >
                                <svg className="w-5 h-5 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                <span className="font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                                    GitHub
                                </span>
                            </a>
                            <a
                                href={profile.contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 p-4 bg-white dark:bg-zinc-900 rounded-2xl hover:shadow-md transition-shadow group"
                            >
                                <svg className="w-5 h-5 text-zinc-700 dark:text-zinc-300 group-hover:text-[#0077b5] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                <span className="font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-[#0077b5] transition-colors">
                                    LinkedIn
                                </span>
                            </a>
                        </div>

                        {/* Response Time */}
                        <div className="mt-8 text-center">
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                ⏱ {profile.availability.responseTime}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
