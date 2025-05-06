"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"
import { ArrowRight,Users, Award,Mic2Icon } from "lucide-react"
import Link from "next/link"
import Image from "next/image";
export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-blue-50/50">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[url('/gallery/20240719120055_IMG_6026.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/10 to-white/10"></div>
        </div>


        {/* Foreground Content */}
        <div className="container max-w-7xl px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center space-y-8 relative z-10"
            
          >
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
             A-MUNSO Presents,
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-grey-900 leading-tight">
              AMRITA-{" "}
              <span className="bg-gradient-to-r from-un-blue to-blue-900 bg-clip-text text-transparent">
                MUN 2025
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              AUGUST 1-3, 2025
            </h2>

            <p className="text-2xl md:text-2xl font-extrabold text-grey-800 max-w-3xl mx-auto">
            &quot;WHERE DIPLOMACY MEETS PROGRESS&quot;
            </p>
          
     
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="group h-12 px-8 bg-un-blue hover:bg-blue-700 transition-colors">
                <Link href="/achievements">
                  Explore Achievements
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 px-8 border-un-blue text-un-blue hover:bg-blue-50">
                <Link href="/events">
                  View Events
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div> */}
          </motion.div>

          {/* Decorative Background Element */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute inset-0 -z-0 flex items-center justify-center pointer-events-none"
          >
            {/* <Globe className="w-[40%] h-[40%] text-un-blue/20 stroke-[0.5]" /> */}
            <div className="relative w-[38%] h-[68%] opacity-40 -mt-8">
  <Image
    src="/images/munlogo.png"
    alt="Background"
    fill
    className="object-contain"
  />
</div>

          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
              Welcome to Amrita-MUN&apos;25
            </h2>
            <h2 className="text-lg md:text-2xl font-bold text-gray-900 max-w-4xl mx-auto">
              Dear Delegates,
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Welcome to Amrita-MUN&apos;25 — the premier Model United Nations conference of Amrita Vishwa Vidyapeetham, 
              Coimbatore Campus, where diplomacy, dialogue, and determination converge. From August 1st to 3rd, 2025, 
              join us on a journey that transcends borders and builds bridges of understanding.At Amrita-MUN, you won&apos;t just represent a nation—you&apos;ll step into the shoes of global leaders, 
              tackle real-world crises, and shape meaningful resolutions. Whether you&apos;re a seasoned MUNer or embarking on 
              your first committee, this conference is your stage to speak, lead, and inspire.
            </p>
           
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              With stimulating agendas, dynamic committees, and a platform that celebrates diverse voices, Amrita-MUN is 
              more than a simulation—it&apos;s an experience that transforms thinkers into changemakers.We can&apos;t wait to welcome you to the conference.{<br/>}
            </p>
            <p className="text-lg font-extrabold text-gray-600  max-w-4xl mx-auto">
              The world is waiting. Let&apos;s build it together—one step at a time.
            </p>
            <br/>
           
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50 bg-[url('/gallery/19.JPG')] bg-cover bg-center bg-no-repeat">
        <div className="container max-w-7xl px-4 bg-white/80 backdrop-blur-sm rounded-xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8 md:gap-12"
          >
            <FeatureCard
              icon={<Users className="w-8 h-8 text-un-blue" />}
              title="Collaborative Learning"
              description="Diplomacy Begins Here Step into global arenas, represent nations, and explore international relations like never before."
            />
            <FeatureCard
              icon={<Mic2Icon className="w-8 h-8 text-un-blue" />}
              title="Global Perspective"
              description="Where Voices Build Vision Collaborate with passionate delegates to shape resolutions that matter—and learn the power of purposeful dialogue."
            />
            <FeatureCard
              icon={<Award className="w-8 h-8 text-un-blue" />}
              title="Competitive Excellence"
              description="Compete. Conquer. Change. Showcase your skills, rise through the ranks, and leave your mark at one of South India’s most dynamic MUN platforms."
            />
          </motion.div>
        </div>
      </section>

      {/* Importance of MUN at Amrita University */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
             <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
              A Look Back at Amrita-MUN&apos;24
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Amrita-MUN&apos;24 brought together bright minds from across the globe, where delegates immersed themselves in 
            thought-provoking debates and collaborative diplomacy. The conference highlighted the power of dialogue in 
            addressing complex global issues, fostering a space where innovation and leadership thrived. Through intense 
            deliberations and strategic resolutions, AMUN&apos;24 not only celebrated the spirit of international cooperation 
            but also set the stage for an even more engaging and impactful Amrita-MUN&apos;25.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="group h-12 px-8 bg-un-blue hover:bg-blue-700 transition-colors">
                <Link href="/gallery">
                Relive the Moments of Amrita-MUN&apos;24
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            {/* <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<BookOpen className="w-8 h-8 text-un-blue" />}
                title="Enhance Global Awareness"
                description="Provides a platform for students to delve into global issues, develop informed opinions, and propose solutions that reflect Amrita&apos;s commitment to societal and global progress."
              />
              <FeatureCard
                icon={<Users className="w-8 h-8 text-un-blue" />}
                title="Foster Leadership and Diplomacy"
                description="Helps nurture future leaders by encouraging them to think critically and negotiate diplomatically."
              />
              <FeatureCard
                icon={<Award className="w-8 h-8 text-un-blue" />}
                title="Promote Amrita&apos;s Legacy"
                description="Showcases Amrita&apos;s values and places the university among globally renowned institutions that encourage such initiatives."
              />
            </div> */}
          </motion.div>
        </div>
      </section>
      {/* Benefits Section
      <section className="py-24 bg-white">
        <div className="container max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
              Benefits to the College and Students
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">For Amrita University</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Lightbulb className="w-6 h-6 text-un-blue mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">
                      <strong className="text-gray-900">Long-term Impact:</strong> Establishing A-MUNSO ensures a
                      sustainable legacy, bringing recognition and strengthening the university&apos;s academic profile over
                      time.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-6 h-6 text-un-blue mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">
                      <strong className="text-gray-900">Community Engagement:</strong> The event could serve as an
                      outreach initiative, inviting participation from neighboring institutions and fostering
                      collaboration.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-6 h-6 text-un-blue mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">
                      <strong className="text-gray-900">Prestige and Visibility:</strong> Hosting a MUN positions Amrita
                      as a hub for intellectual and extracurricular excellence.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">For Students</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Briefcase className="w-6 h-6 text-un-blue mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">
                      <strong className="text-gray-900">Skill Development:</strong> Students gain invaluable skills such
                      as public speaking, research, teamwork, critical thinking, policy debate and conflict resolution.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-6 h-6 text-un-blue mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">
                      <strong className="text-gray-900">Networking Opportunities:</strong> Participation in MUN&apos;s
                      connects students with peers and professionals from diverse fields and backgrounds.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-6 h-6 text-un-blue mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">
                      <strong className="text-gray-900">Enhanced Confidence:</strong> Debating and negotiating in a
                      structured environment help students build self-assurance and leadership qualities.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-un-blue via-blue-600 to-blue-700 text-white overflow-hidden">
        <div className="container max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-8 relative z-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Start Your Diplomatic Journey</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-blue-100">
              Join a community of passionate students committed to making a global impact. No prior experience required
              - just curiosity and enthusiasm.
            </p>
            <Button asChild size="lg" className="bg-white text-un-blue hover:bg-blue-50 hover:text-blue-700 h-14 px-10">
              {/* <Link href="/contact">
                Join Our Delegation
                <ArrowRight className="ml-3 h-4 w-4" />
              </Link> */}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;  // Ensures icon can be any React component
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};