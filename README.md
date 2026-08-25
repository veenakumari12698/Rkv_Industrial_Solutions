# RKV Industrial Solutions

Professional Next.js website for RKV Industrial Solutions.

## Stack
- Next.js 14 App Router
- React 18
- JavaScript / JSX
- CSS
- Next.js Route Handler for contact enquiry endpoint
- Local JPG assets (no runtime Unsplash dependency)
- No Python
- No Django

## Run
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Production
```bash
npm run build
npm start
```

## Main routes
- `/`
- `/about`
- `/services`
- `/services/[slug]`
- `/products`
- `/products/[slug]`
- `/industries`
- `/industries/[slug]`
- `/contact`
- `/admin/login`
- `/admin/dashboard`

## Contact
WhatsApp / phone: +91 87898 56983
Location: Gurugram, India
Working days: Monday – Saturday

## Important production step
The contact Route Handler is a starter endpoint. Connect it to your production database/email/CRM before launch and add secure authentication for the admin area.

All large website images are bundled locally under `public/images`. Replace demo imagery with RKV-owned or properly licensed photography before commercial launch.
