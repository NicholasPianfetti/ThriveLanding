import { useState, useEffect, useRef } from 'react';
import Squares from './components/Squares';

function Hero() {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => setHasAnimated(true), 300);

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const parallaxOffset = scrollY * 0.5;

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{
                background: `
                    radial-gradient(ellipse 80% 60% at 30% 40%, rgba(232, 220, 196, 0.15), transparent),
                    radial-gradient(circle at 80% 20%, rgba(232, 220, 196, 0.1), transparent),
                    linear-gradient(135deg, #1a2f23 0%, #2d4a38 50%, #1a2f23 100%)
                `
            }}
        >
            {/* Animated mesh gradient overlay */}
            <div className="absolute inset-0 opacity-40">
                <div
                    className="absolute inset-0 animate-pulse-slow"
                    style={{
                        background: `
                            radial-gradient(circle at 20% 80%, rgba(232, 220, 196, 0.2) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(45, 74, 56, 0.3) 0%, transparent 50%)
                        `,
                        animationDuration: '8s'
                    }}
                />
            </div>

            {/* Moving squares with parallax */}
            <div
                className="absolute inset-0 opacity-15"
                style={{ transform: `translateY(${parallaxOffset}px)` }}
            >
                <Squares
                    direction="diagonal"
                    speed={0.3}
                    borderColor="#e8dcc4"
                    squareSize={100}
                    hoverFillColor="rgba(232, 220, 196, 0.08)"
                />
            </div>

            {/* Gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-hero-bg-dark via-transparent to-transparent pointer-events-none opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-hero-bg-dark/30 via-transparent to-transparent pointer-events-none" />

            {/* Decorative accent line */}
            <div
                className={`absolute left-0 top-1/3 w-1 bg-gradient-to-b from-transparent via-hero-accent to-transparent transition-all duration-1500 delay-1000 ${
                    hasAnimated ? 'h-64 opacity-100' : 'h-0 opacity-0'
                }`}
                style={{ transform: `translateY(${-parallaxOffset * 0.3}px)` }}
            />

            <div className="relative w-full px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32">
                <div className="max-w-7xl mx-auto">
                    {/* Eyebrow text */}
                    <div
                        className={`inline-block mb-6 transition-all duration-1000 ${
                            hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    >
                        <span className="text-hero-accent text-sm sm:text-base tracking-[0.3em] uppercase font-medium">
                            Enterprise AI Solutions
                        </span>
                        <div className="h-px bg-gradient-to-r from-hero-accent to-transparent mt-2" />
                    </div>

                    {/* Main headline with editorial typography */}
                    <h1 className="mb-8 sm:mb-12">
                        <span
                            className={`block font-['Playfair_Display'] font-bold text-hero-text leading-[0.95] tracking-tight transition-all duration-1200 delay-200 ${
                                hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`}
                            style={{
                                fontSize: 'clamp(2.5rem, 8vw, 7rem)',
                                textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                            }}
                        >
                            Custom AI
                        </span>
                        <span
                            className={`block font-['Playfair_Display'] font-bold leading-[0.95] tracking-tight mt-1 sm:mt-2 bg-gradient-to-r from-hero-accent via-hero-accent-dark to-hero-accent bg-clip-text text-transparent transition-all duration-1200 delay-400 ${
                                hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`}
                            style={{
                                fontSize: 'clamp(2.5rem, 8vw, 7rem)',
                                filter: 'drop-shadow(0 2px 12px rgba(232, 220, 196, 0.3))'
                            }}
                        >
                            Automation
                        </span>
                        <span
                            className={`block font-['Playfair_Display'] italic font-light text-hero-text/90 leading-[0.95] tracking-tight mt-1 sm:mt-2 transition-all duration-1200 delay-600 ${
                                hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`}
                            style={{ fontSize: 'clamp(1.75rem, 5vw, 4.5rem)' }}
                        >
                            Built for Your Business
                        </span>
                    </h1>

                    {/* Subheadline with refined typography */}
                    <div className="max-w-2xl">
                        <p
                            className={`text-base sm:text-lg lg:text-xl text-hero-text-muted/90 leading-relaxed font-light mb-10 sm:mb-14 transition-all duration-1000 delay-800 ${
                                hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        >
                            We develop tailored AI solutions that streamline your operations,
                            eliminate repetitive tasks, and accelerate growth.
                        </p>

                        {/* CTA with sophisticated styling */}
                        <div
                            className={`flex flex-col sm:flex-row gap-4 items-start transition-all duration-1000 delay-1000 ${
                                hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        >
                            <a
                                href="https://calendly.com/nickpisme4/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=e8dcc4&primary_color=1a2f23"
                                className="group relative inline-flex items-center gap-3 bg-hero-accent text-hero-bg-dark px-8 sm:px-10 py-4 sm:py-5 rounded-none text-base sm:text-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-hero-accent/30"
                                style={{
                                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                                }}
                            >
                                <span className="relative z-10">Book a Demo</span>
                                <svg
                                    className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                                <div className="absolute inset-0 bg-gradient-to-r from-hero-accent-dark to-hero-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>
                        </div>
                    </div>

                    {/* Decorative floating element */}
                    <div
                        className={`absolute right-8 sm:right-16 top-1/2 -translate-y-1/2 hidden lg:block transition-all duration-1500 delay-1200 ${
                            hasAnimated ? 'opacity-30 scale-100' : 'opacity-0 scale-90'
                        }`}
                        style={{ transform: `translateY(calc(-50% + ${-parallaxOffset * 0.2}px))` }}
                    >
                        <div className="relative w-64 h-64">
                            <div className="absolute inset-0 border border-hero-accent/20 rotate-45" />
                            <div className="absolute inset-8 border border-hero-accent/20 rotate-45" />
                            <div className="absolute inset-16 border border-hero-accent/30 rotate-45" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1400 ${
                    hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
                <div className="flex flex-col items-center gap-2 animate-bounce-slow">
                    <span className="text-hero-accent/60 text-xs tracking-widest uppercase">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-hero-accent/60 to-transparent" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
