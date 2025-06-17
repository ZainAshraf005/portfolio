export const stacks = [
  {
    name: "Node JS",
    description: "Backend Runtime",
    image: "/assets/svg/node.svg",
    theory:
      "A fast, event-driven runtime environment that allows me to build scalable, real-time web applications using JavaScript on the server side. I use it to create robust backends and APIs.",
  },
  {
    name: "React JS",
    description: "Frontend Library",
    image: "/assets/svg/react.svg",
    theory:
      "A declarative and component-based JavaScript library I use to build interactive user interfaces efficiently. React helps create scalable and maintainable frontend applications.",
  },

  {
    name: "Express JS",
    description: "Web Framework",
    image: "/assets/svg/express.svg",
    theory:
      "A minimalist and flexible Node.js framework that simplifies backend development. I use Express to build RESTful APIs and structure web applications using modern architecture patterns.",
  },
  {
    name: "Next.js",
    description: "Full-Stack Framework",
    image: "/assets/svg/next.svg",
    theory:
      "A React-based framework I use for building full-stack web applications with features like server-side rendering, API routes, and powerful routing out of the box.",
  },

  {
    name: "ChatGPT",
    description: "AI Assistant",
    image: "/assets/svg/chatgpt.png",
    theory:
      "An advanced language model developed by OpenAI that I use for content generation, idea exploration, and integrating intelligent features into applications.",
  },

  {
    name: "Python",
    description: "Scalable Backends",
    image: "/assets/svg/python-2.svg",
    theory:
      "A powerful and versatile programming language I use for backend development, scripting, automation, and exploring AI/ML. Its simplicity and strong community support make it ideal for solving complex problems efficiently.",
  },
  {
    name: "Redux",
    description: "State Management",
    image: "/assets/svg/redux.svg",
    theory:
      "A predictable state container for JavaScript apps. I use Redux to manage global application state efficiently, especially in larger React applications.",
  },
  {
    name: "MongoDB",
    description: "NoSQL Database",
    image: "/assets/svg/mongodb.svg",
    theory:
      "A flexible, document-based NoSQL database that I use to build scalable and dynamic applications. It pairs well with JavaScript-based stacks like MERN.",
  },
  {
    name: "PostgreSQL",
    description: "Relational Database",
    image: "/assets/svg/pgsql.svg",
    theory:
      "A powerful, open-source relational database system that supports advanced queries and transactions. I use PostgreSQL for applications that require structured data and complex relationships.",
  },
];

const cartzeno_description = `# CartZeno 🛒

**CartZeno** is a full-stack modern e-commerce application built for performance, scalability, and a smooth user experience.

## 🔧 Tech Stack

- **Frontend**: Next.js, Tailwind CSS, TypeScript
- **Backend**: Express.js, MongoDB, JWT Auth
- **Features**: Stripe integration, Admin dashboard, Wishlist, Cart management

## ✨ Key Features

- 🛍️ Browse products by category or search
- 👤 Auth system with JWT (login/register)
- ❤️ Add/remove items to wishlist
- 🛒 Persistent cart with quantity management
- 💳 Secure payments with Stripe
- 🛠️ Admin panel for product management

## 📁 Folder Structure (Backend)

/controllers
/routes
/models
/middleware
/utils

markdown
Copy
Edit

## 🚀 Getting Started

1. Clone the repo:
git clone https://github.com/username/cartzeno.git

markdown
Copy
Edit

2. Install dependencies:
pnpm install

markdown
Copy
Edit

3. Run dev server:
pnpm dev

yaml
Copy
Edit
`;
const jobfinder_description = `

## JobFinder - Smart Job Portal Web App

**JobFinder** is a modern job portal built with **Next.js**, designed to connect job seekers and employers seamlessly.

### 🔍 Key Features
- **Authentication & Authorization**  
  Secure sign-up and login for job seekers and employers with role-based access.

- **Job Posting & Applications**  
  Employers can post jobs, and seekers can apply instantly with their profiles.

- **Dynamic Dashboards**  
  Separate dashboards for employers and job seekers with relevant tools and insights.

- **Advanced Filters**  
  Search jobs by role, location, experience, and keywords.

- **Responsive UI**  
  Built with Tailwind CSS for a smooth experience across all devices.

### 🛠 Tech Stack
- **Frontend:** Next.js, Tailwind CSS  
- **Backend:** API Routes in Next.js  
- **Database:** MongoDB (via Mongoose)  
- **Authentication:** JWT

This platform simplifies the recruitment process and offers a real-time experience for both parties.
`;
const zanylinks_description = `ZanyLinks 🔗
ZanyLinks is a modern Linktree clone that lets users create and manage personalized bio link pages — perfect for influencers, developers, and businesses to showcase all their important links in one place.

🔧 Tech Stack
Frontend: Next.js, Tailwind CSS, TypeScript

Backend: Express.js, MongoDB, JWT Auth

Other Tools: Zustand, Cloudinary, GitHub/Google OAuth

✨ Key Features
👤 Authentication with Google & GitHub

🌐 Public profile pages with custom usernames

➕ Add, edit, delete social and custom links

🎨 Responsive and clean UI with Tailwind CSS

📸 Profile picture upload via Cloudinary

🧠 Zustand for global state management

🔒 JWT-based secure sessions

📁 Folder Structure (Backend)
bash
Copy
Edit
/controllers  
/routes  
/models  
/middleware  
/utils  
/config  
🚀 Getting Started
Clone the repo:

bash
Copy
Edit
git clone https://github.com/username/zanylinks.git
Install dependencies:

bash
Copy
Edit
pnpm install
Run the dev server:

bash
Copy
Edit
pnpm dev
`;

