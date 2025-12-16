import { useState, useEffect } from 'react';
import Squares from './components/Squares';

function Hero() {
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        // Trigger animations after a short delay
        setTimeout(() => setHasAnimated(true), 200);
    }, []);

    return (
        <section className="relative bg-gradient-to-b from-hero-bg-dark to-hero-bg-light min-h-screen flex items-center sm:items-end overflow-hidden">
            {/* Moving squares background */}
            <div className="absolute inset-0 opacity-20">
                <Squares
                    direction="diagonal"
                    speed={0.5}
                    borderColor="#e8dcc4"
                    squareSize={75}
                    hoverFillColor="rgba(232, 220, 196, 0.1)"
                />
            </div>

            {/* Gradient overlay to fade squares behind text */}
            <div className="absolute inset-0 bg-gradient-to-t from-hero-bg-dark via-hero-bg-dark/80 to-transparent pointer-events-none"></div>

            <div className="relative w-full px-4 sm:px-6 lg:px-8 py-12 sm:pb-20 lg:pb-24 sm:mb-20">
                <div className="max-w-6xl">
                    {/* Main headline */}
                    <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-hero-text mb-6 sm:mb-10 leading-[1.1] tracking-tight transition-all duration-1000 ${
                        hasAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                    }`}>
                        <span className="block sm:whitespace-nowrap">Custom AI Automation</span>
                        <span className={`block mt-2 bg-gradient-to-r from-hero-accent to-hero-accent-dark bg-clip-text text-transparent sm:whitespace-nowrap transition-all duration-1000 delay-200 ${
                            hasAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                        }`}>
                            Built for Your Business
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className={`text-lg sm:text-xl lg:text-2xl text-hero-text-muted mb-8 sm:mb-12 max-w-3xl leading-relaxed font-light transition-all duration-1000 delay-400 ${
                        hasAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                    }`}>
                        We develop tailored AI solutions that streamline your operations, eliminate repetitive tasks, and accelerate growth.
                    </p>

                    {/* CTAs */}
                    <div className={`flex flex-col sm:flex-row gap-4 items-start transition-all duration-1000 delay-700 ${
                        hasAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                    }`}>
                        <a
                            href="https://calendly.com/nickpisme4/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=e8dcc4&primary_color=1a2f23"
                            className="bg-hero-accent text-hero-bg-dark px-8 py-4 rounded-xl text-lg font-semibold hover:bg-hero-accent-dark hover:shadow-lg hover:shadow-hero-accent/25 transition-all duration-200 w-full sm:w-auto text-center"
                        >
                            Book a Demo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
