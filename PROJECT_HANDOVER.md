# Project Handover Document

## Project Overview

**Project Name:** Fetan Outdoor Advertising Website  
**Project Type:** Digital Out of Home (DOOH) Advertising Platform  
**Client:** Fetan Outdoor Advertising  
**Location:** Addis Ababa, Ethiopia  
**Website:** https://dooh.et  
**Status:** Production Ready  

### Business Purpose
A modern, responsive website showcasing Fetan Outdoor Advertising's premium LED screen network across Addis Ababa. The platform serves as a marketing tool to attract potential clients, display portfolio work, showcase available advertising locations, and provide contact information for inquiries.

---

## Technology Stack

### Frontend Framework
- **Next.js 16.2.10** - React framework with App Router
- **React 19.2.4** - UI library
- **TypeScript 5** - Type-safe JavaScript

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS processing

### UI/UX Libraries
- **Framer Motion 12.42.2** - Animation library
- **React Hook Form 7.81.0** - Form management
- **Zod 4.4.3** - Schema validation
- **@hookform/resolvers 5.4.0** - Form validation integration
- **Leaflet** - Open-source map library (free, no API key required)
- **react-leaflet** - React components for Leaflet

### Backend/Email
- **Nodemailer 9.0.5** - Email sending via SMTP

### Development Tools
- **ESLint 9** - Code linting
- **TypeScript** - Type checking

---

## Project Structure

```
fetandooh/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   ├── api/                      # API routes
│   │   └── contact/             # Contact form endpoint
│   ├── blog/                     # Blog section
│   ├── contact/                  # Contact page
│   ├── locations/                # Locations pages
│   ├── portfolio/                # Portfolio pages
│   ├── services/                 # Services page
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── WhatsAppFloat.tsx
│   ├── sections/                # Page sections
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Locations.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Services.tsx
│   │   └── Testimonials.tsx
│   └── ui/                      # Reusable UI components
├── data/                        # Static data files
│   ├── blog.ts
│   ├── contact.ts
│   ├── faqs.ts
│   ├── locations.ts
│   ├── partners.ts
│   ├── portfolio.ts
│   ├── services.ts
│   ├── stats.ts
│   └── testimonials.ts
├── public/                      # Static assets
│   ├── images/                  # Image assets
│   └── 1221.mp4                # Video file (45MB - needs compression)
├── package.json
├── next.config.ts
├── tsconfig.json
└── tailwind.config.ts
```

---

## Key Features

### 1. **Homepage**
- Hero section with company introduction
- Statistics display (10+ locations, 400+ campaigns, 230+ clients)
- Featured portfolio items
- Testimonials carousel
- Call-to-action sections

### 2. **About Section**
- Company history and mission
- YouTube video embed (auto-play, loop, muted)
- Vision and mission statements
- EST. 2016 branding overlay

### 3. **Portfolio Showcase**
- Dynamic portfolio display with 8+ case studies
- YouTube video integration for campaign showcases
- Industry filtering (Telecom, Finance, FMCG, Aviation, etc.)
- Detailed campaign pages with objectives, target audience, locations

### 4. **Locations Display**
- 13+ LED screen locations across Addis Ababa
- Interactive location cards with traffic data
- Screen specifications (resolution, dimensions, aspect ratio)
- Google Maps integration
- Marquee animation of location names

### 5. **Contact Form**
- Functional contact form with validation
- Email integration via SMTP (Nodemailer)
- WhatsApp floating button
- Google Maps embed
- Contact information display

### 6. **Responsive Design**
- Mobile-first approach
- Optimized for all screen sizes
- Smooth animations and transitions

---

## Configuration Files

### Contact Information (`data/contact.ts`)
```typescript
- Phone: +251 970 757 575
- WhatsApp: +251 913 001 010
- Email: contact@dooh.et
- Address: 22 Haile Gebreselassie St, IPS Building, Addis Ababa, Ethiopia
```

### Next.js Configuration (`next.config.ts`)
- SVG image support enabled
- Content security policy configured
- Image optimization settings

