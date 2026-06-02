'use client'

import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-secondary to-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-primary/80 backdrop-blur-md z-50 border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">BM</span>
              </div>
              <span className="text-white font-bold hidden sm:inline">Brian Mbugua</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-accent transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-accent transition-colors">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-accent transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-accent transition-colors">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-accent transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-slate-700/50">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-accent">Home</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 hover:text-accent">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left py-2 hover:text-accent">Portfolio</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 hover:text-accent">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-accent">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                Building <span className="gradient-text">Digital Solutions</span> for Your Business
              </h1>
              <p className="text-xl text-slate-400 mb-8">
                At Code Craft Ke, we craft exceptional software and web experiences tailored to small businesses. From custom web applications to MPesa integrations, we turn your ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('contact')} className="btn-primary">
                  Start Your Project
                </button>
                <button onClick={() => scrollToSection('services')} className="btn-secondary">
                  Learn More
                </button>
              </div>
              <div className="mt-12 flex gap-8 text-slate-400">
                <div>
                  <p className="text-3xl font-bold text-accent">50+</p>
                  <p className="text-sm">Projects Delivered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">30+</p>
                  <p className="text-sm">Happy Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">5+</p>
                  <p className="text-sm">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block animate-fade-in-up delay-200">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-light/20 rounded-2xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-secondary to-primary border border-accent/30 rounded-2xl overflow-hidden h-96">
                  <img 
                    src="/brian.jpg" 
                    alt="Brian Mbugua Gitau - Software Engineer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-secondary/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive solutions designed to help your business thrive in the digital landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🌐',
                title: 'Web Development',
                description: 'Modern, responsive websites built with Next.js, React, and latest web technologies. SEO-optimized and performance-focused.',
                delay: '100'
              },
              {
                icon: '💳',
                title: 'MPesa Integration',
                description: 'Seamless STK Push integration, payment processing, and mobile money solutions tailored for Kenyan businesses.',
                delay: '200'
              },
              {
                icon: '⚙️',
                title: 'Custom Software',
                description: 'Enterprise-grade applications built with Spring Boot, microservices, and Docker for scalability and reliability.',
                delay: '300'
              },
              {
                icon: '🎨',
                title: 'UI/UX Design',
                description: 'Beautiful, user-friendly interfaces that convert. We focus on design that drives results and user engagement.',
                delay: '100'
              },
              {
                icon: '📱',
                title: 'Responsive Design',
                description: 'Pixel-perfect designs that work flawlessly across all devices and screen sizes. Mobile-first approach.',
                delay: '200'
              },
              {
                icon: '🚀',
                title: 'Deployment & DevOps',
                description: 'Complete deployment solutions with continuous integration, monitoring, and scaling on Vercel or cloud platforms.',
                delay: '300'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className={`animate-fade-in-up delay-${service.delay} bg-gradient-to-br from-secondary/50 to-primary/50 border border-accent/20 rounded-xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Our Work</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Recent projects showcasing our expertise and commitment to quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: 'E-Commerce',
                title: 'Online Shop Platform',
                description: 'Full-stack e-commerce solution with product catalog, cart, checkout, and payment integration for an online retailer.',
                tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Vercel'],
                delay: '100'
              },
              {
                category: 'Fintech',
                title: 'Mobile Money Integration',
                description: 'Custom STK Push solution for a financial services company enabling seamless MPesa transactions and customer management.',
                tags: ['Node.js', 'Express', 'MPesa API', 'Docker'],
                delay: '200'
              },
              {
                category: 'Business Software',
                title: 'Inventory Management System',
                description: 'Enterprise inventory tracking system with real-time updates, reporting, and multi-warehouse support built with Spring Boot.',
                tags: ['Spring Boot', 'MySQL', 'React', 'Microservices'],
                delay: '300'
              },
              {
                category: 'Corporate',
                title: 'Corporate Website',
                description: 'Modern, professional website for a growing tech company with blog, team showcase, and lead generation forms.',
                tags: ['Next.js', 'Tailwind', 'CMS', 'Analytics'],
                delay: '100'
              }
            ].map((project, idx) => (
              <div
                key={idx}
                className={`animate-fade-in-up delay-${project.delay} bg-gradient-to-br from-secondary/50 to-primary/50 border border-accent/20 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 group`}
              >
                <div className="h-48 bg-gradient-to-br from-accent/10 to-accent-light/10 flex items-center justify-center group-hover:from-accent/20 group-hover:to-accent-light/20 transition-all duration-300">
                  <span className="text-6xl">📦</span>
                </div>
                <div className="p-8">
                  <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm rounded-full mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="px-3 py-1 bg-primary border border-slate-600 text-slate-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-secondary/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Real feedback from businesses we've helped transform with our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Code Craft Ke transformed our online presence completely. The team was professional, responsive, and delivered exactly what we needed.",
                author: 'Sarah Kipchoge',
                company: 'Fashion Retail Shop',
                delay: '100'
              },
              {
                text: "The MPesa integration was seamless and our customers love the easy payment experience. Highly recommend for any Kenyan business!",
                author: 'James Kiplagat',
                company: 'E-Commerce Platform',
                delay: '200'
              },
              {
                text: "From initial consultation to deployment, the team was excellent. Our new system has increased efficiency by 40%. Great investment!",
                author: 'Mary Wanjiru',
                company: 'Manufacturing Business',
                delay: '300'
              }
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className={`animate-fade-in-up delay-${testimonial.delay} bg-gradient-to-br from-secondary/50 to-primary/50 border border-accent/20 rounded-xl p-8`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">⭐</span>
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t border-slate-700 pt-4">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-slate-400">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-slate-400">
              Get in touch with us today. We'd love to hear about your project and how we can help bring it to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up delay-200">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/254716267992?text=Hi%20Code%20Craft%20Ke%2C%20I%20am%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-secondary/50 to-primary/50 border-2 border-accent rounded-xl hover:border-accent-light hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">💬</div>
              <h3 className="text-2xl font-bold mb-2">WhatsApp Us</h3>
              <p className="text-slate-400 text-center mb-4">Get quick responses on WhatsApp</p>
              <span className="text-accent font-semibold">+254 716 267 992</span>
            </a>

            {/* Email Button */}
            <a
              href="mailto:briangitau9931@gmail.com?subject=Project%20Inquiry%20-%20Code%20Craft%20Ke"
              className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-secondary/50 to-primary/50 border-2 border-accent rounded-xl hover:border-accent-light hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">✉️</div>
              <h3 className="text-2xl font-bold mb-2">Email Us</h3>
              <p className="text-slate-400 text-center mb-4">Detailed inquiries and proposals</p>
              <span className="text-accent font-semibold">briangitau9931@gmail.com</span>
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center animate-fade-in-up delay-300">
            <p className="text-slate-400 mb-6">
              Or fill out the form below and we'll get back to you within 24 hours
            </p>
            <form className="space-y-4 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-3 bg-secondary/50 border border-slate-600 rounded-lg focus:outline-none focus:border-accent text-white placeholder-slate-500 transition-colors"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-3 bg-secondary/50 border border-slate-600 rounded-lg focus:outline-none focus:border-accent text-white placeholder-slate-500 transition-colors"
                required
              />
              <select
                className="w-full px-6 py-3 bg-secondary/50 border border-slate-600 rounded-lg focus:outline-none focus:border-accent text-white placeholder-slate-500 transition-colors"
                required
              >
                <option value="" disabled selected>Select Service of Interest</option>
                <option value="web">Web Development</option>
                <option value="mpesa">MPesa Integration</option>
                <option value="software">Custom Software</option>
                <option value="design">UI/UX Design</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Tell us about your project..."
                rows={5}
                className="w-full px-6 py-3 bg-secondary/50 border border-slate-600 rounded-lg focus:outline-none focus:border-accent text-white placeholder-slate-500 transition-colors resize-none"
                required
              ></textarea>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-primary/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} Code Craft Ke. All rights reserved.
          </p>
          <p className="text-sm mb-4">
            Crafting exceptional digital solutions for businesses across Kenya
          </p>
          <p className="text-sm mb-4">
            <strong>Brian Mbugua Gitau</strong> | Software Engineer & Founder
          </p>
          <div className="mt-4 flex justify-center gap-6 flex-wrap">
            <a href="https://wa.me/254716267992" className="hover:text-accent transition-colors">WhatsApp</a>
            <a href="mailto:briangitau9931@gmail.com" className="hover:text-accent transition-colors">Email</a>
            <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-accent transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