export const projects = [
  {
    src: "/assets/cartzeno-2.png",
    image: "/assets/cartzeno.png",
    category: "web development",
    live: "https://cartzeno.vercel.app/",
    title: "cartzenon ecommerce",
    description: cartzeno_description,
    github: "https://github.com/ZainAshraf005/cartzeno",
  },
  {
    src: "/assets/jobfinder-2.png",
    image: "/assets/jobfinder.png",
    category: "web development",
    live: "https://job-finder-zainashraf-005.vercel.app/",
    title: "job finder platform",
    description: jobfinder_description,
    github: "https://github.com/ZainAshraf005/JobFinder",
  },
  {
    src: "/assets/zanylinks-2.png",
    image: "/assets/zanylinks.png",
    category: "web development",
    live: "https://zany-links.vercel.app",
    title: "zany links",
    description: zanylinks_description,
    github: "https://github.com/ZainAshraf005/ZanyLinks",
  },
];

export const experience = [
  {
    company: "Fiverr",
    title: "Freelance Web Developer",
    date: "2021 - Present",
  },
  {
    company: "Developers Hub",
    title: "Full Stack Web Developer Intern",
    date: "Jan - April 2025",
  },
];

export const qualification = [
  {
    title: "Bachelor's Degree in Information Technology",
    description: "University of the Punjab (2026)",
  },
  {
    title: "Intermediate in Computer Science",
    description: "Govt. Graduate College Sabzazar (2022)",
  },
];

export const myCertifications = [
  {
    id: "1",
    title: "Data Science & Analytics",
    issuer: "HP Life",
    date: "17-06-2025", // date-format is DD-MM-YYYY
    image: "/assets/hp.png",
    verificationUrl: "https://www.life-global.org/certificate/df5b125f-9e32-4c10-b617-e0be37b23f1b",
    skills: ["Data Science", "Data Analytics"],
    category: "cloud",
    status: "active",
    description:
      "Conceptual information about data science and analytics.",
  },
  {
    id: "2",
    title: "Coding Foundations",
    issuer: "Sololearn",
    date: "23-05-2025", // date-format is DD-MM-YYYY
    image: "/assets/sololearn.png",
    verificationUrl: "https://www.sololearn.com/certificates/CC-AJAI4EMK",
    skills: ["programming fundamentals", "OOP", "HTML", "SQL"],
    category: "cloud",
    status: "active",
    description:
      "Validates expertise in programming fundamentals, OOP, HTML, and SQL.",
  },
  {
    id: "3",
    title: "Web Development Certification",
    issuer: "Sololearn",
    date: "20-11-2023",
    image: "/assets/sololearn.png",
    verificationUrl: "https://www.sololearn.com/certificates/CC-IACPP9W1",
    skills: ["React", "JavaScript", "JSX", "Hooks", "State Management"],
    category: "frontend",
    status: "active",
    description:
      "Demonstrates proficiency in building modern React applications.",
  },
  {
    id: "4",
    title: "Introduction to MERN Stack",
    issuer: "Simplilearn",
    date: "26-09-2024",
    image: "/assets/simplilearn.png",
    verificationUrl: "https://simpli-web.app.link/e/Cr35wKzBCTb",
    skills: ["MongoDB", "Express", "React", "Node.js"],
    category: "cloud",
    status: "active",
    description:
      "Validates experties in making web applications using MERN stack.",
  },
  {
    id: "5",
    title: "Python Developer",
    issuer: "Sololearn",
    date: "31-08-2024",
    image: "/assets/sololearn.png",
    verificationUrl: "https://www.sololearn.com/certificates/CC-WGFYGBCI",
    skills: ["Functional Programming", "OOP"],
    category: "database",
    status: "active",
    description:
      "Demonstrates expertise in Python programming and OOP concepts.",
  },
];
