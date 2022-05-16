import axios from "axios";
export const getAllPizzas=()=>async dispatch=>{
    dispatch({type:'GET_PIZZAS_REQUEST'})

    try {
         const response = await axios.get('/api/pizzas/getallpizzas')
         console.log(response);
         dispatch({type:'GET_PIZZAS_SUCCESS' , payload : response.data})
    } catch (error) {
        dispatch({type:'GET_PIZZAS_FAILED' , payload : error})
    }
}

//filter pizza from filter.js
export const filterPizzas=(searchkey , category)=>async dispatch=>{

    var filteredPizzas ;
    dispatch({type:'GET_PIZZAS_REQUEST'})

    try {
         const response = await axios.get('/api/pizzas/getallpizzas')
         filteredPizzas = response.data.filter(pizza=>pizza.name.toLowerCase().includes(searchkey)) //searching process
        
         if (category!='all')
         {
            filteredPizzas = response.data.filter(pizza=>pizza.category.toLowerCase()==category) //category process 
         }
        
        
         dispatch({type:'GET_PIZZAS_SUCCESS' , payload : filteredPizzas})
    } catch (error) {
        dispatch({type:'GET_PIZZAS_FAILED' , payload : error})
    }
}

// addpizzalogic

export const addPizza=(pizza)=>async dispatch=>{
    dispatch({type:'ADD_PIZZA_REQUEST'})
    try {
        const response = await axios.post('/api/pizzas/addpizza', {pizza})
        console.log(response);
        dispatch({type:'ADD_PIZZA_SUCCESS'})
    }catch(error){
        dispatch({type:'ADD_PIZZA_FAILED',payload:error})
    }
}

//editpizza connection
export const getPizzaById=(pizzaid)=>async dispatch=>{
    dispatch({type:'GET_PIZZABYID_REQUEST'})
    try {
        const response = await axios.post('/api/pizzas/getpizzabyid', {pizzaid})
        console.log(response);
        dispatch({type:'GET_PIZZABYID_SUCCESS', payload:response.data})
    }catch(error){
        dispatch({type:'GET_PIZZABYID_FAILED', payload:error})
    }
}

export const editPizza=(editedpizza)=>async dispatch=>{
    dispatch({type:'EDIT_PIZZA_REQUEST'})
    try {
        const response = await axios.post('/api/pizzas/editpizza', {editedpizza})
        console.log(response);
        dispatch({type:'EDIT_PIZZA_SUCCESS'})
    }catch(error){
        dispatch({type:'EDIT_PIZZA_FAILED',payload:error})
    }
}