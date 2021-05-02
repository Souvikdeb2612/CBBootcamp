const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    console.log(__dirname);
})


app.post('/quotes', (req, res) => {
    console.log('Hellooooooooooooooooo!')
})


app.listen(3000, function() {
    console.log('listening on 3000')
  })