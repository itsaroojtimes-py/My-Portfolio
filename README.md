# Arooj Shahzadi - Portfolio

A modern, luxurious portfolio website built with React, TanStack Router, and Vite. Featuring smooth animations, glowing effects, and a stunning user experience.

## 🌟 Features

- **Modern Design** - Clean, minimalist interface with vibrant neon gradients
- **Smooth Animations** - Framer Motion powered interactions and transitions
- **Responsive Layout** - Fully responsive design for all devices
- **Performance Optimized** - Built with Vite for lightning-fast load times
- **Beautiful UI Components** - Radix UI components with custom styling
- **Glowing Effects** - Neon glow animations and cursor tracking
- **Dark Theme** - Eye-friendly dark mode with accent colors
- **SEO Optimized** - Meta tags and structured data for search engines

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+
- **Routing**: TanStack Router
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Form Handling**: React Hook Form
- **State Management**: React Query
- **Deployment**: Cloudflare Workers / Vercel

## 📋 Prerequisites

- Node.js 18+ or Bun
- npm or yarn or bun

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/itsaroojtimes-py/My-Portfolio.git
cd My-Portfolio

# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Start the development server
npm run dev
# or
bun run dev
```

The application will be available at `http://localhost:8080/`

### Build

```bash
# Build for production
npm run build
# or
bun run build
```

### Preview

```bash
# Preview the production build locally
npm run preview
# or
bun run preview
```

## 📂 Project Structure

```
src/
├── components/        # React components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Portfolio.tsx
│   ├── Skills.tsx
│   ├── Services.tsx
│   ├── Education.tsx
│   ├── Footer.tsx
│   ├── Nav.tsx
│   └── ui/           # Radix UI components
├── routes/           # TanStack Router pages
│   ├── __root.tsx    # Root layout
│   ├── index.tsx     # Home page
│   ├── about.tsx
│   ├── portfolio.tsx
│   ├── services.tsx
│   ├── skills.tsx
│   ├── education.tsx
│   ├── contact.tsx
│   └── hire.tsx
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── styles.css        # Global styles
└── router.tsx        # Router configuration
```

## 🌐 Sections

- **Hero** - Eye-catching introduction with call-to-action buttons
- **About** - Personal introduction and background
- **Skills** - Technical skills and expertise
- **Services** - Services offered
- **Portfolio** - Showcase of projects and work
- **Education** - Educational background
- **Contact** - Contact form and social links
- **Hire** - Hire me section

## 🎨 Customization

### Colors & Themes

The portfolio uses CSS custom properties for theming. Edit `styles.css` to customize:

```css
--gradient-neon: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
--color-accent: #06b6d4;
--color-background: #0a0a0a;
```

### Social Links

Update social links in `src/components/Contact.tsx`:

```tsx
const socials = [
  { name: "GitHub", href: "https://github.com/itsaroojtimes-py", icon: "..." },
  { name: "LinkedIn", href: "https://linkedin.com/...", icon: "..." },
  // Add more social links
];
```

## 🚀 Deployment

### Deploy to Vercel

The project is pre-configured for Vercel deployment:

1. **Push to GitHub**:
```bash
git push -u origin main
```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

Vercel will automatically:
- Detect the Vite project
- Build with `npm run build`
- Deploy the `dist` folder
- Generate a live URL

### Environment Variables

If you need environment variables, add them in Vercel dashboard:

```
VITE_API_URL=https://api.example.com
```

### Deploy to Other Platforms

**Netlify**:
```bash
npm run build
# Drag and drop the dist folder to Netlify
```

**Cloudflare Pages**:
```bash
npm run build
# Connect your GitHub repo to Cloudflare Pages
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🔒 Environment Setup

Create a `.env` file in the root (if needed):

```env
VITE_API_URL=http://localhost:3000
```

## 📧 Contact

- **Email**: its.aroojtimes@gmail.com
- **GitHub**: [itsaroojtimes-py](https://github.com/itsaroojtimes-py)
- **Location**: Pakistan

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgments

- Built with [TanStack Router](https://tanstack.com/router/latest)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Framer Motion](https://www.framer.com/motion)
- Components from [Radix UI](https://www.radix-ui.com)
- Deployed with [Vercel](https://vercel.com)

---

**Made with ❤️ by Arooj Shahzadi**
