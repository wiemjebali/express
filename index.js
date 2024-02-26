const express = require("express")

const app = express()

const condition = require("./middleware/condition")


app.use(condition)

app.get("/home", (req, res)=> {
    res.sendFile(__dirname+"/public/home.html")
})

app.get("/service",  (req, res)=> {
    res.sendFile(__dirname+"/public/service.html")
})

app.get("/contact",  (req, res)=> {
    res.sendFile(__dirname+"/public/contact.html")
})

app.listen(5000, console.log("server is running on port 5000"))