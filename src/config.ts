export const siteConfig = {
  name: "Moffat Gichure Maina",
  title: "Cybersecurity Specialist | DevSecOps Engineer | Full-Stack Developer",
  description:
    "Cybersecurity specialist, DevSecOps engineer, and full-stack software developer skilled in secure system design, penetration testing, cloud engineering, modern web development, and scalable backend solutions.",

  accentColor: "#1d4ed8",

  social: {
    email: "moffatgichuremaina@gmail.com",
    linkedin: "https://linkedin.com/in/moffat-maina-230426225",
    twitter: "https://twitter.com/GichureMoffat",
    github: "https://github.com/lecturerkarare",
  },

  aboutMe:
    "I am a results-driven Cybersecurity Specialist, DevSecOps Engineer, and Full-Stack Developer from Kenya with experience in penetration testing, secure backend development, cloud deployments, and enterprise IT systems. I build secure, scalable, and efficient solutions using modern technologies—ranging from mobile and web development to cloud-based microservices. I’m passionate about system security, automation, and modern DevSecOps practices.",

  skills: [
    // Security & DevOps
    "Cybersecurity",
    "Penetration Testing",
    "API Security",
    "DevSecOps",
    "CI/CD",
    "Docker",
    "Linux",
    "GitHub Actions",
    "AWS",
    "Render & Railway Deployments",

    // Programming
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "Kotlin",

    // Back-end
    "Node.js",
    "Django",
    "Flask",
    "Express.js",

    // Front-end
    "React",
    "Angular",
    "HTML",
    "CSS",

    // Databases
    "MySQL",
    "MongoDB",
    "SQLite",

    // Mobile
    "Android Development",

    // Others
    "IoT",
    "Networking",
    "TensorFlow"
  ],

  projects: [
    {
      name: "Bulk WhatsApp Web Sender",
      description:
        "A Node.js + Puppeteer automation tool enabling bulk messaging through WhatsApp Web with secure session handling.",
      link: "https://github.com/lecturerkarare/whatsapp-sender",
      skills: ["JavaScript", "Puppeteer", "Automation"],
    },
    {
      name: "ImageCipher – Mobile Encryption App",
      description:
        "A Kotlin-based mobile app that encrypts and decrypts images locally using custom cryptographic algorithms.",
      link: "https://github.com/lecturerkarare/ImageCipher",
      skills: ["Kotlin", "Android", "Encryption"],
    },
    {
      name: "AWS Serverless App",
      description:
        "A serverless application built with AWS CDK, S3, Lambda, and API Gateway to demonstrate cloud-native secure backend engineering.",
      link: "https://github.com/lecturerkarare/aws-serverless",
      skills: ["AWS", "Lambda", "CDK", "S3"],
    },
    {
      name: "Kijabe Alumni Association System",
      description:
        "A Node.js + MySQL web system for managing alumni members, communication, and records.",
      link: "https://github.com/lecturerkarare/kijabe",
      skills: ["Node.js", "MySQL", "Express.js"],
    },
    {
      name: "IoT Control System",
      description:
        "Arduino-based IoT automation platform remotely controlled via a secure web dashboard.",
      link: "https://github.com/lecturerkarare/arduino-control",
      skills: ["IoT", "Arduino", "Networking"],
    }
  ],

  experience: [
    {
      company: "Freelance — Remote (Upwork & Fiverr)",
      title: "Cybersecurity Specialist & Full-Stack Developer",
      dateRange: "2020 – Present",
      bullets: [
        "Performed mobile and API penetration testing, vulnerability assessments, and security consultations.",
        "Built secure full-stack web systems and mobile applications for international clients.",
        "Configured routers, firewalls, VPNs, and enterprise network security controls.",
        "Integrated M-Pesa, Stripe, and PayPal payment systems for SMEs.",
        "Developed cloud-based deployments using Render and Railway.app.",
      ],
    },
    {
      company: "US-Based Cloud Security Firm",
      title: "DevSecOps Engineer (Remote Contract)",
      dateRange: "May 2024 – Sep 2024",
      bullets: [
        "Designed CI/CD pipelines with GitHub Actions incorporating SAST and DAST security gates.",
        "Deployed microservices using Docker, Railway, and AWS serverless technologies.",
        "Implemented IAM workflows using Bron IAM and Privacera.",
        "Developed Infrastructure-as-Code with AWS CDK.",
      ],
    },
    {
      company: "Liberty Life – Juja",
      title: "IT Support Specialist",
      dateRange: "Apr 2024 – Jan 2025",
      bullets: [
        "Provided enterprise IT support for networks, hardware, secure email, and cloud backups.",
        "Implemented firewall rules, endpoint controls, and M-Pesa API billing systems.",
        "Offered technical documentation and end-user training.",
      ],
    },
    {
      company: "Palo Alto Networks (Cybersecurity Research)",
      title: "Security Research Contributor",
      dateRange: "May 2024 – Aug 2024",
      bullets: [
        "Analyzed threat intelligence feeds, malware samples, and IOCs.",
        "Performed static and dynamic analysis to support detection rule development.",
        "Automated research tasks using Python scripting.",
      ],
    },
    {
      company: "Meliora Software Company",
      title: "Software Developer Intern",
      dateRange: "May 2023 – Dec 2023",
      bullets: [
        "Developed full-stack applications using Java, Spring, React, Angular, and MySQL.",
        "Integrated M-Pesa API and authentication modules for secure web platforms.",
        "Performed deployment support and database optimization.",
      ],
    }
  ],

  education: [
    {
      school: "Laikipia University, Nyahururu",
      degree: "BSc in Computer Science",
      dateRange: "2019 – 2023",
      achievements: [
        "Designed and presented IoT smart systems.",
        "Participated in Cisco and Huawei ICT competitions.",
        "Performed security research and cloud computing projects.",
      ],
    },
    {
      school: "Mukurwe Wa Nyagathanga Secondary School",
      degree: "KCSE – B (Minus)",
      dateRange: "2015 – 2018",
      achievements: ["ICT Club Coordinator", "Science Congress Competitor"],
    }
  ],
};
