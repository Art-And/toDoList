import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { RiEditCircleFill } from 'react-icons/ri';

const FormList = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

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
      {props.edit ? (
        <>
          <input
            type=''
            placeholder='Update your task'
            value={input}
            name='text'
            className=''
            onChange={handleChange}
            ref={inputRef}
          />
          <Button type='submit' className=''>Update</Button>
        </>
      ) : (
        <>
          <input
            type=''
            placeholder='New task'
            value={input}
            name='text'
            className=''
            onChange={handleChange}
            ref={inputRef}
          />
          <Button type='submit' className=''>Add a task</Button>
        </>
      )}
    </form>
  );
};

export default FormList;
