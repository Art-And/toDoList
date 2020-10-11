import React, { useState } from 'react';
import FormList from './FormList';
import ToDo from './ToDo';

const List = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    };

    const newTasks = [task, ...tasks];

    setTasks(newTasks);
  };

  const removeTask = (id) => {
    const removeArr = [...tasks].filter((task) => task.id !== id);

    setTasks(removeArr);
  };

  const completeTask = (id) => {
    let updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1>Tasks</h1>
      <FormList onSubmit={addTask} />
      <ToDo
        tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
      />
    </>
  );
};

export default List;
