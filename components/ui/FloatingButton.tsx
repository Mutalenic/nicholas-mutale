import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const FloatingButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50 transform transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none">
          <Link href="#contact">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <button 
                className="relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Hire Me
              </button>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default FloatingButton;