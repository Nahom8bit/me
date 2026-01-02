# Product Requirements Document (PRD)
## Personal Portfolio Website - Nahom Daniel Negash

**Version:** 1.0  
**Date:** January 2026  
**Status:** Draft

---

## 1. Executive Summary

### 1.1 Product Overview
A modular, JSON-driven personal portfolio website that showcases professional work, projects, and contact information. The site prioritizes easy content updates without code changes through a centralized configuration system.

### 1.2 Goals
- Create a professional online presence
- Enable non-technical content updates via JSON
- Support portfolio expansion over time
- Maintain fast load times and clean design
- Deploy easily to Vercel or GitHub Pages

### 1.3 Target Audience
- **Primary:** Potential clients and collaborators
- **Secondary:** Recruiters and business partners
- **Tertiary:** Professional network contacts

---

## 2. Technical Requirements

### 2.1 Technology Stack
- **Framework:** Static HTML/CSS/JavaScript (vanilla) or Next.js
- **Styling:** Tailwind CSS for responsive design
- **Data:** JSON configuration files
- **Hosting:** Vercel (primary) or GitHub Pages (fallback)
- **Version Control:** Git/GitHub

### 2.2 Performance Requirements
- Initial page load: < 2 seconds
- Lighthouse score: 90+ across all metrics
- Mobile-first responsive design
- Works offline after initial load (optional PWA)

### 2.3 Browser Support
- Chrome, Firefox, Safari, Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 3. System Architecture

### 3.1 File Structure
```
portfolio-website/
├── public/
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   └── logos/
│   └── documents/
├── src/
│   ├── data/
│   │   ├── profile.json
│   │   ├── projects.json
│   │   ├── skills.json
│   │   ├── experience.json
│   │   └── config.json
│   ├── components/
│   │   ├── Header.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   │   ├── Experience.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── styles/
│   │   └── main.css
│   └── utils/
│       └── dataLoader.js
├── index.html
├── package.json
└── README.md
```

### 3.2 Data Flow
1. JSON files contain all dynamic content
2. JavaScript loads and parses JSON on page load
3. Components render based on JSON data
4. Updates only require JSON edits + git push
5. Vercel/GitHub Pages auto-deploys on commit

---

## 4. JSON Schema Design

### 4.1 profile.json
```json
{
  "name": "Nahom Daniel Negash",
  "title": "Business Developer • Software Builder • Brand Designer",
  "location": {
    "city": "Huambo",
    "country": "Angola",
    "note": "Working with clients across East Africa"
  },
  "contact": {
    "email": "nahomdaniel.n@gmail.com",
    "phone": "+244 923 882 892",
    "github": "https://github.com/Nahom8bit",
    "linkedin": "https://linkedin.com/in/nahom-daniel-a81113367"
  },
  "profileImage": "/images/profile/nahom.jpg",
  "bio": {
    "tagline": "I help small businesses solve operational problems through a combination of design, software, and business strategy.",
    "description": [
      "My work sits at the intersection of three disciplines: business development, design, and software.",
      "I'm self-taught across all three areas. My approach is hands-on and practical—I focus on what works in real-world conditions, particularly for African small and medium businesses."
    ]
  },
  "availability": {
    "status": "available",
    "for": ["Freelance projects", "Collaborations", "Partnerships"],
    "responseTime": "Usually within 24 hours"
  }
}
```

### 4.2 skills.json
```json
{
  "categories": [
    {
      "name": "Design & Branding",
      "skills": [
        "Logo design and brand identity systems",
        "UI/UX design for software products",
        "Marketing materials and social media content"
      ],
      "tools": ["Adobe Photoshop", "Illustrator"]
    },
    {
      "name": "Software Development",
      "skills": [
        "Languages: Go, Python, JavaScript",
        "Focus areas: POS systems, inventory management, business automation"
      ],
      "projects": "Currently building retail management software for East African markets"
    },
    {
      "name": "Business",
      "skills": [
        "Market research and competitive analysis",
        "Product strategy and MVP planning",
        "Operations optimization for retail businesses"
      ]
    }
  ],
  "languages": [
    {
      "name": "Tigrigna",
      "proficiency": "Native"
    },
    {
      "name": "English",
      "proficiency": "Fluent"
    },
    {
      "name": "Amharic",
      "proficiency": "Fluent"
    },
    {
      "name": "Portuguese",
      "proficiency": "Conversational"
    },
    {
      "name": "Japanese",
      "proficiency": "Basic"
    },
    {
      "name": "Arabic",
      "proficiency": "Basic"
    }
  ]
}
```

