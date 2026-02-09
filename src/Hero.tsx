import { useState, useEffect } from 'react';

function Hero() {
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        setTimeout(() => setHasAnimated(true), 200);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center bg-app-bg pt-16">
            {/* Subtle gradient background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.08), transparent),
                        linear-gradient(to bottom, #F8FAFC, #FFFFFF)
                    `
                }}
            />

            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Content */}
                    <div className={`transition-all duration-700 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}>
                        {/* Headline */}
                        <h1 className="mb-6">
                            <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
                                Custom AI
                            </span>
                            <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-600 leading-tight">
                                Automation
                            </span>
                            <span className="block text-xl sm:text-2xl text-text-secondary font-medium mt-4">
                                Scale Without Hiring
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
                            We develop tailored AI solutions that streamline your operations,
                            eliminate repetitive tasks, and accelerate growth.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://calendly.com/thrive-ai-info/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                                className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg text-base font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-brand-600/25"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Book a Demo
                            </a>
                            <a
                                href="#about"
                                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-text-primary px-6 py-3 rounded-lg text-base font-semibold border border-border-light transition-all duration-200"
                            >
                                Learn More
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Dashboard Preview */}
                    <div className={`transition-all duration-700 delay-200 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                        {/* Mock Dashboard Card */}
                        <div className="bg-white rounded-2xl shadow-card-hover border border-border-light p-6 lg:p-8">
                            {/* Dashboard Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-text-primary">Dashboard</h3>
                                    <p className="text-sm text-text-muted">Overview of your campaign performance.</p>
                                </div>
                                <button className="inline-flex items-center gap-2 bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                    New Campaign
                                </button>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                                {[
                                    {
                                        label: 'Total Leads', value: '2,847', icon: (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        label: 'Emails Sent', value: '12,492', icon: (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        label: 'Active Campaigns', value: '8', icon: (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        label: 'Conversion Rate', value: '24%', icon: (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                        )
                                    },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-app-bg rounded-xl p-4 border border-border-light">
                                        <div className="text-text-muted mb-2">{stat.icon}</div>
                                        <div className="text-2xl font-bold text-text-primary">{stat.value}</div>
                                        <div className="text-xs text-text-muted">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Campaign List Preview */}
                            <div className="bg-app-bg rounded-xl border border-border-light overflow-hidden">
                                <div className="px-4 py-3 border-b border-border-light">
                                    <h4 className="font-semibold text-text-primary text-sm">All Campaigns</h4>
                                </div>
                                <div className="divide-y divide-border-light">
                                    {[
                                        { name: 'Q1 Outreach', status: 'active', leads: 847 },
                                        { name: 'Enterprise Leads', status: 'active', leads: 423 },
                                        { name: 'Startup Program', status: 'paused', leads: 156 },
                                    ].map((campaign, i) => (
                                        <div key={i} className="flex items-center justify-between px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <span className="font-medium text-text-primary text-sm">{campaign.name}</span>
                                                <span className={`px-2 py-0.5 rounded text-xs font-medium ${campaign.status === 'active'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-yellow-100 text-yellow-700'
                                                    }`}>
                                                    {campaign.status}
                                                </span>
                                            </div>
                                            <span className="text-sm text-text-secondary">{campaign.leads} leads</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
