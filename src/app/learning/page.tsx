import CyberCard from '@/components/ui/CyberCard';
import NeonButton from '@/components/ui/NeonButton';
import GlitchText from '@/components/ui/GlitchText';

export default function Learning() {
  const courses = [
    {
      title: 'Ethical Hacking Fundamentals',
      level: 'Beginner',
      duration: '8 weeks',
      students: 1247,
      rating: 4.9,
      color: 'cyan' as const,
      topics: ['Network Security', 'Web Application Testing', 'Social Engineering', 'Report Writing']
    },
    {
      title: 'Advanced Penetration Testing',
      level: 'Advanced', 
      duration: '12 weeks',
      students: 523,
      rating: 4.8,
      color: 'purple' as const,
      topics: ['Active Directory', 'Post-Exploitation', 'Privilege Escalation', 'Lateral Movement']
    },
    {
      title: 'Bug Bounty Hunting Mastery',
      level: 'Intermediate',
      duration: '10 weeks', 
      students: 892,
      rating: 4.7,
      color: 'green' as const,
      topics: ['OWASP Top 10', 'API Security', 'Mobile App Testing', 'Reporting Techniques']
    },
    {
      title: 'Digital Forensics & Incident Response',
      level: 'Advanced',
      duration: '14 weeks',
      students: 367,
      rating: 4.9,
      color: 'orange' as const,
      topics: ['Memory Analysis', 'Network Forensics', 'Malware Analysis', 'Timeline Analysis']
    },
  ];

  const ctfChallenges = [
    { name: 'Crypto Chaos', difficulty: 'Hard', solvers: 23, points: 500 },
    { name: 'Web Warrior', difficulty: 'Medium', solvers: 156, points: 300 },
    { name: 'Binary Breakdown', difficulty: 'Expert', solvers: 8, points: 750 },
    { name: 'Network Ninja', difficulty: 'Easy', solvers: 432, points: 150 },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 font-mono">
            <GlitchText text="Learning" /> <span className="text-cyan-400">Academy</span>
          </h1>
          <p className="text-slate-300 text-lg">
            Learn cybersecurity through hands-on workshops and peer collaboration
          </p>
        </div>

        {/* Progress Dashboard */}
        <div className="mb-12">
          <CyberCard>
            <h2 className="text-2xl font-bold text-cyan-400 font-mono mb-6">Your Progress</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 font-mono">5</div>
                <div className="text-slate-400">Workshops Attended</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 font-mono">89</div>
                <div className="text-slate-400">Learning Points</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 font-mono">12</div>
                <div className="text-slate-400">Challenges Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 font-mono">85%</div>
                <div className="text-slate-400">Completion Rate</div>
              </div>
            </div>
          </CyberCard>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Courses */}
            <div>
              <h2 className="text-3xl font-bold text-white font-mono mb-6">
                Featured <span className="text-cyan-400">Courses</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {courses.map((course, index) => (
                  <CyberCard key={index} glowColor={course.color}>
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs px-2 py-1 rounded font-mono ${
                          course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                          course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {course.level}
                        </span>
                        <div className="flex items-center text-yellow-400">
                          <span className="text-sm">★ {course.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                      <div className="flex items-center gap-4 text-slate-400 text-sm mb-3">
                        <span>⏱️ {course.duration}</span>
                        <span>👥 {course.students.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-300 mb-2">Topics Covered:</h4>
                      <div className="flex flex-wrap gap-1">
                        {course.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <NeonButton variant="secondary" size="sm" className="w-full">
                      Enroll Now
                    </NeonButton>
                  </CyberCard>
                ))}
              </div>
            </div>

            {/* Learning Paths */}
            <CyberCard>
              <h2 className="text-2xl font-bold text-purple-400 font-mono mb-6">
                Learning Paths
              </h2>
              <div className="space-y-4">
                <div className="border border-slate-700 rounded-lg p-4 hover:border-purple-500/50 transition-colors">
                  <h3 className="text-white font-semibold mb-2">🎯 Complete Beginner to Bug Hunter</h3>
                  <p className="text-slate-400 text-sm mb-3">
                    Start from zero and become a certified bug bounty hunter
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 text-sm">6 Courses • 24 weeks</span>
                    <NeonButton variant="secondary" size="sm">Start Path</NeonButton>
                  </div>
                </div>
                
                <div className="border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition-colors">
                  <h3 className="text-white font-semibold mb-2">🔐 Cybersecurity Specialist</h3>
                  <p className="text-slate-400 text-sm mb-3">
                    Master enterprise security and incident response
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm">8 Courses • 32 weeks</span>
                    <NeonButton variant="secondary" size="sm">Start Path</NeonButton>
                  </div>
                </div>
                
                <div className="border border-slate-700 rounded-lg p-4 hover:border-green-500/50 transition-colors">
                  <h3 className="text-white font-semibold mb-2">🕵️ Digital Forensics Expert</h3>
                  <p className="text-slate-400 text-sm mb-3">
                    Become a digital detective and incident response expert
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 text-sm">5 Courses • 20 weeks</span>
                    <NeonButton variant="secondary" size="sm">Start Path</NeonButton>
                  </div>
                </div>
              </div>
            </CyberCard>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTF Challenges */}
            <CyberCard glowColor="green">
              <h2 className="text-xl font-bold text-green-400 font-mono mb-4">
                🚩 Active CTFs
              </h2>
              <div className="space-y-3">
                {ctfChallenges.map((challenge, index) => (
                  <div key={index} className="border border-slate-700 rounded p-3">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-white font-semibold text-sm">{challenge.name}</h3>
                      <span className="text-cyan-400 font-mono text-sm">{challenge.points}pts</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`text-xs px-2 py-1 rounded ${
                        challenge.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                        challenge.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        challenge.difficulty === 'Hard' ? 'bg-red-500/20 text-red-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {challenge.difficulty}
                      </span>
                      <span className="text-slate-400 text-xs">{challenge.solvers} solved</span>
                    </div>
                  </div>
                ))}
              </div>
              <NeonButton variant="secondary" size="sm" className="w-full mt-4">
                View All CTFs
              </NeonButton>
            </CyberCard>

            {/* Study Resources */}
            <CyberCard glowColor="cyan">
              <h2 className="text-xl font-bold text-cyan-400 font-mono mb-4">
                📚 Study Resources
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-300">Cheat Sheets:</span>
                  <span className="text-cyan-400 font-mono">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Video Tutorials:</span>
                  <span className="text-purple-400 font-mono">156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Practice Labs:</span>
                  <span className="text-green-400 font-mono">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Research Papers:</span>
                  <span className="text-orange-400 font-mono">89</span>
                </div>
              </div>
              <NeonButton variant="secondary" size="sm" className="w-full mt-4">
                Browse Library
              </NeonButton>
            </CyberCard>

            {/* Achievements */}
            <CyberCard glowColor="orange">
              <h2 className="text-xl font-bold text-orange-400 font-mono mb-4">
                🏆 Recent Achievements
              </h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">🥇</span>
                  <span className="text-white text-sm">First Blood</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-white text-sm">Course Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">🔥</span>
                  <span className="text-white text-sm">7 Day Streak</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">⚡</span>
                  <span className="text-white text-sm">Speed Demon</span>
                </div>
              </div>
            </CyberCard>
          </div>
        </div>
      </div>
    </div>
  );
}