### 4.3 projects.json
```json
{
  "projects": [
    {
      "id": "dikuan-pos",
      "name": "Dikuan POS",
      "tagline": "A point-of-sale system designed for small retailers in East Africa.",
      "description": "Built to solve real operational challenges faced by small retailers in markets with unreliable internet and limited tech infrastructure.",
      "features": [
        "Inventory tracking and low-stock alerts",
        "Sales reporting and analytics",
        "Customer and supplier management",
        "Offline-first design for unreliable internet"
      ],
      "status": "In development",
      "statusDetail": "Building initial version in Go with a focus on speed and reliability.",
      "tech": ["Go", "SQLite", "JavaScript"],
      "links": {
        "github": "https://github.com/Nahom8bit/dikuan-pos",
        "demo": null,
        "docs": null
      },
      "images": [
        "/images/projects/dikuan-pos/screenshot1.jpg",
        "/images/projects/dikuan-pos/screenshot2.jpg"
      ],
      "featured": true,
      "order": 1
    },
    {
      "id": "diy-addis",
      "name": "DIY Addis",
      "tagline": "Affordable, space-saving furniture for urban Ethiopian apartments.",
      "description": "Flat-pack designs that customers can assemble themselves. Focus on maximizing function in small spaces while keeping costs low.",
      "features": [
        "Wall-mounted foldable desks",
        "Corner shelving units",
        "Modular storage systems"
      ],
      "status": "Product design phase",
      "statusDetail": "Currently finalizing first three product prototypes.",
      "tech": null,
      "links": {
        "website": null,
        "instagram": null,
        "catalog": "/documents/diy-addis-catalog.pdf"
      },
      "images": [
        "/images/projects/diy-addis/desk-render.jpg",
        "/images/projects/diy-addis/shelf-prototype.jpg"
      ],
      "featured": true,
      "order": 2
    },
    {
      "id": "adey-threads",
      "name": "Adey Threads",
      "tagline": "Print-on-demand apparel celebrating Eritrean and Habesha cultural identity.",
      "description": "Modern interpretations of traditional Eritrean designs on t-shirts, hoodies, and accessories.",
      "features": null,
      "status": "Brand development stage",
      "statusDetail": "Working on initial design collection and production partnerships.",
      "tech": null,
      "links": {
        "website": null,
        "instagram": null,
        "store": null
      },
      "images": [
        "/images/projects/adey-threads/logo.jpg",
        "/images/projects/adey-threads/design-mockup.jpg"
      ],
      "featured": true,
      "order": 3
    }
  ]
}
```

### 4.4 experience.json
```json
{
  "experiences": [
    {
      "title": "Freelance Designer & Developer",
      "period": "2020–Present",
      "description": "Independent work serving local businesses and international clients",
      "responsibilities": [
        "Brand identity design for local retail and service businesses",
        "UI/UX design for software products and digital platforms",
        "Custom graphic design for marketing campaigns and social media",
        "Software development for inventory and sales management systems"
      ],
      "highlights": [
        "Designed brand identities for 10+ local businesses",
        "Built internal POS system prototypes for retail clients",
        "Created marketing materials for apparel and service companies"
      ],
      "current": true
    }
  ],
  "approach": {
    "title": "Approach",
    "philosophy": "I don't believe in waiting for perfect conditions. I believe in starting with what you have and improving as you go.",
    "process": [
      "Identify the real problem (not just what people say they want)",
      "Build the simplest version that solves it",
      "Test with actual users",
      "Iterate based on what breaks"
    ],
    "values": "I care about work that creates tangible value—systems that help businesses run better, brands that help products sell, software that solves real operational problems."
  }
}
```

### 4.5 config.json
```json
{
  "site": {
    "title": "Nahom Daniel Negash - Portfolio",
    "description": "Business Developer, Software Builder, and Brand Designer specializing in solutions for African markets.",
    "url": "https://nahomdaniel.com",
    "lastUpdated": "January 2026"
  },
  "theme": {
    "primaryColor": "#2563eb",
    "accentColor": "#10b981",
    "backgroundColor": "#ffffff",
    "textColor": "#1f2937"
  },
  "features": {
    "darkMode": true,
    "analytics": true,
    "contactForm": true,
    "blog": false
  },
  "social": {
    "showGithub": true,
    "showLinkedIn": true,
    "showTwitter": false,
    "showInstagram": false
  },
  "seo": {
    "keywords": ["business development", "software developer", "brand designer", "POS systems", "African markets"],
    "author": "Nahom Daniel Negash",
    "ogImage": "/images/og-image.jpg"
  }
}
```

