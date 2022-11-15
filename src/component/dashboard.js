import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import '../App.css';
import { GoogleAuthProvider } from 'firebase/auth';
import { signOut,getAuth } from 'firebase/auth';
import firebaseApp from '../config';  
import Carousel from './CaroUsel';
import Header from './header';
import Navbar from './Navbar';
class Dashboard extends Component {
constructor(props) {
  super(props);
  this.state = {
    provider : new GoogleAuthProvider(),
    auth : getAuth(firebaseApp)
  }
  console.log('This is first method called upon initialization')
}
  render() {
    return (
       <Router>
        <Navbar />
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
          </Routes>
       </Router>
   );
  }
}
  
export default Dashboard;