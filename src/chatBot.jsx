import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import "./chatBot.css";

const suggestions = [
  "Tell me about your projects",
  "Explain the Naga Shawls Identifier",
  "What technologies do you use?",
  "How can I contact you?",
];

const knowledge = [
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    answer:
      "Hi! I'm your portfolio assistant. I can tell you about Limsen's projects, technical skills, and technologies. What would you like to know?",
  },
  {
    keywords: ["who are you", "about you", "about limsen", "introduce"],
    answer:
      "I'm Limsen's portfolio assistant. I can help you explore his projects, technical interests, and technologies.",
  },
  {
    keywords: ["project", "projects", "work", "built", "portfolio"],
    answer:
      "Limsen has worked on two projects:\n\n1. Naga Shawls Identifier — a machine-learning mobile app that classifies traditional Naga shawls from images.\n\n2. CampusPlus — a campus club management mobile application built using React Native, Expo, JavaScript, and Firebase.\n\nAsk me about either project for more details!",
  },
  {
    keywords: [
      "naga shawl",
      "shawl identifier",
      "shawl project",
      "machine learning",
      "computer vision",
    ],
    answer:
      "The Naga Shawls Identifier is a machine-learning mobile application designed to classify traditional Naga shawls from images.\n\nIts workflow uses:\n\n• VGG16 for image feature extraction\n• An SVM with an RBF kernel for classification\n• React Native and Expo for the mobile interface\n• TensorFlow Lite for mobile model integration\n\nThe model achieved 98.18% accuracy on its held-out test dataset.",
  },
  {
    keywords: ["campusplus", "campus plus"],
    answer:
      "CampusPlus is a campus club management mobile application built using React Native, Expo, JavaScript, and Firebase. Visit its dedicated project page on this portfolio to explore more.",
  },
  {
    keywords: [
      "skill",
      "skills",
      "technology",
      "technologies",
      "tech stack",
      "tools",
    ],
    answer:
      "Based on the projects featured in this portfolio, Limsen has worked with:\n\n• React and React Native\n• Expo and JavaScript\n• Python\n• Machine learning and computer vision\n• VGG16 and SVM classification\n• TensorFlow Lite\n• Firebase\n• Git and GitHub\n\nThese technologies span web development, mobile development, and machine learning.",
  },
  {
    keywords: ["vgg16", "svm", "classifier", "model", "accuracy", "98.18"],
    answer:
      "The Naga Shawls Identifier uses a two-stage machine-learning pipeline:\n\n1. VGG16 extracts a 512-dimensional feature representation from each image.\n2. An SVM using an RBF kernel classifies those features into one of five shawl categories.\n\nThe model achieved 98.18% test accuracy on the cleaned held-out test set.",
  },
  {
    keywords: ["github", "source code", "repository", "repo"],
    answer:
      "Explore the Naga Shawls Identifier source code on GitHub:\n\nhttps://github.com/LimsenAier/nagaShawls\n\nYou can also visit the project's dedicated page on this portfolio.",
  },
  {
    keywords: ["contact", "email", "reach", "hire", "connect"],
    answer:
      "You can use the contact information or social links provided on Limsen's portfolio homepage to get in touch.",
  },
  {
    keywords: ["education", "college", "degree", "student"],
    answer:
      "Limsen is a B.Tech Electrical and Electronics Engineering student who also works on mobile development and machine-learning projects.",
  },
  {
    keywords: ["thank", "thanks"],
    answer:
      "You're welcome! Feel free to ask me anything else about the projects featured in this portfolio.",
  },
  {
    keywords: ["bye", "goodbye"],
    answer:
      "Thanks for visiting Limsen's portfolio. Feel free to explore the projects and source code!",
  },
];

function getReply(input) {
  const text = input.toLowerCase().replace(/[^\w\s.-]/g, " ");

  const matches = knowledge
    .flatMap((item) =>
      item.keywords.map((keyword) => ({
        ...item,
        keyword,
      }))
    )
    .filter(({ keyword }) => {
      const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return new RegExp(`\\b${escaped}\\b`, "i").test(text);
    })
    .sort((a, b) => b.keyword.length - a.keyword.length);

  if (matches.length > 0) {
    return matches[0].answer;
  }

  return "I can help you explore Limsen's portfolio, projects, technical skills, and technologies. Try asking about the Naga Shawls Identifier, CampusPlus, machine learning, or GitHub.";
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! Welcome to my portfolio. I'm here to answer questions about my projects, skills, and technologies. What would you like to know?",
    },
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  function sendMessage(value = input) {
    const question = value.trim();

    if (!question) return;

    const reply = getReply(question);

    setMessages((previous) => [
      ...previous,
      { role: "user", text: question },
      { role: "bot", text: reply },
    ]);

    setInput("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage();
  }

  return (
    <div className="portfolio-chatbot">
      {isOpen && (
        <section
          className="chat-window"
          aria-label="Portfolio chat assistant"
        >
          <header className="chat-header">
            <div className="chat-avatar">
              <Bot size={22} />
            </div>

            <div className="chat-heading">
              <h3>Ask Limsen</h3>
              <span>
                <span className="chat-online-dot" />
                Portfolio assistant
              </span>
            </div>

            <button
              type="button"
              className="chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              <X size={20} />
            </button>
          </header>

          <div className="chat-messages" aria-live="polite">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${message.role}`}
              >
                {message.role === "bot" && (
                  <span className="message-avatar">
                    <Bot size={15} />
                  </span>
                )}

                <div className="message-bubble">
                  {message.text.split("\n").map((line, lineIndex) => (
                    <span className="message-line" key={lineIndex}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="chat-suggestions">
                <p>Suggested questions</p>

                {suggestions.map((suggestion) => (
                  <button
                    type="button"
                    key={suggestion}
                    onClick={() => sendMessage(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form className="chat-input-area" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask me something..."
              aria-label="Type your message"
              autoComplete="off"
            />

            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </form>

          <div className="chat-footer">
            Simple portfolio assistant · Predefined answers
          </div>
        </section>
      )}

      <button
        type="button"
        className={`chat-launcher ${isOpen ? "active" : ""}`}
        onClick={() => {
          setIsOpen((previous) => !previous);
          setTimeout(() => inputRef.current?.focus(), 100);
        }}
        aria-label={isOpen ? "Close chat" : "Open portfolio chat"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={25} /> : <MessageCircle size={25} />}
      </button>
    </div>
  );
}
