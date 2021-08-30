import dotenv from 'dotenv';
dotenv.config();
import fetch from 'node-fetch';
import path from 'path';
import express from 'express';
import mockAPIResponse from './mockAPI.js';

const app = express();

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on 8080')
});

//POST request
var pubURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const urlText = '&url=';
const app_key= process.env.API_KEY;
const last = '&model=General&lang=en';
console.log(`My API key is ${app_key}`);

app.post('/addData', async(req, res)=>{
    const in_Text = req.body.formText;
    const finalUrl = await fetch(`${pubURL}${app_Key}${jsonText}${urlText}${in_Text}${last}`,{
        method: 'POST'
    });
    try{
        const data = await finalUrl.json();
        console.log(data);
        res.send(data);
    }catch(error){
        console.log("error", error);
}

});
