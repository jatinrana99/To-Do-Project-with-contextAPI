import { useState } from 'react'
import './App.css'
import Form from './component/Form'
import DisplayTodo from './component/DisplayToDo'
import { TodoStore } from './API/ToDoStore'

function App() {
 return (
  <TodoStore>
    <Form></Form>
    <DisplayTodo></DisplayTodo>
  </TodoStore>
 )
}

export default App
