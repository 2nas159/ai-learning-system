<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="next.js" />
    <img src="https://img.shields.io/badge/-Vapi-black?style=for-the-badge&logoColor=white&logo=vapi.com&color=green" alt="next.js" />
    <img src="https://img.shields.io/badge/-Tailwind-00BCFF?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  </div>

  <h3 align="center">SaaS App - LMS with Next.js, Supabase & Payments</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

I developed this LMS SaaS app from scratch, implementing core features like user authentication, subscriptions, and recurring payments using Next.js, Supabase, and Stripe. By integrating Vapi, I added an AI vocal agent that allows users to engage in real-time, interactive learning sessions with high-fidelity voice interactions.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **[Clerk](https://jsm.dev/converso-clerk)**: Used for unified authentication, user management, and defining subscription tiers.
- **[Next.js](https://nextjs.org/)**: My choice for the React framework to enable server-side rendering and build a scalable full-stack application.
- **[Sentry](https://jsm.dev/converso-sentry)**: Integrated for error tracking and performance monitoring to ensure a stable user experience.
- **[shadcn/ui](https://ui.shadcn.com/)**: Used for building a polished UI with accessible, pre-built components.
- **[Supabase](https://supabase.com/)**: Leveraged as the backend-as-a-service for the PostgreSQL database, real-time subscriptions, and storage.
- **[Tailwind CSS](https://tailwindcss.com/)**: Used for styling the application with a utility-first approach.
- **[TypeScript](https://www.typescriptlang.org/)**: Implemented to ensure code quality and better tooling through static typing.
- **[Vapi](https://jsm.dev/converso-vapi)**: The core voice AI platform I used to create conversational agents with low latency.
- **[Zod](https://zod.dev/)**: Used for schema validation to ensure data integrity across the app.

## <a name="features">🔋 Features</a>

👉 **AI Voice Agents**: I enabled tutoring sessions with voiced AIs that specialize in specific learning topics.

👉 **Authentication**: I implemented secure sign-up and sign-in via Clerk, including Google OAuth.

👉 **Billing & Subscriptions**: Built a system to manage plans, upgrades, and secure payment processing.

👉 **Bookmarks & History**: I added functionality for users to organize their learning by bookmarking tutors and viewing past sessions.

👉 **Custom Tutor Creation**: Users can create their own AI tutors by choosing subjects, topics, and specific conversation styles.

👉 **Responsive Design**: I ensured the UI is fully responsive and works seamlessly across all device types.

👉 **Advanced Search**: Integrated robust filters and a search bar to help users find tutors quickly.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally.

**Prerequisites**

Ensure you have the following installed:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Cloning the Repository**

```bash
git clone https://github.com/2nas159/ai-learning-system
cd ai-learning-system
