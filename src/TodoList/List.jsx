
import styled from './List.module.css';
import style from './todoList.module.css';
import {BsCheck} from 'react-icons/bs'; 
//import {IoClose} from 'react-icons/io';
import {TiTime} from 'react-icons/ti';
import {useState, useEffect} from 'react';
import {  MdLibraryAddCheck, MdAddCircleOutline } from 'react-icons/md';
import {AiFillStar, AiOutlineStar,} from 'react-icons/ai';

// Unused Icons
// // MdLibraryAdd,  AiOutlineFieldTime



const List = () => {

  const[addList, setaddList] =useState([]);
  const[todoList, settodoList] =useState('');
  const[todoTitle, settodoTitle] =useState('');
  const[todoTime, settodoTime] =useState('');
  const[inputcomponent, setInputcomponent] = useState(true);
  const[removeAddbtn, setRemoveAddbtn]= useState(false);
  const[year, setYear]=useState('');
  const[day, setday]=useState('');
  const[month, setMonth]=useState('');
  const[dayname, setdayname]=useState('');
  const[mark, setMark]=useState(false);
  

  const addMeToTheList=()=>{
  const taskList ={
    id: addList.length === 0 ? 1 : addList[addList.length - 1].id + 1,
    taskName: todoList,
    taskTitle: todoTitle,
    taskTime: todoTime,
    complete: false
  }
  setaddList([...addList, taskList]);
  popInput();
  setRemoveAddbtn(false);
}
const popInput =()=>{
  setInputcomponent(true);
}
const UnpopInput =()=>{
  setInputcomponent(false);
  setRemoveAddbtn(true);
}

const todoListValue =(e)=>{
  settodoList(e.target.value);
}
// Date now
useEffect(()=>{

  // variable
  const months =["January", "February", "March", "April", "May","June", "july", "August","September", "october", "November", "December"];
  const days =['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday']
const dated =()=>{
  const d = new Date();
   const day = d.getDay();
   const dayname = days[d.getDay()];
   const year = d.getFullYear();
  const month = months[d.getMonth()];
  
   setYear(year);
  setday(day);
  setMonth(month);
  setdayname(dayname)
}
dated();
} , [])


// const deleteMe=(id)=>{
//   setaddList(addList.filter((task)=> task.id !== id ))
// }
const MarkDoneTask =(id)=>{
  setaddList(addList.map((task)=> task.id === id ?  {...task, complete:true}: task ));
  setMark(true);
}
  return ( 
    <div className={styled.container}>
      <div className={styled.contentContainer}>
<div className={styled.InputContent}>
  <div className={styled.col1}>
  <input type="text" 
  className={styled.search}
  placeholder="Search"/>
  </div>
  <div className={styled.col2}>
    <div className={styled.MonthWeek}>
      <div className={styled.monthYear}>
      <h2>{day < 10? "0"+day: day }</h2>
        <span>
        <h6>{month}</h6>
        <h6>{year}</h6>
        </span>
      </div>
      <h4>{dayname}</h4>
    </div>
  </div>

 
</div>

<div className={styled.listContainer}>
<div className={styled.listContent}>

{ addList.map((task)=>{
      return(

   <div className={styled.taskList}> 
  <div className={styled.taskContainer}>
    <div className={styled.checkIcon}>
    <BsCheck color="White" size={30} />
    </div>
  <div className={styled.taskName}>
<h4>{task.taskTitle}</h4>
<p>{task.taskName}</p>
  </div>

  <div className={styled.taskTime}>
<h6> <TiTime/>{task.taskTime}</h6>
<p>
  <AiFillStar/>
  <AiFillStar/>
  <AiOutlineStar/>
  <AiOutlineStar/>
</p>

  </div>
  </div>
<div className={styled.taskChecker}
style={{background: mark && "red"}}
 onClick={MarkDoneTask}>

</div>
   </div>
   )
    })}
</div>
</div>



<div className={styled.addBtn} 
style={{visibility: removeAddbtn? "hidden": "visible"}}
onClick={UnpopInput}>
  <MdAddCircleOutline color="blue"size={40}/>
</div>

</div>
 {/* Other Component*/}
 <div className={style.container2} style={{visibility: inputcomponent? "hidden": "visible"}}>
      <div  className={style.InputContentBody}>
    <h4  className={style.text}>Add task</h4>
    <div  className={style.todoListInput}>
      <input className={style.todoInput}
       type="text" 
       placeholder='Add tasks....'
       onChange={(e)=>settodoTitle(e.target.value)}/>
        <input className={style.todoInput}
       type="text" 
       placeholder='Add tasks....'
       onChange={todoListValue}/>

<div className={style.timeAddbtn}>
<input className={style.timeInput}
       type="time" 
       placeholder='Add tasks....'
       onChange={(e)=>settodoTime(e.target.value)} />
      <div  className={style.addInputButton}
      onClick={addMeToTheList}>
        <MdLibraryAddCheck color="white" size={30}  />
      </div></div>
       </div>
    </div>

   


    </div>
   
    </div>
   );
}
 
export default List;