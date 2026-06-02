# Code Craft Ke - Portfolio Website

A modern, professional portfolio website for Code Craft Ke built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

✅ **Modern Design** - Dark theme with lime green accents  
✅ **Responsive** - Mobile-first, works on all devices  
✅ **Fast** - Optimized for performance with Next.js 14  
✅ **SEO Ready** - Metadata and structured data included  
✅ **No Errors** - Production-ready, thoroughly tested  
✅ **Easy Customization** - Simple to update content and colors  

## Sections

- **Hero** - Eye-catching introduction
- **Services** - 6 core service offerings
- **Portfolio** - Showcase of recent work
- **Testimonials** - Client feedback and reviews
- **Contact** - WhatsApp, Email, and Contact Form

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or extract the project:
```bash
cd code-craft-ke
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` from `.env.example`:
```bash
cp .env.example .env.local
```

4. Update 
5. Start development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization Guide

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#0f172a',      // Main dark blue
  secondary: '#1e293b',    // Lighter blue
  accent: '#84cc16',       // Lime green
  'accent-light': '#a3e635' // Light lime
}
```

### Update Content
All content is in `app/page.tsx`. Simply find the section and update:
- Service descriptions
- Portfolio projects
- Testimonials
- Hero text

### Add Your Projects
In the Portfolio section, update the project array with your actual projects.

### Update Social Links
In the Footer section, update the social media links.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Import your GitHub repository
4. Vercel auto-detects Next.js - click Deploy
5. Add environment variables in Vercel settings
6. Domain setup (optional)

### Deploy to Other Platforms

The project can be deployed to:
- Netlify
- Railway
- Heroku
- Firebase Hosting
- AWS Amplify

All support Next.js 14 out of the box.

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
code-craft-ke/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page (all sections)
│   └── globals.css         # Global styles
├── public/                 # Static files
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
└── README.md              # This file
```

## Performance Tips

- ✅ Images are optimized
- ✅ CSS is minified
- ✅ Code is tree-shaken
- ✅ Lazy loading is enabled
- ✅ Fast Core Web Vitals

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Code Craft Ke. All rights reserved.

## Support

For questions or issues:
- WhatsApp: +254716267992
- Email: briangitau9931@gmai.com

## Next Steps

1. Customize the colors, content, and images
2. Set up your domain
3. Configure email notifications
4. Add Google Analytics
5. Submit to search engines

Happy coding! 🚀
