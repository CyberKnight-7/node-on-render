const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('This is the new app to be deleted!')
})

app.get('/games', (req, res) => {
    res.send('Game will be coming up shortly!')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})