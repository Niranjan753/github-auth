This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# github-auth


Next.js GitHub OAuth Boilerplate 🔑

This repository provides a simple boilerplate for integrating GitHub OAuth authentication in a Next.js (App Router) project using NextAuth.js
.

✨ Features

✅ GitHub OAuth login with NextAuth

✅ Secure session handling

✅ Prebuilt Navbar with login/logout buttons

✅ SessionProvider wrapper for client components

✅ Neat & minimal file structure

📂 Project Structure
app/
├── layout.tsx              # Root layout with SessionWrapper + Navbar
├── page.tsx                # Example homepage
├── actions/
│   └── auth.ts             # Server action to access session
├── api/
│   └── auth/[...nextauth]/
│       └── route.ts        # NextAuth GitHub OAuth handler
└── components/
    ├── Navbar.tsx          # Navbar with login/logout
    └── SessionWrapper.tsx  # Wraps SessionProvider around app

⚙️ Setup

Clone this repository

git clone https://github.com/your-username/nextjs-github-oauth-boilerplate.git
cd nextjs-github-oauth-boilerplate


Install dependencies

npm install


Create a GitHub OAuth App

Go to GitHub Developer Settings
 → OAuth Apps

Create a new app with:

Homepage URL → http://localhost:3000

Authorization callback URL → http://localhost:3000/api/auth/callback/github

Add environment variables → create a .env.local file:

GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret
NEXTAUTH_SECRET=your_random_secret
NEXTAUTH_URL=http://localhost:3000


Run the dev server

npm run dev

🚀 Usage

Click Login with GitHub in the navbar → You’ll be redirected to GitHub for authentication.

Once logged in, your GitHub profile name will be shown.

Click Logout to end the session.

📦 Deployment

When deploying (e.g., Vercel):

Update NEXTAUTH_URL in .env with your production domain.

Set GitHub OAuth callback URL to https://yourdomain.com/api/auth/callback/github.

🤝 Contributing

PRs and suggestions are welcome! 🎉

📜 License

Licensed under the MIT License.
