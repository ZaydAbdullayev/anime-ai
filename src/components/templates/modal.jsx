import { useEffect, useState } from "react";
import "../index.scss";

export const Modal = ({ agent, onClose }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (agent) {
      setMessages([
        { from: "ai", text: "Hello there! How are you feeling today?" },
        { from: "ai", text: agent.greet },
      ]);
    }
  }, [agent]);

  const handleUserResponse = (text) => {
    setMessages((prev) => [...prev, { from: "user", text }]);
  };

  if (!agent) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <img src={agent.avatar} alt={agent.name} className="modal-avatar" />
        <h3>{agent.name}</h3>
        <div className="chat-area">
          {messages.map((msg, index) => (
            <div key={index} className={`msg ${msg.from}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="response-options">
          <button onClick={() => handleUserResponse("I'm good, thank you!")}>
            I'm good, thank you!
          </button>
          <button onClick={() => handleUserResponse("Hello, AI!")}>
            Hello, AI!
          </button>
          <button onClick={() => handleUserResponse("Feeling excited!")}>
            Feeling excited!
          </button>
        </div>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
};