---

## 5. Feature Specifications

### 5.1 Core Features (MVP)

#### F1: Hero Section
- Display name, title, location
- Profile image
- Contact links (email, phone, GitHub, LinkedIn)
- Availability status
- **Data Source:** `profile.json`

#### F2: About Section
- Bio and tagline
- Professional overview
- Work philosophy
- **Data Source:** `profile.json`, `experience.json`

#### F3: Skills Section
- Categorized skill display
- Tools and technologies
- Language proficiencies with levels
- **Data Source:** `skills.json`

#### F4: Projects Showcase
- Project cards with:
  - Name and tagline
  - Description
  - Status indicator
  - Tech stack badges
  - Feature list
  - Links (GitHub, demo, docs, website)
  - Image gallery/screenshots
- Featured projects highlighted
- **Data Source:** `projects.json`

#### F5: Experience Timeline
- Work history
- Responsibilities and highlights
- Approach/philosophy section
- **Data Source:** `experience.json`

#### F6: Contact Section
- Email and phone
- Contact form (optional)
- Social links
- Response time expectation
- **Data Source:** `profile.json`

### 5.2 Extended Features (Phase 2)

#### F7: Image Management
- Lazy loading for images
- Lightbox for project galleries
- Optimized image formats (WebP with fallbacks)

#### F8: Link Embedding
- External document links
- Website previews
- Social media embeds

#### F9: Dark Mode
- Toggle switch
- System preference detection
- Persistent user choice

#### F10: Analytics
- Page view tracking
- Project link click tracking
- Contact form submissions

---

## 6. Design Requirements

### 6.1 Visual Design
- **Style:** Clean, modern, professional
- **Typography:** Clear hierarchy, readable fonts
- **Colors:** Professional palette, good contrast
- **Spacing:** Generous whitespace, comfortable reading width

### 6.2 Layout
- Single-page layout with smooth scroll navigation
- Sticky header with navigation
- Sections: Hero → About → Skills → Projects → Experience → Contact
- Mobile-responsive breakpoints: 640px, 768px, 1024px, 1280px

### 6.3 Components

#### Navigation
- Fixed header with logo/name
- Section links
- Mobile hamburger menu
- Smooth scroll to sections

#### Project Card
```
┌─────────────────────────────┐
│ [Featured Badge]            │
│ Project Name                │
│ Tagline                     │
│ ─────────────────────────── │
│ Description text...         │
│                             │
│ • Feature 1                 │
│ • Feature 2                 │
│                             │
│ [Go] [Python] [React]       │
│                             │
│ Status: In Development      │
│                             │
│ [🔗 GitHub] [🔗 Demo]       │
└─────────────────────────────┘
```

#### Skill Category
```
Design & Branding
─────────────────
• Skill 1
• Skill 2
• Skill 3

Tools: Photoshop, Illustrator
```

---

## 7. Implementation Plan

### 7.1 Phase 1: MVP (Week 1-2)
- [ ] Set up project structure
- [ ] Create JSON schemas and sample data
- [ ] Build basic HTML structure
- [ ] Implement JSON data loading
- [ ] Create core components (Header, About, Skills, Projects, Contact)
- [ ] Add responsive styling
- [ ] Deploy to Vercel/GitHub Pages

### 7.2 Phase 2: Enhancement (Week 3-4)
- [ ] Add image gallery functionality
- [ ] Implement dark mode
- [ ] Add animations and transitions
- [ ] Optimize performance
- [ ] Add analytics
- [ ] SEO optimization

### 7.3 Phase 3: Content (Week 5+)
- [ ] Populate with real project images
- [ ] Write detailed project descriptions
- [ ] Create professional photography/graphics
- [ ] Add case studies (if available)

---

## 8. Deployment Strategy

### 8.1 Vercel Deployment (Recommended)
**Advantages:**
- Automatic deployments on git push
- Built-in CDN
- Easy custom domain setup
- Zero configuration for static sites
- Environment variables support

