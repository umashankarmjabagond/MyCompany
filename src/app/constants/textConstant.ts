import {
  Cpu,
  Bot,
  LineChart,
  Workflow,
  Database,
  GraduationCap,
  Code2,
  Cloud,
  Brain,
  FileCode2,
  Users,
  Code,
  Server,
  Rocket,
} from "lucide-react";

export const AiToolDetails = [
  {
    id: "ai-models",
    icon: Cpu,
    title: "AI Model Integration",
    image: "/aiModel.jpg",
    content: `
We integrate advanced AI models such as OpenAI GPT, Hugging Face Transformers, and LangChain frameworks directly into enterprise systems. These models help automate content generation, analyze customer feedback, summarize reports, and more.

How It Works:  
Our engineers study your business process, identify automation opportunities, and fine-tune models on your data. We then expose them through secure APIs or microservices using Node.js and Python — ensuring scalability and compliance.

Real-world Example:  
A healthcare startup used GPT-based APIs to generate patient summaries automatically from doctor notes, saving 5+ hours daily.
`,
    Benefits: [
      "Speeds up content and data processing",
      "Delivers domain-specific intelligence",
      "Secure, scalable model integration",
    ],
  },
  {
    id: "chatbots",
    icon: Bot,
    title: "Chatbots & Virtual Assistants",
    image: "/chatbot.avif",
    content: `
We build AI-powered chatbots that act as your digital customer support team, available 24/7.  
Our bots use Natural Language Processing (NLP) and Large Language Models (LLMs) to understand intent and deliver human-like conversations.

How It Works:  
The bot connects to CRMs like HubSpot, Salesforce, or Zoho for real-time data access. It can be deployed on your website, WhatsApp, or Slack and continuously learns from interactions to improve responses.

Real-world Example:  
An e-commerce platform integrated our chatbot for order tracking and returns — reducing support calls by 60%.
`,
    Benefits: [
      "24/7 automated support",
      "Personalized, context-aware replies",
      "Integrates seamlessly with existing systems  ",
    ],
  },
  {
    id: "analytics",
    icon: LineChart,
    title: "Predictive Analytics",
    image: "/dataAnalytics.jpg",
    content: `
Predictive Analytics allows organizations to forecast future trends, detect risks, and identify opportunities using machine learning.  
We build interactive dashboards that visualize metrics and predictions in real time.

How It Works:  
We process data from CRMs, ERPs, and IoT systems using ML models such as Random Forest and XGBoost. Dashboards are built with Recharts or Chart.js for intuitive insights.

Real-world Example:  
A retail chain predicted weekly product demand with 90% accuracy — reducing overstock by 35%.
`,
    Benefits: [
      "Early risk and opportunity detection",
      "Data-driven business planning",
      "Real-time visualization of performance metrics",
    ],
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Process Automation",
    image: "/processAutomation.avif",
    content: `
Process Automation uses AI and scripting to eliminate repetitive manual tasks.  
We design smart pipelines that handle data entry, reporting, notifications, and synchronization.

How It Works:  
Using Node.js, Python, and AWS Lambda, we create event-driven workflows that trigger on specific actions like file uploads or form submissions.

Real-world Example:  
A logistics firm automated shipment tracking and updates through API integration — improving customer communication and saving 10+ hours weekly.
`,
    Benefits: [
      "Saves human effort and reduces errors",
      "Boosts team productivity",
      "Improves overall workflow consistency ",
    ],
  },
  {
    id: "data-intelligence",
    icon: Database,
    title: "Data Intelligence",
    image: "/analytics.avif",
    content: `
Data Intelligence helps businesses organize, clean, and interpret massive data streams for strategic decision-making.  
We build data lakes, ETL pipelines, and analytics dashboards that turn raw data into real insights.

How It Works:  
We consolidate multi-source data (from APIs, databases, or CRMs) and transform it using tools like PostgreSQL, BigQuery, and Supabase. Visualization dashboards are built with secure, role-based access.

Real-world Example:  
An ed-tech company visualized student performance metrics across 100+ courses, helping faculty improve outcomes.
`,
    Benefits: [
      "Clean, centralized data",
      "Faster reporting and analytics",
      "Strategic, data-driven decision making",
    ],
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "AI Training",
    image: "/aiTraining.jpg",
    content: `
We provide hands-on AI workshops and corporate training programs designed for both beginners and professionals.  
Our sessions blend theory with live coding, case studies, and real-world AI projects.

Topics Covered:  
- Prompt Engineering and LLM Application Development  
- Computer Vision and Image Processing  
- AI Model Deployment and MLOps  
- Responsible AI and Ethical Use  

Real-world Example:  
A university partnered with us for a 3-week bootcamp, where students built their first GPT-powered web apps — preparing them for AI-driven careers.
`,
    Benefits: [
      "Builds real-world technical confidence",
      "Tailored learning for corporates and academia",
      "Promotes innovation and skill transformation  ",
    ],
  },
];

