const express = require("express");
const Order = require("../models/orders");
const app = express();


// app.get("/libros",async(req,res)=>{
//     Libros.findAll({ include: [{ model: Authors }, { model: Categorias }, { model: Editorial }],attributes: {exclude: ['AuthorId','CategoryId','EditorialId']} })
//   .then((libros) => {
//     res.status(200).json({  libros });
//   });
// })
app.get("/order",async(req,res)=>{
  if(req.body.id){
    const order=await Order.findOne({ _id: req.body.id })
    if(order){
        res.status(200).json({ order })
    }else{
        res.status(400).json({ error: 'No se ha podido encontrar la orden' })
    }
  }  else{
    res.status(400).json({ error: 'Todos los campos deben estar llenos' })
  }
})

app.post("/order",async(req,res)=>{
    if(req.body.fecha && req.body.precio && req.body.cantidad && req.body.id_producto && req.body.id_usuario){
        const order=new Order(req.body);
        order.save()
        .then(res.status(200).json({mensaje:"Orden creada correctamente"}))
        .catch(err=>res.status(400).json(err));
    }else{
        res.status(400).json({ error: 'Todos los campos deben estar llenos' })
    }
})

app.get("/order",async(req,res)=>{
    res.json({true:"aca"})
})
module.exports=app;