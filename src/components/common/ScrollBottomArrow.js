import React, { useState } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import './ScrollArrow.css';

const ScrollBottomArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 150) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 150) {
      setShowScroll(false);
    }
  };

  const scrollBottom = () => {
    window.scrollTo({ top: (document.body.offsetHeight) - 800, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <div className="scroll" style={{ marginRight: 180 }}>
      <FaArrowCircleDown
        onClick={scrollBottom}
        style={{
          height: 40, width: 40, display: showScroll ? 'flex' : 'none',
        }}
      />
    </div>
  );
};

export default ScrollBottomArrow;
