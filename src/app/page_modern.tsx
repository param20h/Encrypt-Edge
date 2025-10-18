export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
                Cybersecurity Excellence for 
                <span className="text-blue-600"> Tomorrow&apos;s Leaders</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto">
                Join LPU&apos;s premier cybersecurity community. Learn cutting-edge security practices, 
                compete in CTF challenges, and connect with industry professionals.
              </p>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://tinyurl.com/Encryptedge" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Join Community — Free
              </a>
              <a 
                href="/events"
                className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                View Events
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <p className="text-sm text-slate-500 mb-4">Trusted by students and professionals</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">150+</div>
                  <div className="text-slate-600">Active Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600">25+</div>
                  <div className="text-slate-600">Workshops</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600">10+</div>
                  <div className="text-slate-600">CTF Events</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">24hr</div>
                  <div className="text-slate-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything you need to excel in cybersecurity
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From beginner workshops to advanced CTF competitions, we provide comprehensive learning paths.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Hands-on Workshops</h3>
              <p className="text-slate-600">
                Regular interactive sessions covering penetration testing, malware analysis, and security auditing.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">CTF Competitions</h3>
              <p className="text-slate-600">
                Participate in Capture The Flag events and compete with the best cybersecurity talent.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Professional Network</h3>
              <p className="text-slate-600">
                Connect with industry professionals and build lasting relationships in cybersecurity.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Learning Resources</h3>
              <p className="text-slate-600">
                Access curated learning materials, tutorials, and certification preparation guides.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Career Development</h3>
              <p className="text-slate-600">
                Get mentorship and guidance to launch your cybersecurity career successfully.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Latest Tools & Techniques</h3>
              <p className="text-slate-600">
                Stay updated with cutting-edge cybersecurity tools and emerging threat landscapes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Getting started is simple
            </h2>
            <p className="text-xl text-slate-600">
              Join our community in three easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Join Community</h3>
              <p className="text-slate-600">Sign up for free and get instant access to our WhatsApp group and resources.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Attend Events</h3>
              <p className="text-slate-600">Participate in workshops, CTFs, and networking sessions with industry experts.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Grow & Connect</h3>
              <p className="text-slate-600">Build your skills, expand your network, and advance your cybersecurity career.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-blue-50 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Ready to start your cybersecurity journey?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Join 150+ students and professionals in LPU&apos;s most active cybersecurity community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://chat.whatsapp.com/Kdzl9jmcE4f2RiPcKhxguE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Join WhatsApp Group
              </a>
              <a 
                href="https://www.linkedin.com/company/encryptedge/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Follow on LinkedIn
              </a>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              No spam, just valuable cybersecurity content and opportunities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}