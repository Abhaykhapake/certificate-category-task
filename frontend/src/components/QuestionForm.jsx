import { useEffect, useState } from 'react';
import axios from 'axios';

export default function QuestionForm() {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  const [question, setQuestion] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/categories').then(res => {
      setCategories(res.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/questions', {
      category_id: categoryId,
      question_text: question,
    });
    setQuestion('');
    alert('Question added!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Add Question</h2>
      <div className="flex flex-col gap-2">
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="p-2 border rounded-md"
          
        >
          <option value="">Select category</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <textarea
          placeholder="Enter question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="p-2 border rounded-md"
          rows={3}
          required
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
          Add Question
        </button>
      </div>
    </form>
  );
}
