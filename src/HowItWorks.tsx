import { useScrollAnimation } from './hooks/useScrollAnimation';

function HowItWorks() {
    const { elementRef, isVisible } = useScrollAnimation(0.1);

    const steps = [
        {
            number: '01',
            title: 'Discovery Call',
            description: 'We start with a conversation to understand your business challenges, workflows, and automation goals. This helps us identify the best opportunities for AI integration.',
        },
        {
            number: '02',
            title: 'Custom Solution Design',
            description: 'Our team designs an AI automation solution tailored specifically to your needs and existing systems. We provide detailed specifications and timelines.',
        },
        {
            number: '03',
            title: 'Development & Testing',
            description: 'We build, test, and refine your solution, keeping you involved throughout the process. Regular updates ensure the solution meets your expectations.',
        },
        {
            number: '04',
            title: 'Launch & Support',
            description: 'We deploy your solution and provide ongoing support to ensure optimal performance. Your success is our success.',
        },
    ];

    return (
        <section
            id="how-it-works"
            className="relative py-32 sm:py-40 overflow-hidden bg-hero-bg-dark"
            ref={elementRef}
        >
            {/* Mesh gradient background */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    background: `
                        radial-gradient(circle at 20% 30%, rgba(33, 150, 243, 0.15), transparent 50%),
                        radial-gradient(circle at 80% 70%, rgba(25, 118, 210, 0.2), transparent 50%)
                    `
                }}
            />

            {/* Decorative diagonal lines */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-hero-accent/10 to-transparent transform -rotate-3" />
            <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-r from-transparent via-hero-accent/10 to-transparent transform rotate-2" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
                {/* Section header */}
                <div className={`max-w-3xl mb-24 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="mb-4">
                        <span className="text-hero-accent/80 text-sm tracking-[0.25em] uppercase font-medium">
                            Our Process
                        </span>
                        <div className="h-px bg-gradient-to-r from-hero-accent/30 to-transparent mt-2 w-24" />
                    </div>
                    <h2 className="font-['Playfair_Display'] text-5xl sm:text-6xl lg:text-7xl font-bold text-hero-text mb-6 tracking-tight leading-[1.1]">
                        How It
                        <span className="block italic font-light mt-1">Works</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-hero-text-muted leading-relaxed font-light">
                        Our streamlined process takes you from idea to implementation in four simple steps.
                    </p>
                </div>

                {/* Process steps with diagonal flow */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Connection line (desktop only) */}
                    <div className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 1000 800" fill="none">
                            <path
                                d="M 100 100 Q 300 150, 500 200 T 900 300 Q 950 400, 900 500"
                                stroke="url(#gradient)"
                                strokeWidth="2"
                                strokeDasharray="8 8"
                                className={`transition-all duration-2000 ${
                                    isVisible ? 'opacity-30' : 'opacity-0'
                                }`}
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#e8dcc4" stopOpacity="0.3" />
                                    <stop offset="50%" stopColor="#e8dcc4" stopOpacity="0.6" />
                                    <stop offset="100%" stopColor="#e8dcc4" stopOpacity="0.2" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Steps */}
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`group relative transition-all duration-1000 ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                                } ${index % 2 === 1 ? 'md:translate-y-24' : ''}`}
                                style={{ transitionDelay: `${index * 200 + 200}ms` }}
                            >
                                {/* Large decorative number */}
                                <div className="absolute -top-8 -left-4 font-['Playfair_Display'] text-[140px] leading-none font-bold text-hero-accent/5 select-none pointer-events-none group-hover:text-hero-accent/10 transition-colors duration-700">
                                    {step.number}
                                </div>

                                {/* Card */}
                                <div className="relative bg-gradient-to-br from-hero-accent/5 to-transparent backdrop-blur-sm border border-hero-accent/20 p-8 lg:p-10 transition-all duration-500 group-hover:border-hero-accent/40 group-hover:bg-hero-accent/10 group-hover:-translate-y-2">
                                    {/* Number badge */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-hero-accent text-hero-bg-dark flex items-center justify-center font-['Playfair_Display'] text-xl font-bold group-hover:scale-110 transition-transform duration-500"
                                            style={{
                                                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                                            }}
                                        >
                                            {step.number}
                                        </div>
                                        <div className="h-px flex-1 bg-gradient-to-r from-hero-accent/30 to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-hero-text mb-4 leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-hero-text-muted/90 leading-relaxed font-light">
                                        {step.description}
                                    </p>

                                    {/* Decorative corner accent */}
                                    <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute top-0 right-0 w-10 h-px bg-gradient-to-l from-hero-accent/40 to-transparent" />
                                        <div className="absolute top-0 right-0 w-px h-10 bg-gradient-to-b from-hero-accent/40 to-transparent" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className={`text-center mt-24 transition-all duration-1000 delay-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <a
                        href="https://calendly.com/nickpisme4/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0a0a0a&primary_color=2196f3"
                        className="group inline-flex items-center gap-3 bg-hero-accent text-white px-10 py-5 text-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-hero-accent/30"
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
        </section>
    );
}

export default HowItWorks;
