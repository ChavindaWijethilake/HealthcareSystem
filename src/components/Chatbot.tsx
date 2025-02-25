"use client"; 

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Floating Chatbot Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition-all"
      >
        <MessageCircle size={24} />
      </button>

      {isChatOpen && (
        <div className="fixed bottom-16 right-6 w-80 h-96 bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
          <div className="flex justify-between items-center bg-teal-600 text-white p-2">
            <span className="text-lg font-semibold">Chatbot</span>
            <button onClick={() => setIsChatOpen(false)} className="text-white text-lg">
              ✕
            </button>
          </div>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/PSq__E85SnBfpRj0N_4Ea"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          ></iframe>
        </div>
      )}
    </>
  );
};

export default Chatbot;
