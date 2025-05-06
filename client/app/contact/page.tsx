"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          {/* <p className="text-xl text-gray-600">Get in touch with our team</p> */}
        </motion.div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> */}
        <div className="grid grid-cols-1">
          {/* <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-un-blue to-blue-600 text-white">
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Message subject" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
                  </div>
                  <Button className="w-full bg-un-blue hover:bg-blue-700 text-white">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-un-blue to-blue-600 text-white">
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-un-blue mt-1" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600">Amrita Model United Nations Society,{<br/>}
                              Amrita Vishwa Vidyapeetham{<br/>}

                              Amritanagar{<br/>}
                              Coimbatore - 641 112{<br/>}

                              Tamil Nadu, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-un-blue mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">mun@cb.amrita.edu</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}