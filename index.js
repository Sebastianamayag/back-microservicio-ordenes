const express =require('express');
const app=express();
const cors=require('cors');
const moongose=require('mongoose');
moongose.connect('mongodb+srv://sebas:123456789matias@cluster0.ai4fh.mongodb.net/ordenes?retryWrites=true&w=majority')
.then(db=>console.log('Db connected'))
.catch(err=>clg(err))

app.set('port',process.env.PORT || 3000);
app.use(express.json())
app.use(cors());
app.use(require('./src/routes/Orders'));
app.listen(app.get('port'),()=>{
    console.log('Servidor corriendo en el puerto',app.get('port'));
});