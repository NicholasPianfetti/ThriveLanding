function About() {
    return (
        <section id="about" className="py-20 sm:py-28 bg-white border-t border-neutral-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
                        Why Choose Thrive
                    </h2>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                        We develop custom AI automation tools that solve your specific business challenges. No generic solutions—just intelligent systems designed around your workflows.
                    </p>
                </div>

                {/* Feature cards */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    <div className="text-center">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-500 text-white text-xl font-bold">
                                1
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-3">Custom Built</h3>
                        <p className="text-neutral-600 leading-relaxed">
                            Every solution is tailored to your unique business requirements and processes. We don't believe in one-size-fits-all.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-500 text-white text-xl font-bold">
                                2
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-3">Seamless Integration</h3>
                        <p className="text-neutral-600 leading-relaxed">
                            Our tools integrate smoothly with your existing systems and workflows, minimizing disruption and maximizing efficiency.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-500 text-white text-xl font-bold">
                                3
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-3">Ongoing Support</h3>
                        <p className="text-neutral-600 leading-relaxed">
                            We provide continuous support and optimization as your needs evolve, ensuring long-term success.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
