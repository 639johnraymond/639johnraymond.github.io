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
      instagram: "https://www.instagram.com/fiery.raven"
    }
  },

  stats: [
    { label: "Completed Projects", value: "5+", icon: "fa-solid fa-code" },
    { label: "Certifications", value: "10+", icon: "fa-solid fa-award" },
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
          { name: "PHP / Laravel Basics", level: 47, icon: "fa-brands fa-php", color: "from-indigo-400 to-purple-600" },
          { name: "Node.js / Express", level: 22, icon: "fa-brands fa-node-js", color: "from-emerald-400 to-green-600" },
          { name: "RESTful API Integration", level: 18, icon: "fa-solid fa-network-wired", color: "from-blue-400 to-indigo-500" },
          { name: "MySQL / MariaDB", level: 42, icon: "fa-solid fa-database", color: "from-amber-400 to-orange-500" },
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
      title: "Exploring Networking with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      issueDate: "04 Oct 2026",
      credentialId: "03e81ad6-3416-4bd4-bd4a-83fa778e3f5d",
      image: "assets/images/certs/exploring-networking-cisco-packet-tracer.png",
      fileUrl: "assets/certs/Exploring_Networking_with_Cisco_Packet_Tracer_certificate_gabulejohnraymond-gmail-com_03e81ad6-3416-4bd4-bd4a-83fa778e3f5d.pdf",
      badgeIcon: "fa-solid fa-diagram-project",
      iconColor: "from-blue-400 to-cyan-500",
      description: "Practical simulation of LAN/WAN network architectures, packet routing, wireless connectivity, and device configuration in Cisco Packet Tracer."
    },
    {
      id: "cert-7",
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
      id: "cert-8",
      title: "IT Customer Support Basics",
      issuer: "Cisco Networking Academy",
      issueDate: "04 Oct 2026",
      credentialId: "63b312c8-390c-405c-9933-5047af59165e",
      image: "assets/images/certs/it-customer-support-basics.png",
      fileUrl: "assets/certs/IT_Customer_Support_Basics_certificate_gabulejohnraymond-gmail-com_63b312c8-390c-405c-9933-5047af59165e.pdf",
      badgeIcon: "fa-solid fa-headset",
      iconColor: "from-amber-400 to-orange-500",
      description: "Validates help desk operations, structured troubleshooting methodologies, ticketing workflows, and client support best practices."
    },
    {
      id: "cert-9",
      title: "Operating Systems Support",
      issuer: "Cisco Networking Academy",
      issueDate: "31 Oct 2026",
      credentialId: "86e7559e-c503-42a1-b6a9-142c432e30f8",
      image: "assets/images/certs/operating-systems-support.png",
      fileUrl: "assets/certs/Operating_Systems_Support_certificate_gabulejohnraymond-gmail-com_86e7559e-c503-42a1-b6a9-142c432e30f8.pdf",
      badgeIcon: "fa-solid fa-desktop",
      iconColor: "from-indigo-400 to-blue-600",
      description: "Covers installation, configuration, administration, and systematic troubleshooting across Windows, Linux, macOS, and mobile operating systems."
    },
    {
      id: "cert-10",
      title: "Security and Connectivity Support",
      issuer: "Cisco Networking Academy",
      issueDate: "31 Oct 2026",
      credentialId: "35f4b58e-0340-4e7e-98c1-5549081c85e3",
      image: "assets/images/certs/security-and-connectivity-support.png",
      fileUrl: "assets/certs/Security_and_Connectivity_Support_certificate_gabulejohnraymond-gmail-com_35f4b58e-0340-4e7e-98c1-5549081c85e3.pdf",
      badgeIcon: "fa-solid fa-shield-halved",
      iconColor: "from-rose-400 to-red-600",
      description: "Focuses on diagnosing network connectivity issues, securing endpoints and wireless networks, and implementing foundational cybersecurity controls."
    }
  ],

  activities: [
    {
      id: "act-1",
      title: "Application Letter: IT & Web Development Position",
      course: "Career Readiness & Professional Correspondence",
      date: "October 2026",
      format: "Word Document (.docx)",
      fileSize: "18.1 KB",
      fileName: "Application_Letter_John_Raymond_Gabule.docx",
      fileUrl: "assets/activities/Application_Letter_John_Raymond_Gabule.docx",
      summary: "Formal job application letter addressed to Dr. Pedrano, School Principal of Guipos National High School, expressing interest in an Information Technology and Web Development role and highlighting 300-hour OJT experience with the GNHS Portal.",
      previewHighlights: [
        "Formal application for an IT and Web Development position at Guipos National High School",
        "Highlights 300-hour On-the-Job Training (OJT) in web, software, and database management",
        "Showcases direct hands-on development, maintenance, and improvement of the GNHS Portal"
      ],
      letterContent: {
        sender: [
          "John Raymond E. Gabule",
          "Purok 1A, Poblacion Guipos",
          "Zamboanga Del Sur",
          "Mobile: 09564082086",
          "Email: gabulejohnraymond@gmail.com"
        ],
        date: "September 25, 2028",
        recipient: [
          "The School Principal",
          "Guipos National High School",
          "Guipos, Zamboanga del Sur"
        ],
        salutation: "Dear Dr. Pedrano:",
        paragraphs: [
          "I am writing to formally express my interest in applying for a position related to Information Technology and Web Development in your esteemed institution. I am a graduate of Bachelor of Science in Information Technology (BSIT) from J.H. Cerilles State College, and I believe that my academic background and practical experience have equipped me with the technical competencies necessary to contribute to your institution.",
          "I have completed my 300-hour On-the-Job Training at Guipos National High School, where I gained practical experience in web development, database management, software development, and other IT-related tasks. During my training, I was given the opportunity to work with the GNHS Portal, which strengthened my skills in developing, maintaining, and improving a web-based system. This experience also allowed me to become familiar with the institution's work environment and apply the knowledge I acquired throughout my BSIT studies.",
          "I am committed to continuing my professional development and applying the skills I have gained through my education and OJT experience. Having already been exposed to the institution's working environment and technology-related processes, I am willing to dedicate my knowledge, skills, and efforts to support the continued improvement of the GNHS Portal and other IT-related services of the school.",
          "Attached here with are my résumé, transcript of records, OJT documents, and other pertinent documents for your reference. I would be very grateful for the opportunity to be interviewed at your convenience to discuss my qualifications and how I may contribute to your institution."
        ],
        closing: "Sincerely,",
        signature: "JOHN RAYMOND E. GABULE"
      }
    }
  ],

  reflectionPapers: [
    {
      id: "ref-1",
      title: "Becoming a Professional IT Practitioner",
      seminar: "IT Ethics & Professionalism",
      speaker: "J.H. Cerilles State College — School of Computing Studies",
      date: "31 Aug 2026",
      format: "Word Document (.docx)",
      fileSize: "15.7 KB",
      fileName: "Reflection_Paper_Becoming_a_Professional_IT_Practitioner.docx",
      fileUrl: "assets/reflections/Reflection_Paper_Becoming_a_Professional_IT_Practitioner.docx",
      summary: "Personal reflection on IT professionalism, workplace ethics, data confidentiality, security awareness, digital footprint management, and lifelong learning in an AI-driven industry.",
      keyTakeaways: [
        "Technical knowledge must be paired with ethical conduct, reliability, and accountability toward colleagues and end-users.",
        "Protecting workplace data, user privacy, and credential security is a core daily responsibility of every IT practitioner.",
        "Maintaining a clean digital footprint and committing to continuous learning are essential in a rapidly evolving tech landscape."
      ],
      essayContent: [
        "Professionalism in IT for me is about separating personal characteristics and traits from the IT workplace, a professional must stay aligned to the expected standards attitudes, ethics, and behaviors in order to provide significant positive impact to the workplace and to the end-users. A Professional IT Practitioner must be competent in the workplace, responsible for every action taken or done, ethical and respectful towards colleagues or end users, and reliable during technical and non-technical situations. I have learned that technical knowledge alone is not enough because an IT professional also needs to know how to properly apply that knowledge while considering its effects on other people and the organization.",
        "As an aspiring Professional IT Practitioner, my strongest quality would be competence as i am quite fond to tech-stuff since I was a child and am competent ever since I discovered Web developing. As competence is my strongest quality it is also the same one that I need to improve as technology keeps advancing and AI-driven technology is rapidly entering the IT field at an increasing rate. Because of this, I need to continuously adapt and improve my knowledge instead of relying only on the skills I already have.",
        "Protecting data, respecting the privacy of others and confidentiality is a must in this field, since various data from the workplace and the end-users are what IT Practitioner handles on a daily basis. Handling all of this in the wrong way can lead to significant negative impact to both the organization and the end-users.",
        "During a group-activity, each of my groupmates received an individual task for completing our project. At night, two of my groupmates encountered technical issues regarding their internet connection and laptop. As the only one having the only device working and a good internet, I finished the tasks and provided a different assignment the next morning related to finishing our group project.",
        "If I happen to discover a classmate or coworker had their password displayed beside their computer, I would immediately approach him/her to notify that displaying credentials can lead to security issues within the school/organization and follow-up with an advice to remove the note and change their credentials as soon as possible. If this is a risk that is happening around then a suggestion for a more secure way of containing the passwords is necessary to promote better security.",
        "My digital footprint affects the majority of my reputation both as an IT student and future IT professional. Negative behavior and conduct online can affect how others perceive me, including potential employers during job applications. That's why maintaining professionalism even in digital footprints is basic standard because my online presence can become part of my professional reputation.",
        "An IT professional should continue learning by the minute even after graduation because technology is advancing and changing at a rapid rate, especially with how AI gaining mainstream adoption very quickly. The skill i would like to learn in the future is Game Development because it is an area of IT that interests me in building a game while also receiving feedbacks on how to make it better.",
        "As a future IT professional, I commit myself to continuous growth and learning in the IT field while finding my own path in the IT industry. I commit myself to improving my collaboration and communication skills so I can work more effectively with others. Most importantly, I commit myself to maintaining professionalism, responsibility, and ethical behavior so that my work can create a better and more positive impact on the people and organizations I serve."
      ]
    },
    {
      id: "ref-2",
      title: "Reflection Paper on Introduction to AI Literacy and Responsible Use",
      seminar: "CHED ACHIEVE & Mapúa Micro-Credentials",
      speaker: "CHED ACHIEVE & Mapúa University (Guidance: Mrs. Amor Diane Carillo)",
      date: "17 Sep 2026",
      format: "Word Document (.docx)",
      fileSize: "15.4 KB",
      fileName: "Reflection_Paper_Introduction_to_AI_Literacy_and_Responsible_Use.docx",
      fileUrl: "assets/reflections/Reflection_Paper_Introduction_to_AI_Literacy_and_Responsible_Use.docx",
      summary: "Critical reflection on how completing the Introduction to AI Literacy and Responsible Use micro-credential transformed my view of AI from an advanced search tool into a complex neural system requiring critical questioning, academic honesty, and ethical awareness.",
      keyTakeaways: [
        "True AI literacy means critically questioning training data, hidden human biases, and potential hallucinations rather than accepting outputs blindly.",
        "Responsible AI use requires academic honesty—treating AI as a research and brainstorming partner while ensuring final work is authentically one's own.",
        "Ethical awareness encompasses data privacy, preventing misinformation, and promoting trustworthy digital citizenship."
      ],
      essayContent: [
        "When I first signed up for this course, I thought I already knew about AI. Although I had a bit of knowledge regarding prompt engineering and learning how to build and code with them, I didn't know the in-depth information about it. I didn't understand how it really worked, how it cooperates and gathers data, and the flow of Human to AI interaction especially the model it uses, which is a neural network. I actually had a bit of knowledge about this from a previous discussion with my Data Mining instructor, Mrs. Amor Diane Carillo. While I did know how AI hallucinates based on my experiences and experiments with AI, I didn't really know the exact in-depth knowledge on how the hallucinations work. That's why I experimented on AI and treated it as a companion that I needed to understand every time I made a conversation about it.",
        "To me, AI was just a more advanced search engine. But after earning this certificate, I realize my understanding was incredibly narrow. This course didn't just teach me how to use AI tools; it taught me how to think about them. It completely shifted my perspective from seeing AI as a simple tool to understanding it as a powerful, complex system that requires a new kind of literacy.",
        "The biggest takeaway for me is the true meaning of AI literacy. It's not just about knowing which buttons to press. It's about understanding the \"why\" and the \"how\" behind the answers. I learned that AI models are not neutral; they are trained on vast amounts of data from the internet, which contains all of our human biases. Before this course, I would have taken an AI's output as fact. Now, I find myself asking critical questions: Where did this information come from? What perspectives are missing? Is this a fact or a generated opinion? This skill of critical questioning is something I will carry with me in every class and every future job. It's the difference between being a passive user and an informed one.",
        "This leads directly to the idea of responsible use. For me, responsibility now has two main parts: honesty and ethics. The honesty part is about transparency. It's about not passing off AI-generated work as my own. It's using AI as a partner—a research assistant, a grammar checker, a brainstorming buddy—but ensuring the final product is authentically mine. It's a tool to enhance my own skills, not a replacement for them. My instructor's emphasis on this has been crucial in shaping my academic integrity.",
        "The ethics part is broader. It's about recognizing the power of this technology. I've learned to think about the privacy of the data I input, the potential for AI to spread misinformation, and the economic impact it might have on certain industries. Responsible use means being aware of these larger consequences. It's about using AI in a way that is fair, avoids harm, and promotes trust.",
        "Receiving this certificate feels less like an end and more like a beginning. It confirms that I have a foundational understanding, but the field is changing so quickly. My responsibility now is to keep learning, to stay curious, and to be a voice for thoughtful and ethical AI use among my peers. This course has given me the framework to not just be a better student, but to be a more conscientious digital citizen in a world where AI is becoming a part of everything. I'm grateful for the tools I've gained, but more importantly, for the critical mindset I've developed. It's a lesson that goes far beyond the certificate itself."
      ]
    },
    {
      id: "ref-3",
      title: "Reflection Paper on Soft Skills Seminar",
      seminar: "JHCSC SCS Soft Skills Seminar",
      speaker: "Prof. Carlo Enrique D. Rule",
      date: "04 Oct 2026",
      format: "Word Document (.docx)",
      fileSize: "15.0 KB",
      fileName: "Reflection_Paper_Soft_Skills_Seminar.docx",
      fileUrl: "assets/reflections/Reflection_Paper_Soft_Skills_Seminar.docx",
      summary: "Reflective synthesis of the Soft Skills Seminar led by Sir Carlo Enrique D. Rule, covering self-investment, workplace communication, resume vs. cover/application letter workshops, and structured interview preparation using the STAR method.",
      keyTakeaways: [
        "Technical skills alone aren't enough—workplace communication, teamwork, adaptability, and emotional intelligence pave the way for career growth.",
        "Hands-on workshops clarified the distinct roles and formats of professional resumes, cover letters, and application letters.",
        "Applying the STAR (Situation, Task, Action, Result) method structures clear, confident, and concise job interview answers."
      ],
      essayContent: [
        "The soft skills seminar started with Sir Rule's introduction, and honestly, he was really motivating. He talked about self-investment and how the path we choose for our future requires effort and personal growth. His words hit different, it made me realize that having technical skills alone isn't enough. I need to invest in myself too, not just in my studies but also in building my character and interpersonal abilities. Sir Rule's energy and conviction made me want to listen more carefully because I knew the things he was about to share would be valuable for my future career.",
        "As the seminar went on, Sir Rule explained how soft skills pave the way for your career. He emphasized that communication is a MUST skill, especially in the workplace. He discussed soft skills like teamwork, adaptability, time management, and emotional intelligence, and how these work together with technical skills. This part made me think about my own strengths and weaknesses. I realized that while I may have decent technical abilities, I still need to work on how I communicate and collaborate with others. Sir Rule explained that employers look for people who can not only do the job but also fit well within a team, and that stuck with me.",
        "Then we moved to the practical stuff. We saw sample resumes, which helped me understand what employers look for. Sir Rule also explained the difference between a cover letter and an application letter, something I didn't really know before. I used to think they were the same thing, but apparently, they serve different purposes and have different formats. After that, we had workshops where we made our own resumes, cover letters, and application letters. Sir Rule guided us and gave corrections along the way, which was really helpful. He pointed out common mistakes and showed us how to make our documents more professional and appealing to employers.",
        "At the last hour of the seminar, we covered interview tips and possible questions. He introduced the SHORT STAR method which is Situation, Task, Action, Result. This taught me how to answer interview questions properly by structuring my responses. Instead of just rambling, I can now organize my thoughts and give clear, concise answers that highlight my experiences and skills. Sir Rule also shared common interview questions and gave us tips on how to handle them confidently.",
        "In my conclusion, this seminar was really eye-opening. I learned so many practical things that I know I'll use in the future. From creating a proper resume to answering interview questions effectively. I'm grateful for Sir Rule's guidance, and I feel more confident now as I prepare for my career. This seminar reminded me that success isn't just about what you know, but also about how you present yourself and connect with others."
      ]
    },
    {
      id: "ref-4",
      title: "Building Your IT Career: Opportunities in Cloud Computing and Microsoft Credentials",
      seminar: "Cloud Computing & Microsoft Credentials",
      speaker: "Ms. Mizel Narag",
      date: "24 Oct 2026",
      format: "Word Document (.docx)",
      fileSize: "14.9 KB",
      fileName: "Reflection_Paper_Cloud_Computing_and_Microsoft_Credentials.docx",
      fileUrl: "assets/reflections/Reflection_Paper_Cloud_Computing_and_Microsoft_Credentials.docx",
      summary: "Insights from Ms. Mizel Narag's career seminar on entering the IT industry from foundational roles, comparing on-premises servers with IaaS/PaaS/SaaS cloud platforms, and leveraging Microsoft credentials for cloud administration and security careers.",
      keyTakeaways: [
        "There are no shortcuts in IT—mastering core fundamentals and starting from entry-level roles builds genuine real-world competence.",
        "Understanding IaaS, PaaS, and SaaS models explains why enterprises migrate from on-premises servers to cloud platforms like Microsoft and AWS.",
        "Earning Microsoft credentials alongside hands-on cloud security and audit-log management skills strengthens career readiness."
      ],
      essayContent: [
        "Attending the seminar conducted by Ms. Mizel Narag gave me a realistic and motivating perspective on entering the IT industry. The most important lesson I learned is that there are no shortcuts when starting out. Everyone begins at the bottom of the bracket, often with no prior work experience, and learns along the way. Ms. Narag emphasized that mastering core fundamentals such as basic data types and foundational IT concepts is essential when applying for work. As long as I keep an open mind and commit to continuous upskilling and reskilling, the knowledge I accumulate over the years will eventually bring my hard work to fruition.",
        "Through the seminar's discussions and video presentations, I gained a much clearer understanding of cloud computing and its vast career opportunities. Comparing traditional on-premises servers with cloud platforms like AWS and Microsoft highlighted the critical differences in server upkeep, repair and management costs, data security, and data loss prevention. Learning about the three main service models which is Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS) showed me why companies are rapidly shifting to the cloud and why skilled cloud administrators are in high demand.",
        "To stay competitive in this landscape, Microsoft certifications and credentials are vital. When Ms. Narag shared samples of her resume and credentials, I saw firsthand how certifications like Microsoft Essentials, paired with strong IT support fundamentals, validate an applicant's skills and make a resume stand out. Also, I want to develop my technical skills in cloud server management across IaaS, PaaS, and SaaS environments. To be specific, I am eager to learn Microsoft 365 security, including how to manage and monitor audit trails and system logs.",
        "To apply what I learned from the seminar, I plan to start preparing for my career right now by strengthening my core IT fundamentals. Following Ms. Narag's demonstration, I will create a Microsoft Ignite profile to explore learning paths and earn credentials, structure my resume based on the professional samples she showed us, and build a strong LinkedIn profile to search for jobs and connect with industry professionals.",
        "Finally, based on Ms. Narag's advice that there are no shortcuts in IT, I do not think it is advisable to expect to land a high-level role directly at Microsoft immediately after graduation without foundational experience. Starting from the beginning of the bracket such as working in IT support or entry-level technical roles is necessary to build real-world competence. To prepare for an eventual career at Microsoft, I need to master my core fundamentals, earn foundational Microsoft certifications, gain hands-on experience in cloud security and administration, and continuously upskill as I grow in the industry."
      ]
    }
  ]
};
