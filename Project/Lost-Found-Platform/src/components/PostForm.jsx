import React from 'react';

const PostForm = () => (
  <form className="bg-white p-6 rounded shadow-md max-w-md mx-auto mb-6">
    <h3 className="text-xl font-bold mb-4">Post Lost/Found Item</h3>
    <select className="w-full mb-3 p-2 border rounded">
      <option value="lost">Lost</option>
      <option value="found">Found</option>
    </select>
    <input type="text" placeholder="Title" className="w-full mb-3 p-2 border rounded" />
    <input type="text" placeholder="Location" className="w-full mb-3 p-2 border rounded" />
    <input type="date" className="w-full mb-3 p-2 border rounded" />
    <textarea placeholder="Description" className="w-full mb-3 p-2 border rounded" />
    <input type="file" className="w-full mb-3 p-2 border rounded" />
    <button className="w-full bg-blue-600 text-white p-2 rounded">Submit</button>
  </form>
);

export default PostForm;
