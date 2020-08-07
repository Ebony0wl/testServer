//put node express into a variable
const express = require('express');
const { response } = require('express');

const PORT = process.env.PORT || 5000
//to access parts of express with the dot notation
const app = express();

//run the get command get() on the page ./ respond with string
//req and response are calls you can ake to send or recieve something from the webpage

app.get('/', (req, res) => {
    res.send('hi');
    console.log(req.originalUrl);
})


//if you gor to port3030/dog youll get bark
app.get('/dog', (req, res) => {
    res.send('bark');
    console.log(req.originalUrl);
})

//if you got to ./cat you'll get meow
app.get('/cat', (req, res) => {
    res.send('meow');
    console.log(req.originalUrl);
})


//listen on port 3030 for a request/response, run function err where if err is true then consoleLog err else post string
//Q: is err a keyWord?, What is the structure of the function listen?
app.listen(PORT, (err) => 
    console.log(`${err ? err : "Running on port 3030"}`),
);

