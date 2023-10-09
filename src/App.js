import React from 'react';
import './App.css';
import Advantages from './components/Advantages/Advantages';
import Brief from './components/Brief/Brief';
import Contacts from './components/Contacts/Contacts';
import ContactUs from './components/ContactUs/ContactUs';
import Faq from './components/FAQ/Faq';
import Header from './components/Header/Header'
import OurProjects from './components/OurProjects/OurProjects';
import Services from './components/Services/Services';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Advantages />
      <Services />
      <OurProjects/>
      <ContactUs/>
      <Brief/>
      <Faq/>
      <Contacts/>
    </div>
  );
};

export default App;