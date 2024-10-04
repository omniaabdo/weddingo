import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import VendorManager from './Components/VendorManager';
import Checklist from './Components/Checklist'; // Ensure this path is correct
import Budget from './Components/Budget';

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/my-wedding" element={<Home />} />
                    <Route path="/vendor-manager" element={<VendorManager />} />
                    <Route path="/checklist" element={<Checklist />} />
                    <Route path="/budget" element={<Budget />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