### TypeScript Configuration
- Strict mode enabled
- Path aliases: `@/*` maps to project root
- ES2017 target

---

## Environment Variables

The project requires the following environment variables (create `.env.local`):

```env
# Email Configuration (SMTP - Required for contact form)
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_USER=your_email@example.com
SMTP_PASS=your_smtp_password
SMTP_FROM_EMAIL=noreply@dooh.et
CONTACT_EMAIL=contact@dooh.et
```

**Note:** The interactive map uses Leaflet with OpenStreetMap, which is free and does not require an API key.

---

## Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fetandooh
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env.local`
   - Add your Resend API key
   - Configure any other required variables

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open browser**
   Navigate to `http://localhost:3000`

---

## Build & Deployment

### Production Build
```bash
npm run build
npm run start
```

### Deployment Options

**Vercel (Recommended)**
1. Connect repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

**Other Platforms**
- Build locally: `npm run build`
- Deploy `.next` folder and `public` folder
- Set environment variables on hosting platform

---

## Maintenance Notes

### Content Updates

**Portfolio Items**
- Edit `data/portfolio.ts` to add/remove portfolio items
- Include YouTube video IDs for video showcases
- Update campaign details, objectives, and locations

**Locations**
- Edit `data/locations.ts` to update screen locations
- Add new locations with coordinates, traffic data, and specifications
- Update location images in `public/images/`

**Contact Information**
- Edit `data/contact.ts` to update phone, email, address
- WhatsApp number is used in floating button component

**Testimonials**
- Edit `data/testimonials.ts` to manage client testimonials
- Add new testimonials with quotes, names, roles, and initials

### Image Management
- Store images in `public/images/`
- Use Next.js Image component for optimization
- Current images: team-meeting.png, location screenshots, portfolio assets

### Video Management
- Large video file (1221.mp4 - 45MB) in public folder
- Consider compressing to webm format for better performance
- YouTube embed used in About section (video ID: 8k6Pk9ib_0w)

---

## API Endpoints

### Contact Form Submission
**Endpoint:** `POST /api/contact`  
**Purpose:** Handle contact form submissions  
**Features:**
- Form validation using Zod schema
- Email sending via Resend API
- Error handling and response

---

## Known Issues & Recommendations

### Performance
- Large video file (1221.mp4) should be compressed or converted to webm
- Consider implementing image lazy loading for better performance
- Review bundle size and optimize imports

### SEO
- Meta tags configured in `app/layout.tsx`
- Consider adding structured data (JSON-LD)
- Review and optimize page titles and descriptions

### Accessibility
- Alt tags should be reviewed for all images
- Keyboard navigation should be tested
- Color contrast ratios should be verified

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement approach

---

## Contact Information

**For Technical Support:**
- Review this documentation
- Check Next.js documentation: https://nextjs.org/docs
- Check Tailwind CSS documentation: https://tailwindcss.com/docs

**For Business Inquiries:**
- Email: contact@dooh.et
- Phone: +251 970 757 575
- WhatsApp: +251 913 001 010

---

## Project Summary

This is a production-ready Next.js website for Fetan Outdoor Advertising, featuring a modern design, responsive layout, and comprehensive content management through data files. The site effectively showcases the company's LED advertising network across Addis Ababa with portfolio case studies, location details, and contact functionality.

**Key Strengths:**
- Modern tech stack (Next.js 16, React 19, TypeScript)
- Clean, maintainable code structure
- Content managed through data files (no CMS required)
- Responsive design with smooth animations
- Functional contact form with email integration
- YouTube video integration for portfolio showcases

**Next Steps for Handover:**
1. Ensure environment variables are configured
2. Verify email functionality with Resend API
3. Test contact form submissions
4. Review and update all content data files
5. Compress or optimize large video file
6. Deploy to production environment
7. Set up monitoring and analytics

---

**Document Version:** 1.0  
**Last Updated:** September 17, 2026  
**Handed Over To:** [Recipient Name]  
**Handed Over By:** [Your Name]  
