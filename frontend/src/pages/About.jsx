import { useEffect, useState } from 'react'
import { getFounders, getTeamMates } from '../api/about'

const About = () => {
  const [founders, setFounders] = useState([])
  const [teamMembers, setTeamMembers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [foundersData, teamData] = await Promise.all([
          getFounders(),
          getTeamMates(),
        ])
        setFounders(foundersData)
        setTeamMembers(teamData)
      } catch (error) {
        console.error('Failed to load team data:', error)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  const TeamMemberCard = ({ member }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-za-line p-6 hover:shadow-md transition">
      {member.photo_url && (
        <div className="mb-4">
          <img
            src={member.photo_url}
            alt={member.name}
            className="w-32 h-32 rounded-full object-cover mx-auto"
          />
        </div>
      )}
      <h3 className="text-xl font-heading font-bold text-za-ink mb-1 text-center">
        {member.name}
      </h3>
      <p className="text-za-emerald font-semibold text-center mb-3">
        {member.position}
      </p>
      <p className="text-za-slate text-sm leading-relaxed mb-4 text-center">
        {member.bio}
      </p>
      {(member.linkedin_url || member.twitter_url || member.email) && (
        <div className="flex justify-center gap-3">
          {member.linkedin_url && (
            <a
              href={member.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-za-emerald hover:text-za-forest transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          )}
          {member.twitter_url && (
            <a
              href={member.twitter_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-za-emerald hover:text-za-forest transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="text-za-emerald hover:text-za-forest transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          )}
        </div>
      )}
    </div>
  )

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-za-emerald mb-6">
            About Zakat Academy
          </h1>
          <p className="text-lg md:text-xl text-za-slate max-w-3xl mx-auto leading-relaxed">
            We are dedicated to empowering Muslim women through comprehensive Islamic finance education. 
            Our mission is to provide accessible, high-quality learning resources that help women achieve 
            financial independence in a halal way.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="bg-za-ivory rounded-2xl shadow-sm border border-za-line p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-za-ink mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-za-slate leading-relaxed max-w-4xl mx-auto text-center">
              At Zakat Academy, we believe that understanding Zakat and Islamic finance is essential 
              for every Muslim. We provide structured courses, expert guidance, and a supportive community 
              to help women navigate their financial journey with confidence and clarity, all while 
              adhering to Islamic principles.
            </p>
          </div>
        </section>

        {/* Founders Section */}
        {loading ? (
          <div className="text-center text-za-slate py-12">Loading founders...</div>
        ) : founders.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-za-ink mb-12 text-center">
              Our Founders
            </h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 ${founders.length === 2 ? 'lg:grid-cols-2 max-w-4xl mx-auto' : 'lg:grid-cols-3'} gap-8`}>
              {founders.map((founder) => (
                <TeamMemberCard key={founder.id} member={founder} />
              ))}
            </div>
          </section>
        )}

        {/* Team Members Section */}
        {loading ? (
          <div className="text-center text-za-slate py-12">Loading team members...</div>
        ) : teamMembers.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-za-ink mb-12 text-center">
              Our Team
            </h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 ${teamMembers.length === 2 ? 'lg:grid-cols-2 max-w-4xl mx-auto' : 'lg:grid-cols-3'} gap-8`}>
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>
        )}

        {/* Values Section */}
        <section className="bg-za-emerald text-white rounded-2xl shadow-sm p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Halal First</h3>
              <p className="text-white/90">
                All our teachings and practices strictly adhere to Islamic principles.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Accessibility</h3>
              <p className="text-white/90">
                Education should be free and accessible to all Muslim women.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Empowerment</h3>
              <p className="text-white/90">
                We empower women to take control of their financial future.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
