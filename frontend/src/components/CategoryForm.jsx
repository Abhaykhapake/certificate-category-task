import { useState } from 'react';
import axios from 'axios';

export default function CategoryForm() {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/categories', { name });
    setName('');
    alert('Category added!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Add Category</h2>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 p-2 border rounded-md"
          required
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800">
          Add
        </button>
      </div>
    </form>
  );
}
