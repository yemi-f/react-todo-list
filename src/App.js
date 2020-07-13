import React from 'react';
import './App.css';
import TodoList from './TodoList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList } from '@fortawesome/free-solid-svg-icons';

function App() {


  return (
    <div className="App">
      <FontAwesomeIcon icon={faThList} size="3x" color="#FBE168" />
      <h1 style={{ color: "#939393" }}>
        Today
    </h1>
      <TodoList />
    </div>
  );
}

export default App;
