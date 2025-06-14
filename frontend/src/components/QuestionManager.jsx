import CategoryForm from './CategoryForm';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';

export default function QuestionManager() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-blue-700 text-center">
        Certificate Question Manager
      </h1>
      <CategoryForm />
      <QuestionForm />
      <QuestionList />
    </div>
  );
}
