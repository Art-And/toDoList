import React, { useState } from 'react';
import FormList from './FormList';

const List = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    };

    const newTasks = [task, ...tasks];

    setTasks(newTasks);
    console.log(task, ...tasks);

  };

  return (
    <>
      <h1>Tasks</h1>
      <FormList onSubmit={addTask} />
    </>
  );
};

export default List;
