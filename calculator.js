const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req,res)=>{
  res.sendFile(__dirname + "/index.html");
})

app.post('/',(req,res)=>{
  console.log(req.body)
  var num1 = Number(req.body.n1);
  var num2 =  Number(req.body.n2);
  var results = num1 + num2

  res.send("Our results = " + results)
});

app.listen(3000,()=>{
    console.log('Server running on port 3000')
})