export const TrainingPrograms = [
  {
    id: "mern",
    icon: Code2,
    title: "Full-Stack (MERN / Next.js)",
    image: "/mernStack.jpeg",
    content: `
Our Full-Stack Development program helps you master modern web technologies like MongoDB, Express.js, React, and Node.js. 
You’ll learn to build scalable, high-performance applications from scratch and deploy them to production. 
The program covers real-world project structures, REST APIs, authentication, deployment, and state management with Redux and Zustand.

This training is perfect for developers aiming to become proficient in both frontend and backend development using JavaScript.
    `,
    Benefits: [
      "Build end-to-end web applications with hands-on guidance",
      "Understand deployment pipelines using Vercel and AWS",
      "Learn state management (Redux, Zustand, Context API)",
      "Get project-based assignments to strengthen portfolio",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & DevOps Fundamentals",
    image: "/cloudDevops.jpg",
    content: `
This course introduces cloud infrastructure and DevOps workflows essential for scalable web applications. 
You’ll gain hands-on experience with AWS, Docker, and CI/CD pipelines. 
We simplify cloud concepts such as IAM, EC2, S3, and CI/CD automation using GitHub Actions.

By the end of this course, you’ll know how to host, scale, and manage production-grade applications on cloud platforms.
    `,
    Benefits: [
      "Hands-on experience with AWS and Docker",
      "Understand CI/CD and automation tools",
      "Implement secure and scalable deployments",
      "Learn environment management for production systems",
    ],
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI / ML Development Bootcamp",
    image: "/aiMl.jpg",
    content: `
Our AI/ML bootcamp introduces you to artificial intelligence and machine learning from a practical perspective. 
We focus on data preprocessing, model training, and integration with real-world web applications using TensorFlow and OpenAI APIs. 
The sessions include live projects integrating AI in chatbots and predictive analytics.

Ideal for developers who want to enhance their web solutions with AI-powered intelligence.
    `,
    Benefits: [
      "Learn fundamentals of machine learning and deep learning",
      "Integrate AI models into full-stack applications",
      "Work on OpenAI, TensorFlow, and NLP projects",
      "Get guidance on AI-driven business solutions",
    ],
  },

  {
    id: "corporate",
    icon: Users,
    title: "Corporate Custom Workshops",
    image: "/corporate.jpg",
    content: `
We provide customized corporate workshops tailored to your company’s tech stack and team needs. 
Our trainers collaborate with your internal teams to upskill them in React, Next.js, AI integration, and cloud strategies.

Workshops can be conducted onsite or online, focusing on real business challenges.
    `,
    Benefits: [
      "Tailored sessions for your team’s skill level",
      "Project-based learning aligned with your business goals",
      "Flexible schedule (onsite/remote options)",
      "Post-training mentorship and support",
    ],
  },
];

export const wevDevSection = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Code,
    image: "/frontend.jpg",
    content: `
We design and build high-performing, responsive, and visually engaging web interfaces using modern frameworks such as React, Next.js, and TailwindCSS.

Our frontend approach focuses on user experience, accessibility, and performance. We ensure fast load times, intuitive navigation, and consistent design across devices — from mobile to large screens.

By following best practices in component architecture, state management, and SEO-friendly rendering, we deliver frontends that are not only beautiful but also scalable and easy to maintain as your product grows.
    `,
  },
  {
    id: "backend",
    title: "Backend Engineering",
    icon: Server,
    image: "/backend.jpg",
    content: `
We build secure, scalable, and maintainable backend systems using Node.js, Express, and Strapi.

Our backend solutions handle authentication, authorization, business logic, and data workflows with reliability and performance in mind. We design APIs that are easy to integrate, well-documented, and optimized for both web and mobile applications.

By applying clean architecture principles and industry-standard security practices, we ensure your backend can grow smoothly with increasing users and data volume.
    `,
  },
  {
    id: "database",
    title: "Database Management",
    icon: Database,
    image: "/database.avif",
    content: `
We design and manage robust database systems using both SQL (PostgreSQL) and NoSQL (MongoDB) technologies.

Our database strategy includes schema design, indexing, query optimization, and data integrity management to ensure fast and reliable access to your data. We focus on scalability and consistency, even for data-intensive applications.

Whether it's transactional data or analytical workloads, we ensure your data layer remains secure, performant, and future-ready.
    `,
  },
  {
    id: "devops",
    title: "Cloud & DevOps",
    icon: Cloud,
    image: "/cloud.avif",
    content: `
We implement cloud-native and DevOps best practices to streamline development and deployment workflows.

Using Docker, CI/CD pipelines, and AWS cloud services, we automate builds, testing, and deployments — reducing release risks and accelerating time to market.

Our DevOps approach ensures high availability, monitoring, and scalability, so your application stays reliable even under heavy traffic and evolving business demands.
    `,
  },
  {
    id: "deployment",
    title: "Deployment & Optimization",
    icon: Rocket,
    image: "/rocket.jpg",
    content: `
Once your application is production-ready, we focus on deployment, optimization, and long-term performance.

We handle SEO optimization, performance tuning, caching strategies, and analytics integration to ensure your product is fast, discoverable, and measurable.

Our goal is not just to launch your application, but to continuously improve its speed, stability, and visibility — helping your business achieve real results.
    `,
  },
];

