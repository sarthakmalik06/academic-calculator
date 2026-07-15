# 🎓 Attendance & CGPA Calculator

A modern, full-stack web application built with **React + Vite**, **Tailwind CSS**, **Node.js**, **Express**, and **MongoDB**. Designed for students to effortlessly track attendance and calculate CGPA.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 (Vite), Tailwind CSS, React Router v6 |
| HTTP Client | Axios |
| Backend | Node.js, Express |
| Database | MongoDB (Mongoose ODM) |
| Dev Tools | nodemon, dotenv |

---

## 📁 Project Structure

```
CGPA calculator/
├── client/          # React frontend
└── server/          # Express backend
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js >= 18
- MongoDB running locally (or Atlas URI)

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd "CGPA calculator"
```

### 2. Setup Backend
```bash
cd server
cp .env.example .env      # fill in your MONGO_URI
npm install
npm run dev
```

### 3. Setup Frontend
```bash
cd client
cp .env.example .env      # set VITE_API_URL
npm install
npm run dev
```

### 4. Open in browser
- Frontend: http://localhost:5173
- Backend API: http://localhost:5050/api/health

---

## 📌 Features (Planned)
- [x] Project scaffold & routing
- [ ] Attendance Calculator
- [ ] CGPA Calculator
- [ ] User Authentication
- [ ] Data persistence with MongoDB

---

## 👤 Author

Built with ❤️ as a portfolio project.
