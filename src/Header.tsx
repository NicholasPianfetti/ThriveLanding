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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => setHasAnimated(true), 100);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
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

    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'Process', href: '#how-it-works' },
        { label: 'FAQ', href: '#faq' },
    ];

    return (
        <header
            className={`fixed left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white border-b border-border-light shadow-sm'
                : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
                } ${hasAnimated ? 'top-0 opacity-100' : '-top-20 opacity-0'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2.5 group">
                        <img
                            src="ThriveSymbolDark.png"
                            alt="Thrive AI Symbol"
                            className="h-8 transition-transform duration-200 group-hover:scale-105"
                        />
                        <span className="text-text-primary font-semibold text-lg tracking-tight">
                            ThriveAI
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-text-secondary hover:text-text-primary text-sm font-medium transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://app.thrive-ai.co"
                            className="hidden sm:inline-flex items-center text-text-secondary hover:text-text-primary text-sm font-medium transition-colors"
                        >
                            Login
                        </a>
                        <a
                            href="https://calendly.com/thrive-ai-info/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                            className="hidden sm:inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Book a Demo
                        </a>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border-light">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-text-secondary hover:text-text-primary hover:bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="https://app.thrive-ai.co"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-text-secondary hover:text-text-primary hover:bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                                Login to App
                            </a>
                            <a
                                href="https://calendly.com/thrive-ai-info/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                                className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium mt-2 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Book a Demo
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;