// components/TestimonialCard.js
"use client";
import React from "react";

const TestimonialCard = ({ testimonial, onEditClick, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <p className="mb-4">{testimonial.content}</p>
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => onEditClick(testimonial.id)} // Pass the testimony ID to onEditClick
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Modifier
        </button>
        <button
          onClick={() => onDelete(testimonial.id)} // Pass the testimony ID to onDelete
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;

