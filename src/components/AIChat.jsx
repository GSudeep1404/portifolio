import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  X,
  Send,
  Sparkles,
  Trash2,
  User
} from 'lucide-react';
import { personalData } from '../data/portfolio';

// Local intelligent intent matching response generator
function generateAIResponse(query) {
  const q = query.toLowerCase().trim();

  // Projects - SentinelAI
  if (q.includes('sentinel') || q.includes('security') || q.includes('prompt injection') || q.includes('jailbreak')) {
    return (
      "🛡️ **SentinelAI** is an AI Security Gateway developed by Sudeep. It protects LLM applications from prompt injections, sensitive data/PII leaks, and unauthorized tool invocations. It features real-time semantic risk scoring, policy guardrails, and input/output sanitization."
    );
  }

  // Projects - MedAssist AI
  if (q.includes('medassist') || q.includes('health') || q.includes('medical') || q.includes('doctor')) {
    return (
      "🩺 **MedAssist AI** is an intelligent healthcare assistant that parses complex medical lab reports into patient-friendly explanations. It utilizes OCR, clinical entity extraction, and grounded RAG while adhering to medical disclaimers."
    );
  }

  // Projects - AgriPulse / Hackathon
  if (q.includes('agripulse') || q.includes('farm') || q.includes('crop') || q.includes('msme') || q.includes('hackathon')) {
    return (
      "🌱 **AgriPulse** is an AI Operating System for Farmers highlighted at **MSME Idea Hackathon 6.0**. It supports farmers from soil-based crop recommendation and precision irrigation alerts to disease identification, harvesting, and transport logistics."
    );
  }

  // Projects - ROI Predictor
  if (q.includes('roi') || q.includes('market') || q.includes('analytics') || q.includes('predict')) {
    return (
      "📊 **Marketing Campaign ROI Predictor** is a machine learning & data analytics solution. It evaluates historical multi-channel advertising datasets to predict campaign conversion and Return on Ad Spend (ROAS) using ensemble models and Power BI."
    );
  }

  // Projects general
  if (q.includes('project') || q.includes('build') || q.includes('portfolio') || q.includes('app')) {
    return (
      "🚀 Sudeep has engineered 4 major featured projects:\n\n1. **SentinelAI**: Real-time AI Security Gateway for LLMs\n2. **MedAssist AI**: AI Healthcare Assistant for Lab Reports\n3. **AgriPulse**: AI Operating System for Farmers (MSME Hackathon 6.0)\n4. **Marketing ROI Predictor**: ML Predictive Analytics & Power BI\n\nClick any project card on the page to view detailed system architectures!"
    );
  }

  // Skills
  if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('language') || q.includes('python') || q.includes('react')) {
    return (
      "💻 **Sudeep's Core Technical Skills:**\n\n• **AI & ML**: Machine Learning, Deep Learning, NLP, Generative AI, LLMs, Hugging Face, Prompt Engineering\n• **Languages**: Python, Java, C++, JavaScript\n• **Web Development**: React, Node.js, REST APIs, HTML5, CSS3\n• **Security & Cloud**: Prompt Injection Defense, PII Masking, IAM, Cloud Computing\n• **Databases & Tools**: MongoDB, MySQL, Firebase, Git, GitHub, Cursor, Power BI."
    );
  }

  // Education
  if (q.includes('education') || q.includes('degree') || q.includes('college') || q.includes('university') || q.includes('study') || q.includes('b.tech')) {
    return (
      "🎓 Sudeep is currently pursuing **B.Tech in Artificial Intelligence & Machine Learning**. His academic curriculum includes Deep Learning, Data Structures & Algorithms, DBMS, Operating Systems, Cloud Computing, and Computer Networks."
    );
  }

  // Contact / Hire
  if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach') || q.includes('linkedin') || q.includes('github')) {
    return (
      "📬 You can connect with Sudeep directly:\n\n• **Email**: gatamanenisudeep14@gmail.com\n• **LinkedIn**: linkedin.com/in/sudeep-g-3b4736355/\n• **GitHub**: github.com/GSudeep1404\n\nHe is actively open to internships, AI engineer roles, and hackathons!"
    );
  }

  // Interests / Goals
  if (q.includes('interest') || q.includes('goal') || q.includes('aim') || q.includes('passion')) {
    return (
      "🎯 Sudeep is driven by building **practical real-world AI applications**. His primary goal is to become a top-tier AI/ML Engineer and Software Developer specializing in trustworthy, scalable, and secure AI systems."
    );
  }

  // Resume
  if (q.includes('resume') || q.includes('cv')) {
    return (
      "📄 You can download Sudeep's updated resume directly using the 'Download Resume' button in the Hero or Resume section, or access `/resume.pdf`."
    );
  }

  // Default fallback
  return (
    `👋 Thanks for asking! I'm Sudeep's AI assistant. Sudeep is an AI & Machine Learning student specializing in LLM systems, AI security, and full-stack development. Feel free to ask about his **skills**, **projects** (like SentinelAI or AgriPulse), **education**, or **contact information**!`
  );
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Hi! I'm Sudeep's AI Assistant. Ask me anything about Sudeep's AI projects, skills, education, or how to get in touch!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = { sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateAIResponse(query);
      setMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
      setIsTyping(false);
    }, 550);
  };

  const handleQuickQuestion = (q) => {
    handleSend(q);
  };

  const handleClear = () => {
    setMessages([
      {
        sender: 'ai',
        text: "Conversation cleared. How can I assist you with Sudeep's portfolio?",
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[92vw] sm:w-[400px] h-[520px] max-h-[80vh] flex flex-col rounded-3xl bg-white border border-[#ded5c5] shadow-2xl shadow-[#241711]/25 backdrop-blur-xl overflow-hidden animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="px-5 py-3.5 bg-[#faf8f5] border-b border-[#eee4d6] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-xl bg-[#2b1e17] text-white flex items-center justify-center shadow-xs">
                <Bot className="w-4 h-4 text-[#e5d9c2]" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-[#15803d] rounded-full" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#2b1e17] flex items-center gap-1.5">
                  <span>Sudeep's AI Assistant</span>
                </h4>
                <span className="text-[10px] font-mono text-[#15803d]">
                  Ready to assist
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClear}
                className="p-1.5 rounded-lg text-[#8a7667] hover:text-[#2b1e17] hover:bg-[#f6f0e6] transition-colors"
                title="Clear chat"
                aria-label="Clear chat"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-[#8a7667] hover:text-[#2b1e17] hover:bg-[#f6f0e6] transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 custom-scrollbar text-xs leading-relaxed">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-6 h-6 rounded-lg bg-[#faf5ee] text-[#9a3412] border border-[#e3d7c5] flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-[#2b1e17] text-white rounded-br-none shadow-xs'
                      : 'bg-[#faf8f5] text-[#2b1e17] border border-[#e8ded0] rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-6 h-6 rounded-lg bg-[#ede3d4] text-[#4a3528] border border-[#ded4c3] flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-[#786454] pl-8">
                <span className="w-1.5 h-1.5 bg-[#a89687] rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-[#a89687] rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-[#a89687] rounded-full animate-bounce [animation-delay:0.4s]" />
                <span className="text-[11px] font-mono text-[#8a7667] ml-1">Evaluating knowledge base...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Suggestions */}
          <div className="px-3 py-2 bg-[#faf8f5] border-t border-[#eee4d6] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {personalData.aiAssistant.quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleQuickQuestion(q)}
                className="shrink-0 px-2.5 py-1 rounded-full bg-white border border-[#ded5c5] hover:border-[#bdafa0] text-[10px] text-[#5e4634] hover:text-[#2b1e17] transition-colors whitespace-nowrap shadow-xs"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-[#eee4d6] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Sudeep's AI projects..."
              className="flex-1 px-3.5 py-2 rounded-xl bg-[#faf8f5] border border-[#ded5c5] text-[#2b1e17] placeholder-[#a89687] text-xs focus:outline-none focus:border-[#4a3528] focus:ring-1 focus:ring-[#4a3528] transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="p-2 rounded-xl bg-[#2b1e17] hover:bg-[#1a120d] text-white transition-all disabled:opacity-40 shrink-0 shadow-xs"
              aria-label="Send query"
            >
              <Send className="w-3.5 h-3.5 text-[#e5d9c2]" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#2b1e17] text-white font-medium text-xs sm:text-sm shadow-xl shadow-[#241711]/20 hover:bg-[#1a120d] transition-all duration-200"
        aria-label="Ask Sudeep's AI"
      >
        <div className="relative">
          <Bot className="w-4 h-4 text-[#e5d9c2] group-hover:scale-110 transition-transform" />
          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-[#16a34a] rounded-full" />
        </div>
        <span className="tracking-tight">Ask Sudeep's AI</span>
      </button>
    </div>
  );
}
