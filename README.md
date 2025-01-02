<div align="center">
    <a href="" target="_blank">
      <img src="/public/demo.png" alt="Project Banner">
    </a>
    <br />

  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.JS" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma" />
    <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="Postgres" />
    <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  </div>

  <br />
  <h3 align="center">Nuvio - LMS</h3>
  <br />

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🔗 [Overview](#overview)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🔗 [Links](#links)

## <a name="overview">🔗 Overview</a>

Built with Next.js for handling the user interface, Docker for containerization, and styled with TailwindCSS, Nuvio is the start of my LMS project. The primary goal is to demonstrate my skills in a unique manner that creates a lasting impact.

## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js
- Next.js
- Tailwind CSS
- Postgres
- Docker
- Prisma
- TypeScript
- Cloudinary
- Vercel

## <a name="features">🔋 Features</a>

👉 **TO_DO**: Details coming soon..

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/xndroli/nuvio.git
cd saas-school
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
DATABASE_URL="postgresql://{your_username}:{your_password}=localhost:{your_port}/{your_db_name}"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY={your_clerk_publishable_key}
CLERK_SECRET_KEY={your_clerk_secret_key}
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="{your_cloud_name}"
NEXT_PUBLIC_CLOUDINARY_API_KEY={your_api_key}
```

Replace the placeholder values with your actual Clerk, Cloudinary and Docker credentials. You can obtain these credentials by signing up on the:
 - [Clerk website](https://www.clerk.com/)
 - [Cloudinary website](https://www.cloudinary.com/)
 - [Docker website](https://www.docker.com/)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="links">🔗 Links</a>

Here is the list of all the resources used in the project:

- [Prisma](https://prisma.io)
