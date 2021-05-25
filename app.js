const express = require ("express")
const logger = require ("morgan")
const path = require("path")

const app = express()
app.use(logger("dev"))
app.use(express.json())

const gameRouter = require ("./routes/gameRouter")
const indexRouter = require ("./routes/indexRouter")

app.use ("/", indexRouter)
app.use ("/api/game", gameRouter)

// app.listen(3000, function(){
//     console.log(`Server is running on PORT ${3000}`)
// })

module.exports = app
