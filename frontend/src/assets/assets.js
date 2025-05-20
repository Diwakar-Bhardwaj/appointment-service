import headerDoctor from './headerDoctor.jpg'
import cardiology_pic from './cardiology.jpeg'
import dental_pic from './dental.jpeg' 
import dermatology_pic from './dermatology.jpeg'
import neurology_pic from './neurology.jpeg'
import orthopedic_pic from './orthopedic.jpeg'

export const assets = {
    headerDoctor,
    cardiology_pic,
    dental_pic,
    dermatology_pic,
    neurology_pic,
    orthopedic_pic
}

export const services= [

    {
      id: 1,
      name: "Cardiology",
      description: "Emergency staff who are available 24 hours a day, seven days a week.",
      image: cardiology_pic
    },
    {
      id: 2,
      name: "Dental",
      description: "Medical professionals team is trained to provide you with the care and support.",
      image: dental_pic
    },
    {
      id: 3,
      name: "Dermatology",
      description: "Medical professionals team is trained to provide you with the care and support.",
      image: dermatology_pic
    },
    {
      id: 4,
      name: "Neurology",
      description: "Medical professionals team is trained to provide you with the care and support.",
      image: neurology_pic
    },
    {
      id: 5,
      name: "Orthopedics",
      description: "Medical professionals team is trained to provide you with the care and support.",
      image: orthopedic_pic
    },
    
]

export const cardio = [
  {
    id: 1,
    name: "Dr. Arjun Mehta",
    specialization: "Cardiologist",
    experience: "12 years",
    hospital: "Fortis Heart Institute, Delhi",
    contact: {
      phone: "+91-9876543210",
      email: "arjun.mehta@fortis.com"
    },
    availability: ["Monday", "Wednesday", "Friday"],
    rating: 4.7
  },
  {
    id: 2,
    name: "Dr. Ritu Sharma",
    specialization: "Interventional Cardiologist",
    experience: "10 years",
    hospital: "Apollo Hospitals, Chennai",
    contact: {
      phone: "+91-9123456780",
      email: "ritu.sharma@apollohospitals.com"
    },
    availability: ["Tuesday", "Thursday", "Saturday"],
    rating: 4.8
  },
  {
    id: 3,
    name: "Dr. Karan Desai",
    specialization: "Pediatric Cardiologist",
    experience: "8 years",
    hospital: "Narayana Health, Bangalore",
    contact: {
      phone: "+91-9012345678",
      email: "karan.desai@narayanahealth.org"
    },
    availability: ["Monday", "Wednesday"],
    rating: 4.6
  },
  {
    id: 4,
    name: "Dr. Sneha Kapoor",
    specialization: "Cardiologist",
    experience: "15 years",
    hospital: "Medanta, Gurgaon",
    contact: {
      phone: "+91-8887654321",
      email: "sneha.kapoor@medanta.org"
    },
    availability: ["Tuesday", "Thursday"],
    rating: 4.9
  },
  {
    id: 5,
    name: "Dr. Vikram Joshi",
    specialization: "Electrophysiologist",
    experience: "11 years",
    hospital: "Kokilaben Dhirubhai Ambani Hospital, Mumbai",
    contact: {
      phone: "+91-9090909090",
      email: "vikram.joshi@kdahealth.com"
    },
    availability: ["Wednesday", "Friday", "Sunday"],
    rating: 4.5
  }
]

export const dental = [
  {
    id: 1,
    name: "Dr. Neha Verma",
    specialization: "Orthodontist",
    experience: 9,
    hospital: "Clove Dental, Delhi",
    contact: {
      phone: 9876543210,
      email: "neha.verma@clovedental.in"
    },
    availability: ["Monday", "Wednesday", "Friday"],
    rating: 4.6
  },
  {
    id: 2,
    name: "Dr. Rajiv Khanna",
    specialization: "Endodontist",
    experience: 11,
    hospital: "SmileCare, Mumbai",
    contact: {
      phone: 9123456789,
      email: "rajiv.khanna@smilecare.com"
    },
    availability: ["Tuesday", "Thursday", "Saturday"],
    rating: 4.8
  },
  {
    id: 3,
    name: "Dr. Anjali Rao",
    specialization: "Pediatric Dentist",
    experience: 7,
    hospital: "Kids Dental, Bangalore",
    contact: {
      phone: 9012345678,
      email: "anjali.rao@kidsdental.org"
    },
    availability: ["Monday", "Friday"],
    rating: 4.5
  },
  {
    id: 4,
    name: "Dr. Rohit Malhotra",
    specialization: "Prosthodontist",
    experience: 10,
    hospital: "Dental Square, Pune",
    contact: {
      phone: 8887654321,
      email: "rohit.malhotra@dentalsquare.com"
    },
    availability: ["Wednesday", "Saturday"],
    rating: 4.7
  },
  {
    id: 5,
    name: "Dr. Shalini Singh",
    specialization: "Periodontist",
    experience: 8,
    hospital: "Pearl Dental Clinic, Kolkata",
    contact: {
      phone: 9090909090,
      email: "shalini.singh@pearldental.in"
    },
    availability: ["Tuesday", "Thursday", "Sunday"],
    rating: 4.4
  }
]

