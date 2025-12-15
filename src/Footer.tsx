function Footer() {
    return (
        <footer className="bg-white border-t border-neutral-200">
            {/* Footer content */}
            <div className="bg-neutral-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                        {/* Brand */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <h3 className="text-xl font-bold text-white mb-3">
                                Thrive
                            </h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Custom AI automation solutions built for your business.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-semibold text-white mb-3 text-sm">Quick Links</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#about" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#how-it-works" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                        How It Works
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="font-semibold text-white mb-3 text-sm">Contact</h4>
                            <a href="mailto:contact@thrive.ai" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                contact@thrive.ai
                            </a>
                        </div>

                        {/* Social */}
                        <div>
                            <h4 className="font-semibold text-white mb-3 text-sm">Follow Us</h4>
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    className="w-9 h-9 rounded bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors text-sm"
                                    aria-label="Twitter"
                                >
                                    𝕏
                                </a>
                                <a
                                    href="#"
                                    className="w-9 h-9 rounded bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors text-sm"
                                    aria-label="LinkedIn"
                                >
                                    in
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="border-t border-neutral-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
                        <p className="text-neutral-500 text-xs">
                            &copy; {new Date().getFullYear()} Thrive. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-xs">
                            <a href="#" className="text-neutral-500 hover:text-neutral-300 transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-neutral-500 hover:text-neutral-300 transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
