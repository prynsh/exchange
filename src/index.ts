import express from "express"

const app = express()

app.get("/login",(req,res)=>{
    res.json({
        "message":"Hello what's up?"
    })
})


app.listen(3001)