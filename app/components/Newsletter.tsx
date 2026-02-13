'use client';

import { motion, type Variants } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function NewsletterSection() {
 
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const floatingIcon: Variants = {
    hidden: { y: -10 },
    visible: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="relative py-24 px-6 lg:px-40 bg-white overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto bg-white border border-[#0a7bbe] shadow-1xl rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* LEFT CONTENT */}
        <motion.div variants={item} className="flex-1 text-center lg:text-left">
          
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 bg-[#0A7BBE]/10 text-[#0A7BBE] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <motion.div variants={floatingIcon} animate="visible">
              <Rocket size={16} />
            </motion.div>
            Coming Soon
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A7BBE] leading-tight mb-4">
            Subscribe To Our <br /> Newsletter
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
            We’re working on something exciting!!!
          </p>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row w-full lg:w-[500px] gap-4"
        >
          <input
            type="email"
            placeholder="Enter your Email"
            disabled
            className="flex-1 border border-gray-300 rounded-full px-8 py-4 text-gray-500 text-sm sm:text-base bg-gray-100 cursor-not-allowed"
          />
          <button
            disabled
            className="bg-gray-400 text-white rounded-full px-8 py-4 text-sm sm:text-base flex items-center justify-center cursor-not-allowed"
          >
            Launching Soon 🚀
          </button>
        </motion.div>
      </motion.div>

      
    </section>
  );
}