**Setup:**
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Configure build settings (if using framework)
4. Set custom domain
5. Enable analytics (optional)

### 8.2 GitHub Pages Deployment (Alternative)
**Advantages:**
- Free hosting
- Simple setup
- GitHub integration

**Setup:**
1. Enable GitHub Pages in repository settings
2. Choose branch (main or gh-pages)
3. Configure custom domain (optional)
4. Use GitHub Actions for build process

### 8.3 Domain Configuration
- Primary: `nahomdaniel.com`
- SSL certificate (automatic with Vercel/GitHub Pages)
- Redirect www to non-www (or vice versa)

---

## 9. Content Update Workflow

### 9.1 Typical Update Process
1. **Clone repository**
   ```bash
   git clone https://github.com/Nahom8bit/portfolio-website.git
   ```

2. **Edit JSON file**
   ```bash
   # Update location
   nano src/data/profile.json
   
   # Add new project
   nano src/data/projects.json
   ```

3. **Test locally**
   ```bash
   npm run dev
   # or
   python -m http.server 8000
   ```

4. **Commit and push**
   ```bash
   git add .
   git commit -m "Update location to Addis Ababa"
   git push origin main
   ```

5. **Auto-deploy** (Vercel handles automatically)

### 9.2 Common Updates

**Update Location:**
```json
// src/data/profile.json
"location": {
  "city": "Addis Ababa",
  "country": "Ethiopia",
  "note": "Working with clients across East Africa"
}
```

**Add New Project:**
```json
// src/data/projects.json
{
  "id": "new-project",
  "name": "New Project",
  "tagline": "Short description",
  "status": "Active",
  // ... rest of project data
}
```

**Update Skills:**
```json
// src/data/skills.json
"skills": [
  "New skill to add",
  "Another capability"
]
```

---

## 10. Quality Assurance

### 10.1 Testing Checklist
- [ ] All JSON files validate (use JSONLint)
- [ ] All links functional
- [ ] Images load correctly
- [ ] Mobile responsive on multiple devices
- [ ] Cross-browser compatibility
- [ ] Forms work (if implemented)
- [ ] Analytics tracking
- [ ] Page load < 2 seconds
- [ ] No console errors

### 10.2 Accessibility
- [ ] Semantic HTML
- [ ] Alt text for images
- [ ] Keyboard navigation
- [ ] ARIA labels where needed
- [ ] Color contrast meets WCAG AA

---

## 11. Success Metrics

### 11.1 Technical Metrics
- Lighthouse score > 90
- Time to Interactive < 3s
- First Contentful Paint < 1.5s
- Uptime > 99.9%

### 11.2 Business Metrics
- Contact form submissions per month
- Project link clicks
- Average time on site
- Bounce rate < 60%

---

## 12. Maintenance & Updates

### 12.1 Regular Updates
- **Weekly:** Check for broken links
- **Monthly:** Update project statuses
- **Quarterly:** Refresh content, add new projects
- **Yearly:** Design refresh consideration

### 12.2 Backup Strategy
- Git repository serves as primary backup
- Automated backups via GitHub
- Export JSON files monthly to external storage

---

## 13. Future Enhancements

### 13.1 Potential Features
- Blog/articles section
- Testimonials from clients
- Interactive project demos
- Case studies with detailed walkthroughs
- Newsletter signup
- Multi-language support
- Admin dashboard for JSON editing

### 13.2 Integrations
- Google Analytics / Plausible
- Contact form service (Formspree, Netlify Forms)
- CMS integration (Sanity, Contentful) for easier updates
- Social media feed integration

---

## 14. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| JSON syntax errors break site | High | Validation scripts, pre-commit hooks |
| Images too large, slow load | Medium | Image optimization pipeline, lazy loading |
| Mobile layout breaks | Medium | Extensive device testing, responsive design |
| Domain/hosting costs | Low | Free tier sufficient for portfolio |
| Data loss | Low | Git version control, regular commits |

---

## 15. Appendix

### 15.1 Resources
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Pages Guide](https://pages.github.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [JSON Schema Validator](https://jsonlint.com/)

### 15.2 Reference Sites
- Clean portfolio examples for design inspiration
- JSON-driven site examples
- Performance optimization guides

---

**Document Owner:** Nahom Daniel Negash  
**Last Updated:** January 2026  
**Version:** 1.0  
**Status:** Ready for Development