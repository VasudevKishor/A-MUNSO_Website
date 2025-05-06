"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { achievements } from "@/lib/achievements-data"
import { Trophy, Award, Star } from "lucide-react"

export default function Achievements() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Achievements</h1>
          <p className="text-xl text-gray-600">Celebrating excellence in Model United Nations</p>
        </motion.div>

        <div className="space-y-12">
          {achievements.map((conference, index) => (
            <motion.div
              key={conference.conference}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-un-blue to-blue-600 text-white">
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Trophy className="w-6 h-6" />
                    <span>
                      {conference.conference}, {conference.year}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {conference.awards.map((award, awardIndex) => (
                      <motion.div
                        key={awardIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: awardIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
                      >
                        <h3 className="font-medium text-lg flex items-center gap-2">
                          <Award className="w-5 h-5 text-un-blue" />
                          {award.delegate}
                        </h3>
                        <p className="text-un-blue font-medium flex items-center gap-2 mt-2">
                          <Star className="w-4 h-4" />
                          {award.award}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">{award.committee}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

