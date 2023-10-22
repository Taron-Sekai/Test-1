const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const app = express()
const mongoose = require('mongoose')



mongoose.connect(process.env.mongodb)
const db = mongoose.connection
db.once('open',()=> console.log("database connected"))





app.use(express.json())


///creating rountes///
const productsroute=require("./routes/Pro")
app.use('/Pro',productsroute)


app.listen(process.env.PORT,()=>console.log('server started'), )



