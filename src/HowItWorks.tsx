import { useScrollAnimation } from './hooks/useScrollAnimation';

function HowItWorks() {
    const { elementRef, isVisible } = useScrollAnimation(0.1);

    const steps = [
        {
            number: '01',
            title: 'Discovery Call',
            description: 'We start with a conversation to understand your business challenges, workflows, and automation goals.',
        },
        {
            number: '02',
            title: 'Custom Solution Design',
            description: 'Our team designs an AI automation solution tailored specifically to your needs and existing systems.',
        },
        {
            number: '03',
            title: 'Development & Testing',
            description: 'We build, test, and refine your solution, keeping you involved throughout the process.',
        },
        {
            number: '04',
            title: 'Launch & Support',
            description: 'We deploy your solution and provide ongoing support to ensure optimal performance.',
        },
    ];

    return (
        <section
            id="how-it-works"
            className="relative py-20 sm:py-28 bg-app-bg"
            ref={elementRef}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className={`max-w-2xl mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">
                        Our Process
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Our streamlined process takes you from idea to implementation in four simple steps.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`group bg-white rounded-xl border border-border-light p-6 transition-all duration-500 hover:shadow-card-hover hover:border-brand-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                            style={{ transitionDelay: `${index * 100 + 200}ms` }}
                        >
                            {/* Step Number */}
                            <div className="w-10 h-10 bg-brand-600 text-white rounded-lg flex items-center justify-center font-bold text-sm mb-4">
                                {step.number}
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-text-primary mb-2">
                                {step.title}
                            </h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    <a
                        href="https://calendly.com/thrive-ai-info/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                        className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg text-base font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-brand-600/25"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Book a Demo
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
