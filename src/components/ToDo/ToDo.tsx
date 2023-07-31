import React from 'react';
import ToDoList from '../ToDoList/ToDoList';
import ToDoForm from '../ToDoForm/ToDoForm';
import { useState  } from 'react';
import { TaskObj } from '../../models/TaskObj';

export default function ToDo(){
  const[Tasks , setTasks] = useState((localStorage.tasks === undefined) ? [] : JSON.parse(localStorage.tasks));
  
  function addTask(task:string){
    let obj = {
      'task': task,
      'key': (localStorage.tasks != undefined && JSON.parse(localStorage.tasks).length !== 0) ? (JSON.parse(localStorage.tasks)[JSON.parse(localStorage.tasks).length-1].key + 1) : 1
    }
    setTasks([...Tasks,obj])
    localStorage.setItem('tasks' , JSON.stringify([...Tasks,obj]));
  }

  function deleteTask(key:number){
    setTasks(Tasks.filter((e:TaskObj)=>e.key!==key))
    localStorage.setItem('tasks' , JSON.stringify(Tasks.filter((e:TaskObj)=>e.key!==key)));
  }

  return (
    <div className="App">
      <ToDoForm onclick={addTask} />
      <ToDoList tasks={Tasks} deleteTaskFunc={deleteTask}/>
    </div>
  );
}
