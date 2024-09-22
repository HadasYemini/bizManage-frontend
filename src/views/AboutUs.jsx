import React from 'react';

export default function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            We are dedicated to providing exceptional service and value to our customers. Our mission is to continuously innovate and improve, ensuring that we meet the highest standards of excellence.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our History</h2>
          <p className="text-gray-600">
            Founded in 2020, our company has quickly grown to become a leader in our industry. We started with a small team of dedicated professionals and have expanded to serve a global market.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-4 text-center">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4"/>
              <h3 className="text-xl font-semibold text-gray-800">Hadas Yemini</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 text-center">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4"/>
              <h3 className="text-xl font-semibold text-gray-800">Hadas Yemini</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 text-center">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4"/>
              <h3 className="text-xl font-semibold text-gray-800">Hadas Yemini</h3>
              <p className="text-gray-600">COO</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-2">For inquiries, please reach out to us at:</p>
          <p className="text-gray-600">Email: <a href="mailto:info@example.com" className="text-blue-500 hover:underline">info@example.com</a></p>
          <p className="text-gray-600">Phone: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1 (234) 567-890</a></p>
        </section>
      </div>
    </div>
  );
}
