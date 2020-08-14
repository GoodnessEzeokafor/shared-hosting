// source /home/aragjbio/nodevenv/agro/12/bin/activate && cd /home/aragjbio/agro
const express = require("express")
const app = express()


app.get("/", async(req,res) => {
    res.send("APP JS")
})


app.listen(3333, (req, res) => {
    console.log("HELLO WORLD")
})