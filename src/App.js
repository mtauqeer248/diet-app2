import React from 'react';
import './App.css';
import { Navigation } from './Components/NavigationBar/Navigation'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/pages/Home'
import About from './Components/pages/About'
import Contact from './Components/pages/Contact'
import Blogs from './Components/pages/Blogs'
import FeedBacks from './Components/pages/FeedBacks'
import Admin from './Components/pages/Admin'
import InfoSection from './Components/infoSection/InfoSection'
import ContactSection from './Components/Contact/Contact';
import CardItems from './Components/CardItems/CardItems'
import BlogItem from './Components/Blogs/Blogs';
import Testimonials from './Components/testimonials/Testimonials'
import Banner from './Components/Banner/Banner'
import { BlogData } from './Components/Blogs/BlogData';
import { CardData } from './Components/CardItems/CardData'
import TestimonialData from './Components/testimonials/TestimonialData'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div >

      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Blogs' component={Blogs} />
          <Route path='/Feedbacks' component={FeedBacks} />
          <Route path='/Admin' component={Admin} />
        </Switch>
      </Router>
      <Home />
      <Router>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
