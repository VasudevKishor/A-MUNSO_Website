export type Achievement = {
  conference: string
  year: number
  awards: {
    delegate: string
    award: string
    committee: string
  }[]
}
export const achievements: Achievement[] = [
  {
    conference: "YLGC",
    year: 2024,
    awards: [
      { delegate: "Shruti S", award: "Honourable Mention", committee: "UNGA" },
      { delegate: "Sanjay AR", award: "Verbal Mention", committee: "UNSC" },
      { delegate: "Aravind S", award: "Verbal Mention", committee: "UNSC" },
      { delegate: "Navanith S", award: "Verbal Mention", committee: "UNGA" },
    ],
  },
  {
    conference: "A-MUN",
    year: 2024,
    awards: [
      { delegate: "Khushi Kapil", award: "High Commendation", committee: "AIPPM" },
      { delegate: "Sanjay AR", award: "Special Mention", committee: "UNSC" },
      { delegate: "Navanith S", award: "Special Mention", committee: "UNSC" },
      { delegate: "Thilagan Iniyavan", award: "Special Mention", committee: "IPC" },
      { delegate: "Pranav Arcot", award: "Honourable Mention", committee: "UNSC" },
      { delegate: "Vinaayak K", award: "Honourable Mention", committee: "UNSC" },
      { delegate: "RD Tarun", award: "Verbal Mention", committee: "UNCTAD" },
      { delegate: "Ishitha Praveen", award: "Verbal Mention", committee: "UNHCR" },
    ],
  },
  {
    conference: "SSN-SNUC MUN",
    year: 2024,
    awards: [
      { delegate: "Sanjay AR", award: "Honourable Mention", committee: "NITI Aayog" },
      { delegate: "Vinaayak K", award: "Special Mention", committee: "Plenary Committee" },
      { delegate: "Thilagan Iniyavan", award: "Special Mention", committee: "IPC" },
    ],
  },
  {
    conference: "KCT-MUN",
    year: 2024,
    awards: [
      { delegate: "Vinaayak K", award: "Best Delegate", committee: "HCC" },
      { delegate: "Sankara Narayanan M", award: "High Commendation", committee: "AIPPM" },
      { delegate: "Ramsreyas J", award: "High Commendation", committee: "HCC" },
      { delegate: "RG Shanmugam", award: "High Commendation", committee: "UNHRC" },
      { delegate: "Aswath Siddarth R", award: "Special Mention", committee: "UNHRC" },
      { delegate: "Vimal Harihar", award: "Special Mention", committee: "UNSC" },
      { delegate: "RD Tarun", award: "Special Mention", committee: "UNSC" },
      { delegate: "R Venkatesh", award: "Special Mention", committee: "HCC" },
      { delegate: "Navanith S", award: "Special Mention", committee: "AIPPM" },
      { delegate: "Nethi Kushala Kumar", award: "Honourable Mention", committee: "UNHRC" },
      { delegate: "Aakash Sriram", award: "Honourable Mention", committee: "HCC" },
      { delegate: "Aravind S", award: "Verbal Mention", committee: "AIPPM" },
      { delegate: "Pranav K", award: "Verbal Mention", committee: "AIPPM" },
      { delegate: "Anton Rejoe", award: "Verbal Mention", committee: "HCC" },
      { delegate: "Kavinesh P", award: "Verbal Mention", committee: "UNEP" },
      { delegate: "Rohit Sundar V", award: "Verbal Mention", committee: "UNSC" },
      { delegate: "KCK Sanjai", award: "Verbal Mention", committee: "UNSC" },
      { delegate: "Thilagan Iniyavan", award: "Best Photographer", committee: "IPP" },
      { delegate: "Adithya Anish Nair", award: "Best Delegation", committee: "UNSC" },
      { delegate: "Arman Mahapatra", award: "Best Delegation", committee: "UNSC" },
    ],
  },
  {
    conference: "NUALS-MUN",
    year: 2025,
    awards: [
      { delegate: "Aakash Sriram", award: "Best Delegate", committee: "DISEC" },
      { delegate: "Adithya Anish Nair", award: "Verbal Mention", committee: "DISEC" },
    ],
  },
]
