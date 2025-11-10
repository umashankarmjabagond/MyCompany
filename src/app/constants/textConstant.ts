import { Cpu, Bot, LineChart, Workflow, Database, GraduationCap, Code2,
  Cloud,
  Brain,
  FileCode2,
  Users, } from "lucide-react";

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
Benefits:["Speeds up content and data processing","Delivers domain-specific intelligence","Secure, scalable model integration"]  
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
Benefits:["24/7 automated support","Personalized, context-aware replies","Integrates seamlessly with existing systems  "]
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
Benefits:  ["Early risk and opportunity detection","Data-driven business planning","Real-time visualization of performance metrics"]
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
Benefits: ["Saves human effort and reduces errors","Boosts team productivity","Improves overall workflow consistency "]

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
Benefits: ["Clean, centralized data","Faster reporting and analytics","Strategic, data-driven decision making"] 
    },
    {
        id: "training",
        icon: GraduationCap,
        title: "AI Training & Consultation",
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
Benefits:["Builds real-world technical confidence","Tailored learning for corporates and academia","Promotes innovation and skill transformation  "] 

    },
]



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