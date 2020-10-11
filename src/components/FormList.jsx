import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const FormList = (props) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput('');
  };

  return (
    <form className='' onSubmit={handleSubmit}>
      <input
        type=''
        placeholder='New task'
        value={input}
        name='text'
        className=''
        onChange={handleChange}
      />
      <Button type='submit' className=''>Add a task</Button>
    </form>
  );
};

export default FormList;
