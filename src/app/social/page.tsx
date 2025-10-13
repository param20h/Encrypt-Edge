import NeonButton from '@/components/ui/NeonButton';
import CyberCard from '@/components/ui/CyberCard';
import GlitchText from '@/components/ui/GlitchText';

export default function SocialPage() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/encryptedge/',
      icon: '💼',
      color: 'blue',
      description: 'Connect with us professionally and stay updated with our career opportunities and industry insights.'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/encryptedge/',
      icon: '📸',
      color: 'pink',
      description: 'Follow our visual journey and behind-the-scenes content of our cybersecurity community.'
    },
    {
      name: 'Twitter/X',
      url: 'http://x.com/Encrypt_Edge',
      icon: '🐦',
      color: 'cyan',
      description: 'Get real-time updates, cybersecurity tips, and engage in tech discussions.'
    },
    {
      name: 'Discord',
      url: 'https://dub.sh/ee-d',
      icon: '🎮',
      color: 'purple',
      description: 'Join our Discord community for real-time chat, collaboration, and gaming sessions.'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@encryptedge',
      icon: '🎥',
      color: 'red',
      description: 'Subscribe to our channel for tutorials, workshops, and cybersecurity content.'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/EncryptEdge',
      icon: '👥',
      color: 'blue',
      description: 'Like our page for community updates, events, and networking opportunities.'
    },
    {
      name: 'WhatsApp',
      url: 'https://chat.whatsapp.com/Kdzl9jmcE4f2RiPcKhxguE',
      icon: '💬',
      color: 'green',
      description: 'Join our WhatsApp group for instant updates, discussions, and quick community support.'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600',
      pink: 'from-pink-500 to-pink-700 hover:from-pink-400 hover:to-pink-600',
      cyan: 'from-cyan-500 to-cyan-700 hover:from-cyan-400 hover:to-cyan-600',
      purple: 'from-purple-500 to-purple-700 hover:from-purple-400 hover:to-purple-600',
      red: 'from-red-500 to-red-700 hover:from-red-400 hover:to-red-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.cyan;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-6 mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 font-mono">
              <GlitchText text="CONNECT" />
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-mono">
              Join Our <span className="text-cyan-400">Digital</span> Community
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Follow EncryptEdge across all platforms to stay connected with the cybersecurity community, 
              get updates on events, workshops, and engage with fellow cyber enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Social Links Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">
              Follow Us <span className="text-cyan-400">Everywhere</span>
            </h2>
            <p className="text-slate-300 text-lg">
              Choose your preferred platform to connect with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialLinks.map((social, index) => (
              <CyberCard key={social.name} glowColor={social.color as "cyan" | "purple" | "green" | "orange"}>
                <div className="text-center space-y-4">
                  <div className="text-6xl mb-4">{social.icon}</div>
                  <h3 className="text-2xl font-bold text-white font-mono">
                    {social.name}
                  </h3>
                  <p className="text-slate-300 text-sm mb-6">
                    {social.description}
                  </p>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block w-full px-6 py-3 rounded-lg bg-gradient-to-r ${getColorClasses(social.color)} text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-mono`}
                  >
                    Follow on {social.name}
                  </a>
                </div>
              </CyberCard>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border border-cyan-500/30 rounded-lg p-8 bg-black/50 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">
              Stay <span className="text-cyan-400">Connected</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Don&apos;t miss out on the latest cybersecurity trends, workshops, and community events. 
              Follow us on your favorite platform!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <NeonButton size="lg">
                <a href="https://chat.whatsapp.com/Kdzl9jmcE4f2RiPcKhxguE" target="_blank" rel="noopener noreferrer">
                  Join WhatsApp Group
                </a>
              </NeonButton>
              <NeonButton variant="secondary" size="lg">
                <a href="https://dub.sh/ee-d" target="_blank" rel="noopener noreferrer">
                  Join Discord Community
                </a>
              </NeonButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}