import React, { useState } from 'react';
import FormList from './FormList';
import ToDo from './ToDo';
import '../assets/styles/components/List.scss';
import '../assets/styles/components/TaskBar.scss';

const List = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    };

    const newTasks = [task, ...tasks];

    console.log(task, ...tasks);
    setTasks(newTasks);
  };

  const updateTask = (taskId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    };

    setTasks((prev) => prev.map((item) => (item.id === taskId ? newValue : item)))
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
        updateTask={updateTask}
      />
    </>
  );
};

export default List;
