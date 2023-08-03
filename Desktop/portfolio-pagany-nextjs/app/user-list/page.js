'use client'
import React, { useState } from "react";
import Head from "next/head";

const Temoignages = () => {
  const [temoignages, setTemoignages] = useState([
    {
      id: 1,
      contenu: "Ceci est un témoignage.",
    },
    {
      id: 2,
      contenu: "Ceci est un autre témoignage.",
    },
  ]);

  const [formData, setFormData] = useState({
    contenu: "",
  });

  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const ajouterTemoignage = () => {
    const nouveauTemoignage = {
      id: temoignages.length + 1,
      contenu: formData.contenu,
    };
    setTemoignages([...temoignages, nouveauTemoignage]);
    setFormData({ contenu: "" });
  };

  const modifierTemoignage = () => {
    const temoignagesModifies = temoignages.map((temoignage) =>
      temoignage.id === editId ? { ...temoignage, contenu: formData.contenu } : temoignage
    );
    setTemoignages(temoignagesModifies);
    setFormData({ contenu: "" });
    setEditId(null);
  };

  const supprimerTemoignage = (id) => {
    const temoignagesFiltres = temoignages.filter(
      (temoignage) => temoignage.id !== id
    );
    setTemoignages(temoignagesFiltres);
  };

  return (
    <div className="container mx-auto py-8">
      <Head>
        <title>Temoignages</title>
      </Head>
      <h1 className="text-4xl font-bold mb-8">Temoignages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {temoignages.map((temoignage) => (
          <div
            key={temoignage.id}
            className="bg-white shadow-md rounded p-4"
          >
            {editId === temoignage.id ? (
              <div>
                <textarea
                  className="border border-gray-300 px-4 py-2 w-full rounded mb-2"
                  name="contenu"
                  value={formData.contenu}
                  onChange={handleChange}
                  rows="4"
                />
                <div className="flex justify-end space-x-2">
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded"
                    onClick={modifierTemoignage}
                  >
                    Enregistrer
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => setEditId(null)}
                  >
                    Annuler
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p>{temoignage.contenu}</p>
                <div className="flex justify-end mt-4 space-x-2">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => setEditId(temoignage.id)}
                  >
                    Modifier
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => supprimerTemoignage(temoignage.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Ajouter un témoignage</h2>
        <textarea
          className="border border-gray-300 px-4 py-2 w-full rounded mb-2"
          name="contenu"
          value={formData.contenu}
          onChange={handleChange}
          rows="4"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={ajouterTemoignage}
        >
          Ajouter
        </button>
      </div>
    </div>
  );
};

export default Temoignages;
