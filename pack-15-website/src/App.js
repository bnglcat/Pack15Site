import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import WhatWeDo from './components/whatwedo';
import Resources from './components/resources';
import Calendar from './components/calendar';
import CubNotes from './components/cubnotes';
import ContactUs from './components/contactus';


function App() {
  return (
    <Router>
      <div className='container homecontent'>
        <div className='App'>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/whatwedo' element={<WhatWeDo />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/cubnotes' element={<CubNotes />} />
            <Route path='/contact' element={<ContactUs />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;











