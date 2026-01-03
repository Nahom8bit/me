# Personal Portfolio

A modular, JSON-driven personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
├── public/
│   ├── images/
│   │   ├── profile/      # Profile photos
│   │   ├── projects/     # Project screenshots
│   │   └── logos/        # Logo assets
│   └── documents/        # PDF documents, catalogs
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React components
│   ├── data/             # JSON configuration files
│   ├── lib/              # Utility functions
│   └── types/            # TypeScript types
```

## 📝 Updating Content

All dynamic content is stored in JSON files under `src/data/`. Simply edit these files and push to deploy.

### Profile (`src/data/profile.json`)
- Name, title, location
- Contact details
- Bio and availability

### Skills (`src/data/skills.json`)
- Skill categories
- Tools and technologies
- Language proficiencies

### Projects (`src/data/projects.json`)
- Project details
- Status, tech stack
- Links and images

### Experience (`src/data/experience.json`)
- Work history
- Responsibilities and highlights
- Approach/philosophy

### Config (`src/data/config.json`)
- Site metadata
- Theme colors
- Feature toggles
- SEO settings

## 🎨 Customization

### Update Location
```json
// src/data/profile.json
"location": {
  "city": "Addis Ababa",
  "country": "Ethiopia"
}
```

### Add New Project
```json
// src/data/projects.json
{
  "id": "new-project",
  "name": "Project Name",
  "tagline": "Short description",
  "status": "In development",
  "featured": true,
  "order": 4
}
```

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Configure build action
3. Set custom domain (optional)

## 📄 License

© 2026 Nahom Daniel Negash. All rights reserved.
