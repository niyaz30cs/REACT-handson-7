
import {useSelector,useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addUser } from "./Slice";

function AddNew() {
  const dispatch=useDispatch();
  const bigData=useSelector(state=>state.dataKey)
  console.log(bigData);
  const navigate=useNavigate();

  const newObj={
    name:"",
    Age:"",
    Course:"",
    Batch:"",
    Change:""
  }

  const change=(e)=>{
      newObj[e.target.name]=e.target.value;
  }

  const HandleSubmit=()=>{
    dispatch(addUser(newObj));
    navigate(-1);
  }
  
  return (
    <div className='main'>
    <div className='new'>
      <div className='child1'>
      <label>Name:
        <input type='text' name="name" onChange={change} placeholder='EnterName' className='inp'/>
      </label>
      <br/>
      <br/>
      <label>Age:
        <input type='number' name="Age" onChange={change} placeholder='EnterAge' className='inp'/>
      </label>
      <br/>
      <br/>
      </div>
      <div className='child1'>
      <label>Course:
        <input type='text' name="Course" onChange={change} placeholder='EnterCourse' className='inp'/>
      </label>
      <br/>
      <br/>
      <label>Batch:
        <input type='text' name="Batch" onChange={change} placeholder='EnterBatch' className='inp'/>
      </label>
      <br/>
      <br/>
      </div>
      <button onClick={HandleSubmit} className='submit'>Submit</button>
    </div>
    </div>
  )
}

export default AddNew
