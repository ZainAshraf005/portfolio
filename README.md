# 🚀 Portfolio Website

A modern, responsive portfolio website built with cutting-edge technologies to showcase my work, skills, and professional journey.



## ✨ Features

- **🎨 Modern Design** - Clean, minimalist interface with dark theme
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **⚡ Performance Optimized** - Fast loading times with Next.js optimization
- **🎭 Smooth Animations** - Engaging micro-interactions with Framer Motion
- **🎯 SEO Friendly** - Optimized for search engines with proper meta tags
- **♿ Accessible** - Built with accessibility best practices
- **🔧 Type Safe** - Full TypeScript support for better development experience

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[Vercel](https://vercel.com/)** - Deployment platform

## 📁 Project Structure

```
portfolio-website/
├── src/                   # Source code directory
│   ├── app/              # Next.js App Router
│   │   ├── contact/        # Contact page
│   │   ├── certifications/ # Certifications showcase
│   │   ├── projects/       # Projects portfolio
│   │   ├── about/          # About page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/       # Reusable components
│   │   ├── ui/             # UI components (shadcn/ui)
│   │   ├── layout/         # Layout components
│   │   └── sections/       # Page sections
│   └── data/            # Static data and content
│       ├── data.ts         # Data
│
├── public/              # Static assets
│   ├── images/         # Image assets
│   ├── icons/          # Icon files
│   └── documents/      # PDF files, resume, etc.
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── tailwind.config.ts  # Tailwind configuration
├── next.config.mjs     # Next.js configuration
└── package.json        # Dependencies and scripts
```

## 📊 Data Structure

The website uses a centralized data approach with TypeScript interfaces:

### Projects Data (`src/data/projects.ts`)
```typescript
export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  image: string
  featured: boolean
}
```

### Certifications Data (`src/data/certifications.ts`)
```typescript
export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  expiryDate?: string
  verificationUrl?: string
  skills: string[]
  category: string
}
```

### Skills Data (`src/data/skills.ts`)
```typescript
export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'design'
  proficiency: number
  icon?: string
}
```

This structure makes it easy to update content without modifying components.

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (recommended) or **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📄 Pages

### 🏠 Home
- Hero section with introduction
- Featured projects showcase
- Skills overview
- Call-to-action sections

### 👨‍💻 About
- Professional background
- Skills and expertise
- Experience timeline
- Personal interests

### 💼 Projects
- Project portfolio with filtering
- Detailed project cards
- Live demos and source code links
- Technology stack for each project

### 🏆 Certifications
- Professional certifications display
- Category-based filtering
- Verification links
- Skills and technologies covered

### 📞 Contact
- Contact form with validation
- Social media links
- Professional contact information
- Interactive animations

## 🎨 Customization

### Colors
The website uses a carefully crafted color palette defined in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#fffbeb',
    // ... color scale
    900: '#78350f',
  },
  accent: {
    400: '#facc15', // Yellow accent
  }
}
```

### Typography
Typography system is built with Tailwind CSS using:
- **Inter** - Primary font for body text
- **JetBrains Mono** - Monospace font for code

### Animations
Framer Motion animations are configured in `lib/animations.ts`:

```typescript
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}
```

## 📱 Responsive Design

The website is built with a mobile-first approach:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ⚡ Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting with Next.js

## 🔧 Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint errors
pnpm type-check   # Run TypeScript type checking
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. **Deploy** automatically on every push to main branch

### Manual Deployment

```bash
pnpm build
pnpm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Your Name** - [your.email@example.com](mailto:your.email@example.com)

**Portfolio**: [https://yourportfolio.com](https://yourportfolio.com)

**LinkedIn**: [https://linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)

**GitHub**: [https://github.com/yourusername](https://github.com/yourusername)

---

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Vercel](https://vercel.com/) for seamless deployment
- [Lucide Icons](https://lucide.dev/) for beautiful icons

---

<div align="center">
  <p>Built with ❤️ and ☕</p>
  <p>© 2025 M Zain Ashraf. All rights reserved.</p>
</div>