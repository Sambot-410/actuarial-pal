'use client';

import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    option: 'once',
    startDate: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', option: 'once', startDate: '' });
      } else {
        const data = await res.json();
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to submit. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-6 text-center">
        Thank you! We'll contact you shortly to schedule your call.
      </div>
    );
  }

  return (
    <section id="register" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">Register Now</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Preferred Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Training Option</label>
            <select
              name="option"
              value={formData.option}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="once">Once per week (₦10,000)</option>
              <option value="thrice">Thrice per week (₦20,000)</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Register & Schedule Call
          </button>
        </form>
      </div>
    </section>
  );
}