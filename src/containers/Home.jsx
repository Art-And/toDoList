import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';
import List from '../components/List';

import '../assets/styles/Home.scss';

const Home = () => {

  return (
    <div className=''>
      <Header />
      <Section>
        <List />
      </Section>
      <Footer />
    </div>
  );
};

export default Home;
