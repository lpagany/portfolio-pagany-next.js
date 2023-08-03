"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import projetImage1 from "public/MaxFit.png";
import projetImage2 from "/public/IMC.png";
import projetImage3 from "public/NouvelleSession.png";

export default function Projet1() {
  const projetMaxFit = {
    id: 1,
    title: "Projet MaxFit",
    description:
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
        "Un système de suivi de remise en forme et de gestion des entraînements."  </div>,
        
    link: "https://gitlab.com/fitness930421/fitness-max",
    technologies: ["React", "Node.js", "MongoDB"],
    features: [
      "Enregistrement des séances d'entraînement",
      "Suivi des progrès",
      "Planification des séances",
    ],
    
  };

  return (
    <div className="projet-container">
      <h1 className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52 text-4xl font-bold">Bienvenue au projet MaxFit!!!</h1>
      <h2 className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52 text-2xl font-bold">{projetMaxFit.title}</h2>
      <p>{projetMaxFit.description}</p>
      <h3 className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52 text-xl font-bold">Technologies utilisées :</h3>
      <ul className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
        {projetMaxFit.technologies.map((tech) => (
          <li className="flex justify-center items-center m-1" key={tech}>{tech}</li>
        ))}
      </ul>
      <h3 className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52 text-xl font-bold">Fonctionnalités :</h3>
      <ul className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
        {projetMaxFit.features.map((feature) => (
          <li className="flex justify-center items-center m-1 list-none" key={feature}>{feature}</li>
        ))}
      </ul>
      <h3 className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52 text-xl font-bold">Photos :</h3>
      <div className="flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52 grid grid-cols-3 gap-4">
  <Image src={projetImage1} alt="Projet Image 1" width={300} height={200} className="m-1" />
  <Image src={projetImage2} alt="Projet Image 2" width={300} height={200} className="m-1" />
  <Image src={projetImage3} alt="Projet Image 3" width={300} height={200} className="m-1" />
</div>

    </div>
  );
}
