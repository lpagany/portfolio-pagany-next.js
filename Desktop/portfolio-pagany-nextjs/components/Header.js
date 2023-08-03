'use client'
import { useMediaQuery } from "react-responsive";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import React, { createContext, useEffect, useState } from 'react';

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <>
      {isDesktop ? <DesktopHeader /> : <MobileHeader />}
    </>
  );
};

export default Header;


