import { useState } from 'react';
import './ToDoForm.css';

type formEventFunction = {
    onclick:(a:string) => void;
}

export default function ToDoForm({onclick}:formEventFunction){
    const[TaskText , setTaskText] = useState('');

    function handleInputChange(e:React.ChangeEvent<HTMLInputElement>){
        setTaskText(e.target.value);
    }

    function handleKeyPress(e:React.KeyboardEvent){
        if(e.key === 'Enter'){
            onclick(TaskText);
        }
    }

    return(<>
        <form className='todo_form'>
            <input type="text" className='todo_form_task' onKeyDown={()=>handleKeyPress} onChange={handleInputChange} />
            <button className='todo_form_add_btn btn' onClick={()=>onclick(TaskText)}>ADD</button>
        </form>
    </>);
}
