import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Tasks, Search, About } from '../pages';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tasks/:id" element={<Tasks/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
    
  )
}