"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Custom component for fade-up animation
function FadeUpWhenVisible({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="grid grid-rows-[80px_1fr_60px] min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="SoonPad Logo"
            width={40}
            height={40}
            priority
          />
          <span className="text-xl font-bold">SoonPad</span>
        </div>
        <nav className="flex items-center gap-8">
          <a href="#" className="hover:text-gray-300 transition-colors">Projects</a>
          <a href="#" className="hover:text-gray-300 transition-colors">How it Works</a>
          <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
            Connect Wallet →
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-4 text-center">
        {/* Beta Badge */}
        <FadeUpWhenVisible>
          <div className="mb-8">
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <span>✨</span>
              <span>Beta version (Solana Devnet) →</span>
            </a>
          </div>
        </FadeUpWhenVisible>

        {/* Hero Section */}
        <FadeUpWhenVisible delay={0.2}>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 max-w-5xl">
            The new way to launch tokens on Solana
          </h1>
        </FadeUpWhenVisible>

        <FadeUpWhenVisible delay={0.3}>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl">
            The most trusted IDO platform for Solana projects. Fair launches, locked liquidity, and instant trading.
          </p>
        </FadeUpWhenVisible>

        <FadeUpWhenVisible delay={0.4}>
          <div className="flex gap-4 mb-16 relative">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl rounded-full"></div>
            
            {/* Button with relative positioning to appear above glow */}
            <button className="relative px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
              Get Started
            </button>
          </div>
        </FadeUpWhenVisible>

        {/* Dashboard Preview */}
        <FadeUpWhenVisible delay={0.5}>
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Glow Effect */}
            <div className="absolute -inset-10 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-3xl rounded-2xl"></div>
            
            {/* Container with responsive width */}
            <div className="relative h-[400px] w-[1000px] w-full max-w-[1200px] mx-auto rounded-2xl border border-white/10 bg-[#0A0A0A]">
              {/* Optional placeholder text */}
              <div className="flex items-center justify-center h-full text-gray-500">
               
              </div>
            </div>
          </div>
        </FadeUpWhenVisible>

        {/* Stats Section */}
        <div className="flex justify-center gap-16 mt-24 mb-16">
          {[
            { value: "$120M+", label: "Total Value Locked" },
            { value: "50+", label: "Projects Launched" },
            { value: "100K+", label: "Active Users" },
          ].map((stat, index) => (
            <FadeUpWhenVisible key={index} delay={0.2 * index}>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </FadeUpWhenVisible>
          ))}
        </div>

        {/* Key Features Section */}
        <div className="w-full max-w-6xl mx-auto mb-24">
          <FadeUpWhenVisible>
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose SoonPad</h2>
          </FadeUpWhenVisible>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔒",
                title: "Secure Launches",
                description: "Multi-signature wallets and automated vesting schedules ensure maximum security for all participants"
              },
              {
                icon: "⚡",
                title: "Instant Trading",
                description: "Immediate token distribution and trading capability once the IDO concludes"
              },
              {
                icon: "🤝",
                title: "Fair Distribution",
                description: "Advanced anti-bot measures and fair allocation system for all participants"
              }
            ].map((feature, index) => (
              <FadeUpWhenVisible key={index} delay={0.1 * index}>
                <div className="p-6 rounded-xl border border-gray-800 bg-[#0A0A0A] hover:border-gray-700 transition-colors">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </FadeUpWhenVisible>
            ))}
          </div>
        </div>

        {/* Security Features Section */}
        <div className="w-full max-w-6xl mx-auto mb-24 px-4">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10">
            <FadeUpWhenVisible>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-full bg-white/10">🛡️</div>
                <h2 className="text-3xl font-bold">Platform Security</h2>
              </div>
            </FadeUpWhenVisible>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Smart Contract Audited by CertiK",
                "Multi-Signature Treasury",
                "Anti-Bot Protection",
                "KYC Verification"
              ].map((feature, index) => (
                <FadeUpWhenVisible key={index} delay={0.1 * index}>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-500">✓</span>
                    </div>
                    <span>{feature}</span>
                  </div>
                </FadeUpWhenVisible>
              ))}
            </div>
          </div>
        </div>

        {/* Partners & Backers Section */}
        <div className="w-full max-w-6xl mx-auto mb-24">
          <FadeUpWhenVisible>
            <h2 className="text-3xl font-bold mb-12 text-center">Trusted By Industry Leaders</h2>
          </FadeUpWhenVisible>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((partner) => (
              <FadeUpWhenVisible key={partner} delay={0.1 * partner}>
                <div className="aspect-video rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center">
                  <div className="w-24 h-8 bg-white/10 rounded"></div>
                </div>
              </FadeUpWhenVisible>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="w-full max-w-6xl mx-auto mb-24">
          <FadeUpWhenVisible>
            <h2 className="text-3xl font-bold mb-12 text-center">What Projects Say</h2>
          </FadeUpWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "SoonPad made our token launch seamless and secure. Couldn't have asked for a better platform.",
                author: "Jane Cooper",
                role: "CEO, Project Alpha"
              },
              {
                quote: "The most professional launchpad in the Solana ecosystem. Exceptional support team.",
                author: "Mark Wilson",
                role: "Founder, Beta Protocol"
              },
              {
                quote: "Fair distribution and immediate trading made our launch a huge success.",
                author: "Sarah Chen",
                role: "CTO, GameFi Project"
              }
            ].map((testimonial, index) => (
              <FadeUpWhenVisible key={index} delay={0.1 * index}>
                <div className="p-6 rounded-xl border border-gray-800 bg-[#0A0A0A] hover:border-gray-700 transition-colors">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <p className="text-gray-400 mb-4">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </FadeUpWhenVisible>
            ))}
          </div>
        </div>

        {/* Live Projects Section */}
        <div className="w-full max-w-6xl mx-auto mb-24">
          <FadeUpWhenVisible>
            <h2 className="text-3xl font-bold mb-8">Live Projects</h2>
          </FadeUpWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card 1 */}
            <FadeUpWhenVisible delay={0.2}>
              <div className="p-6 rounded-xl border border-gray-800 bg-[#0A0A0A] hover:border-gray-700 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-800"></div>
                  <div>
                    <h3 className="font-bold">Project Alpha</h3>
                    <p className="text-sm text-gray-400">Launching in 2 days</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Raise Amount</span>
                    <span>500,000 USDC</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Token Price</span>
                    <span>0.05 USDC</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-[60%]"></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span>60% Complete</span>
                  </div>
                </div>
              </div>
            </FadeUpWhenVisible>

            {/* Project Card 2 */}
            <FadeUpWhenVisible delay={0.3}>
              <div className="p-6 rounded-xl border border-gray-800 bg-[#0A0A0A] hover:border-gray-700 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-800"></div>
                  <div>
                    <h3 className="font-bold">Project Beta</h3>
                    <p className="text-sm text-gray-400">Launching in 5 days</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Raise Amount</span>
                    <span>750,000 USDC</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Token Price</span>
                    <span>0.08 USDC</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-[35%]"></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span>35% Complete</span>
                  </div>
                </div>
              </div>
            </FadeUpWhenVisible>
          </div>
        </div>

        {/* SoonPad Application Section */}
        <div className="w-full max-w-6xl mx-auto mb-24">
          <h2 className="text-5xl font-bold mb-16">SoonPad application</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10"></div>
              <h3 className="text-2xl font-bold">IDO application</h3>
            </div>
            <p className="text-gray-400 text-lg">
              SoonPad is a fair fundraising platform for the hottest crypto projects. We are
              onboarding as many users on SoonPad by only offering top tier projects. Apply
              for IDO on SoonPad, our team will reach out to you if the process has gone
              through!
            </p>
            <a 
              href="#" 
              className="inline-block px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-colors font-semibold"
            >
              APPLY FOR IDO
            </a>
          </div>
        </div>

        {/* Our Achievements Section */}
        <div className="w-full max-w-6xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left side - Project Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Project Cards */}
              {[
                { name: "Dragon War", percentage: "254%" },
                { name: "Phantasia", percentage: "310%" },
                { name: "DarleyGo", percentage: "150%" },
                { name: "Nova Finance", percentage: "191%" },
                { name: "Nest Arcade", percentage: "128%" },
                { name: "Blockasset", percentage: "1217%" },
              ].map((project, index) => (
                <div key={index} className="p-4 bg-[#0A0A0A] rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/10 mb-3"></div>
                  <div className="font-bold mb-1">{project.name}</div>
                  <div className="text-green-500 font-bold">{project.percentage}</div>
                </div>
              ))}
            </div>

            {/* Right side - Stats */}
            <div className="space-y-8">
              <h2 className="text-5xl font-bold">Our achievements</h2>
              <p className="text-gray-400 text-lg">
                We aim to create an ecosystem for the best projects. SoonPad has a strong and
                incredible community featuring active users worldwide. We focus on building a
                platform for and by the community.
              </p>
              <div className="space-y-6">
                <div>
                  <div className="text-gray-400 mb-2">Raised capital</div>
                  <div className="text-4xl font-bold">$18,041,532</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-2">Funded projects</div>
                  <div className="text-4xl font-bold">52</div>
                </div>
              </div>
              <a 
                href="#" 
                className="inline-block px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-colors font-semibold"
              >
                SEE ALL PROJECTS
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="w-full max-w-6xl mx-auto mb-24 p-12 rounded-3xl bg-gradient-to-r from-white/5 to-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Stay up to date on the<br />
                latest news and IDOs
              </h2>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Email*"
                  className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
                />
                <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap">
                  SUBSCRIBE
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Connect your wallet to fill in your email
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full bg-[#0A0A0A] border-t border-gray-800">
          <div className="max-w-6xl mx-auto py-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Logo and Social Links */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Image
                    src="/logo.svg"
                    alt="SoonPad Logo"
                    width={40}
                    height={40}
                  />
                  <span className="text-xl font-bold">SoonPad</span>
                </div>
                <p className="text-gray-400">Your launchpad for success</p>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Product Links */}
              <div>
                <h3 className="text-lg font-bold mb-4">Product</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">Staking</a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">Documentation</a>
                </div>
              </div>

              {/* Token Links */}
              <div>
                <h3 className="text-lg font-bold mb-4">Token</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">Token Contract</a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">CoinMarketCap</a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">CoinGecko</a>
                </div>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-lg font-bold mb-4">Company</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">Terms and Conditions</a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">Brand Kit</a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">FAQ</a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>© 2024 SoonPad. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
