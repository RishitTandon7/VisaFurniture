import React from 'react';
import { TruckIcon, ShieldCheck, Clock, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <TruckIcon className="h-10 w-10 text-primary-300" />,
    title: "Free Shipping",
    description: "Free shipping on all orders above ₹20,000"
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary-300" />,
    title: "Quality Guarantee",
    description: "Every piece crafted with premium materials"
  },
  {
    icon: <Clock className="h-10 w-10 text-primary-300" />,
    title: "24/7 Support",
    description: "Get assistance anytime you need help"
  },
  {
    icon: <RotateCcw className="h-10 w-10 text-primary-300" />,
    title: "Easy Returns",
    description: "30-day hassle-free return policy"
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <motion.section 
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-soft hover:shadow-hover transition-all duration-500 transform hover:-translate-y-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}
            >
              <motion.div 
                className="mb-4 bg-primary-50 p-4 rounded-full"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-secondary-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;