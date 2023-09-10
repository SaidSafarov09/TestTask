import React, { useState } from 'react';
import './todo.scss'



const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const addTodo = () => {
    if (name && text) {
      if (editIndex === -1) {
        setTodos([...todos, { name, text }]);
      } else {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = { name, text };
        setTodos(updatedTodos);
        setEditIndex(-1);
      }
      setName('');
      setText('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    const todoToEdit = todos[index];
    setName(todoToEdit.name);
    setText(todoToEdit.text);
    setEditIndex(index);
    setPopupOpen(true);
  };

  

  return (
    <div className='todo_content'>
      <div className='todo'>
        <h1>Todo List</h1>
        <div className='input_content'>
          <input type="text" value={name} onChange={handleNameChange}     placeholder="Имя" />
          <input type="text" value={text} onChange={handleTextChange}     placeholder="Текс" />
        </div>
        <div className='button_content'>
          <button onClick={addTodo} className='button'>
              {editIndex === -1 ? 'Добавить' : 'Изменить'}
          </button>
        </div>
        <ul className='ready_list'>
          {todos.map((todo, index) => (
            <li key={index} className='list_content'>
              {todo.name} <br/> {todo.text}
              <div className='list_buttons'>
                <button onClick={() => deleteTodo(index)}>Удалить</button>
                <button onClick={() => editTodo(index)}>Изменить</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {isPopupOpen && (
        <div className="popup">
          <h3>Изменить содержимое</h3>
          <input type="text" value={name} onChange={handleNameChange} placeholder="Имя" />
          <input type="text" value={text} onChange={handleTextChange} placeholder="Текст" />
          <button onClick={() => {
            addTodo();
            setPopupOpen(false);
            }}>Изменить</button>
        </div>
      )}
    </div>
  );
};

export default TodoList;