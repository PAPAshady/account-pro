# 📦 Account Pro | اکانت پرو

A modern full-stack marketplace for premium digital accounts and subscriptions.

Account Pro is a SaaS-style platform that allows users to browse, purchase, and manage premium digital accounts such as streaming services, SaaS tools, gaming services, and other online subscriptions.

Built as a production-grade portfolio project using a full-stack Next.js architecture.


## 🚀 Live Demo

https://account-pro-ruddy.vercel.app

---


## 🧠 About the Project

Account Pro is designed as a marketplace platform for digital goods and premium accounts.

It solves a real-world problem in restricted payment regions by providing a structured system where users can:
- Browse digital products
- Purchase premium accounts
- Track orders and active services
- Communicate with support through a ticket system

---

## ⚙️ Tech Stack

### Frontend
- React.js
- Next.js
- TailwindCSS 4
- Swiper
- Radix UI

### State Management & Data
- TanStack Query
- Zustand
- Axios

### Backend (Next.js API Routes)
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs
- jsonwebtoken

### Forms & Validation
- React Hook Form
- Zod

---

## ✨ Features

### 🔐 Authentication
- JWT-based authentication
- Secure password hashing (bcrypt)
- Role-based access control

### 🛍️ Product System
- Product listing with search & filters
- Category-based browsing
- Product detail pages

### 🛒 Cart System
- Add/remove/update items
- Persistent cart state
- Optimized UX with smooth updates

### 👤 User Dashboard
- Order history
- Active purchased accounts
- Favorites system (products & blogs)

### 💬 Ticket System
- User-to-support ticket messaging
- Structured conversation threads
- Support response handling (non real-time)

### 📰 Blog System
- Blog listing with search & filters
- Blog favorites system

### 🎨 UI/UX
- Fully responsive design
- Clean modern interface
- Loading skeletons and smooth transitions

---

## 🧱 Architecture

Full-stack Next.js architecture:

Client (React UI)
→ Next.js API Routes
→ Business Logic Layer
→ MongoDB (Mongoose)

### Key Design Decisions:
- Single codebase full-stack structure
- JWT authentication instead of sessions
- TanStack Query for server-state management
- Zustand for lightweight client state (cart, UI state)

---

## 📁 Project Structure

```bash
/app
/components
/lib
/models
/hooks
/store
/services
/utils
/queries
/schemas
```

## 🌍 Deployment
- Frontend + Backend: Vercel
- Database: MongoDB Atlas


## 🔒 Security
- Password hashing with bcryptjs
- JWT authentication for protected routes
- Role-based authorization
- Input validation using Zod

## 💡 Purpose
- Full-stack SaaS architecture
- Real-world marketplace system design
- Authentication & authorization flows
- Scalable frontend state management
- Production-level UI/UX design
