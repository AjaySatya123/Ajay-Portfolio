"use client"; 

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <ul
          className="relative mx-auto flex w-fit rounded-full border-2 border-cyan-400/50 bg-slate-900/80 backdrop-blur-md p-1 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
          onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
        >
          <Tab setPosition={setPosition} onClick={() => scrollTo('hero')}>Home</Tab>
          <Tab setPosition={setPosition} onClick={() => scrollTo('about')}>About</Tab>
          <Tab setPosition={setPosition} onClick={() => scrollTo('skills')}>Skills</Tab>
          <Tab setPosition={setPosition} onClick={() => scrollTo('projects')}>Projects</Tab>
          <Tab setPosition={setPosition} onClick={() => scrollTo('contact')}>Contact</Tab>

          <Cursor position={position} />
        </ul>
      </div>
    </nav>
  );
}

const Tab = ({
  children,
  setPosition,
  onClick,
}: {
  children: React.ReactNode;
  setPosition: any;
  onClick?: () => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      onClick={onClick}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs font-bold uppercase text-slate-300 transition-colors hover:text-cyan-400 md:px-5 md:py-3 md:text-sm"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-cyan-500/20 md:h-[44px] top-1 bottom-1 shadow-[inset_0_0_10px_rgba(0,240,255,0.5)] border border-cyan-400/50"
    />
  );
};

export default NavHeader;
