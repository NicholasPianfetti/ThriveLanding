function SocialProof() {
    return (
        <section className="py-16 bg-hero-accent border-y border-neutral-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm text-neutral-500 uppercase tracking-wider font-medium mb-12">
                    Trusted by forward-thinking companies
                </p>

                {/* Logo grid - using placeholder company names */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
                    <div className="text-2xl font-bold text-neutral-400">TechCorp</div>
                    <div className="text-2xl font-bold text-neutral-400">InnovateLab</div>
                    <div className="text-2xl font-bold text-neutral-400">GrowthHub</div>
                    <div className="text-2xl font-bold text-neutral-400">FutureWorks</div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-neutral-200">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-neutral-900 mb-2">50+</div>
                        <div className="text-sm text-neutral-600">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-neutral-900 mb-2">95%</div>
                        <div className="text-sm text-neutral-600">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-neutral-900 mb-2">10k+</div>
                        <div className="text-sm text-neutral-600">Hours Automated</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-neutral-900 mb-2">24/7</div>
                        <div className="text-sm text-neutral-600">Support Available</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SocialProof;
