"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import projetImage1 from "public/e-commerce-1182903_640.png";
import projetImage2 from "public/online-shopping-1929002_1280.png";
import projetImage3 from "public/costume.jpg";

export default function Projet2() {
  const projetMode = {
    id: 2,
    title: 'Projet Mode',
    description: <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
      "Un site de commerce électronique de mode offrant une large sélection de vêtements et d'accessoires."</div>,
    link: '/projet-mode',
    technologies: ['React', 'Node.js', 'MongoDB'],
    features: ['Catalogue de produits', 'Panier d\'achat', 'Paiement sécurisé'],
  };

  return (
    <div className="projet-container">
      <h1 className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52 text-4xl font-bold">Bienvenue au projet Mode !!!</h1>
      <h2 className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52 text-2xl font-bold">{projetMode.title}</h2>
      <p>{projetMode.description}</p>
      <h3 className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52 text-xl font-bold">Technologies utilisées :</h3>
      <ul className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
        {projetMode.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <h3 className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52 text-xl font-bold">Fonctionnalités :</h3>
      <ul className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
        {projetMode.features.map((feature) => (
          <li key={feature}>{feature}</li>
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
