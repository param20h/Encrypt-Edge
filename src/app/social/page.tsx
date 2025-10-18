import React from 'react';

const SocialIcon = ({ platform }: { platform: string }) => {
  const iconClass = "w-16 h-16 mx-auto";
  
  switch (platform) {
    case 'LinkedIn':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    case 'Instagram':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    case 'Twitter/X':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
    case 'Discord':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189Z"/>
        </svg>
      );
    case 'YouTube':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      );
    case 'Facebook':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      );
    case 'WhatsApp':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488"/>
        </svg>
      );
    default:
      return <div className="w-16 h-16 mx-auto bg-gray-500 rounded-full"></div>;
  }
};

export default function SocialPage() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/encryptedge/',
      description: 'Connect with us professionally and stay updated with our career opportunities and industry insights.'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/encryptedge/',
      description: 'Follow our visual journey and behind-the-scenes content of our cybersecurity community.'
    },
    {
      name: 'Twitter/X',
      url: 'http://x.com/Encrypt_Edge',
      description: 'Get real-time updates, cybersecurity tips, and engage in tech discussions.'
    },
    {
      name: 'Discord',
      url: 'https://dub.sh/ee-d',
      description: 'Join our Discord community for real-time chat, collaboration, and gaming sessions.'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@encryptedge',
      description: 'Subscribe to our channel for tutorials, workshops, and cybersecurity content.'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/EncryptEdge',
      description: 'Like our page for community updates, events, and networking opportunities.'
    },
    {
      name: 'WhatsApp',
      url: 'https://chat.whatsapp.com/Kdzl9jmcE4f2RiPcKhxguE',
      description: 'Join our WhatsApp group for instant updates, discussions, and quick community support.'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-6 mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white font-mono">
              &lt;CONNECT <span className="text-red-600">WITH US/&gt;</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-600 font-mono">
              // Join Our Digital Community
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono">
              # Follow EncryptEdge across all platforms to stay connected with the cybersecurity community, 
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
              &gt; Follow Us <span className="text-red-700">Everywhere</span>
            </h2>
            <p className="text-gray-400 text-lg font-mono">
              // Choose your preferred platform to connect with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialLinks.map((social) => (
              <div key={social.name} className="bg-black border-2 border-red-900/50 rounded-lg p-6 hover:border-red-800 hover:shadow-lg hover:shadow-red-900/20 transition-all">
                <div className="text-center space-y-4">
                  <div className="mb-4 text-red-700">
                    <SocialIcon platform={social.name} />
                  </div>
                  <h3 className="text-2xl font-bold text-red-700 font-mono">
                    [{social.name}]
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 font-mono">
                    {social.description}
                  </p>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full px-6 py-3 rounded-lg bg-red-800 hover:bg-red-900 text-white font-semibold transition-all border border-red-700 shadow-lg shadow-red-900/30 hover:shadow-red-900/50 font-mono"
                  >
                    &gt; Follow on {social.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-2 border-red-800 rounded-lg p-8 bg-gradient-to-br from-red-950/50 to-black backdrop-blur-sm shadow-2xl shadow-red-900/20">
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">
              &gt; Stay <span className="text-red-700">Connected</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 font-mono">
              // Don&apos;t miss out on the latest cybersecurity trends, workshops, and community events. 
              Follow us on your favorite platform!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="https://chat.whatsapp.com/Kdzl9jmcE4f2RiPcKhxguE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-red-900/50 hover:shadow-red-900/75 border border-red-700 font-mono"
              >
                [+] Join WhatsApp Group
              </a>
              <a 
                href="https://dub.sh/ee-d" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-red-800 text-red-700 hover:bg-red-800 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all font-mono"
              >
                [+] Join Discord Community
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
