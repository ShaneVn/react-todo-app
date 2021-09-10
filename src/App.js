import React, {useState,useEffect} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";



function App() {


  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filter, setFilter] = useState([])

const saveLocalTodos = ()=>{
  localStorage.setItem("todos", JSON.stringify(todos))
}

const getLocalTodos =() =>{
  if(localStorage.getItem("todos") ===null){
    localStorage.setItem("todos", JSON.stringify([]))
  } else{
    let localTodo = JSON.parse(localStorage.getItem("todos"))
    setTodos(localTodo)
  }
}


  const filterHanlder = () => {

  if(status === "completed"){
    setFilter(todos.filter((todo)=> todo.completed === true))
  } else if(status === "incompleted"){
    setFilter(todos.filter((todo)=> todo.completed === false))}
    else{setFilter(todos)}
  }

useEffect(() => {
  getLocalTodos()
}, [])

  useEffect(() => {
    filterHanlder()
    saveLocalTodos()
   }, [todos, status]);

  return (
    <div className="App">
      <header>
      <h1>👩🏽‍💻 Shane's Todo List 📋</h1>
    </header>
    <Form setStatus={setStatus} todos={todos} inputText={inputText} setTodos={setTodos} setInputText={setInputText}/> 
    <TodoList todos={todos} setTodos={setTodos} filter={filter}/>
    </div>
  );
}

export default App;
