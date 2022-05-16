import React , {useState} from 'react';
import {Modal} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux' //cartfunction
import { addToCart } from '../actions/cartActions'; //cartfunction


export default function Pizza({pizza}) {
    const [ quantity , setquantity] = useState(1)
    const [ varient , setvarient] = useState('small')

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()
    function addtocart() {
        dispatch(addToCart(pizza, quantity, varient)) //cartfunction
    }

  return (
    <div className='shadow p-3 mb-5 bg-white rounded'>

        <div onClick={handleShow}>
            <h1>{pizza.name}</h1>
            <img src={pizza.image} className='img-fluid' style={{height: '180px' , width: '200px'}}></img>
        </div>
        

        <div className='flex-container'>

            <div className='w-100 m-1'>
                <p>Varients</p>
                <select className='form-control form-select' value={varient} onChange={(e)=>{setvarient(e.target.value)}} >{pizza.varients.map(varient=>{
                    return <option value={varient}>{varient}</option>
                })}</select>
            </div>

            <div className='w-100 m-1'>
            <p>Quantity</p>
                <select className='form-control form-select' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                    {
                        [...Array(10).keys()].map((x , i)=>{
                            return <option value={i+1}>{i+1}</option>
                        })
                    }
                </select>
            </div>
            
        </div>
        
        <div className='flex-container'>
                    <div className='m-1 w-100'>
                        <h1 className='mt-1'>Price : {pizza.prices[0][varient] * quantity} BDT/-</h1>
                    </div>
                    <div className='m-1 w-100'>
                        <button className='btn' onClick={addtocart}>ADD TO CART</button>
                    </div>
        </div>
                
                
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <img src={pizza.image} className='img-fluid' style={{height:'400px !important'}}></img>
            <p>{pizza.description}</p>
        </Modal.Body> 

        <Modal.Footer>
            <button className='btn' onClick={handleClose}>CLOSE</button>
        </Modal.Footer>
        </Modal>


















    </div>
  )
}
