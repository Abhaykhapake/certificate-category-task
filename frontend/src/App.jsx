import CategoryForm from './components/CategoryForm';
import QuestionForm from './components/QuestionForm';
import QuestionList from './components/QuestionList';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout';
import QuestionManager from './components/QuestionManager';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

       <Layout>
      <QuestionManager />
    </Layout>
      
      <br />
      
    </div>
  );
}

export default App;
