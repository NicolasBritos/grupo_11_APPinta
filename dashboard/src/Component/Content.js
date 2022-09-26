import '../Assets/css/Content.css';
import Home from './Home.js';
import Categories from './Categories/Categories.js';
import NotFound from './NotFound.js';
import { Routes, Route } from 'react-router-dom';

function Content() {
  return (
      <div className="Content">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
  );
}

export default Content;
