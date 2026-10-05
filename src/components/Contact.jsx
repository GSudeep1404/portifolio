import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Fire subtle celebratory confetti
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#4a3427', '#9a3412', '#15803d', '#d4af37'],
        });
      } catch (err) {
        // fallback silently
      }

      // Reset form after delay
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 900);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#ded5c5] text-[#5e4634] text-xs font-mono mb-3 shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 text-[#9a3412]" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2b1e17] tracking-tight mb-4">
            Let's Build Something <span className="gradient-text">Intelligent</span>
          </h2>
          <p className="text-[#6e5a4d] text-base sm:text-lg">
            I'm always interested in interesting AI, software, and innovation projects. Feel free to connect with me.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-[#2b1e17] mb-2">
                Connect Directly
              </h3>
              <p className="text-[#5e4b3e] text-sm leading-relaxed">
                Whether you're organizing a hackathon, exploring an AI research collaboration, offering an internship, or want to discuss LLM security, my inbox is open!
              </p>

              {/* Email Card with Copy Feature */}
              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e8ded0] flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-white text-[#9a3412] border border-[#ded5c5] shrink-0 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8a7667] block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-xs sm:text-sm font-semibold text-[#2b1e17] hover:text-[#9a3412] transition-colors truncate block"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white border border-[#ded5c5] text-[#6b584a] hover:text-[#2b1e17] hover:bg-[#f6f0e6] transition-colors shrink-0 shadow-xs"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <CheckCircle2 className="w-4 h-4 text-[#15803d]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn Link Card */}
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e8ded0] hover:border-[#bdafa0] flex items-center justify-between gap-3 group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white text-[#7c583f] border border-[#ded5c5] shrink-0 shadow-xs">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8a7667] block">
                      Professional Network
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#2b1e17] group-hover:text-[#9a3412] transition-colors">
                      LinkedIn Profile
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#8a7667] group-hover:text-[#2b1e17] transition-colors" />
              </a>

              {/* GitHub Link Card */}
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e8ded0] hover:border-[#bdafa0] flex items-center justify-between gap-3 group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white text-[#2b1e17] border border-[#ded5c5] shrink-0 shadow-xs">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8a7667] block">
                      Repositories & Code
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#2b1e17] group-hover:text-[#9a3412] transition-colors">
                      GitHub Profile
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#8a7667] group-hover:text-[#2b1e17] transition-colors" />
              </a>
            </div>

            {/* Quick response badge */}
            <div className="p-4 rounded-2xl bg-white border border-[#ded5c5] flex items-center gap-3 text-xs text-[#5e4b3e] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse shrink-0" />
              <span>Typical response time: within 24 hours</span>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 relative">
              <h3 className="text-xl font-bold text-[#2b1e17] mb-2 flex items-center gap-2">
                <span>Send a Direct Message</span>
                <Sparkles className="w-4 h-4 text-[#9a3412]" />
              </h3>
              <p className="text-xs sm:text-sm text-[#6e5a4d] mb-6">
                Fill in the details below to start a conversation.
              </p>

              {isSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center gap-3 text-[#14532d] text-sm animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-[#16a34a]" />
                  <div>
                    <p className="font-semibold">Message simulated successfully!</p>
                    <p className="text-xs text-[#15803d]">
                      Thanks for reaching out! You can also email me directly at {personalData.email}.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase tracking-wider text-[#6e5a4d] mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Chen"
                      className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#ded5c5] text-[#2b1e17] placeholder-[#a89687] text-sm focus:outline-none focus:border-[#4a3528] focus:ring-1 focus:ring-[#4a3528] transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase tracking-wider text-[#6e5a4d] mb-1.5"
                    >
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#ded5c5] text-[#2b1e17] placeholder-[#a89687] text-sm focus:outline-none focus:border-[#4a3528] focus:ring-1 focus:ring-[#4a3528] transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono uppercase tracking-wider text-[#6e5a4d] mb-1.5"
                  >
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Internship Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#ded5c5] text-[#2b1e17] placeholder-[#a89687] text-sm focus:outline-none focus:border-[#4a3528] focus:ring-1 focus:ring-[#4a3528] transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase tracking-wider text-[#6e5a4d] mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or idea..."
                    className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#ded5c5] text-[#2b1e17] placeholder-[#a89687] text-sm focus:outline-none focus:border-[#4a3528] focus:ring-1 focus:ring-[#4a3528] transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-50 active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <span>Dispatching message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#e5d9c2]" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Backend integration note */}
              <div className="mt-4 pt-3.5 border-t border-[#eee4d6] text-[11px] font-mono text-[#8a7667]">
                <span>Direct delivery enabled. To connect Formspree or EmailJS, configure endpoints in <code className="text-[#36261d] font-semibold">Contact.jsx</code>.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
