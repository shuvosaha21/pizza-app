import React, {useEffect} from 'react' //for accessing admin panel
import { BrowserRouter ,Route, Link, Switch } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'; 
import Addpizza from './Addpizza';
import Orderlist from './Orderlist';
import Pizzalist from './Pizzalist';
import Userlist from './Userlist';



export default function Adminscreen() {
    const userstate = useSelector(state=>state.loginUserReducer)
    const {currentUser} = userstate;
    const dispatch = useDispatch()
    
    useEffect(()=> {
        if(!currentUser.isAdmin){
            window.location.href="/"
        }
    })
  return (
    <div>
       
        <div className='row justify-content-center'>
            <div className='col-md-10'>
                <h2 style={{fontSize: '35px'}}>Shey Pizza</h2>
                <h3 style={{fontSize: '25px'}}>Dashboard</h3>
                <hr></hr>

                <ul className='adminfunction'>
                    <li><a href="/admin/userslist">Users list</a></li>
                    <li><a href="/admin/pizzalist">Pizzas list</a></li>
                    <li><a href="/admin/addnewpizza">Add New Pizza</a></li>
                    <li><a href="/admin/orderlist">Oders List</a></li>
                </ul>


                <BrowserRouter>
                    <Route exact path="/admin" component={Userlist}></Route>
                    <Route path="/admin/userslist" component={Userlist}></Route>
                    <Route path="/admin/pizzalist" component={Pizzalist}></Route>
                    <Route path="/admin/orderlist" component={Orderlist}></Route>
                    <Route path="/admin/addnewpizza" component={Addpizza}></Route>
                   
                </BrowserRouter>
            </div>
        </div>






    </div>
  )
}
