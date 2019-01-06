import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path='/' component={Home}/>
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
            <Footer />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
