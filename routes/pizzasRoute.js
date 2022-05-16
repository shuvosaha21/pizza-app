const express = require("express");
const { route } = require("express/lib/application");
const res = require("express/lib/response");
const router = express.Router();
const Pizza = require('../client/models/pizzaModel');
const { model } = require("../db");

router.get("/getallpizzas", async(req, res) => {
    try {
        const pizzas = await Pizza.find({})
        res.send(pizzas)
    } catch (error) {
        return res.status(400).json({ message:error });
    }
});


//[add pizza logic]

router.post("/addpizza", async(req,res) => {
    const pizza = req.body.pizza

    try {
        const newpizza = new Pizza ({
            name : pizza.name,
            image : pizza.image,
            varients : ['small','medium','large'],
            description : pizza.description,
            category : pizza.category,
            prices : [pizza.prices]
        })
        await newpizza.save()
        res.send('New Pizza Added Sucessfully')
    }catch (error) {
        return res.status(400).json({message: error});
    }
})

router.post("/editpizza", async (req,res)=>{
    const editpizza = req.body.editpizza

    try {
        const pizza = await Pizza.findOne({_id: editpizza._id})
        pizza.name = editedpizza.name,
        pizza.description = editedpizza.description,
        pizza.image = editedpizza.image,
        pizza.category = editedpizza.category,
        pizza.prices = [editedpizza.prices]

        await pizza.save()

        res.send('Pizza Details Edited Successfully')

    }catch(error) {
        return res.status(400).json({message: error});
    }
})

module.exports = router; 