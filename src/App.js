import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Product = lazy(() => import('./Product'));
const Features = lazy(() => import('./Features'));
const Video = lazy(() => import('./Video'));
const Profile = lazy(() => import('./Profile'));
const Koma = lazy(() => import('./koma'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Feature" element={<Features />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path='/koma' element={<Koma />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;