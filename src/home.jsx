import { useState } from "react";
import "./home.scss";
import { agentCategories } from "./context/data";
import { Modal } from "./components/templates/modal";

export function App() {
  const [selectedAgent, setSelectedAgent] = useState(null);

  const getCardClass = (categoryTitle) => {
    switch (categoryTitle) {
      case "Finance":
        return "agent-card finance";
      case "Daily Routine":
        return "agent-card routine";
      case "Entertainment":
        return "agent-card fun";
      default:
        return "agent-card";
    }
  };

  const getColumnClass = (categoryTitle) => {
    switch (categoryTitle) {
      case "Finance":
        return "column finance-col";
      case "Daily Routine":
        return "column routine-col";
      case "Entertainment":
        return "column fun-col";
      default:
        return "column";
    }
  };

  const comingSoonAgents = [
    {
      name: "??? (ProjectZero)",
      desc: "Access Level: Encrypted",
      style: "blurred",
      avatar:
        "https://static.vecteezy.com/system/resources/previews/011/485/187/non_2x/anime-girl-avatar-free-vector.jpg",
    },
    {
      name: "??? (AiNoHime)",
      desc: "Romantic Simulation Prototype",
      style: "pink-glow",
      avatar:
        "https://static.vecteezy.com/system/resources/previews/011/485/187/non_2x/anime-girl-avatar-free-vector.jpg",
    },
    {
      name: "??? (GlitchBoy-404)",
      desc: "Agent corrupted from another layer of reality.",
      style: "glitched",
      avatar:
        "https://static.vecteezy.com/system/resources/previews/011/485/187/non_2x/anime-girl-avatar-free-vector.jpg",
    },
  ];

  return (
    <div className="app">
      <h1 className="gradient-title">🌸 AI Anime Agents 🌸</h1>
      <p className="subtitle">Choose one and get greeted in style...</p>
      <div className="columns">
        {agentCategories.map((category) => (
          <div className={getColumnClass(category.title)} key={category.title}>
            <h2 className="category-title">{category.title}</h2>
            {category.agents.map((agent) => (
              <div
                key={agent.name}
                className={getCardClass(category.title)}
                onClick={() => setSelectedAgent(agent)}
              >
                <img
                  src={agent.avatar}
                  alt={agent.name}
                  className="agent-avatar"
                />
                <h4>{agent.name}</h4>
                <p>{agent.desc}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* 🔮 Coming Soon Section */}
      <div className="coming-soon">
        <h2 className="coming-title">🔮 Coming Soon</h2>
        <div className="soon-grid">
          {comingSoonAgents.map((agent, index) => (
            <div key={index} className={`soon-card ${agent.style}`}>
              <img src={agent.avatar} alt={agent.name} />
              <h4>{agent.name}</h4>
              <p>{agent.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Modal agent={selectedAgent} onClose={() => setSelectedAgent(null)} />

      {/* Footer  */}
      <footer className="footer">
        <p>AI Anime Agents © 2023</p>
        <small>
          AI Anime Agents is a fictional project created for fun and does not
          represent real AI capabilities.
        </small>
        <div className="div">
          <button href="https://x.com" target="_blank" rel="noopener noreferrer">
            Follow me on X
          </button>
        </div>
      </footer>
    </div>
  );
}
