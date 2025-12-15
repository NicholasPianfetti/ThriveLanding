function Hero() {
    return (
        <section className="bg-white py-20 sm:py-28 lg:py-36">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 mb-8 leading-tight">
                        Custom AI Automation
                        <span className="block mt-2">Built for Your Business</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg sm:text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        We develop tailored AI solutions that streamline your operations, eliminate repetitive tasks, and accelerate growth.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#contact"
                            className="bg-brand-500 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-brand-600 transition-colors w-full sm:w-auto text-center"
                        >
                            Book a Demo
                        </a>
                        <a
                            href="#how-it-works"
                            className="border border-neutral-300 text-neutral-700 px-8 py-3.5 rounded-lg text-base font-semibold hover:border-neutral-400 hover:bg-neutral-50 transition-colors w-full sm:w-auto text-center"
                        >
                            How It Works
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
