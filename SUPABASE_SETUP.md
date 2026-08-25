# RKV Industrial Solutions — Supabase setup

The project now uses Supabase for:
- Admin email/password authentication
- PostgreSQL `enquiries` table
- Contact-form enquiry storage
- Protected database reads/updates/deletes through RLS

## 1. Install dependencies

```bash
npm install
```

## 2. Environment

Create `.env.local` in this folder:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
```

Get both values from Supabase Dashboard → Connect / Project Settings → API.

Do NOT put a service-role/secret key in `.env.local` for this frontend project.

## 3. Supabase database

The `enquiries` table should already exist if you followed the setup instructions:

- id
- name
- email
- phone
- company
- service
- message
- status
- created_at

RLS should be enabled and policies should allow:
- anon: INSERT only
- authenticated: SELECT / UPDATE / DELETE

## 4. Admin user

Supabase → Authentication → Users → Add user.

Use the same email/password on `/admin/login`.

## 5. Run locally

```bash
npm run dev
```

Open:
- http://localhost:3000
- http://localhost:3000/contact
- http://localhost:3000/admin/login

Submit a test enquiry from Contact, then log in to Admin Dashboard.

## 6. Production

Push the project to GitHub and import it into Vercel.
Add the same two environment variables in Vercel Project Settings → Environment Variables.
Then deploy.

## Security

Do not commit `.env.local`.
Do not expose a Supabase service-role/secret key in browser code.
The dashboard relies on Supabase Auth + RLS for database access.
