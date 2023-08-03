'use client'
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "Le prénom est requis";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Le nom est requis";
    }

    if (!formData.email) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'email est invalide";
    }

    if (!formData.message) {
      newErrors.message = "Le message est requis";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
    
      console.log(formData);
      alert("Votre formulaire a été soumis avec succès !");
      handleReset();
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">Contactez-nous</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4 flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
          <label htmlFor="firstName" className="block font-medium mb-1">
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`border border-gray-300 px-4 py-2 w-full rounded ${
              errors.firstName ? "border-red-500" : ""
            }`}
            placeholder="Entrez votre prénom"
          />
          {errors.firstName && (
            <p className="text-red-500 mt-1">{errors.firstName}</p>
          )}
        </div>
        {/* Ajout du hint pour le prénom */}
        <div className="mb-4 flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
          <label htmlFor="lastName" className="block font-medium mb-1">
            Nom
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`border border-gray-300 px-4 py-2 w-full rounded ${
              errors.lastName ? "border-red-500" : ""
            }`}
            placeholder="Entrez votre nom"
          />
          {errors.lastName && (
            <p className="text-red-500 mt-1">{errors.lastName}</p>
          )}
        </div>
        {/* Ajout du hint pour le nom */}
        <div className="mb-4 flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`border border-gray-300 px-4 py-2 w-full rounded ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder="Entrez votre adresse email"
          />
          {errors.email && (
            <p className="text-red-500 mt-1">{errors.email}</p>
          )}
        </div>
        
        <div className="mb-4 flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
          <label htmlFor="message" className="block font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className={`border border-gray-300 px-4 py-2 w-full rounded ${
              errors.message ? "border-red-500" : ""
            }`}
            placeholder="Entrez votre message"
          />
          {errors.message && (
            <p className="text-red-500 mt-1">{errors.message}</p>
          )}
        </div>
       
        <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
          <button
            type="submit"
            className="bg-green-500 text-blue px-4 py-2 rounded hover:bg-blue-600"
          >
            Envoyer
          </button>
          
          <button
            type="button"
            onClick={handleReset}
            className="bg-red-500 text-green px-4 py-2 rounded ml-4 hover:bg-red-600"
          >
            Réinitialiser
          </button>
        </div>
      </form>
    </div>
  );
}



