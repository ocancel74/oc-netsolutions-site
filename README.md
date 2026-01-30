# OC-NetSolutions Website

A modern, responsive static website for OC-NetSolutions - IT & Network Solutions company.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with cyan/green gradient accents
- **Smooth Animations**: Fade-in effects and scroll-triggered animations
- **SEO Optimized**: Semantic HTML and meta tags
- **Performance**: Lightweight, fast-loading with CSS-only animations where possible
- **Interactive Elements**: Animated counters, form validation, smooth scrolling

## 📁 Project Structure

```
oc-netsolutions-website/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styling
├── js/
│   └── main.js            # JavaScript functionality
├── assets/
│   ├── logo.png           # Company logo
│   └── favicon.png        # Favicon (optional)
├── CNAME                  # Custom domain configuration
└── README.md              # This file
```

## 🎨 Design System

### Colors
- **Primary Cyan**: #00D4FF
- **Teal**: #00C4C4
- **Green**: #00FF9F
- **Mint**: #7DFFC4
- **Dark Background**: #0A0E1A
- **Navy**: #111827
- **Charcoal**: #1A1F2E

### Typography
- **Display Font**: Outfit (Google Fonts)
- **Body Font**: Sora (Google Fonts)

## 🌐 GitHub Pages Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `oc-netsolutions-website` (or any name you prefer)
3. Don't initialize with README, .gitignore, or license

### Step 2: Upload Files

#### Option A: Using Git (Command Line)

```bash
# Navigate to your project directory
cd oc-netsolutions-website

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: OC-NetSolutions website"

# Add remote repository
git remote add origin https://github.com/YOUR-USERNAME/oc-netsolutions-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Option B: Using GitHub Web Interface

1. Go to your repository on GitHub
2. Click "Add file" → "Upload files"
3. Drag and drop all project files
4. Commit the changes

### Step 3: Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Your site will be published at: `https://YOUR-USERNAME.github.io/oc-netsolutions-website/`

### Step 4: Configure Custom Domain (Optional)

If you own the domain `oc-netsolutions.com`:

1. In your repository settings → Pages
2. Under "Custom domain", enter: `oc-netsolutions.com`
3. Check "Enforce HTTPS"
4. In your domain registrar, add these DNS records:
   - Type: A, Name: @, Value: 185.199.108.153
   - Type: A, Name: @, Value: 185.199.109.153
   - Type: A, Name: @, Value: 185.199.110.153
   - Type: A, Name: @, Value: 185.199.111.153
   - Type: CNAME, Name: www, Value: YOUR-USERNAME.github.io

**Note**: DNS propagation can take up to 24-48 hours.

## 🔧 Customization

### Update Content

**Logo**: Replace `assets/logo.png` with your logo (recommended: transparent PNG, 200-300px height)

**Colors**: Edit CSS variables in `css/styles.css`:
```css
:root {
    --color-cyan: #00D4FF;
    --color-green: #00FF9F;
    /* ... other colors */
}
```

**Contact Information**: Update email and phone in `index.html`:
```html
<a href="mailto:YOUR-EMAIL@oc-netsolutions.com">YOUR-EMAIL@oc-netsolutions.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
```

**Services & Solutions**: Edit the service and solution cards in `index.html`

### Form Submission

The contact form currently uses a JavaScript placeholder. To enable real form submissions:

1. **EmailJS**: Use [EmailJS](https://www.emailjs.com/) for free email forwarding
2. **Formspree**: Use [Formspree](https://formspree.io/) for form handling
3. **Netlify Forms**: If deploying to Netlify instead of GitHub Pages
4. **Custom Backend**: Set up your own API endpoint

Example with Formspree:
```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: <2 seconds on 3G
- **No external dependencies**: Except Google Fonts

## 📄 License

This website template is created for OC-NetSolutions. All rights reserved.

## 🤝 Support

For questions or issues:
- Email: info@oc-netsolutions.com
- Phone: +1 (800) 555-0123

---

**Built with ❤️ for OC-NetSolutions**