export const teamMembers = [
  {
    name: "Shreya Jabagond",
    qualification: "MBA in Business Management",
    experience: "4+ years in Marketing & Operations",
    designation: "Co-Founder & Director",
    image: null,
  },
  {
    name: "Mahesh Masal",
    qualification: "B.Tech in Electrical Engineering",
    experience: "6+ years in Software Development",
    designation: "Founder & CEO",
    image: "/MaheshPic.jpeg",
  },
  {
    name: "Pavan Potdar",
    qualification: "B.Tech in Electrical Engineering",
    experience: "8+ years in Software Development",
    designation: "Founder & CEO",
    image: "/PavanPic2.jfif",
  },
  {
    name: "Umashankar Jabagond",
    qualification: "B.Tech in Mechanical Engineering",
    experience: "6+ years in Software Development",
    designation: "Founder & CEO",
    image: "/UmashankarPic.jpg",
  },
];

export const aboutData = [
  {
    title: "Company Overview",
    content:
      "SkillForge AI Technologies Pvt Ltd is a next-generation technology company dedicated to delivering intelligent digital solutions that fuel business growth and operational efficiency. We specialize in web development, mobile application development, AI tool integration, and professional training programs.",
  },
  {
    title: "Web Development",
    content:
      "Our web development services focus on creating highly responsive, scalable, and secure websites that drive engagement and deliver an exceptional user experience.",
  },
  {
    title: "Mobile Development",
    content:
      "In mobile development, we craft intuitive and high-performance applications for both Android and iOS platforms.",
  },
  {
    title: "AI Tools",
    content:
      "Our expertise in AI tools empowers businesses to harness the potential of artificial intelligence. From machine learning models to automation tools and predictive analytics, we help organizations optimize workflows.",
  },
  {
    title: "Training Programs",
    content:
      "Our training programs equip professionals and students with the skills needed to excel in the tech industry with hands-on experience.",
  },
];
