import { useScrollAnimation } from './hooks/useScrollAnimation';

function About() {
    const { elementRef, isVisible } = useScrollAnimation(0.1);

    const features = [
        {
            title: 'Custom Built',
            description: 'Every solution is tailored to your unique business requirements and processes.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
            ),
        },
        {
            title: 'Seamless Integration',
            description: 'Our tools integrate smoothly with your existing systems and workflows, minimizing disruption.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            title: 'Ongoing Support',
            description: 'We monitor, optimize, and improve your AI as your business evolves— long after deployment.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section
            id="about"
            className="relative py-20 sm:py-28 bg-white"
            ref={elementRef}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className={`max-w-2xl mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">
                        Our Approach
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                        Why Choose Thrive?
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Every Thrive system is designed around your workflows, tools, and goals.
                    </p>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`group bg-app-bg rounded-xl border border-border-light p-6 transition-all duration-500 hover:shadow-card-hover hover:border-brand-200 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                            style={{ transitionDelay: `${index * 100 + 200}ms` }}
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-text-primary mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Quote */}
                <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    <blockquote className="max-w-3xl mx-auto">
                        <p className="text-xl sm:text-2xl text-text-primary italic leading-relaxed">
                            "Automation isn't about replacing people. It's about empowering them to focus on what truly matters."
                        </p>
                    </blockquote>
                </div>
            </div>
        </section>
    );
}

export default About;
