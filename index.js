const express = require("express")

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({message: "this is home page"})
})

app.get('/login', (req, res) => {
    res.status(201).json({message: "hello ritesh"})
})

app.listen(3000, () => {
    console.log("server started on 3000")
})

