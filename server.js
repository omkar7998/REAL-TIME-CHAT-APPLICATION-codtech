// server.js
import express from "express";
import http from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/chatapp")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Message Schema
const messageSchema = new mongoose.Schema({
  sender: String,
  text: String,
  timestamp: { type: Date, default: Date.now }
});
const Message = mongoose.model("Message", messageSchema);

// Create HTTP + Socket server
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] }
});

// Socket.IO logic
io.on("connection", (socket) => {
  console.log("🟢 User connected:", socket.id);

  // Send previous messages on new connection
  Message.find().then((msgs) => socket.emit("load_messages", msgs));

  // Receive message
  socket.on("send_message", async (data) => {
    const newMsg = new Message({ sender: data.sender, text: data.text });
    await newMsg.save();
    io.emit("receive_message", newMsg); // broadcast to all
  });

  socket.on("disconnect", () => console.log("🔴 User disconnected:", socket.id));
});

const PORT = 4000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