export const dermatology = [
  {
    id: 1,
    name: "Dr. Meera Nair",
    specialization: "Dermatologist",
    experience: 12,
    hospital: "SkinCare Clinic, Kochi",
    contact: {
      phone: 9876501234,
      email: "meera.nair@skincareclinic.in"
    },
    availability: ["Monday", "Wednesday", "Friday"],
    rating: 4.8
  },
  {
    id: 2,
    name: "Dr. Ankur Patel",
    specialization: "Cosmetic Dermatologist",
    experience: 9,
    hospital: "DermaGlow, Ahmedabad",
    contact: {
      phone: 9123467890,
      email: "ankur.patel@dermaglow.com"
    },
    availability: ["Tuesday", "Thursday", "Saturday"],
    rating: 4.6
  },
  {
    id: 3,
    name: "Dr. Swati Roy",
    specialization: "Pediatric Dermatologist",
    experience: 7,
    hospital: "YouthSkin, Lucknow",
    contact: {
      phone: 9012398765,
      email: "swati.roy@youthskin.org"
    },
    availability: ["Monday", "Friday"],
    rating: 4.7
  },
  {
    id: 4,
    name: "Dr. Ramesh Gupta",
    specialization: "Clinical Dermatologist",
    experience: 15,
    hospital: "Apex Skin Center, Jaipur",
    contact: {
      phone: 8899001122,
      email: "ramesh.gupta@apexskin.com"
    },
    availability: ["Wednesday", "Saturday"],
    rating: 4.9
  },
  {
    id: 5,
    name: "Dr. Nisha Kulkarni",
    specialization: "Trichologist",
    experience: 10,
    hospital: "Hair & Skin Lounge, Pune",
    contact: {
      phone: 9099888777,
      email: "nisha.kulkarni@hairskinlounge.in"
    },
    availability: ["Tuesday", "Thursday", "Sunday"],
    rating: 4.5
  }
]

export const neurology = [
  {
    id: 1,
    name: "Dr. Sanjay Kulkarni",
    specialization: "Neurologist",
    experience: 14,
    hospital: "NeuroCare Hospital, Mumbai",
    contact: {
      phone: 9811122233,
      email: "sanjay.kulkarni@neurocare.in"
    },
    availability: ["Monday", "Wednesday", "Friday"],
    rating: 4.9
  },
  {
    id: 2,
    name: "Dr. Priya Deshmukh",
    specialization: "Pediatric Neurologist",
    experience: 10,
    hospital: "BrainBridge Hospital, Pune",
    contact: {
      phone: 9822233344,
      email: "priya.deshmukh@brainbridge.com"
    },
    availability: ["Tuesday", "Thursday", "Saturday"],
    rating: 4.7
  },
  {
    id: 3,
    name: "Dr. Raghav Sinha",
    specialization: "Neurosurgeon",
    experience: 16,
    hospital: "Apollo Neurosciences, Delhi",
    contact: {
      phone: 9833344455,
      email: "raghav.sinha@apolloneuro.com"
    },
    availability: ["Monday", "Thursday", "Saturday"],
    rating: 4.8
  },
  {
    id: 4,
    name: "Dr. Ananya Ghosh",
    specialization: "Epileptologist",
    experience: 8,
    hospital: "NeuroAxis Clinic, Kolkata",
    contact: {
      phone: 9844455566,
      email: "ananya.ghosh@neuroaxis.org"
    },
    availability: ["Tuesday", "Friday"],
    rating: 4.6
  },
  {
    id: 5,
    name: "Dr. Varun Bhatia",
    specialization: "Neurophysiologist",
    experience: 12,
    hospital: "NIMHANS, Bangalore",
    contact: {
      phone: 9855566677,
      email: "varun.bhatia@nimhans.gov.in"
    },
    availability: ["Wednesday", "Friday", "Sunday"],
    rating: 4.7
  }
]

export const orthopedic = [
  {
    id: 1,
    name: "Dr. Akash Reddy",
    specialization: "Orthopedic Surgeon",
    experience: 13,
    hospital: "OrthoCare Hospital, Hyderabad",
    contact: {
      phone: 9876543211,
      email: "akash.reddy@orthocare.in"
    },
    availability: ["Monday", "Wednesday", "Friday"],
    rating: 4.7
  },
  {
    id: 2,
    name: "Dr. Sneha Iyer",
    specialization: "Pediatric Orthopedic",
    experience: 9,
    hospital: "Children’s Bone Clinic, Mumbai",
    contact: {
      phone: 9876501234,
      email: "sneha.iyer@cbc.org"
    },
    availability: ["Tuesday", "Thursday", "Saturday"],
    rating: 4.6
  },
  {
    id: 3,
    name: "Dr. Harshad Mehta",
    specialization: "Sports Injury Specialist",
    experience: 11,
    hospital: "MedSports Ortho, Delhi",
    contact: {
      phone: 9811123456,
      email: "harshad.mehta@medsports.in"
    },
    availability: ["Monday", "Friday"],
    rating: 4.8
  },
  {
    id: 4,
    name: "Dr. Kiran Joshi",
    specialization: "Joint Replacement Surgeon",
    experience: 15,
    hospital: "Bone & Joint Clinic, Ahmedabad",
    contact: {
      phone: 9822012345,
      email: "kiran.joshi@bjclinic.com"
    },
    availability: ["Wednesday", "Saturday"],
    rating: 4.9
  },
  {
    id: 5,
    name: "Dr. Anjali Chauhan",
    specialization: "Spine Specialist",
    experience: 10,
    hospital: "SpinePlus Ortho Center, Chennai",
    contact: {
      phone: 9800123456,
      email: "anjali.chauhan@spineplus.org"
    },
    availability: ["Tuesday", "Thursday", "Sunday"],
    rating: 4.5
  }
]

