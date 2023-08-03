"use client";
import Link from "next/link";
import React, { useState } from "react";

const DesktopHeader = () => {
  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <nav>
        <h2 className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
          Portfolio de Pagany Léonard
        </h2>
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
            <Link href="/user-list">Témoignages</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default DesktopHeader;
