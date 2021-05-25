const express = require("express")
const router = express.Router()
const uuidv4 = require("uuid").v4

router.get("/", function(req, res){
    res.json({message:"Welcome to the Games info app"})
})

module.exports = router