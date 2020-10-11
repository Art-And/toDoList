import React from 'react';

import '../assets/styles/components/Section.scss';

const Section = ({ children }) => {

  return (
    <>
      <section className='conte'>
        { children }
      </section>
    </>
  );
};

export default Section;
