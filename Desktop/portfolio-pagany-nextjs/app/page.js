"use client";
import NextLink from "next/link";
import React from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <section id="accueil">
        <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
          <div className="md:w-1/2 md:mt-2">
            <Image
              className="rounded-full shadow-2xl"
              src="/PaganyLeonard.png"
              alt="Pagany Léonard"
              width={300}
              height={300}
            />
          </div>
          <div className="md:mt-2 md:w-3/5">
            <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
              Bonjour, je m'appelle Pagany!
            </h1>
            <p className="text-lg mt-4 mb-6 md:text-2xl">
              Je suis un{" "}
              <span className="font-semibold text-teal-600">
                Programmeur informatique
              </span>{" "}
              basé à Ottawa. Développeur Front End passionné et expérimenté,
              spécialisé dans la réalisation de projets numériques. Forte
              expertise dans les technologies telles que React.js et Next.js.
              Soucieux du détail et orienté vers la qualité, je suis constamment
              à l'affût des dernières tendances en matière de développement
              numérique. Capable de travailler en équipe et de partager mes
              connaissances avec les moins expérimentés.
            </p>
            <br />
            <div className="justify-center">
              <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
                {" "}
                Mes Compétences
              </h1>
              <div className="text-lg mt-4 mb-6 md:text-2xl">
                <p>
                  <span className="font-semibold text-teal-600">Front-End</span>
                  : HTML, CSS, JavaScript, React, Next.JS
                </p>
                <p>
                  <span className="font-semibold text-teal-600">Back-End</span>:
                  Node.js, Express, PHP
                </p>
                <p>
                  <span className="font-semibold text-teal-600">
                    Conception
                  </span>
                  : Photoshop, After Effects, Figma
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
