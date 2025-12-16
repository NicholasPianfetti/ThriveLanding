import { useScrollAnimation } from './hooks/useScrollAnimation';

function HowItWorks() {
    const { elementRef, isVisible } = useScrollAnimation(0.1);

    return (
        <section id="how-it-works" className="py-24 sm:py-32 bg-hero-accent" ref={elementRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className={`max-w-3xl mx-auto text-center mb-20 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
                        How It Works
                    </h2>
                    <p className="text-xl text-neutral-600 leading-relaxed font-light">
                        Our streamlined process takes you from idea to implementation in four simple steps.
                    </p>
                </div>

                {/* Process steps */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Step 1 */}
                        <div className={`relative group transition-all duration-700 delay-100 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-hero-bg-dark to-hero-bg-light rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                            <div className="relative bg-white border border-neutral-200 rounded-2xl p-8 h-full">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-hero-bg-dark text-white rounded-xl flex items-center justify-center text-lg font-bold">
                                        1
                                    </div>
                                    <h3 className="text-2xl font-bold text-neutral-900 mt-2">Discovery Call</h3>
                                </div>
                                <p className="text-neutral-600 leading-relaxed">
                                    We start with a conversation to understand your business challenges, workflows, and automation goals. This helps us identify the best opportunities for AI integration.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className={`relative group transition-all duration-700 delay-300 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-hero-bg-dark to-hero-bg-light rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                            <div className="relative bg-white border border-neutral-200 rounded-2xl p-8 h-full">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-hero-bg-dark text-white rounded-xl flex items-center justify-center text-lg font-bold">
                                        2
                                    </div>
                                    <h3 className="text-2xl font-bold text-neutral-900 mt-2">Custom Solution Design</h3>
                                </div>
                                <p className="text-neutral-600 leading-relaxed">
                                    Our team designs an AI automation solution tailored specifically to your needs and existing systems. We provide detailed specifications and timelines.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className={`relative group transition-all duration-700 delay-500 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-hero-bg-dark to-hero-bg-light rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                            <div className="relative bg-white border border-neutral-200 rounded-2xl p-8 h-full">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-hero-bg-dark text-white rounded-xl flex items-center justify-center text-lg font-bold">
                                        3
                                    </div>
                                    <h3 className="text-2xl font-bold text-neutral-900 mt-2">Development & Testing</h3>
                                </div>
                                <p className="text-neutral-600 leading-relaxed">
                                    We build, test, and refine your solution, keeping you involved throughout the process. Regular updates ensure the solution meets your expectations.
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className={`relative group transition-all duration-700 delay-700 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-hero-bg-dark to-hero-bg-light rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                            <div className="relative bg-white border border-neutral-200 rounded-2xl p-8 h-full">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-hero-bg-dark text-white rounded-xl flex items-center justify-center text-lg font-bold">
                                        4
                                    </div>
                                    <h3 className="text-2xl font-bold text-neutral-900 mt-2">Launch & Support</h3>
                                </div>
                                <p className="text-neutral-600 leading-relaxed">
                                    We deploy your solution and provide ongoing support to ensure optimal performance. Your success is our success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className={`text-center mt-16 transition-all duration-700 delay-900 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <a
                        href="https://calendly.com/nickpisme4/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=e8dcc4&primary_color=1a2f23"
                        className="inline-block bg-hero-bg-dark text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-hero-bg-light hover:shadow-lg hover:shadow-hero-bg-dark/25 transition-all duration-200"
                    >
                        Book a Demo
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
