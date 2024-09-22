import React from 'react';

export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-2">For any inquiries, you can reach us at:</p>
          <p className="text-gray-600">Email: <a href="mailto:info@example.com" className="text-blue-500 hover:underline">info@example.com</a></p>
          <p className="text-gray-600">Phone: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1 (234) 567-890</a></p>
          <p className="text-gray-600">Address: 123 Main Street, City, Country</p>
        </section>
      </div>
    </div>
  );
}
