const express = require("express")
const router = express.Router()
const uuidv4 = require("uuid").v4

let games = [
    {
        id: "adowb1b3bb",
        game: "League of Legends",
        description: "League of Legends is a team-based game with over 140 champions to make epic plays with."
    },
    {
        id: "kd7b9ks2nda",
        game: "PlayerUnknown's Battlegounds",
        description: "PLAYERUNKNOWN'S BATTLEGROUNDS is a last-man-standing shooter being developed with community feedback."
    }
]

router.get("/get-all-games", function(req, res){
    
        res.json({data:games})
    })

router.get("/get-game-by-id/:id", function(req, res){
    games.forEach((item)=>{
        if(item.id === req.params.id){
            res.json({item})
        }else{
            res.json({message:"game not found"})
        }
    })
})

router.post("/create-new-game", function(req, res){
    let newGame = {
        id: uuidv4(),
        game: req.body.game,
        description : req.body.description
    }

    games.forEach((item)=>{
        if(req.body.game === item.game){
            res.json({message:"Game already exists!"})
        }
        if(req.body.game === "" || req.body.description === ""){
            res.json({message:"Fields can not be blank"})


        }else{
            games.push(newGame)
        }
    })
    res.json({data:games})
})

router.put("/update-game/:id", function(req, res){
    games.forEach((item)=>{
        if (item.id = req.params.id){
            res.json({message: "game not found, cannot update"})
        }  
        if (item.game != req.body.game) {
            res.json ({message: "game not found, cannot update"})
        }
        else{
            item.game = req.body.game,
            item.description = req.body.description
        }
    })
})

router.delete("/delete-by-id/:id", function (req, res) {
    let isFound = games.findIndex((item) => item.id === req.params.id);
    if (isFound === -1) {
        res.json({ message: "ID Not Found!" });
    } else {
        games.splice(isFound, 1);
        res.json({ games });
    }
});


module.exports = router