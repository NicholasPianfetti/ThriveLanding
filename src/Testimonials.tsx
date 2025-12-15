function Testimonials() {
    const testimonials = [
        {
            quote: "Thrive transformed our customer service workflow. What used to take hours now happens in minutes, and our team can focus on high-value interactions.",
            author: "Sarah Chen",
            role: "VP of Operations",
            company: "TechCorp",
        },
        {
            quote: "The custom AI solution they built integrated seamlessly with our existing systems. The ROI was evident within the first month of deployment.",
            author: "Michael Rodriguez",
            role: "CTO",
            company: "InnovateLab",
        },
        {
            quote: "Working with Thrive felt like having an extension of our own team. They understood our needs and delivered exactly what we needed, on time.",
            author: "Emily Thompson",
            role: "CEO",
            company: "GrowthHub",
        },
    ];

    return (
        <section className="py-24 sm:py-32 bg-hero-accent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-neutral-600 leading-relaxed font-light">
                        Don't just take our word for it. Here's what our clients have to say about working with us.
                    </p>
                </div>

                {/* Testimonials grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Quote icon */}
                            <svg
                                className="w-10 h-10 text-hero-bg-dark mb-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>

                            {/* Quote */}
                            <p className="text-neutral-700 mb-6 leading-relaxed">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="border-t border-neutral-200 pt-6">
                                <div className="font-bold text-neutral-900">{testimonial.author}</div>
                                <div className="text-sm text-neutral-600">
                                    {testimonial.role}, {testimonial.company}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
