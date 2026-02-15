import React, { useState } from 'react';
import PostForm from '../components/PostForm';
import ContactModal from '../components/ContactModal';
import EditModal from '../components/EditModal';

const sampleListings = [
  {
    id: 1,
    type: 'Lost',
    title: 'Lost Wallet',
    image: 'https://via.placeholder.com/150',
    location: 'Library',
    date: '2026-02-10',
    owner: true,
    description: 'Black leather wallet with cards.'
  },
  {
    id: 2,
    type: 'Found',
    title: 'Found Keys',
    image: 'https://via.placeholder.com/150',
    location: 'Cafeteria',
    date: '2026-02-09',
    owner: false,
    description: 'Set of car keys.'
  }
];

const Home = () => {
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [ownerEmail, setOwnerEmail] = useState('owner@example.com');
  const [editOpen, setEditOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const filtered = sampleListings.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.location.toLowerCase().includes(search.toLowerCase())
  );

  const handleContact = (email) => {
    setOwnerEmail(email);
    setModalOpen(true);
  };
  const handleEdit = (item) => {
    setEditItem(item);
    setEditOpen(true);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <PostForm />
      <h2 className="text-2xl font-bold mb-4">Lost & Found Listings</h2>
      <input
        type="text"
        placeholder="Search by title or location"
        className="w-full mb-4 p-2 border rounded"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(item => (
          <div key={item.id} className="bg-white p-4 rounded shadow-md flex flex-col">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded mb-2" />
            <div className="font-bold text-lg">{item.title} ({item.type})</div>
            <div className="text-gray-600">{item.location} | {item.date}</div>
            <div className="my-2">{item.description}</div>
            {item.owner && <button className="bg-yellow-500 text-white p-2 rounded mb-2" onClick={() => handleEdit(item)}>Edit Post</button>}
            <button className="bg-blue-600 text-white p-2 rounded" onClick={() => handleContact('owner@example.com')}>Contact Owner</button>
          </div>
        ))}
      </div>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} ownerEmail={ownerEmail} />
      <EditModal isOpen={editOpen} onClose={() => setEditOpen(false)} item={editItem} />
    </div>
  );
};

export default Home;
