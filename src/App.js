import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Routes, 
  Route, 
} from "react-router-dom";
import Page404 from './routes/404/Page404';
import Header from './components/header/Header';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Admin from './routes/admin/Admin';
import Home from './routes/home/Home';
import Projects from './routes/projects/Projects';
import Auth from './routes/auth/Auth';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/privAuth" element={<Auth />} />
        <Route path='/admin' element={<PrivateRoute/>}>
          <Route path='/admin' element={<Admin/>}/>
        </Route>
        <Route path="*" element={<Page404 />} />

      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
