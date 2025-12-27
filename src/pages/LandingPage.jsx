import React, { useState, useEffect } from 'react';
import { Dumbbell, Brain, TrendingUp, Zap, Activity, Target, Users, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

const LandingPage = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        {
            icon: <Brain size={48} />,
            title: "AI-Powered Plans",
            desc: "Personalized workout routines that adapt to your progress and goals"
        },
        {
            icon: <Activity size={48} />,
            title: "Real-time Tracking",
            desc: "Monitor your performance with intelligent analytics and insights"
        },
        {
            icon: <Target size={48} />,
            title: "Goal Setting",
            desc: "Set and crush your fitness goals with AI-driven recommendations"
        },
        {
            icon: <TrendingUp size={48} />,
            title: "Progress Analytics",
            desc: "Visualize your journey with comprehensive progress reports"
        }
    ];

    const stats = [
        { number: "50K+", label: "Active Users" },
        { number: "1M+", label: "Workouts Completed" },
        { number: "95%", label: "Success Rate" },
        { number: "24/7", label: "AI Support" }
    ];

    const testimonials = [
        { name: "Sarah M.", role: "Fitness Enthusiast", text: "This app transformed my workout routine. The AI recommendations are spot-on!" },
        { name: "Mike D.", role: "Professional Athlete", text: "Best training companion I've ever had. The personalization is incredible." },
        { name: "Emma L.", role: "Beginner", text: "Finally an app that understands my pace and motivates me every day!" }
    ];

    const styles = {
        mainBg: {
            background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
            minHeight: '100vh',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden'
        },
        navbar: {
            transition: 'all 0.3s ease',
            backgroundColor: scrollY > 50 ? 'rgba(15, 12, 41, 0.95)' : 'transparent',
            backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none',
            boxShadow: scrollY > 50 ? '0 4px 20px rgba(0,0,0,0.3)' : 'none'
        },
        brandText: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            fontSize: '1.8rem'
        },
        heroTitle: {
            fontSize: '4.5rem',
            fontWeight: '800',
            lineHeight: '1.2',
            marginBottom: '2rem'
        },
        gradientText: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
        },
        authBtn: {
            background: 'linear-gradient(135deg, #5d73ca9c 0%, #9651a69a 100%)',
            border: 'none',
            padding: '0.7rem 2rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            color: '#e4e4e4ff',
            borderRadius: '50px',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)'
        },
        primaryBtn: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            borderRadius: '50px',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)'
        },
        secondaryBtn: {
            background: 'transparent',
            border: '2px solid #667eea',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            borderRadius: '50px',
            transition: 'all 0.3s ease',
            color: '#fff'
        },
        featureCard: {
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '2.5rem',
            height: '100%',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
        },
        iconBox: {
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            color: '#667eea'
        },
        statCard: {
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '2rem',
            textAlign: 'center',
            transition: 'all 0.3s ease'
        },
        statNumber: {
            fontSize: '3rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem'
        },
        testimonialCard: {
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '2rem',
            height: '100%',
            transition: 'all 0.3s ease'
        },
        ctaSection: {
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '30px',
            padding: '4rem 2rem'
        },
        badge: {
            background: 'rgba(102, 126, 234, 0.2)',
            border: '1px solid rgba(102, 126, 234, 0.4)',
            borderRadius: '50px',
            padding: '0.5rem 1.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem',
            marginTop: '1rem',
        },
        heroImage: {
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '30px',
            padding: '3rem',
            marginTop: '3rem',
            position: 'relative'
        }
    };

    return (
        <div style={styles.mainBg}>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={styles.navbar}>
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center gap-2" href="#">
                        <Dumbbell size={32} color="#667eea" />
                        <span style={styles.brandText}>Grind</span>
                    </a>
                    <div style={styles.badge}>
                        <Sparkles size={16} color="#667eea" />
                        <span>AI-Powered Fitness Revolution</span>
                    </div>
                    <button className="btn" style={styles.authBtn}>Signup/Login</button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-10" style={{ paddingTop: '8rem' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 text-center">

                            <h1 style={styles.heroTitle}>
                                Transform Your<br />
                                <span style={styles.gradientText}>Fitness Journey</span>
                            </h1>

                            <p className="lead mb-5" style={{ fontSize: '1.4rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
                                Experience the future of fitness with AI-powered workout plans, real-time tracking, and personalized coaching that adapts to you.
                            </p>

                            <div className="d-flex gap-3 justify-content-center flex-wrap mb-5">
                                <button className="btn" style={styles.primaryBtn} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                                    Start Free Trial <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                                </button>
                                <button className="btn" style={styles.secondaryBtn} onMouseEnter={(e) => e.target.style.background = 'rgba(102, 126, 234, 0.1)'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                                    Watch Demo
                                </button>
                            </div>

                            {/* Hero Image */}
                            <div style={styles.heroImage}>
                                <div className="row g-3">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="col-md-4 col-6">
                                            <div style={{ ...styles.featureCard, padding: '2rem' }}>
                                                <Zap size={48} color="#667eea" style={{ margin: '0 auto' }} />
                                                <div style={{ height: '10px', background: 'rgba(102, 126, 234, 0.3)', borderRadius: '10px', marginTop: '1rem' }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-5" id="stats">
                <div className="container">
                    <div className="row g-4">
                        {stats.map((stat, i) => (
                            <div key={i} className="col-md-3 col-6">
                                <div style={styles.statCard} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                                    <div style={styles.statNumber}>{stat.number}</div>
                                    <div style={{ color: 'rgba(255,255,255,0.7)' }}>{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-5" id="features">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-4 fw-bold mb-3" style={styles.gradientText}>Powerful Features</h2>
                        <p className="lead" style={{ color: 'rgba(255,255,255,0.7)' }}>Everything you need to achieve your fitness goals</p>
                    </div>

                    <div className="row g-4">
                        {features.map((feature, i) => (
                            <div key={i} className="col-lg-3 col-md-6">
                                <div style={styles.featureCard} onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';
                                }} onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                    <div style={styles.iconBox}>
                                        {feature.icon}
                                    </div>
                                    <h4 className="mb-3 fw-bold">{feature.title}</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-5" id="testimonials">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-4 fw-bold mb-3" style={styles.gradientText}>What Our Users Say</h2>
                    </div>

                    <div className="row g-4">
                        {testimonials.map((testimonial, i) => (
                            <div key={i} className="col-md-4">
                                <div style={styles.testimonialCard} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <Users size={48} color="#667eea" className="mb-3" />
                                    <p className="mb-4 fst-italic" style={{ color: 'rgba(255,255,255,0.9)' }}>"{testimonial.text}"</p>
                                    <div>
                                        <div className="fw-bold">{testimonial.name}</div>
                                        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-5">
                <div className="container">
                    <div style={styles.ctaSection} className="text-center">
                        <h2 className="display-4 fw-bold mb-4" style={styles.gradientText}>Ready to Transform?</h2>
                        <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem' }}>
                            Join thousands of users achieving their fitness goals with AI-powered guidance
                        </p>
                        <button className="btn" style={styles.primaryBtn} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                            Start Your Journey <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-4 border-top" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                <div className="container text-center">
                    <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                        <Dumbbell size={32} color="#667eea" />
                        <span style={styles.brandText}>Grind</span>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.6)' }}>© 2025 FitAI. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;