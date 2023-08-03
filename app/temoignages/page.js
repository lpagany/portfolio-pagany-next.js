/*'use client'
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTestimonial,
  editTestimonial,
  deleteTestimonial,
} from "../../store/";
import TestimonialCard from "../../components/TestimonialCard";
import TestimonialForm from "../../components/TestimonialForm";

/*const Temoignages = () => {
  const testimonials = useSelector((state) => state.testimonials);
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(null);

  const handleAddTestimonial = (content) => {
    dispatch(addTestimonial(content));
  };

  const handleEditTestimonial = (content) => {
    if (currentTestimonial) {
      dispatch(editTestimonial({ id: currentTestimonial.id, content }));
      setEditMode(false);
      setCurrentTestimonial(null);
    }
  };

  const handleDeleteTestimonial = (id) => {
    dispatch(deleteTestimonial(id));
  };

  const handleEditClick = (testimonial) => {
    setEditMode(true);
    setCurrentTestimonial(testimonial);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setCurrentTestimonial(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52 text-4xl font-bold mb-8">
          Témoignages</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials && testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              onEditClick={handleEditClick}
              onDelete={handleDeleteTestimonial}
            />
          ))}
        </div>
        <div className="flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52 mt-8">
          {!editMode ? (
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Ajouter un témoignage
            </button>
          ) : (
            <TestimonialForm
              onCancel={handleCancelEdit}
              onSubmit={handleAddTestimonial}
              onEdit={handleEditTestimonial}
              initialContent={currentTestimonial?.content}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Temoignages;
*/
