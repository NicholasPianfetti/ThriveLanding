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
            answer: "Not at all. We design our solutions to be user-friendly and intuitive. We handle all the technical complexity on the backend, while you interact with clean, simple interfaces. We also provide comprehensive training and documentation.",
        },
        {
            question: "How do you ensure the AI solution integrates with our existing systems?",
            answer: "Integration is a core part of our design process. We start by thoroughly understanding your current tech stack and workflows. Our solutions are built using industry-standard APIs and protocols, allowing seamless integration with popular platforms.",
        },
        {
            question: "What kind of support do you provide after launch?",
            answer: "We provide ongoing support and maintenance to ensure your solution continues to perform optimally. We also offer training for new team members and can help scale your solution as your business grows.",
        },
        {
            question: "How do you price your services?",
            answer: "We offer project-based pricing tailored to your specific needs. The cost depends on the complexity of the solution, required integrations, and ongoing support needs. During our discovery call, we'll provide a detailed proposal with transparent pricing.",
        },
    ];

    return (
        <section
            id="faq"
            className="relative py-20 sm:py-28 bg-white"
            ref={elementRef}
        >
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">
                        Questions & Answers
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Everything you need to know about our custom AI automation services.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className={`space-y-3 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-app-bg rounded-xl border overflow-hidden transition-all duration-300 ${openIndex === index
                                ? 'border-brand-200 shadow-card'
                                : 'border-border-light hover:border-gray-300'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-left"
                            >
                                <span className="font-medium text-text-primary pr-4">
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
                                    ? 'bg-brand-600 text-white rotate-180'
                                    : 'bg-white text-text-secondary border border-border-light'
                                    }`}>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}>
                                <div className="px-5 pb-5">
                                    <p className="text-text-secondary leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className={`text-center mt-12 pt-12 border-t border-border-light transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    <p className="text-lg text-text-secondary mb-6">
                        Still have questions? We'd love to hear from you.
                    </p>
                    <a
                        href="https://calendly.com/thrive-ai-info/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                        className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg text-base font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-brand-600/25"
                    >
                        Get in Touch
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
