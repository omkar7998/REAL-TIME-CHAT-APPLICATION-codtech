# REAL-TIME-CHAT-APPLICATION-codtech

# 💬 Realtime Chat Application (MERN + Socket.io)

A fully functional realtime chat application built using **MongoDB, Express, React, Node.js**, and **Socket.io**, allowing users to send and receive messages instantly.  

This project supports message persistence via MongoDB, live chat updates using WebSockets, and can be easily extended with authentication, timestamps, and deployment.

---

## 🚀 Features

- ⚡ Real-time communication using **Socket.io**
- 🗄️ Data persistence with **MongoDB & Mongoose**
- 🧩 Modular **Express.js API** backend
- 💬 Simple & clean **React.js frontend**
- ⏰ Auto-generated message timestamps
- 🔐 (Optional) User authentication with **JWT & bcrypt**
- 🌐 Ready for deployment (Render / Vercel / Railway)

---

## 🧰 Tech Stack

| Layer | Technology Used |
|-------|------------------|
| **Frontend** | React.js (CRA) |
| **Backend** | Node.js + Express.js |
| **Database** | MongoDB with Mongoose |
| **Realtime Engine** | Socket.io |
| **Authentication (Optional)** | JWT + bcrypt.js |
| **Environment Variables** | dotenv |
| **Cross-Origin Access** | CORS |

---

## 🗂️ Folder Structure

realtime-chat/
│
├── server/ # Backend
│ ├── models/ # Mongoose Schemas (Message, User)
│ ├── routes/ # Auth APIs
│ ├── index.js # Express + Socket.io setup
│ └── .env # MongoDB connection URI
│
├── client/ # Frontend (React)
│ ├── src/
│ │ ├── components/ # Chat UI Components
│ │ ├── App.js # Root Component
│ │ └── index.js # ReactDOM Render
│ └── package.json

🌈 Future Enhancements

✅ User authentication & profiles

✅ Display message timestamps

📱 Responsive UI for mobile

🕒 Online/offline status

💾 Message history with pagination

☁️ Deployment on Render / Vercel

🧑‍💻 Author

Mani
📍 CSE (AIML) | Full Stack Developer Intern
💼 Project: 5th Internship — Realtime Chat App
🔗 LinkedIn
 | GitHub

🏁 License

This project is open-source and available under the MIT License
