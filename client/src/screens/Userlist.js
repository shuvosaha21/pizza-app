import React, { useState , useEffect} from 'react' 
import {useSelector, useDispatch} from 'react-redux';
import Error from "../components/Error"
import Filter from "../components/Filter"
import Loading from "../components/Loading"
import { deleteUser, getAllUsers } from "../actions/userActions" //userlistlib
export default function Userlist() {
    const dispatch = useDispatch()
    const userssate = useSelector(state=> state.getAllUsersReducer)
    const {error, loading, users} = userssate

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
  return (
    <div>
        <h2>SheyPizza's User List</h2>
        
        {error && <Error error="Something went wrong"></Error>}
        <table className='table table-striped table-bordered'>
            <thead className='thead table-dark'>
                <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {users && users.map(user=>{
                    return <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td><i className='fa fa-trash' onClick={()=>{dispatch(deleteUser(user._id))}}></i></td>
                    </tr>
                })}
            </tbody>
        </table> 
    </div>
  )
}
