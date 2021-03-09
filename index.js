const express = require('express');
const app = express();
const PORT = 5000
app.get('/', (req,res) => {
    res.send('get');
})
app.post('/', (req,res) => {
    res.send('post');
})
app.patch('/', (req,res) => {
    res.send('patch');
})
app.delete('/', (req,res) => {
    res.send('delete');
})

app.listen(PORT, () => console.log(`app listening on port ${PORT}`))