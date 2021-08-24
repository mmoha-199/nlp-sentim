const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
let pubURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const jsonText = '&of=json&txt=';
let app_key= process.env.API_KEY
const last = '&model=General&lang=en';
console.log(`My API key is ${app_key}`);
//POST request
app.post("/addData", async(req, res)=>{
    const getSentiment = await fetch(`${pubURL}${app_Key}${jsonText}${req.body.formText}${last}`,{
        method: 'POST'
    });
    try{
        const data = await getSentiment.json();
        console.log(getSentiment, data)
        res.send(data);
    }catch(error){
        console.log("error", error);
}

});
