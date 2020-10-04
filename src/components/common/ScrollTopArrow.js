import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import './ScrollArrow.css';

const ScrollTopArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 700) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 700) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <div className="scroll scrollTop">
      <FaArrowCircleUp
        onClick={scrollTop}
        style={{
          height: 50, width: 50, display: showScroll ? 'flex' : 'none',
        }}
      />
    </div>
  );
};

export default ScrollTopArrow;
