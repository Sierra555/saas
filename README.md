# LMS SaaS Platform

A modern Learning Management System (LMS) built with Next.js, React, and TypeScript. The platform is designed to provide an interactive learning experience with searchable learning materials, subject filtering, authentication, and voice-based interactions.

## ✨ Features

- **Authentication** — User authentication and session management with Clerk.
- **Learning Materials** — Browse and explore learning content.
- **Search** — Search learning materials by topic with debounced URL-based search.
- **Subject Filtering** — Filter learning materials by subject.
- **Voice Interaction** — Voice-based learning experiences powered by Vapi.
- **Responsive UI** — Responsive interface built with Tailwind CSS.
- **Reusable Components** — Modular UI components for maintainability and scalability.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 | React framework and application routing |
| React 19 | UI development |
| TypeScript | Static typing |
| Tailwind CSS 4 | Styling |
| Clerk | Authentication |
| Supabase | Database and data access |
| Vapi | Voice AI integration |
| React Hook Form | Form management |
| Zod | Schema validation |
| Lucide React | Icons |
| Sentry | Error monitoring |

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- A Clerk account
- A Supabase project
- A Vapi account if using voice features

### 1. Clone the repository

```bash
git clone https://github.com/Sierra555/saas
cd saas
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Vapi
NEXT_PUBLIC_VAPI_WEB_TOKEN=

# Sentry (if enabled)
SENTRY_AUTH_TOKEN=
```

Fill in the values using your provider dashboards. Add any other environment variables required by your application.

**Security:** Never commit `.env.local` or expose secret keys in client-side code.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with Turbopack |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```text
saas/
├── app/                  # Next.js App Router pages and layouts
├── components/           # Reusable UI components
│   └── ui/               # UI primitives
├── constants/            # Shared constants and subject options
├── lib/                  # Utilities and custom hooks
├── public/               # Static assets
├── .env.local            # Local environment variables
├── next.config.ts        # Next.js configuration
├── package.json
└── tsconfig.json
```

*The directory structure above is a general overview; adjust it to match the actual project.*

## 🔎 Search and Filtering

The learning materials page supports URL-based search and subject filtering.

Example:

```text
/learnings?topic=mathematics&subject=science
```

- `topic` — Search query for learning materials.
- `subject` — Selected subject filter.

Search input updates are debounced to avoid unnecessary navigation while typing. Query parameters allow search and filter states to be shared through URLs.

## 🔐 Authentication and Data

- **Clerk** handles user authentication.
- **Supabase** provides database access.
- Access to protected data should be validated on the server according to the application's authorization rules.

Configure the required provider credentials before running the application.

## 🎙️ Voice Integration

The platform uses Vapi for voice-based interactions. Configure the required Vapi credentials and ensure that the relevant assistant and voice settings are configured in your Vapi dashboard.

## 🧪 Production Build

To verify the application before deployment:

```bash
npm run lint
npm run build
```

Resolve any linting or build errors before deploying.

## 🚀 Deployment

The application can be deployed to [Vercel](https://vercel.com/), which supports Next.js applications.

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables.
4. Deploy the application.
5. Verify authentication, database access, search, and voice features in production.

## 📌 Future Improvements

- Expand learning content and subject categories.
- Improve personalized learning experiences.
- Add learning progress tracking.
- Expand voice-based learning capabilities.
- Add analytics and reporting.

## 📄 License
