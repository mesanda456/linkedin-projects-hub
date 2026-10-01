/**
 * LinkedIn Project & Post Launchpad - Mesanda Sethumika
 * Udemy-Style 1-Click "Add to LinkedIn" Direct Integration & Post Launcher
 */

const PROJECTS = [
  {
    id: "mediconnect",
    name: "MediConnect",
    title: "Distributed Healthcare Microservices Platform",
    category: "microservices",
    icon: "🏥",
    status: "deployed",
    statusText: "Deployed & Live",
    color: "#00d4ff",
    githubUrl: "https://github.com/mesanda456/hospital-frontend-main",
    organization: "GitHub Open Source Projects",
    issueYear: "2025",
    issueMonth: "11",
    credentialId: "GH-MEDICONNECT-2025",
    overview: "Enterprise hospital management platform built on independent Spring Boot microservices with React 18, Docker Compose, and Gemini AI triage.",
    highlights: [
      "5 independent Spring Boot microservices (Patient, Doctor, Appointment, Room, Admin)",
      "Google Gemini 2.0 AI integration for clinical intake summaries & triage advice",
      "Live token queue system with Recharts dashboards and audible notification bells",
      "Containerized deployment orchestration using Docker & Docker Compose"
    ],
    skills: ["Spring Boot 3", "Java 17", "React.js", "Docker", "Microservices Architecture", "Google Gemini AI", "MySQL", "RESTful APIs"],
    profileDescription: `Designed and engineered an enterprise-grade hospital management platform built on an event-ready Spring Boot microservices architecture with a responsive React.js frontend.

• Microservices Ecosystem: Architected 5 independent Spring Boot services (Admin, Doctor, Patient, Room, Appointment) communicating via RESTful interfaces with role-based access control.
• AI Clinical Triage: Integrated Google Gemini AI API to provide preliminary symptom analysis, triage priority suggestions, and clinical intake summaries before doctor consultations.
• Real-Time Hospital Telemetry: Built live token queuing displays, automated ward allocation, and alert notification bells using React 18 and Recharts dashboards.
• DevOps & Deployment: Containerized all microservices with Docker & Docker Compose for isolated multi-container orchestration.`,
    postDraft: `🚀 Excited to share what I've been engineering: MediConnect, an AI-powered Healthcare Microservices Platform! 🏥💻

Traditional hospital management systems frequently suffer from monolithic fragility—if one module encounters high load or downtime, the entire hospital workflow halts. I built MediConnect to address this with a decoupled microservices architecture.

✨ Key Architectural Highlights:
🔹 Independent Microservices: 5 modular Spring Boot services (Patient, Doctor, Appointment, Room, Admin) operating with decoupled schemas.
🔹 AI-Powered Intake: Integrated Google Gemini to conduct preliminary symptom triage and generate clinical intake summaries for attending doctors.
🔹 Live Queue Telemetry: Real-time token queue with visual notification bells & ward analytics using React 18 & Recharts.
🔹 Containerized Orchestration: Fully containerized with Docker & Docker Compose for rapid, reproducible deployments.

🛠️ Tech Stack:
Java 17 | Spring Boot 3 | React.js | Docker | MySQL | Google Gemini AI | REST APIs

Check out the codebases on GitHub:
👉 Frontend: https://github.com/mesanda456/hospital-frontend-main
👉 Admin Microservice: https://github.com/mesanda456/hospital-admin-microservice-master

I'm actively seeking Software Engineering Internships and Junior Developer roles. I would love to hear your feedback or answer questions about the microservice architecture!

#SoftwareEngineering #Java #SpringBoot #Microservices #ReactJS #Docker #AI #HealthcareTech #FullStack #OpenToWork`
  },
  {
    id: "eventpulse",
    name: "EventPulse",
    title: "Interactive Floor-Plan & Event Management Platform",
    category: "fullstack",
    icon: "🎪",
    status: "wip",
    statusText: "Agile Team Project",
    color: "#00ff9d",
    githubUrl: "https://github.com/mesanda456",
    organization: "Agile Software Engineering Squad",
    issueYear: "2025",
    issueMonth: "10",
    credentialId: "GH-EVENTPULSE-AGILE",
    overview: "MERN stack event and expo management solution with dynamic interactive floor-plan mapping developed with a 7-developer Agile scrum squad.",
    highlights: [
      "Custom interactive SVG floor-plan mapping with live search & zone dimming",
      "Role-based routing for Event Organizers, Exhibitors, and Attendees",
      "Stall detail modals with auto-pan navigation & real-time booking pipelines",
      "Agile team collaboration with weekly Jira sprints and pull request reviews"
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "RESTful APIs", "Agile/Scrum", "Interactive Maps"],
    profileDescription: `Architected and developed a full-stack MERN event and expo management solution as part of an intensive 7-developer Agile scrum team.

• Interactive Spatial Mapping: Built custom interactive floor-plan mapping with live search, stall category filters, auto-panning, and zone dimming.
• Role-Based Access: Engineered role-based dashboards for event organizers, attendees, and vendor stall exhibitors with secure JWT authentication.
• Booking & Stall Coordination: Developed real-time reservation workflows, stall detail modals, and MongoDB aggregation pipelines for vendor analytics.
• Agile Collaboration: Practiced Scrum with sprint planning, Jira user stories, and daily standups.`,
    postDraft: `🎪 Ever attended a massive tech expo or trade fair and struggled to locate specific exhibitor booths?

As part of a 7-developer Agile squad, we built EventPulse—an interactive event navigation and stall reservation platform powered by the MERN stack! 📍✨

💡 What makes EventPulse special:
🗺️ Dynamic Floor-Plan Engine: Interactive SVG/canvas map with smooth pin animations, category-based zone dimming, and instant stall search.
👥 Role-Based Architecture: Tailored workflows for Event Organizers, Exhibitors, and Attendees with JWT-authenticated access.
⚡ Real-Time Booking: Seamless stall detail modals with auto-pan navigation directly to selected booths.
🤝 Agile Collaboration: Developed through weekly Jira sprints, structured PR code reviews, and daily standups.

🛠️ Tech Stack:
React 18 | Node.js | Express.js | MongoDB Atlas | REST APIs

Building the interactive floor-plan taught us a lot about canvas performance, state synchronization, and building resilient REST contracts.

Check out my GitHub for more: https://github.com/mesanda456

#WebDevelopment #MERN #ReactJS #NodeJS #MongoDB #Agile #Scrum #FullStack #SoftwareEngineer #OpenToWork`
  },
  {
    id: "tea-leaf",
    name: "Tea Leaf Quality Gradifier",
    title: "AI Vision Quality Assessment System",
    category: "ai-vision",
    icon: "🍃",
    status: "deployed",
    statusText: "AI Engine",
    color: "#00ff9d",
    githubUrl: "https://github.com/mesanda456/Tea-Leaf-Quality-Gradifier",
    organization: "Engineering Research & AgriTech",
    issueYear: "2026",
    issueMonth: "1",
    credentialId: "GH-TEA-LEAF-AI-VISION",
    overview: "Computer vision classification system evaluating tea leaf harvest quality via binary and multi-class morphological image analytics.",
    highlights: [
      "Dual-tier pipeline: Binary (Premium vs Regular) & Multi-class (Grade A, B, C, Reject)",
      "Morphological feature extraction analyzing color saturation, curl density & surface texture",
      "Interactive TypeScript batch inspection dashboard with real-time grading reports"
    ],
    skills: ["TypeScript", "Python", "Machine Learning", "Computer Vision", "Deep Learning", "Image Processing"],
    profileDescription: `Developed an automated tea leaf quality inspection engine applying computer vision and classification models to grade tea harvests objectively.

• Dual-Stage Classification: Designed a multi-tier pipeline featuring binary classification (Premium vs. Regular grade) followed by multi-class grading (Grade A, B, C, Reject).
• Morphological Feature Extraction: Analyzed leaf pigmentation, texture irregularity, curl geometry, and surface area ratios.
• High-Performance Interface: Built an interactive frontend inspection dashboard with TypeScript for real-time grading reports and batch telemetry.`,
    postDraft: `🍃 Sri Lanka is world-renowned for Ceylon Tea. But how do we modernize the grading process from manual visual inspection to automated precision?

I developed the Tea Leaf Quality Gradifier—an AI-driven computer vision system that classifies and grades tea leaves based on morphological leaf features! ☕🔬

🎯 How it works:
1️⃣ Binary Classification: Instantly distinguishes Premium vs. Regular harvest batches.
2️⃣ Multi-Class Granularity: Automatically sorts leaves into Grade A, Grade B, Grade C, or Reject.
3️⃣ Feature Extraction: Evaluates color saturation, surface texture, curl density, and leaf size ratios.
4️⃣ Intuitive UI: Interactive TypeScript dashboard for batch grading and defect telemetry.

🛠️ Tech Stack:
TypeScript | Machine Learning | Computer Vision | Deep Learning | Image Processing

Bringing artificial intelligence into agricultural workflows is an area I'm incredibly excited about. Check out the source code:
👉 GitHub: https://github.com/mesanda456/Tea-Leaf-Quality-Gradifier

#ArtificialIntelligence #MachineLearning #ComputerVision #AgriTech #TypeScript #CeylonTea #Innovation #Python #OpenToWork`
  },
  {
    id: "vesak-light",
    name: "Vesak Smart Light Controller",
    title: "ESP8266 WiFi Multi-Channel Lighting Controller",
    category: "iot-robotics",
    icon: "🪔",
    status: "hardware",
    statusText: "IoT Hardware",
    color: "#ffb703",
    githubUrl: "https://github.com/mesanda456/using-ESP8266-and-relay-module-5W-bulb-patterns",
    organization: "IoT & Embedded Hardware Lab",
    issueYear: "2025",
    issueMonth: "6",
    credentialId: "GH-ESP8266-IOT-RELAY",
    overview: "ESP8266 NodeMCU smart lighting controller hosting an embedded asynchronous web server to toggle 8 animated relay patterns over WiFi.",
    highlights: [
      "Embedded HTTP server running directly inside the ESP8266 microcontroller",
      "4-channel optically isolated relay board controlling 5W AC bulb circuits",
      "Non-blocking C++ state machines executing 8 custom dynamic illumination sequences",
      "Zero app install: accessible from any mobile browser on the local WiFi network"
    ],
    skills: ["ESP8266", "Embedded C++", "IoT", "Arduino", "Hardware Interfacing", "Relay Modules", "WebSockets/HTTP"],
    profileDescription: `Engineered an IoT smart light controller powered by the ESP8266 NodeMCU microcontroller to automate festival lantern lighting arrangements over local WiFi.

• Embedded HTTP Web Server: Programmed a standalone web server directly inside the microcontroller firmware, requiring zero mobile app installations.
• 4-Channel Relay Control: Built non-blocking state machines in Embedded C++ driving 4 relays and 8 distinct animated illumination sequences.
• Hardware Safety & Isolation: Designed circuit wiring with optocoupler isolation, handling 5W AC bulb circuits safely.`,
    postDraft: `💡 Who says microcontrollers can't host full web applications?

For the Vesak festival, I designed and built an ESP8266-Powered Smart Light Controller that lets anyone control intricate multi-channel lantern light sequences directly from their smartphone browser! 🪔📱

⚡ Hardware & Firmware Architecture:
🔌 Microcontroller: ESP8266 NodeMCU hosting an embedded asynchronous HTTP web server.
🎛️ Relay Module: 4-channel optically isolated relay board controlling 5W AC bulb patterns.
🔄 Non-Blocking Sequencing: C++ millis()-based state machines executing 8 custom dynamic wave, pulse, and chase patterns without freezing web requests.
📱 Zero App Install: Connect to the WiFi access point, tap the mobile web interface, and toggle patterns in real time!

🛠️ Tech Stack:
ESP8266 | Embedded C++ | Arduino Framework | IoT | WebSockets/HTTP

Hardware engineering teaches you how software meets physics. Check out the repository:
👉 GitHub: https://github.com/mesanda456/using-ESP8266-and-relay-module-5W-bulb-patterns

#IoT #ESP8266 #EmbeddedSystems #Hardware #Arduino #CPlusPlus #Makers #Engineering #TechInnovation`
  },
  {
    id: "medicine-robot",
    name: "Autonomous Medicine Delivery Robot",
    title: "Hospital Ward Transit & Dispensing Rover",
    category: "iot-robotics",
    icon: "🤖",
    status: "hardware",
    statusText: "Robotics Hardware",
    color: "#9d4edd",
    githubUrl: "https://github.com/mesanda456/Medicine-Delivery-Robot",
    organization: "Robotics & Embedded Systems",
    issueYear: "2025",
    issueMonth: "11",
    credentialId: "GH-ARDUINO-MED-ROBOT",
    overview: "Autonomous Arduino-powered hospital rover transporting prescribed medications safely to patient beds with obstacle avoidance and PIN access.",
    highlights: [
      "Ultrasonic sensor array with obstacle avoidance algorithms for corridor transit",
      "Integrated Real-Time Clock (RTC) module for scheduled dosage delivery timings",
      "Physical keypad PIN authentication & LCD screen ensuring secure medical access"
    ],
    skills: ["Arduino", "Embedded C++", "Robotics", "Sensor Fusion", "Ultrasonic Sensors", "RTC Modules", "Hardware Prototyping"],
    profileDescription: `Designed and assembled an autonomous mobile delivery robot engineered to transport prescribed medications safely across hospital wards.

• Autonomous Navigation & Collision Avoidance: Integrated ultrasonic sensor arrays with obstacle avoidance algorithms for safe corridor transit.
• Real-Time Clock & Scheduling: Leveraged an RTC module for accurate real-time scheduling and ward arrival timestamps.
• Secure Access Interface: Implemented a physical keypad authentication system and LCD status telemetry to ensure only verified medical staff access the medicine cargo.`,
    postDraft: `🤖 Healthcare workers walk miles every shift just delivering routine prescriptions between hospital wards. Could robotics alleviate this load?

I engineered the Autonomous Medicine Delivery Robot—an embedded rover that securely navigates corridors to deliver medication directly to patient beds! 🏥💊

✨ Key Capabilities:
📡 Collision Avoidance: Ultrasonic sensor array with adaptive obstacle detection for safe navigation in busy hospital environments.
⏰ Time-Synchronized Delivery: Built-in RTC (Real-Time Clock) module for scheduled dosage delivery schedules.
🔒 Secure Dispensing: Keypad-based PIN authorization and LCD interface ensuring only authorized nursing staff open the payload compartment.

🛠️ Tech Stack:
Arduino | Embedded C++ | Sensor Fusion | Robotics | Hardware Prototyping

Check out the code and schematics on GitHub:
👉 https://github.com/mesanda456/Medicine-Delivery-Robot

#Robotics #Arduino #EmbeddedSystems #HealthcareTech #Automation #Engineering #Makers #TechForGood`
  },
  {
    id: "lingua-flip",
    name: "lingua-flip",
    title: "Cross-Platform Flashcard App with SM-2 Spaced Repetition",
    category: "mobile",
    icon: "🃏",
    status: "wip",
    statusText: "In Development",
    color: "#00d4ff",
    githubUrl: "https://github.com/mesanda456",
    organization: "Mobile Engineering & Cognitive Tech",
    issueYear: "2025",
    issueMonth: "12",
    credentialId: "GH-FLUTTER-LINGUA-FLIP",
    overview: "Offline-first Flutter language learning application using the cognitive science SuperMemo SM-2 algorithm and Hive NoSQL for instant recall practice.",
    highlights: [
      "Spaced repetition engine dynamically calculating retention intervals & ease factors",
      "Sub-millisecond local reads and zero cloud latency using Hive NoSQL storage",
      "Reactive architecture powered by Riverpod and fl_chart memory retention analytics"
    ],
    skills: ["Flutter", "Dart", "Riverpod", "Hive NoSQL", "SuperMemo SM-2 Algorithm", "fl_chart", "Mobile UI/UX"],
    profileDescription: `Built an offline-first mobile language acquisition app implementing the SuperMemo SM-2 spaced repetition algorithm for memory retention.

• Memory Retention Engine: Programmed the SM-2 algorithmic formula to dynamically calculate repetition intervals and ease factors based on user self-grading.
• Offline-First Architecture: Utilized Hive NoSQL for instant, sub-millisecond local reads and writes without cloud dependency.
• Reactive State & Analytics: Managed application state via Riverpod and visualized learning curves and daily streaks using fl_chart.`,
    postDraft: `🃏 The biggest struggle in learning a new language isn't learning words—it's remembering them before the 'forgetting curve' kicks in.

I built lingua-flip, a cross-platform mobile flashcard app built with Flutter that applies cognitive science to help you retain vocabulary permanently! 🧠📚

⚡ Engineered with:
📈 SuperMemo SM-2 Algorithm: Dynamically adjusts card intervals: EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)) based on your recall quality.
⚡ Sub-Millisecond Offline Storage: Local-first architecture using Hive NoSQL for lightning-fast card flipping with zero latency.
📊 Telemetry & Analytics: Interactive progress charts and memory retention curves visualized with fl_chart and Riverpod state management.

🛠️ Tech Stack:
Flutter | Dart | Hive NoSQL | Riverpod | Clean Architecture

Building offline-first mobile apps really highlights the value of reactive state management and fast local persistence.

#Flutter #Dart #MobileDevelopment #SpacedRepetition #HiveDB #EdTech #SoftwareEngineering #iOS #Android #OpenToWork`
  },
  {
    id: "finance-tracker",
    name: "Multi-Database Finance Tracker",
    title: "Dual-Engine Personal Wealth Ledger",
    category: "fullstack",
    icon: "💰",
    status: "deployed",
    statusText: "Completed",
    color: "#ffb703",
    githubUrl: "https://github.com/mesanda456/finance-tracker-frontend-master",
    organization: "Full-Stack Enterprise Engineering",
    issueYear: "2025",
    issueMonth: "11",
    credentialId: "GH-FINANCE-REACT-JAVA",
    overview: "Full-stack personal finance tracker featuring a clean React frontend and decoupled Java backend supporting SQLite and Oracle Database.",
    highlights: [
      "Modular Java backend supporting interchangeable database adapters (SQLite + Oracle DB)",
      "Expense categorization, monthly budget threshold alerts, and recurring spend tracking",
      "Interactive transaction filtering, CSV data exports, and responsive dashboard views"
    ],
    skills: ["Java", "Spring Boot", "React.js", "SQLite", "Oracle Database", "SQL", "RESTful APIs", "Financial Analytics"],
    profileDescription: `Developed a comprehensive personal wealth and expense management system supporting interchangeable database backends (SQLite for lightweight local usage, Oracle DB for enterprise scalability).

• Multi-Engine Persistence: Engineered modular Java backend architectures connecting seamlessly to both Oracle DB and SQLite without altering frontend contracts.
• Financial Analytics: Created interactive expense breakdowns, savings velocity metrics, and monthly budget threshold alerts.
• Responsive Web UI: Built with React.js offering real-time transaction filtering, category tagging, and CSV data export capabilities.`,
    postDraft: `💰 Managing personal finances shouldn't require messy spreadsheets.

I developed a Personal Finance & Budget Tracker featuring a React frontend and a flexible Java backend designed with interchangeable database adapters (SQLite + Oracle DB)! 📊💳

🌟 System Architecture:
🔄 Dual-Backend Support: Implemented decoupled repository layers supporting local SQLite for personal privacy AND enterprise Oracle Database for scalable querying.
📈 Smart Budget Analytics: Real-time expense breakdown charts, recurring subscription trackers, and automated budget threshold warnings.
⚡ Clean React UI: Instant transaction search, category tag filtering, and CSV export.

🛠️ Tech Stack:
React.js | Java | Spring Boot | SQLite | Oracle Database | REST APIs

Check out the GitHub repositories:
👉 Frontend: https://github.com/mesanda456/finance-tracker-frontend-master
👉 SQLite Backend: https://github.com/mesanda456/finance-tracker-backend-sqlite
👉 Oracle Backend: https://github.com/mesanda456/finance-tracker-backend-oracle

#FullStack #Java #ReactJS #Oracle #DatabaseDesign #FinTech #SoftwareDevelopment #Coding #OpenToWork`
  },
  {
    id: "pizzamania",
    name: "PizzaMania",
    title: "Native Android Food Ordering Application",
    category: "mobile",
    icon: "🍕",
    status: "deployed",
    statusText: "Completed",
    color: "#ff4d6d",
    githubUrl: "https://github.com/mesanda456/PizzaMania",
    organization: "Mobile Application Development",
    issueYear: "2025",
    issueMonth: "11",
    credentialId: "GH-ANDROID-PIZZAMANIA",
    overview: "Native Android application built in Android Studio with dynamic pizza topping customization, persistent cart management, and order history.",
    highlights: [
      "Dynamic pizza builder with real-time crust/topping price calculations",
      "Local session storage and persistent order history powered by Android SQLite",
      "Material Design XML layouts responsive across varying device densities"
    ],
    skills: ["Android SDK", "Java", "XML Layouts", "SQLite", "Mobile UX", "Android Studio"],
    profileDescription: `Constructed a native Android food ordering application featuring a dynamic menu, visual toppings builder, cart management, and order validation.

• Interactive Topping Builder: Allowed real-time price calculations and crust/topping selection with instant visual feedback.
• Persistent Cart & Orders: Managed local session storage and user order histories using SQLite on-device database.
• Responsive Mobile UI: Designed clean, Material Design-compliant XML layouts optimized across varying screen densities.`,
    postDraft: `🍕 Who doesn't love custom pizza?

I developed PizzaMania, a native Android application built in Android Studio that lets users design their dream pizza with custom crusts, sauces, and toppings in real time! 📱🧀

✨ Highlights:
🍕 Dynamic Pizza Builder: Real-time price calculation engine adjusting dynamically as toppings and crusts are toggled.
🛒 Cart & Checkout Management: Complete order lifecycle with persistent cart storage and order history powered by local SQLite.
🎨 Material UI: Smooth animations, custom list adapters, and intuitive checkout flow.

🛠️ Tech Stack:
Java | Android SDK | Android Studio | XML | SQLite

Check out the source code on GitHub:
👉 https://github.com/mesanda456/PizzaMania

#AndroidDev #Java #MobileApp #AndroidStudio #AppDevelopment #UIUX #SoftwareEngineer #OpenToWork`
  }
];

