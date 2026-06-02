# Quick Start Guide - Code Craft Ke Portfolio

Get your portfolio live in 5 minutes!

## 1️⃣ Prerequisites

Make sure you have:
- [Node.js 18+](https://nodejs.org/)
- [Git](https://git-scm.com/)
- A GitHub account (for deployment)

## 2️⃣ Local Setup (5 minutes)

```bash
# 1. Navigate to project
cd code-craft-ke

# 2. Install dependencies (takes 1-2 min)
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Visit http://localhost:3000
```

You should see your portfolio live! 🎉

## 3️⃣ Customize Your Content

Edit `app/page.tsx` and update:

### Update Contact Info:
```typescript
// Line ~450: WhatsApp number
href="https://wa.me/254700000000?text=..."

// Line ~465: Email
href="mailto:hello@codecraft.ke"
```

### Update Service Descriptions:
Search for "Web Development" in page.tsx and edit the services array.

### Update Portfolio Projects:
Find the Portfolio section and customize projects with your own work.

### Update Testimonials:
Change client names, companies, and quotes.

## 4️⃣ Deploy to Vercel (2 minutes)

### Easiest Option:

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
# Create new repo on github.com
git remote add origin https://github.com/YOUR_USERNAME/code-craft-ke.git
git branch -M main
git push -u origin main
```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy"
   - Done! Your site is live! 🚀

## 5️⃣ Custom Domain (Optional)

1. Buy domain from:
   - [Namecheap](https://namecheap.com)
   - [GoDaddy](https://godaddy.com)
   - [Afriregister](https://afriregister.com)

2. In Vercel dashboard:
   - Go to Project Settings → Domains
   - Add your domain
   - Follow DNS setup instructions
   - Wait 24 hours for propagation

## 6️⃣ Update Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=254700000000
NEXT_PUBLIC_EMAIL=hello@codecraft.ke
```

Update the actual values with yours!

## 7️⃣ Verify Everything Works

- [ ] Site loads
- [ ] No errors in console
- [ ] Mobile looks good
- [ ] WhatsApp link works
- [ ] Email link works
- [ ] All sections visible
- [ ] Smooth scrolling works

## Common Changes

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  accent: '#84cc16',        // Change lime green
  'accent-light': '#a3e635'
}
```

### Change Company Name
Search "Code Craft Ke" in `page.tsx` and `layout.tsx`.

### Add Your Logo
1. Save logo as `/public/logo.png`
2. Update navigation to use it

### Update Footer
Find footer section and update year, links, etc.

## Troubleshooting

### npm install fails
```bash
# Clear cache and try again
npm cache clean --force
rm package-lock.json
npm install
```

### Port 3000 already in use
```bash
npm run dev -- -p 3001
# Now visit http://localhost:3001
```

### Build errors
```bash
# Check for TypeScript errors
npm run build

# Fix errors one by one
# Usually it's a typo or missing import
```

### Changes not showing
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

## Next Steps

1. ✅ Get portfolio online (you're here!)
2. 📝 Update all content with your actual info
3. 📸 Add project screenshots
4. 🎨 Customize colors to match your brand
5. 📧 Set up email notifications (optional)
6. 📊 Add Google Analytics
7. 🔍 Submit to Google Search Console
8. 📱 Share with clients!

## File Structure

```
code-craft-ke/
├── app/
│   ├── page.tsx        ← Main portfolio (edit here!)
│   ├── layout.tsx      ← Metadata & HTML
│   └── globals.css     ← Styles
├── public/             ← Images, assets
├── package.json        ← Dependencies
└── README.md          ← Full documentation
```

## Getting Help

- **Questions about Next.js?** → [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS help?** → [tailwindcss.com](https://tailwindcss.com)
- **Vercel deployment?** → [vercel.com/docs](https://vercel.com/docs)

## Pro Tips

1. **Fast updates**: Every push to GitHub auto-deploys
2. **Preview links**: Get preview URLs before going live
3. **Analytics**: Vercel shows Core Web Vitals automatically
4. **SSL**: Automatic HTTPS with Vercel
5. **CDN**: Global distribution is built-in

---

**You're all set!** Your portfolio is now live and ready to impress clients. 

Good luck! 🚀

Questions? Contact us on WhatsApp!
