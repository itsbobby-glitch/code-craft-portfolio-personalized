# Deployment Guide - Code Craft Ke Portfolio

Complete step-by-step guide to deploy your portfolio website to production.

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is built for Next.js. It's the fastest and easiest option.

### Steps:

1. **Prepare Your Code**
   - Make sure all files are created correctly
   - Commit to GitHub: `git init && git add . && git commit -m "Initial commit"`
   - Push to GitHub (create a new repo on github.com)

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" and select "Continue with GitHub"
   - Authorize Vercel with GitHub
   - Click "New Project"
   - Select your repository
   - Click "Import"

3. **Configure Environment Variables**
   - In Vercel Dashboard, go to your project settings
   - Click "Environment Variables"
   - Add variables from `.env.example`:
     ```
     NEXT_PUBLIC_WHATSAPP_NUMBER=254700000000
     NEXT_PUBLIC_EMAIL=hello@codecraft.ke
     ```
   - Click "Save"

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for deployment
   - You'll get a `.vercel.app` domain

5. **Custom Domain (Optional)**
   - In Vercel, go to project settings → Domains
   - Add your custom domain (e.g., codecraft.ke)
   - Follow DNS instructions from your domain registrar
   - Takes 24-48 hours to propagate

## Option 2: Deploy to Netlify

### Steps:

1. **Connect GitHub**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository

2. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Add Environment Variables**
   - Go to Site settings → Build & deploy → Environment
   - Add your variables

4. **Deploy**
   - Click "Deploy site"
   - Your site is live!

## Option 3: Docker Deployment

Deploy using Docker to any cloud provider.

### Create Dockerfile:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Build and Run Locally:

```bash
docker build -t code-craft-ke .
docker run -p 3000:3000 code-craft-ke
```

### Deploy to Cloud:

**Railway.app (Easiest)**
- Push to GitHub
- Go to railway.app
- Click "New Project"
- Select "Deploy from GitHub"
- Select your repo
- Railway auto-detects Next.js
- Sets up environment variables
- Click Deploy

**DigitalOcean App Platform**
- Requires Dockerfile
- Go to DigitalOcean
- Create new app
- Connect GitHub
- Configure and deploy
- More control, slightly harder

**AWS, Google Cloud, Azure**
- All support Docker containers
- Use their container registry
- Scale as needed

## Option 4: Traditional VPS (Ubuntu/Linux)

For more control and customization.

### Server Setup:

```bash
# SSH into your server
ssh root@your_server_ip

# Update system
apt update && apt upgrade -y

# Install Node.js
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs

# Install PM2 (process manager)
npm install -g pm2

# Clone your repository
git clone your_repo_url
cd code-craft-ke

# Install dependencies
npm install

# Build
npm run build

# Start with PM2
pm2 start npm --name "code-craft" -- start
pm2 startup
pm2 save

# Install Nginx
apt install -y nginx

# Configure Nginx (edit /etc/nginx/sites-available/default)
# Add reverse proxy to localhost:3000
# Enable SSL with Let's Encrypt
certbot certonly --standalone -d yourdomain.com
```

## DNS Configuration

After deployment, point your domain:

### For Vercel:
```
A record: 76.76.19.89
CNAME record: cname.vercel.com
```

### For Netlify:
```
A record: given by Netlify
CNAME record: your-site.netlify.app
```

### For Custom VPS:
```
A record: your_server_ip
```

## SSL/HTTPS Setup

### With Vercel/Netlify:
- Automatic! No action needed
- They use Let's Encrypt
- Auto-renewal included

### With VPS:
```bash
# Install Certbot
apt install certbot python3-certbot-nginx

# Get certificate
certbot certonly --nginx -d yourdomain.com

# Auto-renewal
systemctl enable certbot.timer
systemctl start certbot.timer
```

## Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] Mobile responsive (test on phone)
- [ ] Contact form works
- [ ] WhatsApp link works
- [ ] Email link works
- [ ] All links scroll correctly
- [ ] Images load properly
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] SSL certificate valid

## Performance Monitoring

### Google Analytics
1. Create Google Analytics account
2. Copy measurement ID
3. Add to `next.config.js`:
```javascript
module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' }
        ]
      }
    ]
  }
}
```

### Vercel Analytics (Automatic)
- Sign in to Vercel Dashboard
- Click Analytics
- Monitor Core Web Vitals, real user metrics

## Troubleshooting

### Site won't load
- Check build logs in Vercel/Netlify
- Verify environment variables are set
- Check for TypeScript errors: `npm run build`

### Slow loading
- Check Core Web Vitals in Vercel Analytics
- Optimize images
- Enable caching headers
- Use CDN (included with Vercel)

### Form not working
- WhatsApp: Verify phone number format
- Email: Check email link is correct
- Contact form: Needs backend (consider using Formspree or similar)

## Contact Form (Advanced)

To make contact form functional, integrate with:

**Option 1: Formspree** (Easiest)
1. Go to formspree.io
2. Create new form
3. Update form action in page.tsx
4. Enable email notifications

**Option 2: Nodemailer**
- Create backend API route
- Configure SMTP
- Send emails programmatically

**Option 3: Third-party service**
- SendGrid
- Mailgun
- AWS SES

## Updating Content

After deployment:

1. Edit files locally
2. Commit changes: `git add . && git commit -m "Update content"`
3. Push to GitHub: `git push`
4. Vercel/Netlify auto-deploys!

## Helpful Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## Support

For issues:
- Check Next.js documentation
- Search GitHub issues
- Post on Stack Overflow
- Ask in Next.js Discord

Good luck! Your portfolio is ready to shine! 🚀
