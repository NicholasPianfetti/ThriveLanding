function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 sm:py-28 bg-neutral-50 border-t border-neutral-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
                        How It Works
                    </h2>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                        Our streamlined process takes you from idea to implementation in four simple steps.
                    </p>
                </div>

                {/* Process steps */}
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Step 1 */}
                    <div className="flex gap-6 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-brand-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                            1
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Discovery Call</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                We start with a conversation to understand your business challenges, workflows, and automation goals. This helps us identify the best opportunities for AI integration.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-6 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-brand-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                            2
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Custom Solution Design</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                Our team designs an AI automation solution tailored specifically to your needs and existing systems. We provide detailed specifications and timelines.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-6 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-brand-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                            3
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Development & Testing</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                We build, test, and refine your solution, keeping you involved throughout the process. Regular updates ensure the solution meets your expectations.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex gap-6 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-brand-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                            4
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Launch & Support</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                We deploy your solution and provide ongoing support to ensure optimal performance. Your success is our success.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <a
                        href="#contact"
                        className="inline-block bg-brand-500 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-brand-600 transition-colors"
                    >
                        Start Your Project
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
