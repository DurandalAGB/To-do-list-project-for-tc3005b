import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Tasks, Search, About } from '../pages';
import Navbar from '../components/layout/Navbar';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tasks/:id" element={<Tasks/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}