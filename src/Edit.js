import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import { editData } from './Slice';

function Edit() {
    
    const dispatch=useDispatch();
    const bigData=useSelector((state)=>state.dataKey);
    const navigate=useNavigate();
    const index=useLocation().state.data;

    const currData={
        name:bigData[index].name,
        Age:bigData[index].Age,
        Course:bigData[index].Course,
        Batch:bigData[index].Batch
    }

    const change=(e)=>{
        currData[e.target.name]=e.target.value;
    }

    const HandleSubmit=()=>{
        dispatch(editData({currData,index}));
        navigate(-1);
      }

  return (
    <div className='main'>
      <div className='new2'>
        <div className='child1'>
      <label>Name:
        <input type='text' name="name" onChange={change} placeholder={bigData[index].name} className='inp'/>
      </label>
      <br/>
      <br/>
      <label>Age:
        <input type='number' name="Age" onChange={change} placeholder={bigData[index].Age} className='inp'/>
      </label>
      <br/>
      <br/>
      </div>
      <div className='child1'>
      <label>Course:
        <input type='text' name="Course" onChange={change} placeholder={bigData[index].Course} className='inp'/>
      </label>
      <br/>
      <br/>
      <label>Batch:
        <input type='text' name="Batch" onChange={change} placeholder={bigData[index].Batch} className='inp'/>
      </label>
      <br/>
      <br/>
      </div>
      <button onClick={HandleSubmit} className='submit'>Update</button>
      </div>
    </div>
  )
}

export default Edit
