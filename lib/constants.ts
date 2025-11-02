import { Thermo_Fisher, Merck, shimadzu, Eppendorf, Sartorius, Borosil, Lab_India, rankem, Remi, tarsons, sd_fine, whatman } from '@/public/brands'
export const PRODUCT_CATEGORIES = [
  {
    id: "laboratory-equipment",
    name: "Laboratory Equipment",
    description: "Essential equipment for sample preparation, analysis, and research.",
    icon: "Cog",
  },
  {
    id: "analytical-instruments",
    name: "Analytical Instruments",
    description: "High-quality microscopes, balances, pH meters, and other precision instruments.",
    icon: "Microscope",
  },
  {
    id: "glassware",
    name: "Glassware",
    description: "Beakers, flasks, test tubes, pipettes, and other essential glassware for laboratory work.",
    icon: "Beaker",
  },
  {
    id: "chemicals-reagents",
    name: "Chemicals & Reagents",
    description: "High-purity chemicals, reagents, and solutions for various applications.",
    icon: "Flask",
  },
  {
    id: "safety-equipment",
    name: "Safety Equipment",
    description: "Personal protective equipment and safety gear for laboratory personnel.",
    icon: "Shield",
  },
  {
    id: "consumables",
    name: "Consumables",
    description: "Disposable items and supplies used in laboratory operations.",
    icon: "Package",
  },
  {
    id: "measurement-tools",
    name: "Measurement Tools",
    description: "Precise measurement instruments for temperature, pressure, and other parameters.",
    icon: "Ruler",
  },
  {
    id: "other",
    name: "Other",
    description: "Miscellaneous laboratory supplies and equipment.",
    icon: "MoreHorizontal",
  },
]

export const PARTNER_BRANDS = [
  {
    name: "Thermo Fisher Scientific",
    category: "Scientific Instruments",
    description: "Global leader in scientific research, healthcare, and safety products.",
    keyProducts: ["Mass Spectrometers", "Centrifuges", "Laboratory Reagents"],
    image: Thermo_Fisher,
  },
  {
    name: "Merck",
    category: "Chemicals & Reagents",
    description: "Premier supplier of high-quality chemicals and laboratory reagents.",
    keyProducts: ["Analytical Reagents", "Chromatography Solvents", "Buffer Solutions"],
    image: Merck,
  },
  {
    name: "Shimadzu",
    category: "Analytical Instruments",
    description: "Leading manufacturer of precision analytical and measuring instruments.",
    keyProducts: ["HPLC Systems", "Spectrophotometers", "Gas Chromatographs"],
    image: shimadzu,
  },
  {
    name: "Eppendorf",
    category: "Laboratory Equipment",
    description: "Innovative solutions for liquid handling, sample preparation, and cell handling.",
    keyProducts: ["Pipettes", "Centrifuges", "Thermal Cyclers"],
    image: Eppendorf,
  },
  {
    name: "Sartorius",
    category: "Weighing & Measurement",
    description: "Expert in laboratory weighing, water analysis, and bioprocess solutions.",
    keyProducts: ["Analytical Balances", "Microbalances", "Laboratory Water Systems"],
    image: Sartorius,
  },
  {
    name: "Borosil",
    category: "Laboratory Glassware",
    description: "India's leading manufacturer of laboratory glassware and scientific instruments.",
    keyProducts: ["Borosilicate Glassware", "Beakers", "Flasks"],
    image: Borosil,
  },
  {
    name: "Lab India",
    category: "Analytical Instruments",
    description: "Specialized in analytical instruments and laboratory equipment.",
    keyProducts: ["UV-Vis Spectrophotometers", "HPLC Systems", "Dissolution Testers"],
    image: Lab_India,
  },
  {
    name: "Rankem",
    category: "Chemicals & Reagents",
    description: "Quality chemicals and reagents for laboratory applications.",
    keyProducts: ["Laboratory Chemicals", "Indicators", "Stains"],
    image: rankem,
  },
  {
    name: "Remi",
    category: "Laboratory Equipment",
    description: "Manufacturer of laboratory equipment and scientific instruments.",
    keyProducts: ["Centrifuges", "Incubators", "Water Baths"],
    image: Remi,
  },
  {
    name: "Tarsons",
    category: "Laboratory Consumables",
    description: "Quality laboratory consumables and plasticware.",
    keyProducts: ["Pipette Tips", "Microcentrifuge Tubes", "Cell Culture Plates"],
    image: tarsons,
  },
  {
    name: "SD Fine Chemicals",
    category: "Chemicals & Reagents",
    description: "High-quality chemicals and reagents for research and industry.",
    keyProducts: ["Fine Chemicals", "Laboratory Reagents", "Solvents"],
    image: sd_fine,
  },
  {
    name: "Whatman",
    category: "Filtration & Separation",
    description: "Global leader in filtration and separation technology.",
    keyProducts: ["Filter Papers", "Membrane Filters", "Syringe Filters"],
    image: whatman,
  },
]

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000"

export const SUPPORT_SERVICES = [
  {
    title: "Equipment Installation",
    description: "Professional installation and setup of laboratory equipment with proper calibration.",
    icon: "Settings",
  },
  {
    title: "Training & Documentation",
    description: "Comprehensive training programs and detailed documentation for all equipment.",
    icon: "BookOpen",
  },
  {
    title: "Technical Consultation",
    description: "Expert advice on equipment selection, applications, and laboratory setup.",
    icon: "Users",
  },
  {
    title: "Remote Support",
    description: "24/7 remote technical support for troubleshooting and maintenance.",
    icon: "Headphones",
  },
]

export const COMPANY_INFO = {
  name: "Thulir Agency",
  tagline: "Your trusted partner for laboratory supplies and equipment across Tamil Nadu.",
  phone: "+91 868 181 8142",
  email: "info@thulir.com",
  supportEmail: "support@thulir.com",
  address: "Chennai, Tamil Nadu, India",
  businessHours: {
    weekdays: "Mon - Fri: 9:00 AM - 6:00 PM",
    saturday: "Sat: 9:00 AM - 2:00 PM",
    sunday: "Sun: Closed",
  },
  socialMedia: {
    linkedin: "https://linkedin.com/company/thulir-agency",
    twitter: "https://twitter.com/thulir-agency",
    facebook: "https://facebook.com/thulir-agency",
  },
}
