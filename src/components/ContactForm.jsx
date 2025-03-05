'use client';
import React, { useState } from 'react';
import { courses } from '@/app/courses/data';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage('');
    const formBody = new URLSearchParams(formData).toString();
    try {
      const response = await fetch('/mail.php', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody,
      });
      if (!response.ok) {
        throw new Error('Failed to send to mail.php');
      }
      const result = await response.text();
      setResponseMessage(result);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        course: '',
        message: '',
      });
      setTimeout(() => {
        setIsSuccess(false);
        setResponseMessage('');
      }, 2000);
    } catch (error) {
      setResponseMessage(
        'Oops! An error occurred and your message could not be sent.'
      );
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div
        className="mb-24 position-relative"
        data-aos="fade-up-left"
        data-aos-duration={400}
      >
        <input
          type="text"
          className="bg-white text-black border border-transparent focus-border-main-600 h-48 rounded-pill px-16 ps-60 outline-0 w-100"
          placeholder="Enter Name..."
          value={formData.name}
          onChange={handleChange}
        />
        <span className="bg-white text-neutral-200 text-2xl flex-center w-48 h-48 rounded-circle border border-main-25 border-4 position-absolute inset-inline-start-0 top-50 translate-middle-y">
          <i className="ph-bold ph-user-circle" />
        </span>
      </div>
      <div
        className="mb-24 position-relative"
        data-aos="fade-up-left"
        data-aos-duration={600}
      >
        <input
          type="email"
          className="bg-white text-black border border-transparent focus-border-main-600 h-48 rounded-pill px-16 ps-60 outline-0 w-100"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <span className="bg-white text-neutral-200 text-2xl flex-center w-48 h-48 rounded-circle border border-main-25 border-4 position-absolute inset-inline-start-0 top-50 translate-middle-y">
          <i className="ph-bold ph-envelope-open" />
        </span>
      </div>
      <div
        className="mb-24 position-relative"
        data-aos="fade-up-left"
        data-aos-duration={800}
      >
        <select
          className="bg-white text-black border border-transparent focus:border-main-600 h-48 rounded-pill px-16 ps-60 outline-0 w-100 text-neutral-300"
          value={formData.course}
          onChange={handleChange}
        >
          <option value={''} disabled selected>
            Select a Course
          </option>
          {courses.map((course) => (
            <option key={course.slug} value={course.slug}>
              {course.title}
            </option>
          ))}
        </select>

        <span className="bg-white text-neutral-200 text-2xl flex-center w-48 h-48 rounded-circle border border-main-25 border-4 position-absolute inset-inline-start-0 top-50 translate-middle-y">
          <i className="ph-bold ph-book" />
        </span>
      </div>
      <div className="mb-24">
        <textarea
          id="desc"
          className="common-input rounded-24 border-transparent focus-border-main-600 h-110"
          placeholder="Enter Your Message..."
          defaultValue={''}
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <div
        className="mt-40 position-relative"
        data-aos="fade-up-left"
        data-aos-duration={1000}
      >
        <button
          type="submit"
          disabled={isLoading}
          className="btn btn-main rounded-pill flex-align d-inline-flex gap-8"
        >
          {isLoading ? 'Sending...' : isSuccess ? 'Sent' : 'Join Now'}
          <i className="ph-bold ph-arrow-up-right d-flex text-lg" />
        </button>
        <div className={`ajax-response ${isSuccess ? 'success' : 'error'}`}>
          {responseMessage}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
