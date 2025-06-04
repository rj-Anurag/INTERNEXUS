import { AnimatedTestimonials } from "@/app/components/ui/animated-testimonials";

export function MunSpeaker() {
  const testimonials = [
{
  quote:
    "What INTERNEXUS is cultivating here goes far beyond debate. You’re preparing a generation to lead with empathy, strategy, and global awareness—traits the world desperately needs.",
      name: "Shelly Bulchandani",
      designation: "Founder of The Shell Hair",
      src: "/Guest/Shelly Bulchandani_.jpg",
    },
    {
      quote:
        "I’ve attended conferences around the world, but few match the energy and execution I saw at INTERNEXUS. Your delegates don’t just speak—they inspire.",
      name: "Kuldeep Singhania",
      designation: "Bollywood Actor , Model , Social media Influencer",
      src: "/Guest/Kuldeep Singhania.jpg",
    },
    {
      quote:
        "From committee structure to delegate mentorship, INTERNEXUS felt like a masterclass in meaningful simulation. You’ve set a new bar for MUNs in India",
      name: "Vaishnavi Sharma",
      designation: "Femina Miss India Rajasthan 2024",
      src: "/Guest/Vaishnavi Sharma.jpg",
    },
    {
      quote:
        "The professionalism, the preparation, the passion—every detail of INTERNEXUS reflects a deep respect for diplomacy and youth potential. I’m honored to witness it.",
      name: "Anshu Verma",
      designation: "Asian Gold Medalist in Boxing and Wrestling",
      src: "/Guest/Anshu Verma.jpg",
    },
    
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
