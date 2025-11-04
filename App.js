import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:4000");

function App() {
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("load_messages", (msgs) => setChat(msgs));
    socket.on("receive_message", (data) => setChat((prev) => [...prev, data]));

    return () => {
      socket.off("load_messages");
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = () => {
    if (!message.trim() || !sender.trim()) return;
    socket.emit("send_message", { sender, text: message });
    setMessage("");
  };

  return (
    <div className="App">
      <h2>💬 Real-Time Chat App</h2>

      <div className="chat-container">
        {chat.map((msg, i) => (
          <p key={i}>
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your name..."
          value={sender}
          onChange={(e) => setSender(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
