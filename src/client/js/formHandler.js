import { response } from "express";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    if(Client.checkForName(formText)){

     
       fetch('http://localhost:8080/addData',{
          method: 'POST',
          credentials: 'same-origin',
          headers:{'Content-Type':'application/json',},
          body:JSON.stringify({formText: formText}),
        })
      .then(response => response.json())
      console.log(response)
      .then(function(response) {
        const results = document.getElementById('results');
        results.scrollIntoView(false, {
            behavior:'smooth',
        block:"end"})
    
        document.getElementById('confidence').innerHTML = "- Feelings of confidence in this text are given a rating of "+ res.confidence +"%";
        if (response.score_tag === 'N'){
        document.getElementById('polarity').innerHTML = "- Overall, the tone is negative." }
        else if(response.score_tag === 'N+'){
            document.getElementById('polarity').innerHTML = "- Overall, the tone is very negative."}
        else if(response.score_tag === 'NONE'){
            document.getElementById('polarity').innerHTML = "- No sentiment is detected."}
        else if(response.score_tag === 'P+'){
            document.getElementById('polarity').innerHTML = "- Overall, the tone is very positive"}
        else if(response.score_tag === 'NEU'){
            document.getElementById('polarity').innerHTML = "- Overall, the tone is neutral."}
         else if(response.score_tag === 'P'){
            document.getElementById('polarity').innerHTML = "- Overall, the tone is positive."};
        if (response.agreement === 'AGREEMENT'){
            document.getElementById('agreement').innerHTML = "- This tone is consistent throughout the text"}
        else if(response.agreement === 'DISAGREEMENT'){
            document.getElementById('agreement').innerHTML = "- However, this tone isn't consistent throughout the text"};
        if(response.subjectivity === 'OBJECTIVE'){
            document.getElementById('obj').innerHTML = "- Our analysis notes that this article is more objective than subjective."}
        else if(response.subjectivity === 'SUBJECTIVE'){
            document.getElementById('obj').innerHTML = "- Our analysis notes that this article is more subjective than objective." }
        else if(response.subjectivity === null){
            document.getElementById('obj').innerHTML = ""}; 
        if(response.irony === 'NONIRONIC'){
            document.getElementById('ironic').innerHTML = "-We detected no irony."}
        else if(response.irony === 'IRONIC'){
            document.getElementById('ironic').innerHTML = "-Also, we detected a level of irony."}
        else if(response.irony === null){
            document.getElementById('ironic').innerHTML = ""}  
        })
      console.log("::: Form Submitted :::");
    }else{ alert("Please enter a valid URL");
        console.log("Not valid url");
    }
}

export { handleSubmit }
