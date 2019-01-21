require('./config/config')
const express = require('express')
const app = express()
const httpStatus = require('http').STATUS_CODES


var bodyParser = require('body-parser')
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/usuario', function (req, res) {
  res.json('Get usuario')
});
 
app.post('/usuario', function (req, res) {
    let body = req.body;

    res.json( httpStatus['200'] )
    
  });

app.put('/usuario/:id', function (req, res) {
    let id = req.params.id;
    res.json({
        id
    })
});

app.delete('/usuario', function (req, res) {
    res.json('Delet usuario')
  });

app.listen(process.env.PORT, ()=>{
    console.log('Server corriendo')
})