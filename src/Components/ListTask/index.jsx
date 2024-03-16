import React, { useState, useEffect } from 'react';
import * as T from "./style.js"
import TrashIcon from "../../assets/TrashIcon.svg"
import "./style.css"

function TodoList() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [inputValue, setInputValue] = useState('');
  const [checkedStates, setCheckedStates] = useState(() => {
    const storedCheckedStates = localStorage.getItem('checkedStates');
    return storedCheckedStates ? JSON.parse(storedCheckedStates) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('checkedStates', JSON.stringify(checkedStates));
  }, [checkedStates]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return; // ignore empty tasks

    setTasks([inputValue, ...tasks]); // Add new task to the beginning of the list
    setCheckedStates([false, ...checkedStates]); // Initialize checked state for new task
    setInputValue('');
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    const newCheckedStates = [...checkedStates];
    newCheckedStates.splice(index, 1);
    setCheckedStates(newCheckedStates);
  };

  const handleCheckboxChange = (index) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
  };

  return (
    <T.Container>
      <T.Title>Pendências do Dia</T.Title>
      <form onSubmit={handleSubmit}>
        <T.InputTask
          type="text"
          placeholder="Add a new task"
          value={inputValue}
          onChange={handleInputChange}
        />
        <T.AddButton type="submit">Adicionar</T.AddButton>
      </form>
      <T.ContentTopicList>
        {tasks.map((task, index) => (
          <T.TopicList key={index} style={{opacity: checkedStates[index] ? 0.3 : 1}}>
            {task}
            <T.DivEnd>
                <input
                  type="checkbox"
                  className="checkbutton"
                  checked={checkedStates[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
                <T.DeleteButton onClick={() => handleDeleteTask(index)}>
                    <img src={TrashIcon} alt="TrashIcon" />
                </T.DeleteButton>
            </T.DivEnd>
          </T.TopicList>
        ))}
      </T.ContentTopicList>
    </T.Container>
  );
}

export default TodoList;