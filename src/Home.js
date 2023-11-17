import { Button } from 'react-bootstrap';

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from './userReducer';




function Home() {
    const users=useSelector((state)=>state.users)
    const dispatch=useDispatch()
    const handleDelete =(id)=>{
        dispatch(deleteUser({id:id}))
    }
  return (
    <div className='container bg-secondary'>
        <h2>CRUD APP </h2>
<Link to={'/create'}>
           <Button className='btn-success my-3'>ADD</Button>
    
</Link>       <table className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user,index)=>(
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>            
                    <td>
            
<Link to={`/edit/${user.id}`}>
                            <Button className='btn btn-sm btn-secondary'>Edit</Button>
    
</Link>                        <Button onClick={()=>handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</Button>

                    </td>


                </tr>
            ))}
        </tbody>
       </table>

    </div>
  )
}

export default Home