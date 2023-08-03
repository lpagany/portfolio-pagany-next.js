'use client'
import Link from "next/link";
import React, { useState } from "react";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <nav>
        <h2 className="text-2xl font-bold my-6 py-8 text-center">Portfolio de Pagany Léonard</h2>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={toggleMenu} // Add onClick event handler
          >
            {isMenuOpen ? "Close Menu" : "Menu"}
          </button>
        </div>
        {isMenuOpen && ( // Show the navigation links when the menu is open
          <ul style={{ display: "flex", justifyContent: "space-around" }}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projets">Projets</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/temoignages">Témoignages</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default MobileHeader;

