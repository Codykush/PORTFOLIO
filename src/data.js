import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiLeetcode,
  SiMysql,
  SiShopify,
} from "react-icons/si";

export const portfolioData = {
  name: "Kushagra Singh Bhadauria",
  headline: "Software Developer",
  roles: ["Software Developer", "UI/UX Designer", "Frontend Developer"],
  phone: "6395248403",
  email: "codykush2k7@gmail.com",
  github: "https://github.com/Codykush",
  linkedin: "https://www.linkedin.com/in/kushagra-singh-bhadauria-862aa1287/",
  leetcode: "https://leetcode.com/u/2023361009_kushagra/",
  resume: "/projects/resume.pdf",

  summary:
    "Software Developer with a strong foundation in Data Structures & Algorithms and hands-on experience building responsive web applications using HTML, CSS, JavaScript, and React. Skilled in real-time systems, simulation-based projects, efficient logic, and state management. Proficient in Java, Git, UI/UX design, and modern frontend development. First author of an IEEE conference paper on machine learning-based disease detection.",

  quickLinks: [
    {
      title: "GitHub",
      subtitle: "View my repositories",
      link: "https://github.com/Codykush?tab=repositories",
      icon: FaGithub,
      image: "/projects/github.jpg",
    },
    {
      title: "LeetCode",
      subtitle: "See my problem solving",
      link: "https://leetcode.com/u/2023361009_kushagra/",
      icon: SiLeetcode,
      image: "/projects/leetcode.jpg",
    },
  ],

  skills: [
    { name: "Java", icon: FaJava },
    { name: "JavaScript", icon: FaJs },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "React.js", icon: FaReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Firebase", icon: SiFirebase },
    { name: "MySQL", icon: SiMysql },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Figma", icon: FaFigma },
    { name: "Shopify", icon: SiShopify },
  ],

  experience: [
    {
      title: "Bootcamp Training",
      company: "Sharda University",
      duration: "May 2025 - July 2025",
      location: "Greater Noida, India",
      desc: "Implemented pattern-based Java problems to strengthen DSA and problem-solving skills, and contributed to UI redesign using Figma with structured, user-centered layouts.",
      image: "/projects/figma.jpg",
      link: "https://github.com/Codykush/Homepage-Website-Design-UI-UX-Project",
    },
    {
      title: "Shopify Store",
      company: "Internshala - PawfectLife Pet Store",
      duration: "Feb 2026 - Mar 2026",
      location: "Greater Noida, India",
      desc: "Designed a Shopify e-commerce store with optimized layout and brand-focused UI, and developed product pages and collections with better navigation and user experience.",
      image: "/projects/shopify.jpg",
      link: "https://pawfectlife-pet-store.myshopify.com/",
    },
  ],

  projects: [
    {
      title: "ArtisanConnect",
      tech: "HTML, CSS, JavaScript, Firebase",
      duration: "Aug 2025 - Sep 2025",
      location: "Personal Project",
      desc: "Built a responsive web platform connecting local artisans with customers. Implemented Firebase Authentication and Firestore for secure user management and real-time database operations.",
      link: "https://github.com/Codykush/ArtisanConnect",
      image: "/projects/artisanconnect.jpg",
    },
    {
      title: "Smart Room Simulation System",
      tech: "React.js, JavaScript (ES6), CSS3 Animations",
      duration: "Mar 2026 - Apr 2026",
      location: "Personal Project",
      desc: "Developed a Smart Room Simulation System that visually models real-time control of devices and human activities through a digital clock interface using event-driven updates and smooth UI animations.",
      link: "https://github.com/Codykush/Smart-Room-Simulation-System",
      image: "/projects/smart-room.jpg",
    },
    {
      title: "Dubai Trip Application Form",
      tech: "PHP, MySQL, HTML, CSS",
      duration: "Academic / Personal Project",
      location: "Personal Project",
      desc: "Built a structured form-based application with CRUD-style handling and database integration for trip registration workflows.",
      link: "https://github.com/Codykush/PHP-Form-MySql-Project",
      image: "/projects/dubai-trip.jpg",
    },
  ],

  publications: [
    {
      title:
        "Machine Learning-Based Early Detection Framework for Alzheimer’s Disease",
      org: "IEEE International Conference (IC3ECSBHI)",
      year: "2026",
      note: "First Author • Greater Noida, India • Oct 2025 - Feb 2026",
      desc: "Published as first author on a machine learning-based disease detection framework focused on early Alzheimer’s disease detection.",
      image: "/projects/research.jpg",

    },
    {
      title: "First Author || Presenting Author",
      org: "IEEE (2nd International Conference - IC3ECSBHI 2026)",
      duration: "Presented on 14th February 2026",
      desc: "Authored and presented a research paper on early Alzheimer's detection using ML at the GBU Auditorium. Successfully defended technical work during live Q&A with industry experts; officially published in IEEE Conference Proceedings.",
      image: "/projects/Photo.jpg",
 
    },
  ],

  certifications: [
    {
      title: "Learn Complete Front-End Web Development Course",
      issuer: "Udemy",
      duration: "May 2024 - Jul 2024",
      desc: "Covered modern frontend fundamentals including HTML, CSS, JavaScript, responsive design, and web development concepts.",
      image: "/projects/udemy.jpg",
      link: "https://www.udemy.com/certificate/UC-e3773ceb-2285-40cb-86ba-af6256c01bff/",
    },
    {
      title: "First author and presenter of the research paper",
      issuer: "IEEE",
      duration: "Oct 2025 - Feb 2026",
      desc: "IEEE International Conference (IC3ECSBHI), Greater Noida, India",
      image: "/projects/certificate.jpg",
      link: "https://www.linkedin.com/in/kushagra-singh-bhadauria",
    },
    {
      title: "Salesforce Developer Workshop: AI Builders Day",
      issuer: "Salesforce (Presented by IDB NXT & IDB [DEVHUB])",
      duration: "October 2024",
      desc: "Recognized for demonstrating curiosity and creativity by successfully building an AI-powered agent on the Salesforce platform during the developer workshop.",
      image: "/projects/salesforce.jpg",
      link: "https://www.linkedin.com/posts/kushagra-singh-bhadauria-862aa1287_salesforce-aibuildersday-developercommunity-activity-7396601040856375297-sDat",
    },
    {
      title: "Internal Smart India Hackathon (SIH) 2025",
      issuer: "Sharda School of Computing Science & Engineering",
      duration: "September 23 - 24, 2025",
      desc: "Participated as part of team 'TranspoTrackers' in the internal round of SIH 2025, contributing to innovative problem-solving and technical development.",
      image: "/projects/hackathon.jpg",
      link: "https://www.linkedin.com/posts/kushagra-singh-bhadauria-862aa1287_smartindiahackathon-sih2025-shardauniversity-activity-7381005890033913856-aPlR",
    },
    {
      title: "InVision for Beginners",
      issuer: "Simplilearn SkillUp",
      duration: "Completed on 3rd October 2025",
      desc: "Mastered the basics of InVision for UI/UX prototyping, demonstrating a commitment to enhancing design workflow and interactive web development skills.",
      image: "/projects/invision.jpg",
      link: "https://www.linkedin.com/posts/kushagra-singh-bhadauria-862aa1287_ui-ux-design-using-invision-activity-7379754897979662336-7ItJ",
    },
    {
      title: "Java Fundamentals",
      issuer: "Oracle Academy (in collaboration with Sharda University)",
      duration: "Completed on 5th April 2025",
      desc: "Successfully completed the comprehensive Java Fundamentals coursework, focusing on core programming concepts, object-oriented principles, and Java syntax.",
      image: "/projects/oracle.jpg",
      link: "https://www.linkedin.com/posts/kushagra-singh-bhadauria-862aa1287_oracle-activity-7329587522802458624-cDFZ",
    },
  ],

  services: [
    "UI/UX Design",
    "Professional Photo / Video Editing",
    "Website Design",
    "Research Paper Documentation",
    "Social Media Growth",
  ],

  education: {
    degree: "Bachelor of Technology in Computer Science",
    college: "Sharda University",
    duration: "Aug 2023 - May 2027",
    location: "Greater Noida, India",
  },
};
