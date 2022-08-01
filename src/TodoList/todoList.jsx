
import styled from './TodoStyle.module.css';
import {useState} from 'react';

const TodoList = () => {
  const[addList, setaddList] =useState([]);
  const[todoList, settodoList] =useState('');

  const addMeToTheList=()=>{
    const taskList ={
      id: addList.length === 0 ? 1 : addList[addList.length - 1].id + 1,
      taskName: todoList,
      complete: false
    }
    setaddList([...addList, taskList]);
    ClearInputValue();

  }
  const ClearInputValue =()=>{
    settodoList(" ");
  }
  const deleteMe=(id)=>{
    setaddList(addList.filter((task)=> task.id !== id ))
  }
  const MarkDoneTask =(id)=>{
    setaddList(addList.map((task)=> task.id === id ?  {...task, complete:true}: task ))
  }

  return ( 
    <div className={styled.container}>
      <div  className={styled.InputContentBody}>
    <h4  className={styled.text}>React TodoApp</h4>
    <div  className={styled.todoListInput}>
      <input className={styled.todoInput}
       type="text" 
       placeholder='Add tasks....'
       onChange={(e)=>{settodoList(e.target.value)}}/>
      <button 
      className={styled.addInputButton}
      onClick={addMeToTheList}>Add</button>
    </div>
    </div>

    { addList.map((task)=>{
      return(
 <div className={styled.todoItem} style={{background:task.complete? "red": "none"}}>
 <h4 className={styled.todoValue}>{task.taskName}</h4>

 <div className={styled.todoListContainer}>
 <button 
  className={styled.ListDeleteButton}
 onClick={()=>{deleteMe(task.id)}}>-</button>

 <button  className={styled.ListDoneButton}
  onClick={()=>{MarkDoneTask(task.id)}}>+</button>
 </div>
</div>)
    })}
    </div>
   );
}
 
export default TodoList;