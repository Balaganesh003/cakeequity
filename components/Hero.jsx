import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Hero = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== hasScrolled) {
        setHasScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  return (
    <div className="bg-hero min-h-[100vh] h-[900px] w-full">
      <div className="sticky top-0">
        <Navbar hasScrolled={hasScrolled} />
      </div>
    </div>
  );
};

export default Hero;
