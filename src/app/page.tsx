import GlitchText from '@/components/ui/GlitchText';
import MatrixRain from '@/components/MatrixRain';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto px-4">
          {/* Logo */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse font-mono">
              <GlitchText text="ENCRYPT" />
              <span className="text-white">EDGE</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-mono">
              LPU&apos;s Premier <span className="text-cyan-400">Cybersecurity</span> Student Community
            </p>
          </div>

          {/* Coming Soon Message */}
          <div className="space-y-6">
            <div className="border border-cyan-500/30 rounded-lg p-8 bg-black/80 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
                <span className="text-cyan-400">LAUNCHING</span> SOON
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                We&apos;re crafting something extraordinary for the cybersecurity community at LPU.
                <br />
                Get ready to dive into the world of ethical hacking and security research.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12">
            <p className="text-slate-500 text-sm font-mono">
              © 2025 EncryptEdge - LPU Cybersecurity Community
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
