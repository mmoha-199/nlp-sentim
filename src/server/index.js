const data = {};
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
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
let pubURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const jsonText = '&lang=auto&url';
const app_key= process.env.API_KEY
//const last = '&model=General&lang=en';
console.log(`My API key is ${app_key}`);
//POST request
app.post("/addData", async(req, res)=>{
    const in_Text = req.body.formText;
    const response = await fetch(`${pubURL}${app_Key}${jsonText}${in_Text}`,{
        method: 'POST'
    });
    try{
        const data = await response.json();
        console.log(response, data)
        res.send(data);
    }catch(error){
        console.log("error", error);
}

});
