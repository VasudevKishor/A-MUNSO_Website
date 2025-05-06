"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

const events = [
  {
    title: "A-MUNSO MOCK MUN 1",
    date: "DECEMBER 13TH, 2023",
    description:
      "The First Mock MUN Economic and Financial Committee focused on challenges in the global economic order, including the dominance of the USA and China and the diversification of Asian supply chains. Intense lobbying led to strategic bloc formations, with key debates involving India, Vietnam, and Bangladesh. Despite efforts, two working papers failed to pass. Sanjay AR was awarded Best Delegate, and Shruti Sivakumar received a High Commendation.",
  },
  {
    title: "A-MUNSO MOCK MUN 2",
    date: "MARCH 2ND, 2024",
    description:
      "The Second Mock MUN UNODC Committee addressed challenges related to international drug control and organized crime. Intense lobbying led to strategic bloc formations, with key debates involving Panama, USA, and China. The session concluded without any working papers or draft resolutions. Ishitha was awarded Best Delegate, and Ram Sreyas received a High Commendation.",
  },
  {
    title: "Amrita-MUN’24",
    date: "JULY 19TH - 21ST, 2024",
    description:
      "The first edition of Amrita-MUN 2024 brought together delegates for intense debates across multiple committees. The delegation from SSN emerged victorious, securing the Best Delegation award. Amrita University followed in second place, and VIT-C secured third. The event was a great success, marking a memorable edition of Amrita-MUN.",
  },
  {
    title: "Inauguration Meeting of New Core Team",
    date: "SEPTEMBER 20TH, 2024",
    description:
      "The meeting marked a significant milestone for the club with the introduction of the new Core Team. Former President Mehul Sharma, Treasurer Aditya Prakash Dash, and esteemed faculty coordinators officially announced the new members, with speeches by Ramaguru Sir and Ritwik Sir inspiring the attendees.",
  },
  {
    title: "MUN of Thrones",
    date: "OCTOBER 17TH, 2024",
    description:
      "The Crisis Committee (fictional) event engaged participants in intense debates around fictional world politics. The event saw high participation, with 42 attendees and strong representation from external institutions. People’s Realm of Ireya won Best Delegation, and the event strengthened ties with PSG College's MUN society.",
  },
  {
    title: "Con 10 shun - Delegate training series",
    date: "JANUARY 3RD, 2025",
    description:
      "This delegate training session focused on argument construction, countering points, and persuasive communication. Facilitated by Navanith Sampathkumar, Ramsreyas J, and Sanjay AR, delegates engaged in debates on issues like the Israel-Palestine conflict, East-West security, and Korean reunification. The session concluded with valuable insights for MUN readiness.",
  },
  {
    title: "A-MUNSO Joint-MUN",
    date: "FEBRUARY 20TH, 2025",
    description:
      "The Joint-MUN event, held under the UNGA-DISEC committee, focused on the military build-up in the Indo-Pacific region. Key debates revolved around the South China Sea dispute, with significant arguments from China, the USA, North Korea, Russia, India, and Japan. China’s Vinaayak K and Aakash Sriram won Best Delegates, and several other delegates received various commendations. The event fostered insightful discussions and collaboration between MUN societies.",
  },
]

export default function Events() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Events</h1>
          <p className="text-xl text-gray-600">
            Relive the unforgettable moments from AMUNSO&rsquo;s past Model UN events—where diplomacy met action!
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-un-blue"></div>
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-12 flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <Card className="w-full md:w-5/12 hover:shadow-lg transition-shadow relative">
                <div
                  className={`absolute top-1/2 ${index % 2 === 0 ? "-right-3" : "-left-3"} w-6 h-6 bg-un-blue rounded-full transform -translate-y-1/2`}
                ></div>
                <CardHeader className="bg-gradient-to-r from-un-blue to-blue-600 text-white">
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-5 h-5 text-un-blue" />
                    <span>{event.date}</span>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
