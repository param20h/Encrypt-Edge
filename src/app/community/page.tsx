'use client';
import Image from 'next/image';

// Type definitions
type TeamMember = {
  name: string;
  role: string;
  image: string;
  github: string;
  linkedin: string;
  bio: string;
};

type PastMember = {
  name: string;
  role: string;
  tenure: string;
  image: string;
  github?: string;
  linkedin?: string;
};

type Mentor = {
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
  expertise: string;
};

// Team member data
const currentLead: TeamMember = {
  name: 'Param20h',
  role: 'Community Lead @Encrypt Edge',
  image: '/seniors/param20h.JPG', 
  github: 'param20h',
  linkedin: 'param20h',
  bio: 'Web Developer | Content Writer | CTF Player | Leading cybersecurity community at LPU'
};

const coreTeam: TeamMember[] = [
  // Current active core team members
];

const pastMembers: PastMember[] = [
  // Add past members here
  // {
  //   name: 'Jane Smith',
  //   role: 'Former President',
  //   tenure: '2023-2024',
  //   image: '/images/jane.jpg',
  //   github: 'janesmith',
  //   linkedin: 'janesmith',
  // },
];

const mentors: Mentor[] = [
  {
    name: 'Abhinandan Khurana',
    role: 'Security Engineer',
    image: '/seniors/ct-abhinandan.webp',
    github: 'abhinandan-khurana',
    linkedin: 'abhinandan-khurana',
    expertise: 'Security Engineer @MoveInSync | Security Researcher | Practical AppSec'
  },
  {
    name: 'Avinash Sharma',
    role: 'Ex-Community Lead',
    image: '/seniors/ct-avinash.webp',
    github: 'hail0hydra',
    linkedin: 'avinash-sharma-me',
    expertise: 'Red Teaming | Offensive Security & Malware Analysis | CTF Player | Python & Linux'
  },
  {
    name: 'Chaitanya Madane',
    role: 'VAPT Analyst',
    image: '/seniors/ct-chatanya.webp',
    github: 'Chaitu785',
    linkedin: 'ransc0rp1on',
    expertise: 'CEHv12 | VAPT Analyst @CyRAACS | CTF Developer @vulncon | Red Teaming'
  },
  {
    name: 'Jyotirmoy Bandyopadhayaya',
    role: 'SDEI @LoginRadius',
    image: '/seniors/ct-jyotirmoy.webp',
    github: 'BRAVO68WEB',
    linkedin: 'bravo68web',
    expertise: 'CPTS | HackTheBox Top 100 | DevSecOps | Security Researcher | CTF Player'
  },
  {
    name: 'Kartik Dixit',
    role: 'Threat Researcher',
    image: '/seniors/ct-kartik.webp',
    github: 'kartik',
    linkedin: 'kartik-dixit',
    expertise: 'Threat Researcher @ Zscaler | CEHv12 Practical | (ISC)² CC | CTF Player'
  },
  {
    name: 'Suraj Mani',
    role: 'Community Organizer',
    image: '/seniors/ct-suraj.webp',
    github: 'surajmani-me',
    linkedin: 'smanitech',
    expertise: 'Community Organizer @ TFUG Jalandhar | Community Building & Networking'
  }
];

