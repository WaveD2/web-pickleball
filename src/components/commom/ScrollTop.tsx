import { useState, useEffect } from 'react';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`
          ${isVisible ? 'opacity-100' : 'opacity-0'}
          bg-blue-600 hover:bg-blue-700 
          text-white rounded-full 
          w-12 h-12 md:w-14 md:h-14
          flex items-center justify-center 
          transition-opacity duration-300
          shadow-lg hover:shadow-xl
          transform hover:scale-105
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        `}
      >
        <svg
          className="w-6 h-6 md:w-8 md:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollTop;