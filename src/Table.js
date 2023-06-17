import React from 'react';
import { useNavigate,Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

function Table() {

  const bigData=useSelector((state)=>state.dataKey)
  const navigate=useNavigate();
  return (
    <>
    <div  className='head'>
      <h1>Student Details</h1>
      <button className='btn' onClick={()=>{navigate("/NewStudent")}}>Add New student</button>
    </div>
    <div className='table'>
      <table border="1" className='table2' cellSpacing={0}>
        <thead className='heading'>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>

            </tr>
        </thead>
        <tbody>
               {bigData.map((item,index)=>(
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.Age}</td>
                  <td>{item.Course}</td>
                  <td>{item.Batch}</td> 
                  <td>
                    <Link to='/changeData' state={{data:index}}>Edit</Link>
                  </td>
                </tr>

               ))}
                
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Table
