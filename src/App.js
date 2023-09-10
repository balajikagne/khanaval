
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/home';
import Aboutus from './component/aboutUs'
import "./App.css"
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/aboutUs" element={<Aboutus />} />
      </Routes>
    </div>
  )
}

export default App
