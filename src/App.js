import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/categories';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;
