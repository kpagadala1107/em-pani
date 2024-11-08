import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Freelancers from './pages/Freelancers';
import AddJob from './pages/AddJob';
import Jobs from './pages/Jobs';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import { Provider } from "react-redux";
import store from "./redux/store";
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freelancers" element={<Freelancers />} />
          <Route path="/addJob" element={<AddJob />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </Provider>
  );
}

export default App;
