import React from 'react';
import ScrollBottomArrow from './ScrollBottomArrow';
import ScrollTopArrow from './ScrollTopArrow';

const ScrollBottoms = () => (
  <div className="container d-flex justify-content-end align-items-center">
    <ScrollTopArrow />
    <ScrollBottomArrow />
  </div>
);

export default ScrollBottoms;
