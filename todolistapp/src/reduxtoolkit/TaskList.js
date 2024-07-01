// src/TaskList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleComplete } from './TaskSlice';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEditTask = (task) => {
    setEditingTask(task.id);
    setEditText(task.text);
  };

  const handleSaveTask = (id) => {
    dispatch(editTask({ id, text: editText }));
    setEditingTask(null);
    setEditText('');
  };

  return (
    <div className="task-list">
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {editingTask === task.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleSaveTask(task.id)}>Save</button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: task.completed ? 'line-through' : 'none'
                  }}
                >
                  {task.text}
                </span>
                <button onClick={() => dispatch(toggleComplete(task.id))}>
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => handleEditTask(task)}>Edit</button>
                <button onClick={() => dispatch(deleteTask(task.id))}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
