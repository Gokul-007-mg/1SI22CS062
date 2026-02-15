import React from 'react';

const EditModal = ({ isOpen, onClose, item }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h3 className="text-xl font-bold mb-4">Edit Post</h3>
        <input type="text" defaultValue={item?.title} className="w-full mb-3 p-2 border rounded" />
        <input type="text" defaultValue={item?.location} className="w-full mb-3 p-2 border rounded" />
        <input type="date" defaultValue={item?.date} className="w-full mb-3 p-2 border rounded" />
        <textarea defaultValue={item?.description} className="w-full mb-3 p-2 border rounded" />
        <button className="bg-yellow-500 text-white p-2 rounded mr-2">Save</button>
        <button className="bg-gray-400 text-white p-2 rounded" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EditModal;
