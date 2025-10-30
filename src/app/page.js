'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Palette, Zap, Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white"
          >
            YourBrand
          </motion.h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 flex flex-col space-y-4"
          >
            <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"> Amazing</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Create stunning web experiences with modern technology and beautiful design
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-2xl transition"
          >
            Get Started <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Why Choose Us
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Code, title: 'Clean Code', desc: 'Well-structured and maintainable code following best practices', color: 'text-blue-400' },
            { icon: Palette, title: 'Beautiful Design', desc: 'Modern and responsive interfaces that look great everywhere', color: 'text-purple-400' },
            { icon: Zap, title: 'Fast Performance', desc: 'Optimized for speed and efficiency with latest technologies', color: 'text-yellow-400' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition cursor-pointer"
            >
              <feature.icon className={`${feature.color} mb-4`} size={40} />
              <h4 className="text-2xl font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '500+', label: 'Projects' },
            { number: '100+', label: 'Clients' },
            { number: '50+', label: 'Awards' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</h4>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            About This Project
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Built with cutting-edge technologies including Next.js 14, React 18, Tailwind CSS,
            and Framer Motion. This template is perfect for portfolios, landing pages,
            and business websites. Fully responsive and optimized for performance.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Get In Touch
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-300 mb-8"
          >
            Let's work together on your next project
          </motion.p>
          <div className="flex justify-center gap-6 mt-8">
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:your@email.com', label: 'Email' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 backdrop-blur-lg p-4 rounded-full hover:bg-white/20 transition"
                title={social.label}
              >
                <social.icon className="text-white" size={24} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-white/90 mb-8">
            Join thousands of satisfied customers today
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center text-gray-400 border-t border-gray-700">
        <p className="mb-4">&copy; 2024 YourBrand. All rights reserved.</p>
        <p className="text-sm">Built with Next.js, Tailwind CSS & Framer Motion. Deployed on Vercel.</p>
      </footer>
    </main>
  )
}