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
        // Trigger animation on mount
        setTimeout(() => setHasAnimated(true), 100);

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
    }, []);

    // Also load the Calendly CSS
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://assets.calendly.com/assets/external/widget.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);


    return (
        <header
            className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-hero-accent border-b border-neutral-200 shadow-sm'
                    : 'bg-transparent'
            } ${
                hasAnimated ? 'top-0 opacity-100' : '-top-24 opacity-0'
            }`}
            style={{ transition: 'top 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s, border 0.3s, box-shadow 0.3s' }}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex items-center transition-all duration-300 ${
                    isScrolled ? 'h-16 justify-between' : 'h-20 justify-between'
                }`}>
                    {/* Logo - Left */}
                    <div className={`flex items-center flex-shrink-0 transition-all duration-300 ${
                        !isScrolled ? 'bg-hero-accent px-6 py-3 rounded-2xl' : ''
                    }`}>
                        <h1 className={`font-bold transition-all duration-300 ${
                            isScrolled ? 'text-2xl text-hero-bg-light' : 'text-xl text-hero-bg-dark'
                        }`}>
                            Thrive
                        </h1>
                    </div>

                    {/* Desktop Navigation - Center */}
                    <div className={`hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                        !isScrolled ? 'bg-hero-accent px-8 py-3 rounded-2xl' : ''
                    }`}>
                        <a
                            href="#about"
                            className={`transition-colors text-sm font-medium ${
                                isScrolled
                                    ? 'text-hero-bg-dark hover:text-neutral-900'
                                    : 'text-hero-bg-dark hover:text-hero-bg-light'
                            }`}
                        >
                            About
                        </a>
                        <a
                            href="#how-it-works"
                            className={`transition-colors text-sm font-medium ${
                                isScrolled
                                    ? 'text-hero-bg-dark hover:text-neutral-900'
                                    : 'text-hero-bg-dark hover:text-hero-bg-light'
                            }`}
                        >
                            How It Works
                        </a>
                        <a
                            href="#faq"
                            className={`transition-colors text-sm font-medium ${
                                isScrolled
                                    ? 'text-hero-bg-dark hover:text-neutral-900'
                                    : 'text-hero-bg-dark hover:text-hero-bg-light'
                            }`}
                        >
                            FAQ
                        </a>
                    </div>

                    {/* CTA Button - Right */}
                    <div className="flex items-center flex-shrink-0">
                        <a
                            href="https://calendly.com/nickpisme4/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=e8dcc4&primary_color=1a2f23"
                            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                                isScrolled
                                    ? 'bg-hero-bg-dark text-white hover:bg-hero-bg-light'
                                    : 'bg-hero-accent text-bg-hero-dark hover:bg-hero-bg-light shadow-md'
                            }`}
                        >
                            <span className="hidden sm:inline">Book a Demo</span>
                            <span className="sm:hidden">Book Demo</span>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;