// Helper to generate the exact official Udemy-style LinkedIn "Add to Profile" link
function getUdemyStyleLinkedInUrl(p) {
  const params = new URLSearchParams({
    startTask: "CERTIFICATION_NAME",
    name: `${p.name}: ${p.title}`,
    organizationName: p.organization || "GitHub Open Source",
    issueYear: p.issueYear || "2025",
    issueMonth: p.issueMonth || "11",
    certUrl: p.githubUrl,
    certId: p.credentialId || `GH-${p.id.toUpperCase()}`
  });
  return `https://www.linkedin.com/profile/add?${params.toString()}`;
}

// DOM Elements
const projectsContainer = document.getElementById("projectsContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilters = document.getElementById("categoryFilters");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");
const copyAllMasterBtn = document.getElementById("copyAllMasterBtn");

// Modal Elements
const previewModal = document.getElementById("previewModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalTitle = document.getElementById("modalTitle");
const modalProjectName = document.getElementById("modalProjectName");
const modalSkills = document.getElementById("modalSkills");
const modalDescription = document.getElementById("modalDescription");
const modalPostText = document.getElementById("modalPostText");
const modalCopyProfileBtn = document.getElementById("modalCopyProfileBtn");
const modalCopyPostBtn = document.getElementById("modalCopyPostBtn");
const modalLaunchPostBtn = document.getElementById("modalLaunchPostBtn");
const modalTabs = document.querySelectorAll(".modal-tab");
const modalProfileContent = document.getElementById("modalProfileContent");
const modalPostContent = document.getElementById("modalPostContent");

let currentActiveProject = null;
let currentFilter = "all";

// Show Toast
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// Copy to Clipboard Helper
function copyText(text, successMsg) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg || "Copied to clipboard!");
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const el = document.createElement("textarea");
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  showToast(successMsg || "Copied to clipboard!");
}

