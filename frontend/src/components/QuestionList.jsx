import { useEffect, useState } from 'react';
import axios from 'axios';

export default function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/questions?category_id=1').then(res => {
      setQuestions(res.data);
    });
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Sample Questions (Category ID 1)</h2>
      <ul className="list-disc list-inside">
        {questions.map(q => (
          <li key={q.id} className="text-gray-600">{q.question_text}</li>
        ))}
      </ul>
    </div>
  );
}
