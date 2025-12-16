import { useScrollAnimation } from './hooks/useScrollAnimation';

function About() {
    const { elementRef, isVisible } = useScrollAnimation(0.1);

    return (
        <section id="about" className="py-24 sm:py-32 bg-hero-accent" ref={elementRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className={`max-w-3xl mx-auto text-center mb-20 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
                        Why Choose Thrive
                    </h2>
                    <p className="text-xl text-neutral-600 leading-relaxed font-light">
                        We develop custom AI automation tools that solve your specific business challenges.
                    </p>
                </div>

                {/* Feature cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className={`group relative bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-hero-bg-dark/10 hover:-translate-y-1 transition-all duration-700 delay-100 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        <div className="absolute top-6 right-6 text-6xl font-bold text-hero-bg-dark/10 group-hover:text-hero-bg-dark/20 transition-colors">
                            01
                        </div>
                        <div className="relative">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-hero-bg-dark to-hero-bg-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Custom Built</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                Every solution is tailored to your unique business requirements and processes.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className={`group relative bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-hero-bg-dark/10 hover:-translate-y-1 transition-all duration-700 delay-300 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        <div className="absolute top-6 right-6 text-6xl font-bold text-hero-bg-dark/10 group-hover:text-hero-bg-dark/20 transition-colors">
                            02
                        </div>
                        <div className="relative">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-hero-bg-dark to-hero-bg-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Seamless Integration</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                Our tools integrate smoothly with your existing systems and workflows, minimizing disruption and maximizing efficiency.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className={`group relative bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-hero-bg-dark/10 hover:-translate-y-1 transition-all duration-700 delay-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        <div className="absolute top-6 right-6 text-6xl font-bold text-hero-bg-dark/10 group-hover:text-hero-bg-dark/20 transition-colors">
                            03
                        </div>
                        <div className="relative">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-hero-bg-dark to-hero-bg-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Ongoing Support</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                We provide continuous support and optimization as your needs evolve, ensuring long-term success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
