import CyberCard from '@/components/ui/CyberCard';
import NeonButton from '@/components/ui/NeonButton';
import GlitchText from '@/components/ui/GlitchText';

export default function Events() {
  const upcomingEvents = [
    {
      title: 'Cybersecurity Awareness Workshop',
      date: 'September 15, 2025',
      type: 'Workshop',
      participants: 100,
      prize: 'Certificate',
      status: 'Registration Open',
      color: 'cyan' as const,
      description: 'Learn the fundamentals of cybersecurity and protect yourself online.'
    },
    {
      title: 'Web Application Security Bootcamp',
      date: 'October 3-5, 2025',
      type: 'Bootcamp',
      participants: 50,
      prize: 'Completion Badge',
      status: 'Limited Seats',
      color: 'purple' as const,
      description: 'Intensive 3-day bootcamp on web application security testing.'
    },
    {
      title: 'Network Security Deep Dive',
      date: 'October 20, 2025',
      type: 'Seminar',
      participants: 75,
      prize: 'Knowledge',
      status: 'Coming Soon',
      color: 'green' as const,
      description: 'Advanced networking concepts and security implementations.'
    },
    {
      title: 'RCS CTF 2025 - 24hr Challenge',
      date: 'November 10-11, 2025',
      type: 'CTF Competition',
      participants: 200,
      prize: 'Trophies & Certificates',
      status: 'Save the Date',
      color: 'orange' as const,
      description: 'Annual 24-hour Republic of Cyber Scientists Capture The Flag competition.'
    },
  ];

  const pastEvents = [
    { name: 'RCS CTF 2024 - 24hr Challenge', winners: 'Team CyberKnights', date: 'Nov 2024', participants: 180 },
    { name: 'Ethical Hacking Workshop', winners: 'All Participants', date: 'Sep 2024', participants: 120 },
    { name: 'Cryptography Fundamentals', winners: 'Team Decipher', date: 'Aug 2024', participants: 80 },
    { name: 'Bug Bounty Basics Workshop', winners: 'All Participants', date: 'Jul 2024', participants: 95 },
    { name: 'Malware Analysis Seminar', winners: 'All Participants', date: 'Jun 2024', participants: 65 },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 font-mono">
            Cyber <span className="text-cyan-400"><GlitchText text="Events" /></span>
          </h1>
          <p className="text-slate-300 text-lg">
            Compete, learn, and network with the global cybersecurity community
          </p>
        </div>

        {/* Live Event Banner */}
        <div className="mb-12">
          <CyberCard className="bg-gradient-to-r from-green-900/20 to-cyan-900/20 border-green-500/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <h2 className="text-xl font-bold text-white font-mono">UPCOMING</h2>
                  <p className="text-green-400">Weekly Cyber Security Discussion - Every Friday 4 PM</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-mono">LPU Block 34, Room 401</div>
                <NeonButton size="sm" className="mt-2">Join Discussion</NeonButton>
              </div>
            </div>
          </CyberCard>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Events */}
            <div>
              <h2 className="text-3xl font-bold text-white font-mono mb-6">
                Upcoming <span className="text-cyan-400">Events</span>
              </h2>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <CyberCard key={index} glowColor={event.color}>
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs px-2 py-1 rounded font-mono ${
                            event.status === 'Registration Open' ? 'bg-green-500/20 text-green-400' :
                            event.status === 'Almost Full' ? 'bg-yellow-500/20 text-yellow-400' :
                            event.status === 'Early Bird' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {event.status}
                          </span>
                          <span className="text-slate-500 text-xs">{event.type}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                        <p className="text-slate-300 text-sm mb-3">{event.description}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <span className="text-slate-400">📅</span>
                            <span className="text-white">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-slate-400">👥</span>
                            <span className="text-white">{event.participants.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-slate-400">🏆</span>
                            <span className="text-cyan-400">{event.prize}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <NeonButton size="sm">
                          Register
                        </NeonButton>
                        <NeonButton variant="secondary" size="sm">
                          Details
                        </NeonButton>
                      </div>
                    </div>
                  </CyberCard>
                ))}
              </div>
            </div>

            {/* Event Calendar */}
            <CyberCard>
              <h2 className="text-2xl font-bold text-purple-400 font-mono mb-6">
                Event Calendar
              </h2>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                  <div key={day} className="text-center text-slate-400 text-sm py-2 font-mono">
                    {day}
                  </div>
                ))}
                
                {/* Sample calendar days */}
                {Array.from({length: 35}, (_, i) => {
                  const day = i - 5; // Start calendar from previous month
                  const isEventDay = [15, 22, 28].includes(day);
                  const isToday = day === 12;
                  
                  return (
                    <div key={i} className={`text-center p-2 text-sm rounded cursor-pointer transition-colors ${
                      day < 1 || day > 31 ? 'text-slate-600' :
                      isToday ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' :
                      isEventDay ? 'bg-purple-500/20 text-purple-400 hover:bg-purple-500/30' :
                      'text-slate-300 hover:bg-slate-700/50'
                    }`}>
                      {day > 0 && day <= 31 ? day : ''}
                      {isEventDay && <div className="w-1 h-1 bg-purple-400 rounded-full mx-auto mt-1"></div>}
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-400">Today</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-slate-400">Event Day</span>
                </div>
              </div>
            </CyberCard>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Registration */}
            <CyberCard glowColor="cyan">
              <h2 className="text-xl font-bold text-cyan-400 font-mono mb-4">
                Quick Registration
              </h2>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email..."
                  className="w-full bg-black/50 border border-cyan-500/30 rounded px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"
                />
                <select className="w-full bg-black/50 border border-cyan-500/30 rounded px-3 py-2 text-white focus:border-cyan-500 focus:outline-none">
                  <option value="">Select Event</option>
                  <option value="championship">CyberGrid Championship</option>
                  <option value="bootcamp">Bug Bounty Bootcamp</option>
                  <option value="summit">AI Security Summit</option>
                </select>
                <NeonButton variant="secondary" size="sm" className="w-full">
                  Register Interest
                </NeonButton>
              </div>
            </CyberCard>

            {/* Leaderboard */}
            <CyberCard glowColor="purple">
              <h2 className="text-xl font-bold text-purple-400 font-mono mb-4">
                🏆 Past Events & Winners
              </h2>
              <div className="space-y-3">
                {pastEvents.map((event, index) => (
                  <div key={index} className="border border-slate-700 rounded p-3">
                    <h3 className="text-white font-semibold text-sm">{event.name}</h3>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-purple-400 text-xs">👑 {event.winners}</span>
                      <span className="text-slate-400 text-xs">{event.date}</span>
                    </div>
                    <div className="text-cyan-400 text-xs mt-1">👥 {event.participants} participants</div>
                  </div>
                ))}
              </div>
            </CyberCard>

            {/* Event Stats */}
            <CyberCard glowColor="green">
              <h2 className="text-xl font-bold text-green-400 font-mono mb-4">
                📊 Community Stats
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-300">Total Events:</span>
                  <span className="text-green-400 font-mono">35+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Active Members:</span>
                  <span className="text-cyan-400 font-mono">150+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Workshops Conducted:</span>
                  <span className="text-purple-400 font-mono">25+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">This Semester:</span>
                  <span className="text-orange-400 font-mono">8</span>
                </div>
              </div>
            </CyberCard>

            {/* Notifications */}
            <CyberCard glowColor="orange">
              <h2 className="text-xl font-bold text-orange-400 font-mono mb-4">
                🔔 Notifications
              </h2>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="text-green-400">●</span>
                  <span className="text-white ml-2">New CTF starting in 2h</span>
                </div>
                <div className="text-sm">
                  <span className="text-yellow-400">●</span>
                  <span className="text-white ml-2">Bootcamp registration closing</span>
                </div>
                <div className="text-sm">
                  <span className="text-red-400">●</span>
                  <span className="text-white ml-2">Championship team slots limited</span>
                </div>
              </div>
            </CyberCard>
          </div>
        </div>
      </div>
    </div>
  );
}
