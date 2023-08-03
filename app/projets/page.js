"use client";
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Projet1 from "../projet1/page";
import Projet2 from "../projet2/page";
import Projet3 from "../projet3/page";

export function SearchBar({ handleSearch }) {
  return (
    <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
      <div className="flex items-center">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Rechercher un projet"
          className="p-2"
        />
      </div>
      <button type="submit" className="mt-2">
        Search
      </button>
    </div>
  );
}

export default function Projets() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterProjects = (project) => {
    if (searchTerm === "") {
      return true;
    }
    return project.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const projects = [
    {
      id: 1,
      title: "Projet 1",
      description: "MaxFit",
      link: "/projet-1",
      //image: "public/MaxFit.png",
    },
    {
      id: 2,
      title: "Projet 2",
      description: "Commerce électronique de mode",
      link: "/projet-2",
      //image: "public/e-commerce-1182903_640.png",
    },
    {
      id: 3,
      title: "Projet 3",
      description: "Business plan",
      link: "/projet-3",
      //image: "public/businessPlan.jpeg",
    },
  ];

  const filteredProjects = projects.filter((project) =>
    filterProjects(project)
  );

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
        Mes projets
      </h1>
      <div className="flex justify-center text-center items-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
        {filteredProjects.map((project) => (
          <div
            className="bg-center bg-cover m-4 p-6 w-2 rounded-lg"
            key={project.id}
            style={{
              backgroundImage: `url(${
                project.id === 1
                  ? "../assets/images/MaxFit.png"
                  : project.id === 2
                  ? "../assets/images/e-commerce-1182903_640.png"
                  : "../assets/images/download.jpeg"
              })`,
            }}
          >
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="mb-2">{project.description}</p>
            {project.id === 1 && (
              <Link href="/projet1">
                <span className="text-blue-500 underline">
                  Voir {project.title}
                </span>
              </Link>
            )}
            {project.id === 2 && (
              <Link href="/projet2">
                <span className="text-blue-500 underline">
                  Voir {project.title}
                </span>
              </Link>
            )}
            {project.id === 3 && (
              <Link href="/projet3">
                <span className="text-blue-500 underline">
                  Voir {project.title}
                </span>
              </Link>
            )}
          </div>
        ))}
      </div>
      <SearchBar handleSearch={handleSearch} />
    </div>
  );
}
