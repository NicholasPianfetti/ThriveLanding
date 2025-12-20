import { useScrollAnimation } from './hooks/useScrollAnimation';

function About() {
    const { elementRef, isVisible } = useScrollAnimation(0.1);

    const features = [
        {
            number: '01',
            title: 'Custom Built',
            description: 'Every solution is tailored to your unique business requirements and processes.',
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            ),
        },
        {
            number: '02',
            title: 'Seamless Integration',
            description: 'Our tools integrate smoothly with your existing systems and workflows, minimizing disruption and maximizing efficiency.',
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            ),
        },
        {
            number: '03',
            title: 'Ongoing Support',
            description: 'We monitor, optimize, and improve your AI as your business evolves- long after deployment.',
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            ),
        },
    ];

    return (
        <section
            id="about"
            className="relative py-32 sm:py-40 overflow-hidden"
            ref={elementRef}
            style={{
                background: `
                    radial-gradient(circle at 10% 20%, rgba(33, 150, 243, 0.08), transparent 40%),
                    radial-gradient(circle at 90% 80%, rgba(33, 150, 243, 0.06), transparent 40%),
                    linear-gradient(to bottom, #ffffff, #f5f5f5)
                `
            }}
        >
            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-px h-32 bg-gradient-to-b from-transparent via-hero-accent/20 to-transparent" />
            <div className="absolute bottom-20 left-10 w-32 h-px bg-gradient-to-r from-transparent via-hero-accent/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
                {/* Section header with editorial styling */}
                <div className={`max-w-3xl mb-24 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="mb-4">
                        <span className="text-neutral-600 text-sm tracking-[0.25em] uppercase font-medium">
                            Our Approach
                        </span>
                        <div className="h-px bg-gradient-to-r from-hero-accent/40 to-transparent mt-2 w-24" />
                    </div>
                    <h2 className="font-['Playfair_Display'] text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 tracking-tight leading-[1.1]">
                        Why Choose <span className="italic font-light mt-1">Thrive</span>?
                    </h2>
                    <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed font-light">
                        Every Thrive system is designed around your workflows, tools, and goals.
                    </p>
                </div>

                {/* Feature cards with overlapping layout */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`group relative transition-all duration-1000 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                            }`}
                            style={{ transitionDelay: `${index * 150 + 200}ms` }}
                        >
                            {/* Card background with sophisticated shadow */}
                            <div className="relative h-full">
                                {/* Decorative number in background */}
                                <div className="absolute -top-6 -right-4 font-['Playfair_Display'] text-[120px] font-bold text-hero-accent/5 select-none pointer-events-none group-hover:text-hero-accent/10 transition-colors duration-500">
                                    {feature.number}
                                </div>

                                {/* Main card */}
                                <div className="relative bg-white/90 backdrop-blur-sm border border-hero-accent/20 p-8 lg:p-10 h-full transition-all duration-500 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-hero-accent/20 group-hover:-translate-y-2 group-hover:border-hero-accent/40">
                                    {/* Icon */}
                                    <div className="relative mb-8">
                                        <div className="absolute inset-0 bg-gradient-to-br from-hero-accent/10 to-hero-accent-dark/10 blur-xl" />
                                        <div className="relative w-16 h-16 bg-gradient-to-br from-hero-accent to-hero-accent-dark flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                {feature.icon}
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative">
                                        {/* Number badge */}
                                        <div className="inline-block mb-4">
                                            <span className="text-hero-accent/60 text-xs tracking-[0.2em] uppercase font-semibold">
                                                {feature.number}
                                            </span>
                                            <div className="h-px bg-hero-accent/30 mt-1" />
                                        </div>

                                        <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
                                            {feature.title}
                                        </h3>
                                        <p className="text-neutral-700 leading-relaxed font-light">
                                            {feature.description}
                                        </p>

                                        {/* Decorative corner accent */}
                                        <div className="absolute bottom-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute bottom-0 right-0 w-8 h-px bg-gradient-to-l from-hero-accent/30 to-transparent" />
                                            <div className="absolute bottom-0 right-0 w-px h-8 bg-gradient-to-t from-hero-accent/30 to-transparent" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pull quote decoration */}
                <div className={`mt-24 max-w-4xl mx-auto text-center transition-all duration-1000 delay-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="relative inline-block">
                        <p className="font-['Playfair_Display'] text-2xl sm:text-3xl italic text-neutral-800 leading-relaxed px-12">
                            Automation isn't about replacing people. It's about empowering them to focus on what truly matters.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
