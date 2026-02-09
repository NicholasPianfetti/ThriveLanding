function Footer() {
    return (
        <footer className="bg-white border-t border-border-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Newsletter Section */}
                <div className="py-12 border-b border-border-light">
                    <div className="max-w-xl mx-auto text-center">
                        <h3 className="text-lg font-semibold text-text-primary mb-2">
                            Stay Updated
                        </h3>
                        <p className="text-text-secondary text-sm mb-6">
                            Get the latest insights on AI automation and business optimization.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2.5 bg-app-bg border border-border-light rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                            />
                            <button
                                type="submit"
                                className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Main Footer */}
                <div className="py-12">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Brand */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-2.5 mb-4">
                                <img
                                    src="ThriveSymbolDark.png"
                                    alt="Thrive AI"
                                    className="h-8"
                                />
                                <span className="font-semibold text-lg text-text-primary">
                                    ThriveAI
                                </span>
                            </div>
                            <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-sm">
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
                                        icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    },
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href="#"
                                        className="w-10 h-10 bg-app-bg border border-border-light rounded-lg flex items-center justify-center hover:bg-brand-50 hover:border-brand-200 hover:text-brand-600 transition-all text-text-muted"
                                        aria-label={social.name}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            {social.icon}
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Product */}
                        <div>
                            <h4 className="font-semibold text-text-primary mb-4">
                                Product
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    { label: 'Features', href: '#about' },
                                    { label: 'How It Works', href: '#how-it-works' },
                                    { label: 'FAQ', href: '#faq' },
                                ].map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-text-secondary hover:text-brand-600 text-sm transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="font-semibold text-text-primary mb-4">
                                Contact
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="mailto:hello@thrive.ai" className="text-text-secondary hover:text-brand-600 text-sm transition-colors">
                                        info@thrive-ai.co
                                    </a>
                                </li>
                                <li>
                                    <a href="https://calendly.com/thrive-ai-info/30min" className="text-text-secondary hover:text-brand-600 text-sm transition-colors">
                                        Book a call
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-border-light">
                    <p className="text-text-muted text-sm text-center">
                        © {new Date().getFullYear()} Thrive AI. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
