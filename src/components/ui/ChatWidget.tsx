import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[70]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-80 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="bg-navy p-6 text-white">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-lg">National Pipes</h3>
                <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>
              <p className="text-xs text-white/70">Hi, welcome to National Pipes. How can we help you today?</p>
            </div>
            <div className="h-64 p-4 bg-gray-50 overflow-y-auto flex flex-col gap-3">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none text-sm text-navy shadow-sm max-w-[80%]">
                Hello! We're here to assist you with any PVC solutions.
              </div>
            </div>
            <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-grow bg-gray-50 border-none rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-navy/20"
              />
              <button className="bg-navy text-white p-2 rounded-full hover:bg-navy/90 transition-colors">
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-navy text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-navy/90 transition-all"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
