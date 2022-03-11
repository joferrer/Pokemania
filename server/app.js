const express = require('express');
const cors = require('cors');
const app = express();


const port = 3200;
app.use(cors());
app.listen(port,()=>{
    console.log('Server listen in port 3200');
})

const counterRoutes = require('../routes/counter').router;

app.use('/counter',counterRoutes);

app.use('/app',(req,res)=>{
    res.send('Conectado');
});