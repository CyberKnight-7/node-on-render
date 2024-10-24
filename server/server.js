const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/public')))

app.get('/', (req, res) => {
    // res.send('This is the new app to be deleted!')
    res.sendFile(path.join(__dirname, '../client/public/index.html'))
})

app.get('/games', (req, res) => {
    res.send('Game will be coming up shortly!')
})

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
})