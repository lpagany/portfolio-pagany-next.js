"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import projetImage1 from "public/36822-MIX-MINI-FRIANDISES-FOND-BLANC-V2.png";
import projetImage2 from "public/friandise.jpg";

export default function Projet3() {
  const projetBusinessPlan = {
    id: 3,
    title: (
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
        "Projet Business Plan"
      </div>
    ),
    description: (
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
        "Un plan d'affaires détaillé pour un projet entrepreneurial."
      </div>
    ),
    link: "/projet-business-plan",
    technologies: ["Microsoft Word", "Excel", "PowerPoint"],
    features: ["Analyse de marché", "Stratégie de marketing", "Plan financier"],
  };

  return (
    <div className="projet-container">
      <h1 className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52 text-4xl font-bold mb-4">
        Bienvenue au projet Business Plan !!!
      </h1>
      <h2 className="text-2xl font-bold mb-2">{projetBusinessPlan.title}</h2>
      <p className="mb-4">{projetBusinessPlan.description}</p>
      <h3 className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52 text-xl font-bold mb-2">
        Technologies utilisées :
      </h3>
      <ul className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52 mb-4">
        {projetBusinessPlan.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <h3 className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52 text-xl font-bold mb-2">
        Fonctionnalités :
      </h3>
      <ul className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52 mb-4">
        {projetBusinessPlan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <div className="projet-images grid gap-4 grid-cols-2">
        <h3 className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52 text-xl font-bold mb-2">
          Images :
        </h3>
        <div className="flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52 grid grid-cols-3 gap-4">
          <Image
            src={projetImage1}
            alt="Projet Image 1"
            width={300}
            height={200}
            className="m-1"
          />
          <Image
            src={projetImage2}
            alt="Projet Image 2"
            width={300}
            height={200}
            className="m-1"
          />
        </div>
      </div>
    </div>
  );
}
