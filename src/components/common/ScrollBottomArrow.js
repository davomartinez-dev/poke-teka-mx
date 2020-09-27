import React, { useState } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import './ScrollArrow.css';

const ScrollBottomArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  const scrollBottom = () => {
    window.scrollTo({ top: (document.body.offsetHeight) - 800, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <div className="scroll scrollBottom">
      <FaArrowCircleDown
        onClick={scrollBottom}
        style={{
          height: 50, width: 50, display: showScroll ? 'flex' : 'none',
        }}
      />
    </div>
  );
};

export default ScrollBottomArrow;