export default function Community() {
  return (
    <div className="min-h-screen py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4 font-mono">
            &lt;Community <span className="text-red-700">Members/&gt;</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            {/* Meet the passionate individuals driving LPU&apos;s cybersecurity community forward */}
          </p>
        </div>

        {/* Community Lead Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 font-mono text-center">
            [*] Current <span className="text-red-700">Leadership</span>
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="group relative bg-gradient-to-br from-red-950/30 via-black to-red-950/30 border-2 border-red-900/50 rounded-2xl p-8 hover:border-red-700 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/50">
              {/* Animated gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-700/0 via-red-700/50 to-red-700/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-red-800/50 group-hover:border-red-600 transition-all duration-300 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-700/20 to-transparent z-10"></div>
                    <Image 
                      src={currentLead.image} 
                      alt={currentLead.name} 
                      width={192} 
                      height={192} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Status indicator */}
                  <div className="absolute -bottom-2 -right-2 bg-red-700 text-white px-3 py-1 rounded-full text-xs font-mono border-2 border-black">
                    🔴 LEAD
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-white mb-2 font-mono">
                    {currentLead.name}
                  </h3>
                  <p className="text-red-600 text-lg mb-4 font-mono">
                    &gt; {currentLead.role}
                  </p>
                  <p className="text-gray-400 mb-6 font-mono text-sm">
                    {currentLead.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a
                      href={`https://github.com/${currentLead.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 bg-black border-2 border-red-900/50 hover:border-red-700 text-white px-4 py-2 rounded-lg transition-all hover:shadow-lg hover:shadow-red-900/50 font-mono"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="group-hover/btn:text-red-600 transition-colors">GitHub</span>
                    </a>
                    <a
                      href={`https://linkedin.com/in/${currentLead.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 bg-black border-2 border-red-900/50 hover:border-red-700 text-white px-4 py-2 rounded-lg transition-all hover:shadow-lg hover:shadow-red-900/50 font-mono"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span className="group-hover/btn:text-red-600 transition-colors">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Team Section */}
        {coreTeam.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 font-mono text-center">
              [+] Core <span className="text-red-700">Team</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreTeam.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
          </section>
        )}

        {/* Past Members Section */}
        {pastMembers.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 font-mono text-center">
              [#] Past <span className="text-red-700">Members</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pastMembers.map((member, index) => (
                <PastMemberCard key={index} member={member} />
              ))}
            </div>
          </section>
        )}

        {/* Mentors Section */}
        {mentors.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 font-mono text-center">
              [*] <span className="text-red-700">Mentors</span> & Advisors
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mentors.map((mentor, index) => (
                <MentorCard key={index} mentor={mentor} />
              ))}
            </div>
          </section>
        )}

        {/* Join CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-red-950/50 to-black border-2 border-red-800 rounded-2xl p-12 shadow-2xl shadow-red-900/20">
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">
              &gt; Want to Join the Team?
            </h2>
            <p className="text-xl text-red-600 mb-8 font-mono">
              {/* We&apos;re always looking for passionate cybersecurity enthusiasts! */}
            </p>
            <a 
              href="https://tinyurl.com/Encryptedge" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-red-900/50 hover:shadow-red-900/75 border border-red-700 font-mono"
            >
              [+] Join Community
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

// Member Card Component
function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group relative bg-black border-2 border-red-900/50 rounded-xl p-6 hover:border-red-700 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/30">
      {/* Profile Image */}
      <div className="w-32 h-32 mx-auto rounded-xl overflow-hidden border-2 border-red-800/50 group-hover:border-red-600 transition-all mb-4">
        <Image 
          src={member.image} 
          alt={member.name} 
          width={128} 
          height={128} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <h3 className="text-xl font-bold text-white text-center mb-1 font-mono">
        {member.name}
      </h3>
      <p className="text-red-600 text-center mb-3 font-mono text-sm">
        &gt; {member.role}
      </p>
      <p className="text-gray-400 text-center text-xs mb-4 font-mono">
        {member.bio}
      </p>

      {/* Social Links */}
      <div className="flex gap-2 justify-center">
        <a
          href={`https://github.com/${member.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-black border border-red-900/50 hover:border-red-700 rounded-lg transition-all"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a
          href={`https://linkedin.com/in/${member.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-black border border-red-900/50 hover:border-red-700 rounded-lg transition-all"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

// Past Member Card Component
function PastMemberCard({ member }: { member: PastMember }) {
  return (
    <div className="bg-black border border-red-900/30 rounded-lg p-4 hover:border-red-700 transition-all">
      <div className="w-20 h-20 mx-auto rounded-lg overflow-hidden border border-red-800/30 mb-3">
        <Image 
          src={member.image} 
          alt={member.name} 
          width={80} 
          height={80} 
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="text-white text-center font-mono text-sm font-bold mb-1">{member.name}</h4>
      <p className="text-red-600 text-center font-mono text-xs mb-1">{member.role}</p>
      <p className="text-gray-500 text-center font-mono text-xs mb-2">{member.tenure}</p>
      <div className="flex gap-2 justify-center">
        {member.github && (
          <a href={`https://github.com/${member.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        )}
        {member.linkedin && (
          <a href={`https://linkedin.com/in/${member.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        )}
      </div>
    </div>
  );
}

// Mentor Card Component
function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <div className="bg-gradient-to-br from-red-950/20 to-black border-2 border-red-900/50 rounded-xl p-6 hover:border-red-700 transition-all hover:shadow-xl hover:shadow-red-900/20">
      <div className="w-24 h-24 mx-auto rounded-xl overflow-hidden border-2 border-red-800/50 mb-4">
        <Image 
          src={mentor.image} 
          alt={mentor.name} 
          width={96} 
          height={96} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-bold text-white text-center mb-1 font-mono">{mentor.name}</h3>
      <p className="text-red-600 text-center mb-2 font-mono text-sm">{mentor.role}</p>
      <p className="text-gray-400 text-center text-xs mb-4 font-mono">{mentor.expertise}</p>
      <div className="flex gap-2 justify-center">
        {mentor.github && (
          <a href={`https://github.com/${mentor.github}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-black border border-red-900/50 hover:border-red-700 rounded-lg transition-all">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        )}
        {mentor.linkedin && (
          <a href={`https://linkedin.com/in/${mentor.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-black border border-red-900/50 hover:border-red-700 rounded-lg transition-all">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        )}
      </div>
    </div>
  );
}