// Render Project Cards
function renderProjects() {
  const query = searchInput.value.toLowerCase().trim();
  projectsContainer.innerHTML = "";

  const filtered = PROJECTS.filter(p => {
    const matchesFilter = currentFilter === "all" || p.category === currentFilter;
    const matchesQuery = !query || 
      p.name.toLowerCase().includes(query) ||
      p.title.toLowerCase().includes(query) ||
      p.skills.some(s => s.toLowerCase().includes(query)) ||
      p.overview.toLowerCase().includes(query);
    return matchesFilter && matchesQuery;
  });

  if (filtered.length === 0) {
    projectsContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <i class="fa-solid fa-search" style="font-size: 32px; margin-bottom: 12px; color: var(--text-dim);"></i>
        <h3>No projects matching "${query}"</h3>
        <p>Try searching for technologies like "Java", "React", or "Flutter".</p>
      </div>
    `;
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.style.setProperty("--card-color", p.color);

    const statusClass = p.status === "deployed" ? "status-deployed" : (p.status === "hardware" ? "status-hardware" : "status-wip");
    const udemyStyleUrl = getUdemyStyleLinkedInUrl(p);

    card.innerHTML = `
      <div class="card-header">
        <div class="card-title-group">
          <span class="card-icon">${p.icon}</span>
          <div>
            <h2 class="card-title">${p.name}</h2>
          </div>
        </div>
        <span class="card-status ${statusClass}">${p.statusText}</span>
      </div>

      <div class="card-subline">
        <i class="fa-solid fa-code-commit"></i> ${p.title}
      </div>

      <p class="card-desc">${p.overview}</p>

      <ul class="card-bullets">
        ${p.highlights.map(h => `<li>${h}</li>`).join("")}
      </ul>

      <div class="card-tags">
        ${p.skills.map(s => `<span class="tag-badge">${s}</span>`).join("")}
      </div>

      <div class="card-actions">
        <!-- 1-Click Direct Udemy Flow -->
        <a href="${udemyStyleUrl}" target="_blank" class="btn btn-udemy btn-full" title="Opens LinkedIn with all fields pre-filled, exactly like finishing a course on Udemy!">
          <i class="fa-solid fa-bolt-lightning"></i>
          <span>1-Click Add to Profile (Udemy Flow)</span>
        </a>

        <div class="action-row-primary">
          <button class="btn btn-linkedin btn-sm copy-post-btn" data-id="${p.id}">
            <i class="fa-solid fa-paper-plane"></i> Post to LinkedIn
          </button>
          <button class="btn btn-outline btn-sm copy-profile-btn" data-id="${p.id}">
            <i class="fa-solid fa-id-badge"></i> Copy Profile Text
          </button>
        </div>

        <div class="action-row-secondary">
          <a href="${p.githubUrl}" target="_blank" class="btn btn-ghost btn-sm">
            <i class="fa-brands fa-github"></i> GitHub Repo
          </a>
          <button class="btn btn-ghost btn-sm view-details-btn" data-id="${p.id}">
            <i class="fa-solid fa-eye"></i> Full Text
          </button>
        </div>
      </div>
    `;

    // Attach Event Listeners
    card.querySelector(".copy-profile-btn").addEventListener("click", () => {
      const fullText = `PROJECT TITLE: ${p.name} – ${p.title}\n\nSKILLS: ${p.skills.join(", ")}\n\nPROJECT URL: ${p.githubUrl}\n\nDESCRIPTION:\n${p.profileDescription}`;
      copyText(fullText, `Copied "${p.name}" profile details!`);
    });

    card.querySelector(".copy-post-btn").addEventListener("click", () => {
      copyText(p.postDraft, `Post copied! Opening LinkedIn feed...`);
      setTimeout(() => {
        window.open("https://www.linkedin.com/feed/?shareActive=true", "_blank");
      }, 400);
    });

    card.querySelector(".view-details-btn").addEventListener("click", () => {
      openModal(p);
    });

    projectsContainer.appendChild(card);
  });
}

// Modal Handlers
function openModal(project) {
  currentActiveProject = project;
  modalTitle.textContent = `${project.icon} ${project.name} – ${project.title}`;
  modalProjectName.value = `${project.name} – ${project.title}`;
  modalSkills.value = project.skills.join(", ");
  modalDescription.value = project.profileDescription;
  modalPostText.value = project.postDraft;

  // Set default tab to profile
  switchModalTab("profile");
  previewModal.classList.add("open");
}

function switchModalTab(tabName) {
  modalTabs.forEach(t => {
    if (t.dataset.tab === tabName) {
      t.classList.add("active");
    } else {
      t.classList.remove("active");
    }
  });

  if (tabName === "profile") {
    modalProfileContent.classList.remove("hidden");
    modalPostContent.classList.add("hidden");
  } else {
    modalProfileContent.classList.add("hidden");
    modalPostContent.classList.remove("hidden");
  }
}

closeModalBtn.addEventListener("click", () => {
  previewModal.classList.remove("open");
});

previewModal.addEventListener("click", (e) => {
  if (e.target === previewModal) {
    previewModal.classList.remove("open");
  }
});

modalTabs.forEach(t => {
  t.addEventListener("click", () => {
    switchModalTab(t.dataset.tab);
  });
});

modalCopyProfileBtn.addEventListener("click", () => {
  if (currentActiveProject) {
    const text = `PROJECT: ${modalProjectName.value}\nSKILLS: ${modalSkills.value}\n\nDESCRIPTION:\n${modalDescription.value}`;
    copyText(text, "Profile details copied to clipboard!");
  }
});

modalCopyPostBtn.addEventListener("click", () => {
  if (currentActiveProject) {
    copyText(modalPostText.value, "LinkedIn post copied to clipboard!");
  }
});

modalLaunchPostBtn.addEventListener("click", () => {
  if (currentActiveProject) {
    copyText(modalPostText.value, "Post copied! Opening LinkedIn feed...");
    setTimeout(() => {
      window.open("https://www.linkedin.com/feed/?shareActive=true", "_blank");
    }, 400);
  }
});

// Category Filter Click
categoryFilters.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;

  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  currentFilter = btn.dataset.filter;
  renderProjects();
});

// Search Input
searchInput.addEventListener("input", () => {
  renderProjects();
});

// Copy Master File for All Projects
copyAllMasterBtn.addEventListener("click", () => {
  let masterText = `# Mesanda Sethumika — All 8 Projects Master Reference for LinkedIn\n\n`;
  PROJECTS.forEach((p, idx) => {
    const udemyLink = getUdemyStyleLinkedInUrl(p);
    masterText += `===================================================\n`;
    masterText += `PROJECT ${idx + 1}: ${p.name} – ${p.title}\n`;
    masterText += `===================================================\n`;
    masterText += `1-CLICK ADD TO LINKEDIN (UDEMY FLOW):\n${udemyLink}\n\n`;
    masterText += `SKILLS: ${p.skills.join(", ")}\n`;
    masterText += `URL: ${p.githubUrl}\n\n`;
    masterText += `--- PROFILE DESCRIPTION ---\n${p.profileDescription}\n\n`;
    masterText += `--- LINKEDIN POST DRAFT ---\n${p.postDraft}\n\n\n`;
  });

  copyText(masterText, "Master copy with 1-Click URLs copied to clipboard!");
});

// Initial Render
renderProjects();
