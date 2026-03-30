import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { motion } from 'motion/react';

const FloatingSidebar = () => {
  const actions = [
    { icon: Phone, label: 'Call Us', href: 'tel:+261340000000', color: 'bg-blue-600' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/261340000000', color: 'bg-green-500' },
    { icon: FileText, label: 'Enquire Now', href: '/#contact', color: 'bg-navy' },
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] flex flex-col gap-2 pr-0">
      {actions.map((action, idx) => (
        <motion.a
          key={idx}
          href={action.href}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 + idx * 0.1 }}
          className={`group flex items-center gap-3 ${action.color} text-white p-3 pl-4 rounded-l-xl shadow-lg hover:pl-6 transition-all duration-300`}
        >
          <span className="text-xs font-bold uppercase tracking-widest hidden group-hover:block whitespace-nowrap">
            {action.label}
          </span>
          <action.icon size={20} />
        </motion.a>
      ))}
    </div>
  );
};

export default FloatingSidebar;
