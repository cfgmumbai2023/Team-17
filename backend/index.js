const express = require('express');
require('dotenv').config();
require('express-async-errors')
const connectDB = require('./db/connect')
const notFoundHandler = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler')

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    // console.log("Hi JPMC");
    res.send('Hi JPMC')
})

app.use('/api/users',require('./routes/teachers'))
app.use('/api/admin',require('./routes/admin'))

app.use(notFoundHandler)
app.use(errorHandler) 

const port = process.env.PORT || 5000;

const main = async() => {
    try{
        await connectDB(process.env.MONGO_URI);
        console.log("DB Connected");
        app.listen(port,()=>{
            console.log(`Server is listening at port ${port}`);
        });
    }catch(e){
        console.log(e);
    }
}
main()