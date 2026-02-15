import React, { useState } from 'react';

const ContactModal = ({ isOpen, onClose, ownerEmail }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h3 className="text-xl font-bold mb-4">Contact Owner</h3>
        <p>Email: {ownerEmail}</p>
        <textarea className="w-full mb-3 p-2 border rounded" placeholder="Type your message..." />
        <button className="bg-blue-600 text-white p-2 rounded mr-2">Send</button>
        <button className="bg-gray-400 text-white p-2 rounded" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ContactModal;
