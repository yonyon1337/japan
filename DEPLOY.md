# 🚀 Deployment to Cloudflare Pages

Your Japan Trip Guide is ready to deploy to **yonatanyadgar.com/japan_ideas**

## ✅ Project Structure
```
japan trip ideas/
├── public/
│   └── index.html          (Your website)
├── wrangler.toml           (Cloudflare config)
├── README.md
└── .git/                   (Git repo)
```

## 📋 Deployment Steps

### Option 1: Automatic via GitHub (Recommended)
1. Push to GitHub:
   ```bash
   cd "C:\Users\Yonatan Yadgar\Desktop\cluade_work\japan trip ideas"
   git add .
   git commit -m "Add Japan trip guide website"
   git push origin main
   ```

2. In Cloudflare Dashboard:
   - Go to Pages
   - Connect your GitHub repo
   - Build command: (leave empty or use `echo "Build complete"`)
   - Build output directory: `public`
   - Deploy!

### Option 2: Deploy with Wrangler CLI
```bash
npm install -g wrangler
wrangler pages deploy public
```

### Option 3: Manual Upload via Dashboard
- Cloudflare Dashboard → Pages
- Upload the `public/` folder
- Set custom domain: `yonatanyadgar.com/japan_ideas`

## 🔗 After Deployment
Your website will be live at:
- **yonatanyadgar.com/japan_ideas**

## 📝 Update Your Site
1. Edit `public/index.html` to update content
2. Commit & push (if using GitHub)
3. Cloudflare auto-redeploys!

---

Need help? Check: https://developers.cloudflare.com/pages/
