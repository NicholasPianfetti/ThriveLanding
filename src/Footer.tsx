function Footer() {
    return (
        <footer className="relative bg-hero-bg-dark text-white overflow-hidden">
            {/* Decorative gradient overlay */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(circle at 20% 80%, rgba(232, 220, 196, 0.15), transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(45, 74, 56, 0.2), transparent 50%)
                    `
                }}
            />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
                {/* Newsletter section with refined styling */}
                <div className="py-20 border-b border-hero-accent/10">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="mb-6">
                            <span className="text-hero-accent/80 text-sm tracking-[0.25em] uppercase font-medium">
                                Newsletter
                            </span>
                            <div className="h-px bg-gradient-to-r from-transparent via-hero-accent/30 to-transparent mt-2" />
                        </div>
                        <h3 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-hero-text mb-4">
                            Stay Updated
                        </h3>
                        <p className="text-hero-text-muted/80 mb-8 leading-relaxed font-light">
                            Get the latest insights on AI automation and business optimization delivered to your inbox.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-5 py-4 bg-hero-accent/5 border border-hero-accent/20 text-white placeholder-hero-text-muted/50 focus:outline-none focus:border-hero-accent/50 focus:bg-hero-accent/10 transition-all duration-300"
                                style={{
                                    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                                }}
                            />
                            <button
                                type="submit"
                                className="group relative bg-hero-accent text-hero-bg-dark px-8 py-4 font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-hero-accent/30 hover:scale-[1.02] whitespace-nowrap"
                                style={{
                                    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                                }}
                            >
                                <span className="relative z-10">Subscribe</span>
                                <div className="absolute inset-0 bg-hero-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Main footer content with editorial layout */}
                <div className="py-16">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                        {/* Brand */}
                        <div className="lg:col-span-2">
                            <h3 className="font-['Playfair_Display'] text-3xl font-bold text-hero-accent mb-4">
                                Thrive
                            </h3>
                            <p className="text-hero-text-muted/70 leading-relaxed mb-6 max-w-sm font-light">
                                Custom AI automation solutions built for your business. We help companies streamline operations and accelerate growth through intelligent automation.
                            </p>
                            <div className="flex gap-3">
                                {[
                                    {
                                        name: 'Twitter',
                                        icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    },
                                    {
                                        name: 'LinkedIn',
                                        icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    },
                                    {
                                        name: 'YouTube',
                                        icon: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                    }
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href="#"
                                        className="group w-11 h-11 border border-hero-accent/20 flex items-center justify-center hover:border-hero-accent/50 hover:bg-hero-accent/10 transition-all duration-300"
                                        aria-label={social.name}
                                        style={{
                                            clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                                        }}
                                    >
                                        <svg className="w-5 h-5 text-hero-accent/60 group-hover:text-hero-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            {social.icon}
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Spacer */}
                        <div className="hidden lg:block" />

                        {/* Product */}
                        <div>
                            <h4 className="font-['Playfair_Display'] font-semibold text-hero-text mb-6 text-lg">
                                Product
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    { label: 'Features', href: '#about' },
                                    { label: 'How It Works', href: '#how-it-works' },
                                    { label: 'Pricing', href: '#' },
                                    { label: 'Use Cases', href: '#' }
                                ].map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="group inline-flex items-center gap-2 text-hero-text-muted/60 hover:text-hero-accent transition-colors font-light"
                                        >
                                            <span className="w-0 h-px bg-hero-accent group-hover:w-3 transition-all duration-300" />
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="font-['Playfair_Display'] font-semibold text-hero-text mb-6 text-lg">
                                Contact
                            </h4>
                            <ul className="space-y-3">
                                <li className="text-hero-text-muted/60 font-light">
                                    <a href="mailto:hello@thrive.ai" className="hover:text-hero-accent transition-colors">
                                        hello@thrive.ai
                                    </a>
                                </li>
                                <li className="text-hero-text-muted/60 font-light">
                                    <a href="https://calendly.com/nickpisme4/30min" className="hover:text-hero-accent transition-colors">
                                        Book a call
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom bar with decorative line */}
                    <div className="pt-8 border-t border-hero-accent/10">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-hero-text-muted/50 text-sm font-light">
                                &copy; {new Date().getFullYear()} Thrive. All rights reserved.
                            </p>
                            <div className="flex items-center gap-6 text-sm">
                                {/* <a href="#" className="text-hero-text-muted/50 hover:text-hero-accent transition-colors font-light">
                                    Privacy Policy
                                </a>
                                <span className="text-hero-accent/20">·</span>
                                <a href="#" className="text-hero-text-muted/50 hover:text-hero-accent transition-colors font-light">
                                    Terms of Service
                                </a>
                                <span className="text-hero-accent/20">·</span> */}
                                <a href="#" className="text-hero-text-muted/50 hover:text-hero-accent transition-colors font-light">
                                    Crafted with precision
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative footer accent */}
            <div className="h-1 bg-gradient-to-r from-transparent via-hero-accent/30 to-transparent" />
        </footer>
    );
}

export default Footer;
