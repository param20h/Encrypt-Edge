import Terminal from '@/components/Terminal';
import NeonButton from '@/components/ui/NeonButton';
import CyberCard from '@/components/ui/CyberCard';
import GlitchText from '@/components/ui/GlitchText';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse font-mono">
              <GlitchText text="ENCRYPT" />
              <span className="text-white">EDGE</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-mono">
              LPU&apos;s Premier <span className="text-cyan-400">Cybersecurity</span> Student Community
            </p>
            <p className="text-lg text-slate-400">
              Learn • Compete • Connect with fellow cyber enthusiasts
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <NeonButton size="lg">
              Join Community
            </NeonButton>
            <NeonButton variant="secondary" size="lg">
              Explore Events
            </NeonButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 font-mono">150+</div>
              <div className="text-slate-400">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 font-mono">25+</div>
              <div className="text-slate-400">Workshops Held</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 font-mono">10+</div>
              <div className="text-slate-400">CTF Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 font-mono">24hr</div>
              <div className="text-slate-400">RCS CTF</div>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Demo Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">
              <GlitchText text="Initialize Connection" />
            </h2>
            <p className="text-slate-300 text-lg">Experience the power of the grid</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Terminal className="h-64" />
            <div className="space-y-6">
              <CyberCard glowColor="cyan">
                <h3 className="text-xl font-bold text-cyan-400 mb-2 font-mono">Live Terminal</h3>
                <p className="text-slate-300">
                  Experience real-time command execution in our secure sandbox environment.
                </p>
              </CyberCard>
              <CyberCard glowColor="purple">
                <h3 className="text-xl font-bold text-purple-400 mb-2 font-mono">CTF Challenges</h3>
                <p className="text-slate-300">
                  Solve capture-the-flag challenges and earn your place in the cyber elite.
                </p>
              </CyberCard>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">
              Grid <span className="text-cyan-400">Features</span>
            </h2>
            <p className="text-slate-300 text-lg">Advanced tools for cyber professionals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CyberCard glowColor="cyan">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2 font-mono">Cyber Workshops</h3>
              <p className="text-slate-300">
                Regular hands-on workshops covering latest cybersecurity trends and techniques.
              </p>
            </CyberCard>

            <CyberCard glowColor="purple">
              <div className="text-3xl mb-4">🚩</div>
              <h3 className="text-xl font-bold text-purple-400 mb-2 font-mono">CTF Competitions</h3>
              <p className="text-slate-300">
                Participate in exciting Capture The Flag events including our famous RCS CTF.
              </p>
            </CyberCard>

            <CyberCard glowColor="green">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-green-400 mb-2 font-mono">Student Network</h3>
              <p className="text-slate-300">
                Connect with like-minded cybersecurity enthusiasts from LPU and beyond.
              </p>
            </CyberCard>

            <CyberCard glowColor="orange">
              <div className="text-3xl mb-4">�</div>
              <h3 className="text-xl font-bold text-orange-400 mb-2 font-mono">Learning Resources</h3>
              <p className="text-slate-300">
                Access curated cybersecurity resources, tutorials, and study materials.
              </p>
            </CyberCard>

            <CyberCard glowColor="cyan">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2 font-mono">Skill Building</h3>
              <p className="text-slate-300">
                Develop practical cybersecurity skills through real-world projects.
              </p>
            </CyberCard>

            <CyberCard glowColor="purple">
              <div className="text-3xl mb-4">�</div>
              <h3 className="text-xl font-bold text-purple-400 mb-2 font-mono">Industry Connect</h3>
              <p className="text-slate-300">
                Bridge the gap between academic learning and industry requirements.
              </p>
            </CyberCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">
            Ready to <span className="text-cyan-400">Join</span> LPU&apos;s Cyber Community?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Connect with us on social media and be part of the cybersecurity revolution
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <NeonButton size="lg">
              Join WhatsApp Group
            </NeonButton>
            <NeonButton variant="secondary" size="lg">
              Follow on LinkedIn
            </NeonButton>
          </div>
        </div>
      </section>
    </div>
  );
}
