# 🎓 Course Selling Platform

A modern full-stack **Course Selling Web Application** built with Next.js, React, and Express. This platform allows users to browse courses, view details, and enroll smoothly with a fast and responsive UI. It also includes authentication, animations, and a scalable backend structure.

---

## 🚀 Live Demo
https://your-live-link.com

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React 19
- 🚀 Next.js 16
- 🎨 HeroUI + NextUI
- 🎬 Framer Motion
- 🎡 Swiper.js
- 🔥 React Hot Toast
- 🎯 Lucide React + React Icons
- ✨ React Fast Marquee
- 🌙 Next Themes (Dark Mode)

### Backend
- 🟢 Node.js + Express
- 🍃 MongoDB
- 🔐 JWT Authentication
- 🔑 Better Auth
- 🌐 CORS + Dotenv

---

## ✨ Features

### 📚 Course System
- Browse all available courses
- View course details with rich UI
- Smooth carousel & animations

### 👤 Authentication
- User signup/login system
- JWT-based authentication
- Secure session handling

### 🛒 Enrollment System
- Enroll in courses
- Track enrolled courses
- Protected routes for users

### 🎨 UI/UX
- Modern responsive design
- Smooth animations using Framer Motion
- Swiper-based course slider
- Dark/Light theme support

### 🔔 Notifications
- Toast notifications for actions
- Success / error feedback system

---

## 📂 Project Structure

```bash
client/
│
├── app/              # Next.js App Router
├── components/      # UI Components
├── pages/           # Pages (if used)
├── hooks/           # Custom hooks
├── lib/             # Utilities (auth, api)
├── styles/          # Global styles

server/
│
├── routes/          # Express routes
├── controllers/     # Business logic
├── models/          # MongoDB schemas
├── middleware/      # Auth middleware
└── server.js