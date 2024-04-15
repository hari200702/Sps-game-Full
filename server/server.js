const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const router=require('../server/routes/router')

const app=express();

app.use(cors())
app.use(express.json())
app.use('/games', router)



mongoose.connect('mongodb://127.0.0.1:27017/games')
.then(()=>{
    app.listen(5000, () => {
        console.log(`Server is running on port 5000`);
      });
})

.catch((error)=>{
    console.log(error)
})


