import React from "react";
import Form from "./Components/Form/Form";
import ImageCropper from "./Components/ImageCropper/ImageCropper";
import TodoList from "./Components/ToDo/TodoList";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="screen_list">
        <a href="#form">Форма с валидацией</a>
        <a href="#todo">ToDo</a>
        <a href="#cropper">Кроппер</a>
      </div>
      <div id='form'><Form/></div>
      <div id='todo'><TodoList/></div>
      <div id='cropper'><ImageCropper/></div>
    </div>
  );
}

export default App;
