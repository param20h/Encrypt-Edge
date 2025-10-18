import CyberCard from '@/components/ui/CyberCard';
import NeonButton from '@/components/ui/NeonButton';
import GlitchText from '@/components/ui/GlitchText';

export default function Events() {
  const upcomingEvents = [
    {
      title: 'Introduction to Advanced Cybersecurity',
      date: 'Coming Soon',
      type: 'Workshop',
      participants: 150,
      prize: 'Certificate',
      status: 'Stay Tuned',
      description: 'Comprehensive workshop covering advanced cybersecurity concepts, tools, and techniques for aspiring security professionals.'
    },
  ];

  const pastEvents = [
    { 
      name: 'WiFi Hacking Workshop', 
      winners: 'All Participants', 
      date: 'Sep 2023', 
      participants: 350,
      type: 'Offline Workshop',
      description: 'Hands-on session on wireless network security and ethical WiFi penetration testing.'
    },
    { 
      name: 'Intro to Hack The Box & TryHackMe', 
      winners: 'All Participants', 
      date: 'Aug 2023', 
      participants: 400,
      type: 'Offline Workshop',
      description: 'Getting started with popular cybersecurity training platforms - HTB and THM.'
    },
    { 
      name: 'RCS CTF 2024 - Republic of Cyber Sentinels', 
      winners: 'Team CyberKnights', 
      date: 'Jan 26, 2024', 
      participants: 600,
      type: '24hr CTF Competition',
      description: 'Intense 24-hour Capture The Flag competition with challenges across multiple domains.'
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 font-mono">
            &lt;Cyber <span className="text-red-700">Events/&gt;</span>
          </h1>
          <p className="text-gray-400 text-lg font-mono">
            // Compete, learn, and network with the global cybersecurity community
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Events */}
            <div>
              <h2 className="text-3xl font-bold text-white font-mono mb-6">
                &gt; Upcoming <span className="text-red-700">Events</span>
              </h2>
              
              {/* Stay Tuned Banner */}
              <div className="mb-6 bg-gradient-to-r from-red-950/40 to-black border-2 border-red-800/50 rounded-lg p-6 shadow-lg shadow-red-900/20">
                <div className="text-center">
                  <div className="text-4xl mb-3">📢</div>
                  <h3 className="text-2xl font-bold text-red-700 font-mono mb-2">
                    &gt; Stay Tuned!
                  </h3>
                  <p className="text-gray-400 font-mono text-sm">
                    // New exciting events and workshops coming soon. Follow us on social media for updates!
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="bg-black border-2 border-red-900/50 rounded-lg p-6 hover:border-red-800 hover:shadow-lg hover:shadow-red-900/20 transition-all">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs px-2 py-1 rounded font-mono ${
                            event.status === 'Stay Tuned' ? 'bg-red-700/20 text-red-600 border border-red-800/30 animate-pulse' :
                            event.status === 'Registration Open' ? 'bg-red-700/20 text-red-600 border border-red-800/30' :
                            event.status === 'Limited Seats' ? 'bg-orange-500/20 text-orange-400 border border-orange-600/30' :
                            'bg-gray-500/20 text-gray-400 border border-gray-600/30'
                          }`}>
                            [{event.status}]
                          </span>
                          <span className="text-gray-500 text-xs font-mono">// {event.type}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-red-700 mb-2 font-mono">[+] {event.title}</h3>
                        <p className="text-gray-400 text-sm mb-3 font-mono">{event.description}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm font-mono">
                          <div className="flex items-center gap-1">
                            <span className="text-gray-500">📅</span>
                            <span className="text-white">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-gray-500">👥</span>
                            <span className="text-white">{event.participants.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-gray-500">🏆</span>
                            <span className="text-red-600">{event.prize}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <a 
                          href="https://tinyurl.com/Encryptedge" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-red-800 hover:bg-red-900 text-white px-4 py-2 rounded-lg font-mono text-sm border border-red-700 text-center transition-all"
                        >
                          &gt; Get Notified
                        </a>
                        <button className="border-2 border-red-800 text-red-700 hover:bg-red-800/10 px-4 py-2 rounded-lg font-mono text-sm transition-all">
                          &gt; Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Calendar */}
            <div className="bg-black border-2 border-red-900/50 rounded-lg p-6 hover:border-red-800 transition-all">
              <h2 className="text-2xl font-bold text-red-700 font-mono mb-6">
                [*] Event Calendar
              </h2>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                  <div key={day} className="text-center text-gray-400 text-sm py-2 font-mono">
                    {day}
                  </div>
                ))}
                
                {/* Sample calendar days */}
                {Array.from({length: 35}, (_, i) => {
                  const day = i - 5; // Start calendar from previous month
                  const isEventDay = [15, 22, 28].includes(day);
                  const isToday = day === 12;
                  
                  return (
                    <div key={i} className={`text-center p-2 text-sm rounded cursor-pointer transition-colors font-mono ${
                      day < 1 || day > 31 ? 'text-gray-700' :
                      isToday ? 'bg-red-700/20 text-red-600 border border-red-700/50' :
                      isEventDay ? 'bg-red-900/30 text-red-600 hover:bg-red-900/50' :
                      'text-gray-300 hover:bg-gray-800/50'
                    }`}>
                      {day > 0 && day <= 31 ? day : ''}
                      {isEventDay && <div className="w-1 h-1 bg-red-400 rounded-full mx-auto mt-1"></div>}
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-400">Today</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                  <span className="text-gray-400">Event Day</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Registration */}
            <div className="bg-black border-2 border-red-900/50 rounded-lg p-6 hover:border-red-800 hover:shadow-lg hover:shadow-red-900/20 transition-all">
              <h2 className="text-xl font-bold text-red-700 font-mono mb-4">
                [+] Get Notified
              </h2>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="w-full bg-black border border-red-900/50 rounded px-3 py-2 text-white focus:border-red-700 focus:outline-none font-mono text-sm"
                />
                <select className="w-full bg-black border border-red-900/50 rounded px-3 py-2 text-white focus:border-red-700 focus:outline-none font-mono text-sm">
                  <option value="">// Select Interest</option>
                  <option value="advanced">Intro to Advanced Cybersecurity</option>
                  <option value="all">All Events</option>
                </select>
                <button className="w-full bg-red-800 hover:bg-red-900 text-white px-4 py-2 rounded-lg font-mono text-sm border border-red-700 transition-all">
                  &gt; Notify Me
                </button>
                <p className="text-xs text-gray-500 font-mono text-center">
                  // Stay updated with our latest events
                </p>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-black border-2 border-red-900/50 rounded-lg p-6 hover:border-red-800 hover:shadow-lg hover:shadow-red-900/20 transition-all">
              <h2 className="text-xl font-bold text-red-700 font-mono mb-4">
                🏆 Past Events
              </h2>
              <div className="space-y-3">
                {pastEvents.map((event, index) => (
                  <div key={index} className="border border-red-900/30 rounded p-3 bg-red-950/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs px-2 py-0.5 rounded bg-red-900/30 text-red-600 border border-red-800/30 font-mono">
                        {event.type}
                      </span>
                      <span className="text-gray-400 text-xs font-mono">{event.date}</span>
                    </div>
                    <h3 className="text-white font-semibold text-sm font-mono mb-1">{event.name}</h3>
                    <p className="text-gray-400 text-xs font-mono mb-2">{event.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-red-600 text-xs font-mono">👑 {event.winners}</span>
                      <span className="text-red-700 text-xs font-mono">👥 {event.participants}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Stats */}
            <div className="bg-black border-2 border-red-900/50 rounded-lg p-6 hover:border-red-800 hover:shadow-lg hover:shadow-red-900/20 transition-all">
              <h2 className="text-xl font-bold text-red-700 font-mono mb-4">
                📊 Community Stats
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between font-mono text-sm">
                  <span className="text-gray-300">Total Events:</span>
                  <span className="text-red-700">5+</span>
                </div>
                <div className="flex justify-between font-mono text-sm">
                  <span className="text-gray-300">Active Members:</span>
                  <span className="text-red-700">50+</span>
                </div>
                <div className="flex justify-between font-mono text-sm">
                  <span className="text-gray-300">Workshops Conducted:</span>
                  <span className="text-red-700">5+</span>
                </div>
                <div className="flex justify-between font-mono text-sm">
                  <span className="text-gray-300">CTF Competitions:</span>
                  <span className="text-red-700">3</span>
                </div>
                <div className="flex justify-between font-mono text-sm">
                  <span className="text-gray-300">Total Participants:</span>
                  <span className="text-red-700">500+</span>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-black border-2 border-red-900/50 rounded-lg p-6 hover:border-red-800 hover:shadow-lg hover:shadow-red-900/20 transition-all">
              <h2 className="text-xl font-bold text-red-700 font-mono mb-4">
                🔔 Updates
              </h2>
              <div className="space-y-2">
                <div className="text-sm font-mono">
                  <span className="text-red-700">●</span>
                  <span className="text-white ml-2">Advanced Cybersecurity Workshop - Coming Soon</span>
                </div>
                <div className="text-sm font-mono">
                  <span className="text-orange-400">●</span>
                  <span className="text-white ml-2">Follow us for event announcements</span>
                </div>
                <div className="text-sm font-mono">
                  <span className="text-red-600">●</span>
                  <span className="text-white ml-2">Join WhatsApp for instant updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
