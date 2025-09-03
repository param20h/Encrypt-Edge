import CyberCard from '@/components/ui/CyberCard';
import NeonButton from '@/components/ui/NeonButton';
import GlitchText from '@/components/ui/GlitchText';

export default function Tools() {
  const toolCategories = [
    {
      name: 'Cryptography',
      icon: '🔐',
      color: 'cyan' as const,
      tools: [
        { name: 'Hash Generator', description: 'Generate MD5, SHA1, SHA256 hashes' },
        { name: 'Base64 Encoder/Decoder', description: 'Encode and decode Base64 strings' },
        { name: 'Caesar Cipher', description: 'Classic encryption/decryption tool' },
        { name: 'AES Encryption', description: 'Advanced Encryption Standard' },
      ]
    },
    {
      name: 'Network Analysis',
      icon: '🌐',
      color: 'purple' as const,
      tools: [
        { name: 'Port Scanner', description: 'Scan open ports on target systems' },
        { name: 'Ping Tool', description: 'Test network connectivity' },
        { name: 'Traceroute', description: 'Trace network packet routes' },
        { name: 'Whois Lookup', description: 'Domain information lookup' },
      ]
    },
    {
      name: 'Web Security',
      icon: '🛡️',
      color: 'green' as const,
      tools: [
        { name: 'SQL Injection Tester', description: 'Test for SQL injection vulnerabilities' },
        { name: 'XSS Payload Generator', description: 'Generate XSS test payloads' },
        { name: 'Directory Bruteforcer', description: 'Discover hidden directories' },
        { name: 'Header Analyzer', description: 'Analyze HTTP security headers' },
      ]
    },
    {
      name: 'Password Security',
      icon: '🔑',
      color: 'orange' as const,
      tools: [
        { name: 'Password Strength Checker', description: 'Evaluate password strength' },
        { name: 'Password Generator', description: 'Generate secure passwords' },
        { name: 'Hash Cracker', description: 'Crack common hash algorithms' },
        { name: 'Wordlist Generator', description: 'Create custom wordlists' },
      ]
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 font-mono">
            Cyber <span className="text-cyan-400"><GlitchText text="Arsenal" /></span>
          </h1>
          <p className="text-slate-300 text-lg">
            Educational cybersecurity tools for LPU students and learning
          </p>
        </div>

        {/* Quick Access Tools */}
        <div className="mb-12">
          <CyberCard className="p-8">
            <h2 className="text-2xl font-bold text-cyan-400 font-mono mb-6">
              Quick Access Terminal
            </h2>
            <div className="bg-black/70 rounded-lg p-4 font-mono">
              <div className="text-green-400 mb-2">root@encryptedge:~$ _</div>
              <div className="text-slate-400 text-sm mb-4">
                Type a command to get started. Examples: hash, scan, encode, crack
              </div>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Enter command..."
                  className="flex-1 bg-transparent border border-cyan-500/30 rounded px-3 py-2 text-cyan-400 focus:border-cyan-500 focus:outline-none"
                />
                <NeonButton size="sm">Execute</NeonButton>
              </div>
            </div>
          </CyberCard>
        </div>

        {/* Tool Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {toolCategories.map((category, categoryIndex) => (
            <CyberCard key={categoryIndex} glowColor={category.color} className="h-fit">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl">{category.icon}</div>
                <h2 className="text-2xl font-bold text-white font-mono">
                  {category.name}
                </h2>
              </div>
              
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div 
                    key={toolIndex} 
                    className="bg-black/30 rounded-lg p-4 border border-slate-700 hover:border-cyan-500/50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                        {tool.name}
                      </h3>
                      <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">
                        →
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm">{tool.description}</p>
                  </div>
                ))}
              </div>
            </CyberCard>
          ))}
        </div>

        {/* Featured Tools Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white font-mono mb-8 text-center">
            Featured <span className="text-purple-400">Tools</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Password Strength Checker */}
            <CyberCard glowColor="cyan">
              <h3 className="text-xl font-bold text-cyan-400 font-mono mb-4">
                🔑 Password Checker
              </h3>
              <div className="space-y-3">
                <input 
                  type="password" 
                  placeholder="Enter password to test..."
                  className="w-full bg-black/50 border border-cyan-500/30 rounded px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"
                />
                <div className="text-sm text-slate-400">
                  Strength: <span className="text-orange-400">Weak</span>
                </div>
                <NeonButton variant="secondary" size="sm" className="w-full">
                  Analyze
                </NeonButton>
              </div>
            </CyberCard>

            {/* Hash Generator */}
            <CyberCard glowColor="purple">
              <h3 className="text-xl font-bold text-purple-400 font-mono mb-4">
                🔐 Hash Generator
              </h3>
              <div className="space-y-3">
                <input 
                  type="text" 
                  placeholder="Text to hash..."
                  className="w-full bg-black/50 border border-purple-500/30 rounded px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                />
                <select className="w-full bg-black/50 border border-purple-500/30 rounded px-3 py-2 text-white focus:border-purple-500 focus:outline-none">
                  <option value="md5">MD5</option>
                  <option value="sha1">SHA1</option>
                  <option value="sha256">SHA256</option>
                </select>
                <NeonButton variant="secondary" size="sm" className="w-full">
                  Generate
                </NeonButton>
              </div>
            </CyberCard>

            {/* Base64 Encoder */}
            <CyberCard glowColor="green">
              <h3 className="text-xl font-bold text-green-400 font-mono mb-4">
                📝 Base64 Tool
              </h3>
              <div className="space-y-3">
                <textarea 
                  placeholder="Text to encode/decode..."
                  className="w-full h-20 bg-black/50 border border-green-500/30 rounded px-3 py-2 text-white focus:border-green-500 focus:outline-none resize-none"
                />
                <div className="flex gap-2">
                  <NeonButton variant="secondary" size="sm" className="flex-1">
                    Encode
                  </NeonButton>
                  <NeonButton variant="secondary" size="sm" className="flex-1">
                    Decode
                  </NeonButton>
                </div>
              </div>
            </CyberCard>
          </div>
        </div>

        {/* API Access */}
        <div className="mt-12">
          <CyberCard className="text-center">
            <h2 className="text-2xl font-bold text-white font-mono mb-4">
              Learning <span className="text-cyan-400">Resources</span>
            </h2>
            <p className="text-slate-300 mb-6">
              Access additional cybersecurity learning materials and tutorials
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <NeonButton>
                View Tutorials
              </NeonButton>
              <NeonButton variant="secondary">
                Download Cheatsheets
              </NeonButton>
            </div>
          </CyberCard>
        </div>
      </div>
    </div>
  );
}
