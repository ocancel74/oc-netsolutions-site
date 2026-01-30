# Quick Deployment Guide

## 🚀 Deploy to GitHub Pages (5 Minutes)

### Prerequisites
- GitHub account
- Project files downloaded

### Steps

#### 1. Create Repository
- Go to github.com
- Click "New repository"
- Name: `oc-netsolutions`
- Public repository
- Don't add README, .gitignore, or license
- Click "Create repository"

#### 2. Upload Files

**Easy Method (Web Upload):**
1. On your new repository page, click "uploading an existing file"
2. Drag and drop ALL files from the project folder
3. Write commit message: "Initial website deployment"
4. Click "Commit changes"

**Git Method (Terminal):**
```bash
cd path/to/oc-netsolutions-website
git init
git add .
git commit -m "Initial website deployment"
git remote add origin https://github.com/YOUR-USERNAME/oc-netsolutions.git
git branch -M main
git push -u origin main
```

#### 3. Enable GitHub Pages
1. Go to repository Settings
2. Click "Pages" in sidebar
3. Source: Select "main" branch
4. Click "Save"
5. Wait 2-3 minutes

#### 4. View Your Site
Your site will be live at:
```
https://YOUR-USERNAME.github.io/oc-netsolutions/
```

---

## 🌐 Custom Domain Setup (Optional)

### If you own oc-netsolutions.com:

#### A. Configure GitHub
1. Repository Settings → Pages
2. Custom domain: `oc-netsolutions.com`
3. Check "Enforce HTTPS"
4. Click "Save"

#### B. Configure DNS (at your domain registrar)

**For Apex Domain (oc-netsolutions.com):**
Add these A records:
```
Type: A    Name: @    Value: 185.199.108.153
Type: A    Name: @    Value: 185.199.109.153
Type: A    Name: @    Value: 185.199.110.153
Type: A    Name: @    Value: 185.199.111.153
```

**For WWW Subdomain:**
```
Type: CNAME    Name: www    Value: YOUR-USERNAME.github.io
```

⏱️ DNS changes take 24-48 hours to propagate

---

## ✅ Verification Checklist

After deployment, check:
- [ ] Site loads at GitHub Pages URL
- [ ] Logo displays correctly
- [ ] All links work
- [ ] Mobile menu works
- [ ] Form submission shows success message
- [ ] Smooth scrolling works
- [ ] Animations trigger on scroll
- [ ] Contact information is correct

---

## 🔧 Quick Customization

### Change Contact Info
Edit `index.html` around line 450:
```html
<a href="mailto:YOUR-EMAIL">YOUR-EMAIL</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
```

### Change Colors
Edit `css/styles.css` lines 5-15:
```css
:root {
    --color-cyan: #00D4FF;
    --color-green: #00FF9F;
}
```

### Update Services
Edit service cards in `index.html` starting around line 90

---

## 🆘 Troubleshooting

**Site not showing after enabling Pages?**
- Wait 2-3 minutes and refresh
- Check Settings → Pages shows green checkmark
- Clear browser cache

**Logo not displaying?**
- Verify `assets/logo.png` exists
- Check file name is exactly `logo.png`
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

**Custom domain not working?**
- Wait 24-48 hours for DNS
- Verify DNS records at your registrar
- Check GitHub Pages custom domain is saved
- Try www.oc-netsolutions.com instead

**Mobile menu not working?**
- Check JavaScript is enabled
- Clear cache and cookies
- Try different browser

---

## 📞 Need Help?

Issues? Contact:
- GitHub Pages Docs: https://docs.github.com/en/pages
- GitHub Support: https://support.github.com

---

**Last Updated**: January 2026
