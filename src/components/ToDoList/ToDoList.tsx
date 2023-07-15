import { Checkbox } from "antd";
import { CloseOutlined } from '@ant-design/icons';
import './ToDoList.css';
import { TaskObj } from "../../models/TaskObj";

interface ITask{
    tasks: TaskObj[]
    deleteTaskFunc: (a:number)=> void;
}

export default function ToDoList({tasks, deleteTaskFunc}:ITask){
    return(<>
        <div className="todo_list">
        {
            tasks.map((e:TaskObj)=>{
                return <>
                    <Checkbox className="list_checkbox" key={e.key}>{e.task} </Checkbox> <CloseOutlined onClick={()=>deleteTaskFunc(e.key)} className="list_deltask_btn"/>
                    </>
            })
        }
        </div>
    </>);
}