import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X } from 'lucide-react';

const ChatSupport = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! How can I help you today?", sender: "support", timestamp: "14:55" }
    ]);
    const [newMessage, setNewMessage] = useState("");
    const chatWindowRef = useRef(null); // Ref for the chat window

    // Function to simulate sending a message and receiving a reply
    const handleSendMessage = () => {
        if (newMessage.trim() === "") return;

        const userMessage = { text: newMessage, sender: "user", timestamp: getCurrentTime() };
        setMessages(prev => [...prev, userMessage]);
        setNewMessage("");

        setTimeout(() => {
            const reply = generateReply(newMessage);
            setMessages(prev => [...prev, { text: reply, sender: "support", timestamp: getCurrentTime() }]);
        }, 500);
    };

    // Function to handle Enter key press for sending messages
    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSendMessage();
    };

    // Function to generate a reply based on user message
    const generateReply = (userMessage) => {
      const lowerCaseMessage = userMessage.toLowerCase();

      if (lowerCaseMessage.includes("help")) {
          return "Sure, what do you need help with?";
      } else if (lowerCaseMessage.includes("order")) {
          return "To track your order, please provide your order ID.";
      } else if (lowerCaseMessage.includes("delivery")) {
        return "For delivery-related queries, please share your order number and address.";
      }
      else if (lowerCaseMessage.includes("return")) {
          return "You can initiate a return from myorders section.";
      }
      else if (lowerCaseMessage.includes("cancel")) {
          return "Sorry, orders once placed cannot be cancelled";
      }
      else if (lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hello")) {
          return "Hello!";
      }
       else if (lowerCaseMessage.includes("thank you") || lowerCaseMessage.includes("thanks")) {
          return "You're welcome!";
      }
      else {
          return "I'm here to assist you. Please tell me what you need.";
      }
  };

    // Function to get current time in HH:MM format
    const getCurrentTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    // Scroll to bottom of chat when messages change
    useEffect(() => {
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen && (
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-96 mb-4 overflow-hidden transform transition-all duration-300 ease-in-out max-h-[500px]">
                    <div className="bg-green-600 text-white p-4 flex justify-between items-center">
                        <h3 className="font-semibold">Support Chat</h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-gray-200 transition-colors"
                            aria-label="Close chat"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="h-[320px] p-4  bg-gray-50 dark:bg-gray-900 flex flex-col" ref={chatWindowRef} style={{overflowY: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}>
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`rounded-lg p-3 max-w-[70%] mb-2 ${
                                    msg.sender === "user"
                                        ? "bg-green-500 text-white self-end"
                                        : "bg-gray-200 dark:bg-gray-700 dark:text-white self-start"
                                }`}
                            >
                                <p className="text-sm">{msg.text}</p>
                                <p className="text-xs opacity-70 mt-1 text-right">
                                  {msg.timestamp}
                                </p>
                            </div>
                        ))}
                         <style jsx global>{`
              .h-[320px] ::-webkit-scrollbar {
                display: none;
              }
            `}</style>
                    </div>

                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="flex-grow rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="bg-green-500 hover:bg-green-600 transition-colors text-white rounded-md px-6 py-2"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${
                  isOpen ? 'hidden' :
                  'bg-green-500 hover:bg-green-600 transition-colors text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg'
                }`}
                aria-label="Open customer support chat"
            >
                <MessageSquare size={24} />
            </button>
        </div>
    );
};

export default ChatSupport;

