# Lalith Kumar J - Cybersecurity Portfolio

A professional cybersecurity portfolio website showcasing expertise in ethical hacking, penetration testing, and security research.

## Features

- **Dark Cybersecurity Theme**: Professional hacker aesthetic with green accents
- **Responsive Design**: Works on all devices and screen sizes
- **Smooth Animations**: Framer Motion animations and transitions
- **Interactive Navigation**: Smooth scrolling between sections
- **Professional Sections**: About, Skills, Experience, Education, Certifications, Languages, Contact

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **UI Components**: Radix UI with shadcn/ui

## Hosting on GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/Lalithkumar-portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Select "GitHub Actions" as the source
   - The workflow will automatically deploy your site

3. **Your site will be available at**: `https://yourusername.github.io/Lalithkumar-portfolio`

### Option 2: Manual Build and Deploy

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **The built files will be in the `dist/public` folder**

3. **Deploy to GitHub Pages**:
   - Create a new branch called `gh-pages`
   - Copy the contents of `dist/public` to the root of `gh-pages` branch
   - Push to GitHub
   - Enable GitHub Pages in repository settings

## Development

### Prerequisites
- Node.js 18+
- npm

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## Customization

### Personal Information
Update the following files with your information:
- `client/src/components/hero.tsx` - Name and title
- `client/src/components/about.tsx` - Professional summary
- `client/src/components/contact.tsx` - Contact information
- `client/src/components/skills.tsx` - Technical skills
- `client/src/components/experience.tsx` - Work experience
- `client/src/components/education.tsx` - Educational background
- `client/src/components/certifications.tsx` - Certifications and achievements
- `client/src/components/languages.tsx` - Language proficiencies

### Styling
- Edit `client/src/index.css` for custom styles
- Modify `tailwind.config.ts` for theme customization
- Update color variables in CSS for different color schemes

## License

MIT License - Feel free to use this template for your own portfolio.

## Contact

- **Email**: lalithborana72@gmail.com
- **Phone**: +91 9884183594
- **Location**: Chennai, India
- **LinkedIn**: [Lalith Kumar J](https://linkedin.com/in/lalith-kumar-j)