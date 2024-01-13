const express = require('express')
const app = express()
const blogRouter = require('./routes/blog.routes')
app.use(express.json())
const PORT = 5000
app.listen(PORT,()=>{
    console.log("backend running on 5000")
})
app.use('/blog', blogRouter)