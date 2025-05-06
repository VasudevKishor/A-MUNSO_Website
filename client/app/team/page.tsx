"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Define a type for a Team Member
interface TeamMember {
  name: string;
  role: string;
  image: string;
}

// Define the type for sections
interface Section {
  title: string;
  members: TeamMember[];
}

// ⬇️ Team Data
const sections: Section[] = [
  {
    title: "Convenors",
    members: [
      {
        name: "Dr. Ritwik M.",
        role: "Convenor",
        image: "/images/rM.webp",
      },
      {
        name: "Ramaguru Radhakrishnan",
        role: "Convenor",
        image: "/images/RAM.webp",
      },
    ],
  },
  {
    title: "Leadership",
    members: [
      {
        name: "Adithya Prakash Dash",
        role: "Chief Advisor",
        image: "/images/Adithya Prakash Dash - Chief Advisor.webp",
      },
      {
        name: "Shruti Sivakumar",
        role: "President",
        image: "/images/Shruti Sivakumar -  President.jpg",
      },
      {
        name: "Navanith Sampath Kumar",
        role: "Vice President",
        image: "/images/navnith - vice prez.jpg",
      },
    ],
  },
  {
    title: "Training And Research",
    members: [
      {
        name: "Sanjay A R",
        role: "Head of Training",
        image: "/images/Sanjay AR - Head of Delegate Training.jpg",
      },
      {
        name: "Adithya Menon R",
        role: "Head of Research",
        image: "/images/adithya menon - head of research.jpg",
      },
    ],
  },
  {
    title: "Partnerships and Finance",
    members: [
      {
        name: "Adithya Anish Nair",
        role: "Head of External Collaboration",
        image: "/images/adithya nair - head,, external collaboration.jpg",
      },
      {
        name: "Thilagan Iniyavan",
        role: "Treasurer",
        image: "/images/Thilagan Iniyavan - Treasurer.jpg",
      },
    ],
  },
  {
    title: "Public Relations And Outreach",
    members: [
      {
        name: "Yashashvi Agarwal",
        role: "Outreach Head",
        image: "/images/yashashvi agarwal - head of pr&outreach.jpg",
      },
      {
        name: "R D Tarun",
        role: "Outreach Co-Head",
        image: "/images/R.D.Tarun - Co-head of PR&Outreach.jpg",
      },
    ],
  },
  {
    title: "Tech And Media",
    members: [
      {
        name: "Sanyam Bhardwaj",
        role: "Tech & Media Head",
        image: "/images/sanyam bhardwaj - head,tech and media.jpg",
      },
      {
        name: "Aswath Siddharth Rajendran",
        role: "Tech & Media Co-Head",
        image: "/images/Aswath Siddharth R - Co-Head of Tech and Media.png",
      },
    ],
  },
  {
    title: "Event Managaement",
    members: [
      {
        name: "Aakash Sriram",
        role: "Event Management Co-Head",
        image: "/images/aakash sriram- cohead,event mgmt.jpg",
      },
      {
        name: "A Tapaswin Radha Krishna",
        role: "Event Management Head",
        image: "/images/tapaswin.webp",
      },
      {
        name: "Keertan Vasani",
        role: "Event Management Co-Head",
        image: "/images/keertan - cohead, event mgmt.jpg",
      },
    ],
  },
  {
    title: "Joint Secretaries",
    members: [
      {
        name: "Ram Sreyas J",
        role: "Joint Secretary",
        image: "/images/Ramsreyas J - Joint Secretary.jpg",
      },
      {
        name: "Sanjeev Kandhaswamy E",
        role: "Joint Secretary",
        image: "/images/Sanjeev kandhaswamy.jpg",
      },
    ],
  },
]

// Define the TeamSection props type
interface TeamSectionProps {
  title: string;
  members: TeamMember[];
}

function TeamSection({ title, members }: TeamSectionProps) {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">{title}</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {members.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex-grow basis-[250px] max-w-[500px]"
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage
                    src={member.image}
                    alt={member.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold text-un-blue mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ⬇️ Main Page Component
export default function Team() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-xl text-gray-600">Meet the passionate individuals behind our MUN club</p>
        </motion.div>

        {sections.map((section, idx) => (
          <TeamSection key={idx} title={section.title} members={section.members} />
        ))}
      </div>
    </div>
  )
}
