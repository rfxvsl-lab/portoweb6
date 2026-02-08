# Brooklyn Gilbert - Product Designer Portfolio

## 📋 Overview
A modern, vibrant personal portfolio website for Brooklyn Gilbert, a Product Designer and UI/UX specialist. Features a stunning purple-pink gradient color scheme, sophisticated Plus Jakarta Sans typography, and smooth interactive animations.

## ✨ Key Features

### 🎨 Design Elements
- **Color Scheme**: Purple (#8B5CF6) to Pink (#D946EF) gradient with light backgrounds
- **Typography**: Plus Jakarta Sans (modern, clean geometric sans-serif)
- **Layout**: Single-page design with smooth section navigation
- **Animations**: 8+ custom animations (fadeInUp, fadeInDown, slideInLeft, slideInRight, scaleIn, pulse, slideDown, shimmer)
- **Icons**: Lucide Icons (customizable SVG icons)
- **Decorative Elements**: Animated blur blobs, gradients, shadows

### 🚀 Functionality
- ✅ **Mobile Menu**: Responsive hamburger menu with auto-close
- ✅ **Smooth Scrolling**: Anchor link navigation with offset
- ✅ **Active Navigation**: Dynamic nav highlighting on scroll
- ✅ **Form Validation**: Contact form with email validation and feedback
- ✅ **Scroll Animations**: Intersection Observer for reveal effects
- ✅ **Portfolio Filtering**: Filter projects by category (All, Design, Development, Branding)
- ✅ **Interactive Cards**: Hover effects and scale animations
- ✅ **Icon Reinitializer**: Lucide icons refresh on page interactions

### 📱 Sections

#### **Navigation**
- Fixed navbar with logo and menu
- Active link highlighting
- Mobile hamburger menu
- Contact button with gradient

#### **Hero Section**
- Large headline with gradient text
- Subtitle and call-to-action buttons
- Profile image with rotation effect
- Statistics cards (Projects, Clients, Years Experience)
- Floating badge with success indicator

#### **About Section**
- About image with blur background
- Rating badge with star rating
- Professional description
- Project link and phone button
- Image hover effects

#### **Work Process**
- 4-step process cards (Research, Analyze, Design, Launch)
- Icon-based visual design
- Hover color transitions
- Shadow effects

#### **Portfolio**
- 6 featured projects with filtering
- Categories: Design, Development, Branding
- Image hover overlays
- "View Case" buttons
- Category tags

#### **CTA Section**
- Dark background with white text
- Large headline
- Call-to-action button
- Arrow icon

#### **Blog Section**
- 4 featured blog articles
- Image hover zoom effect
- Category and date information
- Clickable cards

#### **Services Section**
- 3 service cards (User Research, UI/UX Design, Web Development)
- Icon-based presentation
- Active/highlighted card
- Description text

#### **Clients Section**
- Logo showcase
- Grayscale hover effect
- Professional appearance

#### **Footer**
- Contact information cards
- Email and phone links
- Contact form
- Social media links
- Copyright information

## 📁 File Structure

```
Portofolio-Website6/
├── index.html          # Main HTML file (700+ lines)
├── css/
│   └── style.css       # Custom styles & animations (330+ lines)
├── js/
│   └── main.js         # Interactive functionality (290+ lines)
└── README.md           # This file
```

## 🛠️ Technology Stack

- **HTML5**: Semantic markup with responsive design
- **Tailwind CSS**: CDN-based utility framework
- **Vanilla JavaScript**: Pure JS (no dependencies)
- **Lucide Icons**: SVG icon library
- **Google Fonts**: Plus Jakarta Sans typeface

## 🚀 Quick Start

### 1. **No Installation Required**
Simply open `index.html` in a modern web browser. All dependencies are loaded from CDN.

```bash
# Open in browser
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux
```

### 2. **Live Server (Recommended)**
For better development experience:

```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Then visit: http://localhost:8000
```

## 🎨 Customization Guide

### Change Primary Colors
Edit CSS variables:

**In CSS file (`css/style.css`):**
```css
:root {
    --color-primary-purple: #YOUR_PURPLE;
    --color-primary-pink: #YOUR_PINK;
}
```

**In HTML `<style>` tag:**
```css
.text-gradient {
    background: linear-gradient(to right, #YOUR_PURPLE, #YOUR_PINK);
}

.bg-gradient-primary {
    background: linear-gradient(135deg, #YOUR_PURPLE 0%, #YOUR_PINK 100%);
}
```

### Update Content

**Hero Section**:
- Location: `index.html` lines 66-115
- Change name, title, and description
- Update button text

**About Section**:
- Location: `index.html` lines 117-155
- Update biography text
- Change profile image URL
- Modify statistics

**Portfolio**:
- Location: `index.html` lines 180-250
- Update project images and titles
- Change data-portfolio-category values
- Modify project descriptions

**Blog**:
- Location: `index.html` lines 320-345
- Update article titles and images
- Change publication dates
- Modify category tags

**Services**:
- Location: `index.html` lines 347-385
- Update service descriptions
- Change service titles
- Modify icon names

**Contact Form**:
- Location: `index.html` lines 420-430
- Update form fields
- Add email submission endpoint

### Modify Animations
Edit `css/style.css`:

```css
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}
```

### Change Font
Update Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (md breakpoint)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Mobile menu automatically appears on screens smaller than 768px.

## 🔧 JavaScript Functions

Located in `js/main.js`:

1. **`initMobileMenu()`** - Hamburger menu toggle and management
2. **`initSmoothScroll()`** - Smooth anchor link scrolling
3. **`initActiveNavLink()`** - Dynamic nav highlighting
4. **`initFormHandling()`** - Contact form validation
5. **`initScrollReveal()`** - Scroll-triggered animations
6. **`initPortfolioFilter()`** - Portfolio filtering by category
7. **`initBackToTop()`** - Back to top button (optional)
8. **`reinitializeIcons()`** - Lucide icons refresh
9. **`initAll()`** - Initialize all functions

## ✅ Browser Support

- Chrome/Chromium (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Features

- CDN-based dependencies (no build required)
- Intersection Observer for lazy animation
- Minimal custom CSS (330 lines)
- Optimized image loading
- Zero JavaScript dependencies
- Smooth 60fps animations

## 📝 SEO Optimization

Meta tags included:
- Title: "Brooklyn Gilbert - Product Designer"
- Viewport for mobile responsiveness
- Semantic HTML5 structure

Enhance with:
- Add meta description tag
- Add open graph tags for social sharing
- Add structured data (schema.org)
- Optimize image alt attributes
- Add canonical tags

## 🐛 Troubleshooting

### Mobile menu not working
- Check `data-mobile-menu-btn` on button
- Verify `data-mobile-menu` on menu container
- Ensure CSS is linked

### Portfolio filtering not working
- Confirm `data-portfolio-filter` values on buttons
- Verify `data-portfolio-category` on items match filter values
- Check browser console for errors

### Animations not showing
- Ensure `css/style.css` is linked
- Verify animation class names match
- Check for CSS errors in console

### Form not validating
- Check for missing input fields
- Verify email validation logic
- Ensure form has submit button

### Icons not displaying
- Check Lucide CDN link is active
- Verify network connectivity
- Inspect HTML for correct icon classes

## 📞 Contact Information

- **Email**: brooklyn@design.com
- **Phone**: +0123 456 789
- **Website**: [yoursite.com]
- **Social**: Instagram, Twitter, Dribbble

## 🚀 Future Enhancements

- [ ] Add form backend integration
- [ ] Implement dark mode toggle
- [ ] Add project detail pages
- [ ] Integrate CMS for content
- [ ] Add blog post pages
- [ ] Implement analytics
- [ ] Add service worker for offline

## 📄 License

This portfolio template is created for Brooklyn Gilbert. Feel free to use as inspiration for your own portfolio.

---

**Created**: February 2026  
**Version**: 1.0  
**Last Updated**: February 8, 2026  
**Type**: Professional Product Designer Portfolio
