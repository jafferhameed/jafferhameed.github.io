/* Jaffer Hameed — portfolio content. Animation/presentation logic stays in script.js/styles.css. */
const heroContent = {
  nav: [
    { label: "Work", href: "#work", active: true },
    { label: "About", href: "#section-03" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#method" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Let’s Talk", href: "#contact" },
  headline: "Jaffer",
  role: ["AI & ML Engineer", "Python Developer"],
  meta: ["AI / ML", "Software", "Data"],
  notification: {
    name: "Jaffer Hameed",
    time: "now",
    lead: "AI & ML",
    message: "engineering student — building intelligent software and real-world solutions.",
  },
  section2: {
    sideLeft: ["Jaffer Hameed", "Solutions."],
    sideRight: ["Curiosity.", "Problem Solving."],
  },
  works: {
    brand: "Jaffer Hameed",
    projects: [
      {
        key: "plantinfo",
        name: "Smart Campus Plant Information",
        img: "assets/work-plantinfo.svg",
        w: 720, h: 520,
        cat: "Web · AI · IoT-ready",
        year: "Academic",
        accent: "#7fd36b",
        title: "QR-powered plant information with AI-assisted identification",
        url: "https://jafferhameed.github.io/smart-campus-botany/",
      },
      {
        key: "rescueai",
        name: "AI-Based Emergency Rescue System",
        img: "assets/work-rescueai.svg",
        w: 720, h: 520,
        cat: "Flutter · AI · Maps",
        year: "Ongoing",
        accent: "#ff6b4a",
        title: "Real-time accident detection, SOS alerts and emergency coordination",
        status: "In Development",
      },
    ],
  },
  bigRobot: {
    labels: { left: "AI & ML Undergraduate", right: "Python · Intelligent Systems" },
    eyebrow: "( 05 · The Mind )",
    titleLines: ["I build intelligent software", "that solves real problems."],
    description: "I enjoy turning ideas into working systems — from data and models to interfaces, APIs and real-world applications.",
    hint: "Scroll to move through the ideas.",
    techIdeas: [
      {
        no: "01",
        title: "Artificial Intelligence & ML",
        description: "Building practical AI systems through data preprocessing, model development and intelligent automation.",
        tags: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "TensorFlow", "Scikit-learn"],
      },
      {
        no: "02",
        title: "Software & Application Development",
        description: "Connecting interfaces, databases, APIs, cloud tools and mobile development into usable applications.",
        tags: ["Python", "Flutter", "React", "SQL", "Firebase", "AWS"],
      },
    ],
  },
  editorial: {
    eyebrow: "( 06 · The Method )",
    statement: ["Code is my medium.", "Problem solving is my engine."],
    note: "I like understanding the problem first, then building a solution that is useful, reliable and easy to improve.",
    skills: {
      title: "I Work With",
      groups: [
        { name: "Programming", items: ["Python", "Java", "SQL", "C++"] },
        { name: "AI / ML", items: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "TensorFlow", "Scikit-learn"] },
        { name: "Libraries", items: ["OpenCV", "MediaPipe", "NumPy"] },
        { name: "Web / App", items: ["HTML", "CSS", "React", "Node.js", "Flutter"] },
        { name: "Databases", items: ["MySQL", "MongoDB", "Firebase"] },
        { name: "Tools / Cloud", items: ["Git", "GitHub", "VS Code", "AWS", "Cloud Computing"] },
      ],
    },
    mindset: {
      title: "Learn → Build → Improve",
      lines: [
        "Understand the problem.",
        "Break it into workable pieces.",
        "Build, test and iterate.",
        "Keep learning from what works and what doesn’t.",
      ],
    },
    exploring: {
      title: "Certifications & Currently Exploring",
      items: [
        "Oracle Agentic AI Certified Foundations Associate — Oracle",
        "Claude Platform 101 — Anthropic",
        "Google Certified Student — Google",
        "AI-driven applications and intelligent systems",
        "Real-time location-aware software",
      ],
    },
    ending: { lines: ["Still learning.", "Still building.", "Still solving."], note: "Looking for opportunities to turn that curiosity into real-world impact." },
  },
  smallRobot: {
    eyebrow: "( 06 · Still Curious )",
    titleLines: ["Always learning", "always building."],
    description: "An AI & ML student exploring the space between intelligent systems and useful software.",
    note: "Move your cursor · it follows",
  },
  footer: {
    eyebrow: "( 07 · Contact )",
    headline: ["Let’s build", "something useful."],
    line: "Open to AI/ML, Machine Learning, Data Science and Software Development internships.",
    email: "jafferhameedx@gmail.com",
    emailLabel: "Say hello",
    columns: [
      {
        title: "Sections",
        items: [
          { label: "Hero", href: "#top" },
          { label: "About", href: "#section-03" },
          { label: "Projects", href: "#projects" },
          { label: "Skills", href: "#method" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Focus",
        items: [
          { label: "AI & Machine Learning", href: "#think" },
          { label: "Python Development", href: "#method" },
          { label: "Data & Computer Vision", href: "#method" },
          { label: "Real-world Applications", href: "#projects" },
        ],
      },
      {
        title: "Resume",
        items: [
          { label: "View Resume", href: "assets/Jaffer_Hameed_Resume.pdf" },
        ],
      },
    ],
    social: [
      { label: "LinkedIn", href: "https://linkedin.com/in/jaffer" },
      { label: "GitHub", href: "https://github.com/jafferhameed" },
    ],
    legal: "© 2026 Jaffer Hameed",
    note: "Built with code, curiosity and a lot of debugging.",
    backToTop: "Back to top",
  },
  about: {
    boxes: {
      who: { title: "Who I Am", sub: "AI & ML undergraduate · Python developer." },
      what: { title: "What I Do", sub: "AI · ML · Web · App · Data" },
      think: { title: "How I Think", sub: "Understand · Build · Test · Improve · Impact" },
    },
    views: {
      who: {
        eyebrow: "01 — Who I Am",
        head: "Jaffer Hameed",
        text: "Artificial Intelligence and Machine Learning undergraduate with hands-on experience in Python, machine learning, data science, deep learning, NLP, computer vision, SQL and application development.",
      },
      what: {
        eyebrow: "02 — What I Do",
        head: "Ideas Into Working Systems.",
        text: "I build AI/ML projects and applications — from data preprocessing and model development to web, mobile, database and location-aware systems.",
      },
      think: {
        eyebrow: "03 — How I Think",
        head: "Problem → Solution",
        text: "Understand the problem. Design the flow. Build the system. Test it. Improve it. Keep learning.",
      },
    },
  },
};
