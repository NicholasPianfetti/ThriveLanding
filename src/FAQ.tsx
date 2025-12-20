import { useState } from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const { elementRef, isVisible } = useScrollAnimation(0.1);

    const faqs = [
        {
            question: "What types of businesses do you work with?",
            answer: "We work with businesses of all sizes across various industries. Whether you're a startup looking to automate your first process or an enterprise seeking to scale your AI capabilities, we can help.",
        },
        {
            question: "How long does it typically take to build a custom solution?",
            answer: "Project timelines vary based on complexity and scope. A simple automation might take 2-4 weeks, while more complex systems can take 2-3 months. During our discovery call, we'll provide a detailed timeline specific to your needs.",
        },
        {
            question: "Do I need technical expertise to use your AI solutions?",
            answer: "Not at all. We design our solutions to be user-friendly and intuitive. We handle all the technical complexity on the backend, while you interact with clean, simple interfaces. We also provide comprehensive training and documentation to ensure your team can make the most of the automation tools we build.",
        },
        {
            question: "How do you ensure the AI solution integrates with our existing systems?",
            answer: "Integration is a core part of our design process. We start by thoroughly understanding your current tech stack and workflows. Our solutions are built using industry-standard APIs and protocols, allowing seamless integration with popular platforms like CRMs, ERPs, databases, and custom applications. We handle all integration work and thoroughly test everything before deployment.",
        },
        {
            question: "What kind of support do you provide after launch?",
            answer: "We provide ongoing support and maintenance to ensure your solution continues to perform optimally. We also offer training for new team members and can help scale your solution as your business grows. Our support packages are flexible and can be customized to match your needs.",
        },
        {
            question: "How do you price your services?",
            answer: "We offer project-based pricing tailored to your specific needs. The cost depends on the complexity of the solution, required integrations, and ongoing support needs. During our discovery call, we'll provide a detailed proposal with transparent pricing. We believe in delivering value, and our clients typically see ROI within the first few months of deployment.",
        },
    ];

    return (
        <section
            id="faq"
            className="relative py-32 sm:py-40 overflow-hidden"
            ref={elementRef}
            style={{
                background: `
                    radial-gradient(circle at 90% 10%, rgba(33, 150, 243, 0.06), transparent 40%),
                    radial-gradient(circle at 10% 90%, rgba(33, 150, 243, 0.08), transparent 40%),
                    linear-gradient(to bottom, #f5f5f5, #ffffff)
                `
            }}
        >
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-40 h-px bg-gradient-to-r from-hero-accent/20 to-transparent" />
            <div className="absolute bottom-10 right-10 w-px h-40 bg-gradient-to-b from-transparent to-hero-accent/20" />

            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative">
                {/* Section header */}
                <div className={`mb-20 transition-all duration-1200 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`} style={{
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                }}>
                    <div className="mb-4">
                        <span className="text-neutral-600 text-sm tracking-[0.25em] uppercase font-medium">
                            Questions & Answers
                        </span>
                        <div className="h-px bg-gradient-to-r from-hero-accent/40 to-transparent mt-2 w-24" />
                    </div>
                    <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 tracking-tight leading-[1.1]">
                        Frequently Asked
                        <span className="block italic font-light mt-1">Questions</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed font-light max-w-2xl">
                        Everything you need to know about our custom AI automation services.
                    </p>
                </div>

                {/* FAQ Accordion with refined design */}
                <div className={`space-y-3 transition-all duration-1200 delay-200 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`} style={{
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                }}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white/90 backdrop-blur-sm border border-hero-accent/20 overflow-hidden transition-all duration-300 ${
                                openIndex === index ? 'shadow-lg shadow-hero-accent/10' : 'hover:border-hero-accent/40'
                            }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 sm:p-8 text-left transition-all duration-300 group-hover:bg-white"
                            >
                                <div className="flex items-start gap-4 flex-1 pr-6">
                                    <span className="text-hero-accent/40 font-['Playfair_Display'] text-sm font-semibold mt-1 select-none">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="font-['Playfair_Display'] text-lg sm:text-xl font-semibold text-neutral-900 leading-tight">
                                        {faq.question}
                                    </span>
                                </div>
                                <div className={`flex-shrink-0 w-10 h-10 rounded-full border border-hero-accent/30 flex items-center justify-center transition-all duration-300 ${
                                    openIndex === index ? 'bg-hero-accent border-hero-accent rotate-180' : 'group-hover:border-hero-accent/50'
                                }`}>
                                    <svg
                                        className={`w-5 h-5 transition-colors ${
                                            openIndex === index ? 'text-white' : 'text-hero-accent'
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-500 ${
                                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                                    <div className="pl-8 border-l-2 border-hero-accent/20">
                                        <p className="text-neutral-700 leading-relaxed font-light">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className={`text-center mt-20 pt-16 border-t border-hero-accent/10 transition-all duration-1200 delay-400 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`} style={{
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                }}>
                    <p className="font-['Playfair_Display'] text-xl sm:text-2xl italic text-neutral-800 mb-8">
                        Still have questions? We'd love to hear from you.
                    </p>
                    <a
                        href="https://calendly.com/nickpisme4/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff&primary_color=2196f3"
                        className="group inline-flex items-center gap-3 bg-hero-accent text-white px-10 py-5 text-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-hero-accent/30"
                        style={{
                            clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                        }}
                    >
                        <span className="relative z-10">Get in Touch</span>
                        <svg
                            className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <div className="absolute inset-0 bg-hero-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
