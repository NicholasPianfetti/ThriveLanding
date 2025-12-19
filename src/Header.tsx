import { useState, useEffect } from 'react';

declare global {
    interface Window {
        Calendly?: {
            initBadgeWidget: (config: any) => void;
        };
    }
}

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        setTimeout(() => setHasAnimated(true), 100);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.head.appendChild(script);

        const link = document.createElement('link');
        link.href = 'https://assets.calendly.com/assets/external/widget.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    return (
        <header
            className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-hero-bg-dark/95 backdrop-blur-md border-b border-hero-accent/10'
                    : 'bg-transparent'
            } ${
                hasAnimated ? 'top-0 opacity-100' : '-top-24 opacity-0'
            }`}
            style={{
                transition: 'top 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s, background-color 0.5s, backdrop-filter 0.5s',
            }}
        >
            <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className={`flex items-center justify-between transition-all duration-300 ${
                    isScrolled ? 'h-16' : 'h-20'
                }`}>
                    {/* Logo */}
                    <a
                        href="#"
                        className={`flex items-center gap-2 transition-all duration-300 group ${
                            !isScrolled ? 'bg-hero-accent/95 backdrop-blur-sm px-5 py-2.5' : ''
                        }`}
                        style={!isScrolled ? {
                            clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                        } : {}}
                    >
                        <span className={`font-['Playfair_Display'] font-bold text-xl sm:text-2xl transition-colors ${
                            isScrolled ? 'text-hero-accent' : 'text-hero-bg-dark'
                        }`}>
                            Thrive
                        </span>
                        {!isScrolled && (
                            <div className="w-px h-5 bg-hero-bg-dark/20" />
                        )}
                        {!isScrolled && (
                            <span className="text-hero-bg-dark/60 text-xs tracking-widest uppercase">AI</span>
                        )}
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        {[
                            { label: 'About', href: '#about' },
                            { label: 'Process', href: '#how-it-works' },
                            { label: 'FAQ', href: '#faq' },
                        ].map((link, i) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`group relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                                    isScrolled
                                        ? 'text-hero-accent/80 hover:text-hero-accent'
                                        : 'text-hero-text/70 hover:text-hero-text'
                                }`}
                                style={{ transitionDelay: `${i * 50}ms` }}
                            >
                                {link.label}
                                <span className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                                    isScrolled ? 'bg-hero-accent' : 'bg-hero-text'
                                }`} />
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <a
                        href="https://calendly.com/nickpisme4/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=e8dcc4&primary_color=1a2f23"
                        className={`group relative inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold overflow-hidden transition-all duration-300 ${
                            isScrolled
                                ? 'bg-hero-accent text-hero-bg-dark hover:shadow-lg hover:shadow-hero-accent/20'
                                : 'bg-hero-accent text-hero-bg-dark hover:bg-hero-accent-dark hover:shadow-xl hover:shadow-hero-accent/30'
                        }`}
                        style={{
                            clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                        }}
                    >
                        <span className="relative z-10">
                            <span className="hidden sm:inline">Book a Demo</span>
                            <span className="sm:hidden">Demo</span>
                        </span>
                        <svg
                            className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                        <div className="absolute inset-0 bg-hero-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                </div>
            </nav>

            {/* Decorative bottom border gradient (only when scrolled) */}
            {isScrolled && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hero-accent/20 to-transparent" />
            )}
        </header>
    );
}

export default Header;