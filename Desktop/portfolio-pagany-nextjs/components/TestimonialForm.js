import React, { useState } from "react";

const TestimonialForm = ({ onCancel, onSubmit, onEdit, initialContent }) => {
  const [content, setContent] = useState(initialContent || "");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (initialContent) {
      onEdit(content);
    } else {
      onSubmit(content);
    }
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-4">
      <textarea
        className="border border-gray-300 px-4 py-2 w-full rounded mb-4"
        name="content"
        value={content}
        onChange={handleChange}
        rows="4"
        placeholder="Laissez votre témoignage ici..."
      />
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="border border-gray-300 text-gray-600 px-3 py-1 rounded"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          {initialContent ? "Modifier" : "Ajouter"}
        </button>
      </div>
    </form>
  );
};

export default TestimonialForm;
