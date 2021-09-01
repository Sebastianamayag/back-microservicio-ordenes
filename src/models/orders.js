const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const Order=new Schema({
    fecha:String,
    precio:Number,
    cantidad:Number,
    id_producto:Number,
    id_usuario:Number
})

module.exports=mongoose.model('order',Order);