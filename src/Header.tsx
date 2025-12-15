function Header() {
    return (
        <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <h1 className="text-xl font-bold text-brand-500">
                            Thrive
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#about"
                            className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium"
                        >
                            About
                        </a>
                        <a
                            href="#how-it-works"
                            className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium"
                        >
                            How It Works
                        </a>
                        <a
                            href="#contact"
                            className="bg-brand-500 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-brand-600 transition-colors"
                        >
                            Book a Demo
                        </a>
                    </div>

                    {/* Mobile CTA */}
                    <div className="md:hidden">
                        <a
                            href="#contact"
                            className="bg-brand-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-600 transition-colors"
                        >
                            Book Demo
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
