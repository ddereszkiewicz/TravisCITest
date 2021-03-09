const express = require('express');
const app = express();
const PORT = 5000
app.get('/', (req,res) => {
    res.send({mes:'get'});
})
app.post('/', (req,res) => {
    res.send({mes:'post'});
})
app.patch('/', (req,res) => {
    res.send({mes:'patch'});
})
app.delete('/', (req,res) => {
    res.send({mes:'delete'});
})

app.listen(PORT, () => console.log(`app listening on port ${PORT}`))

module.exports = app