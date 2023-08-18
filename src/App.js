import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Author';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/author" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
