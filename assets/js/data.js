/**
 * PORTFOLIO DATA CONFIGURATION
 * -------------------------------------------------------------
 * Edit this file to easily update all content on your portfolio!
 * Replace sample data with your real information whenever you want.
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "John Raymond E. Gabule",
    role: "Aspiring Full Stack Developer & BSIT Senior",
    statusBadge: "Available for Projects & Commissions",
    summary: "Aspiring BSIT senior specializing in modern web applications, scalable system architectures, and sleek glassmorphic UI/UX. Experienced in turning complex requirements into intuitive digital experiences.",
    avatar: "assets/images/avatar.jpg",
    email: "gabulejohnraymond@gmail.com",
    phone: "09564082086",
    location: "Poblacion Guipos Zamboanga Del Sur, Philippines",
    resumeUrl: "#contact", // or link to PDF resume
    socials: {
      facebook: "https://www.facebook.com/639johnraymond",
      twitter: "https://x.com/GabuleRaym60339",
      instagram: "https://www.instagram.com"
    }
  },

  stats: [
    { label: "Completed Projects", value: "5+", icon: "fa-solid fa-code" },
    { label: "Certifications", value: "9+", icon: "fa-solid fa-award" },
    { label: "School Activities", value: "2+", icon: "fa-solid fa-file-lines" },
    { label: "Seminars Attended", value: "9+", icon: "fa-solid fa-graduation-cap" }
  ],

  about: {
    headline: "Transforming Ideas into Functional, High-Impact Web Solutions",
    bioParagraph1: "Hello! I am a 4th-year Bachelor of Science in Information Technology (BSIT) student with a strong passion for full stack web developmen and system administration.",
    bioParagraph2: "Throughout my academic journey, I've led team capstone projects, engineered responsive web applications, and explored modern dev tools. I love creating aesthetic, user-friendly digital products using modern web standards.",
    education: [
      {
        degree: "Bachelor of Science in Information Technology (BSIT)",
        institution: "Josefina H. Cerilles State College / School of Computing Studies",
        period: "2026 - Present (4th Year)",
        status: "Candidate for Graduation",
        gpa: "(1.48 GWA)",
        highlights: [
          "Specialization in Web Development",
          "Capstone Team Lead: GNHS Portal",
          "President / Member: SCS"
        ]
      },
      {
        degree: "Senior High School - TVL Track (ICT Strand)",
        institution: "Guipos National High School",
        period: "2018 - 2019",
        status: "Graduated",
        gpa: "(88% General Average)",
        highlights: [
          "NC III Certified in Computer Programming (CP)",
          "Front-end Developer"
        ]
      }
    ],
    principles: [
      {
        title: "Clean Code",
        description: "Writing maintainable, well-structured, and documented code that scales easily.",
        icon: "fa-solid fa-laptop-code"
      },
      {
        title: "User-Centric UI/UX",
        description: "Designing modern, accessible, and delightful interfaces that engage users.",
        icon: "fa-solid fa-wand-magic-sparkles"
      },
      {
        title: "Continuous Learning",
        description: "Always adopting the latest industry standards, frameworks, and deployment practices.",
        icon: "fa-solid fa-rocket"
      }
    ]
  },

  skills: {
    categories: [
      {
        id: "frontend",
        name: "Frontend Development",
        icon: "fa-solid fa-palette",
        items: [
          { name: "HTML5 / Semantic HTML", level: 85, icon: "fa-brands fa-html5", color: "from-orange-500 to-amber-500" },
          { name: "CSS3 / Modern Glassmorphism", level: 70, icon: "fa-brands fa-css3-alt", color: "from-blue-500 to-cyan-500" },
          { name: "JavaScript (ES6+)", level: 30, icon: "fa-brands fa-js", color: "from-yellow-400 to-amber-500" },
          { name: "Tailwind CSS", level: 45, icon: "fa-solid fa-wind", color: "from-cyan-400 to-teal-400" },
          { name: "Responsive & Mobile-First Design", level: 65, icon: "fa-solid fa-mobile-screen", color: "from-purple-500 to-indigo-500" }
        ]
      },
      {
        id: "backend",
        name: "Backend & Systems",
        icon: "fa-solid fa-server",
        items: [
          { name: "PHP / Laravel Basics", level: 70, icon: "fa-brands fa-php", color: "from-indigo-400 to-purple-600" },
          { name: "Node.js / Express", level: 40, icon: "fa-brands fa-node-js", color: "from-emerald-400 to-green-600" },
          { name: "RESTful API Integration", level: 18, icon: "fa-solid fa-network-wired", color: "from-blue-400 to-indigo-500" },
          { name: "MySQL / MariaDB", level: 45, icon: "fa-solid fa-database", color: "from-amber-400 to-orange-500" },
          { name: "Authentication & Security", level: 55, icon: "fa-solid fa-shield-halved", color: "from-red-400 to-pink-500" }
        ]
      },
      {
        id: "sysad-tools",
        name: "SysAd, Cloud & Tools",
        icon: "fa-solid fa-screwdriver-wrench",
        items: [
          { name: "System Administration & Linux", level: 15, icon: "fa-brands fa-linux", color: "from-amber-300 to-yellow-500" },
          { name: "Git & GitHub Version Control", level: 16, icon: "fa-brands fa-git-alt", color: "from-orange-500 to-red-600" },
          { name: "Web Hosting & Deployment", level: 26, icon: "fa-solid fa-cloud-arrow-up", color: "from-cyan-400 to-blue-600" },
          { name: "Figma UI/UX Prototyping", level: 66, icon: "fa-brands fa-figma", color: "from-pink-500 to-purple-500" },
          { name: "Apache / Nginx / XAMPP", level: 57, icon: "fa-solid fa-hard-drive", color: "from-teal-400 to-emerald-500" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "proj-1",
      title: "IoT Smart Fish Feeder",
      category: "iot",
      badge: "IoT & Full Stack",
      description: "Full stack IoT fish feeding system built with HTML, CSS, PHP, and an ESP8266 microcontroller node, featuring remote manual feeding triggers, schedule automation, and real-time hardware monitoring.",
      image: "assets/images/projects/iot-smart-fish-feeder.png",
      tags: ["HTML", "CSS", "PHP", "ESP8266", "IoT"],
      features: [
        "Manual 'Feed Now' trigger synced with ESP8266 microcontroller node",
        "Automated feeding schedule management and daily target tracking",
        "Real-time feeding history counters and system activity logs"
      ]
    },
    {
      id: "proj-2",
      title: "RHU TB-DOTS System",
      category: "system",
      badge: "Full Stack System",
      description: "San Pablo Rural Health Unit (RHU) full stack tuberculosis treatment monitoring system built with Laravel 13, Node SMS, and PHPMailer for patient management, session schedules, and automated reminders.",
      image: "assets/images/projects/rhu-tb-dots-system.png",
      tags: ["Laravel 13", "Node SMS", "PHPMailer", "PHP", "MySQL"],
      features: [
        "Patient registration, treatment tracking, and missed-session monitoring",
        "Automated SMS alerts via Node SMS and email notifications via PHPMailer",
        "Medicine inventory, compliance reports, and audit/SMS logs"
      ]
    },
    {
      id: "proj-3",
      title: "Guipos NHS iPayment Tracker",
      category: "web",
      badge: "Full Stack Web App",
      description: "Full stack school fee and payment tracking platform for Guipos National High School built with Laravel 13 and PHPMailer, delivering real-time fee balances, contribution records, and email updates.",
      image: "assets/images/projects/guipos-nhs-ipayment-tracker.png",
      tags: ["Laravel 13", "PHPMailer", "PHP", "MySQL"],
      features: [
        "Real-time updates on school fees, balances, and contributions",
        "Automated email payment notifications powered by PHPMailer",
        "Dedicated online portal login for parents, students, and staff"
      ]
    },
    {
      id: "proj-4",
      title: "Guipos NHS Portal",
      category: "system",
      badge: "Featured Capstone",
      description: "Centralized full stack digital platform for Guipos National High School built with Laravel 13, allowing students to securely access academic records, grades, and official school documents.",
      image: "assets/images/projects/guipos-nhs-portal.png",
      tags: ["Laravel 13", "PHP", "MySQL", "Full Stack"],
      features: [
        "Centralized student access to academic records and grades",
        "Digital management and retrieval of official school documents",
        "Secure role-based portal authentication for the school community"
      ]
    },
    {
      id: "proj-5",
      title: "LES Segregator",
      category: "iot web",
      badge: "Arduino & Web",
      description: "Full website developed for an Arduino-based Waste Segregator, showcasing smart waste sorting workflows, hardware components, and environmental education initiatives.",
      image: "assets/images/projects/les-segregator.png",
      tags: ["HTML", "CSS", "PHP", "JavaScript", "Arduino"],
      features: [
        "Interactive 'How It Works' smart segregation process overview",
        "Detailed Arduino hardware and sensor components showcase",
        "Responsive environmental awareness design with contact portal"
      ]
    }
  ],

  certificates: [
    {
      id: "cert-1",
      title: "Introduction to AI Literacy and Responsible Use",
      issuer: "CHED ACHIEVE & Mapúa University (with Arizona State University)",
      issueDate: "14 Sep 2026",
      credentialId: "LV9Q9OL6MYV6Y",
      image: "assets/images/certs/ai-literacy-responsible-use.png",
      fileUrl: "assets/certs/ClassOf2026__issued.pdf",
      badgeIcon: "fa-solid fa-brain",
      iconColor: "from-red-500 to-amber-500",
      description: "Micro-credentials course completion certifying foundational AI literacy, ethical considerations, and responsible use of artificial intelligence."
    },
    {
      id: "cert-2",
      title: "Soft Skills Seminar",
      issuer: "J.H. Cerilles State College - School of Computing Studies",
      issueDate: "25 Sep 2026",
      credentialId: null,
      image: "assets/certs/soft-skills-cert.jpg",
      fileUrl: "assets/certs/soft-skills-cert.jpg",
      badgeIcon: "fa-solid fa-users",
      iconColor: "from-emerald-400 to-green-600",
      description: "Certificate of Participation recognizing active involvement and commitment to continuous learning and personal and professional development."
    },
    {
      id: "cert-3",
      title: "Computer Hardware Basics",
      issuer: "Cisco Networking Academy / DICT-ITU DTC Initiative",
      issueDate: "30 Sep 2026",
      credentialId: "f27a64c9-5f6e-45e2-b014-a331c4e23e4f",
      image: "assets/images/certs/computer-hardware-basics.png",
      fileUrl: "assets/certs/Computer_Hardware_Basics_certificate_gabulejohnraymond-gmail-com_f27a64c9-5f6e-45e2-b014-a331c4e23e4f.pdf",
      badgeIcon: "fa-solid fa-microchip",
      iconColor: "from-cyan-400 to-blue-600",
      description: "Completed through the Cisco Networking Academy program, covering PC, laptop, and mobile hardware components, preventive maintenance, and troubleshooting."
    },
    {
      id: "cert-4",
      title: "Introduction to Modern AI",
      issuer: "Cisco Networking Academy",
      issueDate: "30 Sep 2026",
      credentialId: "4b0d588f-b1d1-4401-b6e7-0d969888b917",
      image: "assets/images/certs/introduction-to-modern-ai.png",
      fileUrl: "assets/certs/Introduction_to_Modern_AI_certificate_gabulejohnraymond-gmail-com_4b0d588f-b1d1-4401-b6e7-0d969888b917.pdf",
      badgeIcon: "fa-solid fa-robot",
      iconColor: "from-violet-400 to-purple-600",
      description: "Explores modern artificial intelligence concepts, machine learning fundamentals, large language models, and practical everyday AI workflows."
    },
    {
      id: "cert-5",
      title: "Exploring Internet of Things with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      issueDate: "04 Oct 2026",
      credentialId: "c2b107dc-6761-4ebd-8057-058bbe78c137",
      image: "assets/images/certs/exploring-iot-cisco-packet-tracer.png",
      fileUrl: "assets/certs/Exploring_IoT_with_Cisco_Packet_Tracer_certificate_gabulejohnraymond-gmail-com_c2b107dc-6761-4ebd-8057-058bbe78c137.pdf",
      badgeIcon: "fa-solid fa-wifi",
      iconColor: "from-teal-400 to-emerald-500",
      description: "Hands-on simulation of smart home and IoT ecosystems, connecting sensors, actuators, and microcontrollers within Cisco Packet Tracer."
    },
    {
      id: "cert-6",
      title: "Getting Started with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      issueDate: "04 Oct 2026",
      credentialId: "d2ff4d7a-a8b7-4d0c-8b2b-2aef9d3062d9",
      image: "assets/images/certs/getting-started-cisco-packet-tracer.png",
      fileUrl: "assets/certs/Getting_Started_with_Cisco_Packet_Tracer_certificate_gabulejohnraymond-gmail-com_d2ff4d7a-a8b7-4d0c-8b2b-2aef9d3062d9.pdf",
      badgeIcon: "fa-solid fa-network-wired",
      iconColor: "from-sky-400 to-indigo-500",
      description: "Foundational network topology simulation, device configuration, and packet-level analysis using Cisco Packet Tracer."
    },
    {
      id: "cert-7",
      title: "IT Customer Support Basics",
      issuer: "Cisco Networking Academy",
      issueDate: "04 Oct 2026",
      credentialId: "63b312c8-390c-405c-9933-5047af59165e",
      image: "assets/images/certs/it-customer-support-basics.png",
      fileUrl: "assets/certs/IT_Customer_Support_Basics_certificate_gabulejohnraymond-gmail-com_63b312c8-390c-405c-9933-5047af59165e.pdf",
      badgeIcon: "fa-solid fa-headset",
      iconColor: "from-amber-400 to-orange-500",
      description: "Validates help desk operations, structured troubleshooting methodologies, ticketing workflows, and client support best practices."
    }
  ],

  activities: [
    {
      id: "act-1",
      title: "Activity 1: Web Server Architecture & Virtual Host Setup",
      course: "SysAd & Web Application Deployment",
      date: "September 2026",
      format: "Word Document (.docx)",
      fileSize: "1.4 MB",
      fileName: "Activity_1_Web_Server_Deployment_AlexMorgan.docx",
      summary: "Comprehensive laboratory activity documenting the configuration of Apache virtual hosts, local DNS resolution, SSL certificate generation, and performance benchmarking on a Linux environment.",
      previewHighlights: [
        "Step-by-step Apache 2.4 vhost configuration with screenshots",
        "Benchmarking requests/sec using ApacheBench (ab)",
        "Security hardening and directory permission lockdown"
      ]
    },
    {
      id: "act-2",
      title: "Activity 2: Database Normalization & Complex SQL Queries",
      course: "Advanced Database Systems",
      date: "October 2026",
      format: "Word Document (.docx)",
      fileSize: "2.1 MB",
      fileName: "Activity_2_DB_Normalization_Queries.docx",
      summary: "Detailed analysis and normalization from Unnormalized Form (UNF) through First, Second, and Third Normal Form (3NF) for an e-commerce inventory database, complete with ER diagrams.",
      previewHighlights: [
        "Entity Relationship (ER) diagrams with Crow's Foot notation",
        "Inner, Left, and Full Outer Join queries with explain plans",
        "Stored procedures and trigger implementations"
      ]
    },
    {
      id: "act-3",
      title: "Activity 3: RESTful API Endpoint Engineering with Postman",
      course: "Enterprise Web Development",
      date: "October 2026",
      format: "Word Document (.docx)",
      fileSize: "1.8 MB",
      fileName: "Activity_3_REST_API_Documentation.docx",
      summary: "Laboratory report detailing the construction of CRUD RESTful endpoints, JWT header authentication, status code conventions, and Postman test runner assertions.",
      previewHighlights: [
        "API specification table with request/response schemas",
        "Automated Postman test script results with 100% pass rate",
        "CORS policy configuration and middleware error handling"
      ]
    },
    {
      id: "act-4",
      title: "Activity 4: Automated CI/CD Deployment with GitHub Actions",
      course: "DevOps & Cloud Infrastructure",
      date: "October 2026",
      format: "Word Document (.docx)",
      fileSize: "2.3 MB",
      fileName: "Activity_4_CICD_Pipeline_Deployment.docx",
      summary: "Hands-on guide demonstrating the creation of a YAML workflow for automated linting, test execution, and deployment to a static cloud host on every commit.",
      previewHighlights: [
        "YAML workflow file breakdown with branch triggers",
        "Encrypted GitHub Secrets management for credentials",
        "Zero-downtime deployment verification log"
      ]
    }
  ],

  reflectionPapers: [
    {
      id: "ref-1",
      title: "Reflection: Navigating the Next Era of AI-Driven Web Engineering",
      seminar: "Philippine National IT Conference 2026",
      speaker: "Engr. Jonathan Reyes, Lead Cloud Architect",
      date: "August 2026",
      format: "Word Document (.docx)",
      fileSize: "1.2 MB",
      fileName: "Reflection_Paper_AI_Web_Engineering.docx",
      summary: "An in-depth reflection exploring how modern generative AI tools and intelligent agents transform full stack development from raw syntax writing to higher-level system architecture and prompt-driven testing.",
      keyTakeaways: [
        "AI amplifies developer productivity when paired with strong computer science fundamentals.",
        "System architecture, clean interfaces, and security validation remain distinctly human responsibilities.",
        "Continuous adaptability is the ultimate superpower for 21st-century tech graduates."
      ]
    },
    {
      id: "ref-2",
      title: "Reflection: Modern Cyber Threats and Zero Trust Security Paradigms",
      seminar: "CyberSec Youth Summit 2026",
      speaker: "Dr. Maria Santos, Certified Information Systems Security Professional",
      date: "September 2026",
      format: "Word Document (.docx)",
      fileSize: "980 KB",
      fileName: "Reflection_Paper_Zero_Trust_Cybersecurity.docx",
      summary: "Reflective paper examining the shift from perimeter-based firewalls to Zero Trust architecture ('Never Trust, Always Verify'), analyzing real-world ransomware case studies in academic and enterprise networks.",
      keyTakeaways: [
        "Perimeter defenses are obsolete against modern lateral movement exploits.",
        "Role-Based Access Control (RBAC) and Multi-Factor Authentication (MFA) must be standard defaults.",
        "Developers must adopt DevSecOps principles early in the software development lifecycle."
      ]
    },
    {
      id: "ref-3",
      title: "Reflection: Cloud Migration & Microservices in Modern Enterprises",
      seminar: "AWS Cloud Practitioners Regional Meetup",
      speaker: "Dave Villanueva, Solutions Architect",
      date: "October 2026",
      format: "Word Document (.docx)",
      fileSize: "1.5 MB",
      fileName: "Reflection_Paper_Cloud_Migration_Strategies.docx",
      summary: "Critical reflection on monolith vs. microservices architecture, examining the trade-offs between distributed system complexity, operational costs, and developer velocity.",
      keyTakeaways: [
        "Microservices solve organizational scaling problems, not just raw compute problems.",
        "Observability, distributed logging, and health checks are essential before breaking the monolith.",
        "Infrastructure as Code (IaC) ensures repeatable and audit-compliant cloud environments."
      ]
    }
  ]
};
