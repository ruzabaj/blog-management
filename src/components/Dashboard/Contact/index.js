import React from 'react';
import Footer from '../footer';
import Navbar from '../Navbar';
import Card from './card';
import Dropdown from '../Dropdown/index';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Dropdown/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default Contact