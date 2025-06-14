import CategoryForm from './components/CategoryForm';
import QuestionForm from './components/QuestionForm';
import QuestionList from './components/QuestionList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-6 space-y-8">
        <h1 className="text-3xl font-bold text-center text-blue-700">Certificate Question Manager</h1>
        <CategoryForm />
        <QuestionForm />
        <QuestionList />
      </div>
    </div>
  );
}

export default App;
