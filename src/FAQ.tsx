import { useState } from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const { elementRef, isVisible } = useScrollAnimation(0.1);

    const faqs = [
        {
            question: "What types of businesses do you work with?",
            answer: "We work with businesses of all sizes across various industries. Whether you're a startup looking to automate your first process or an enterprise seeking to scale your AI capabilities, we can help. Our solutions are particularly effective for companies with repetitive workflows, customer service operations, data processing needs, or complex business logic that can benefit from intelligent automation.",
        },
        {
            question: "How long does it typically take to build a custom solution?",
            answer: "Project timelines vary based on complexity and scope. A simple automation might take 2-4 weeks, while more complex systems can take 2-3 months. During our discovery call, we'll provide a detailed timeline specific to your needs. We work in iterative sprints, so you'll see progress and can provide feedback throughout the development process.",
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
            answer: "We provide ongoing support and maintenance to ensure your solution continues to perform optimally. This includes monitoring, bug fixes, updates, and optimizations. We also offer training for new team members and can help scale your solution as your business grows. Our support packages are flexible and can be customized to match your needs.",
        },
        {
            question: "How do you price your services?",
            answer: "We offer project-based pricing tailored to your specific needs. The cost depends on the complexity of the solution, required integrations, and ongoing support needs. During our discovery call, we'll provide a detailed proposal with transparent pricing. We believe in delivering value, and our clients typically see ROI within the first few months of deployment.",
        },
    ];

    return (
        <section className="py-24 sm:py-32 bg-hero-accent" ref={elementRef}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className={`text-center mb-16 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-neutral-600 leading-relaxed font-light">
                        Everything you need to know about our custom AI automation services.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className={`space-y-4 transition-all duration-700 delay-200 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-neutral-200 rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                            >
                                <span className="text-lg font-semibold text-neutral-900 pr-8">
                                    {faq.question}
                                </span>
                                <svg
                                    className={`w-6 h-6 text-hero-bg-dark flex-shrink-0 transition-transform duration-200 ${
                                        openIndex === index ? 'rotate-180' : ''
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
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}
                            >
                                <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className={`text-center mt-12 pt-12 border-t border-neutral-200 transition-all duration-700 delay-400 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <p className="text-lg text-neutral-600 mb-6">
                        Still have questions? We'd love to hear from you.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-hero-bg-dark text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-hero-bg-light hover:shadow-lg hover:shadow-hero-bg-dark/25 transition-all duration-200"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
