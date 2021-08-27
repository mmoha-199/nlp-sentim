 function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    if(Client.checkForName(formText)){

      console.log("::: Form Submitted :::")
       fetch('http://localhost:8081/addData',{
          method: 'POST',
          credentials: 'same-origin',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify({formText: formText}),
        })
      .then(res => res.json())
      .then(function(res) {
        const results = document.getElementById('results');
        results.scrollIntoView(false, {
            behavior:'smooth',
        block:"end"})
    
        document.getElementById('confidence').innerHTML = "- Feelings of confidence in this text are given a rating of "+ res.confidence +"%";
        if (res.score_tag === 'N'){
        document.getElementById('polarity').innerHTML = "- Overall, the tone is negative." }
        else if(res.score_tag === 'N+'){
            document.getElementById('polarity').innerHTML = "- Overall, the tone is very negative."}
        else if(res.score_tag === 'NONE'){
            document.getElementById('polarity').innerHTML = "- No sentiment is detected."}
        else if(res.score_tag === 'P+'){
            document.getElementById('polarity').innerHTML = "- Overall, the tone is very positive"}
        else if(res.score_tag === 'NEU'){
            document.getElementById('polarity').innerHTML = "- Overall, the tone is neutral."}
         else if(res.score_tag === 'P'){
            document.getElementById('polarity').innerHTML = "- Overall, the tone is positive."};
        if (res.agreement === 'AGREEMENT'){
            document.getElementById('agreement').innerHTML = "- This tone is consistent throughout the text"}
        else if(res.agreement === 'DISAGREEMENT'){
            document.getElementById('agreement').innerHTML = "- However, this tone isn't consistent throughout the text"};
        if(res.subjectivity === 'OBJECTIVE'){
            document.getElementById('obj').innerHTML = "- Our analysis notes that this article is more objective than subjective."}
        else if(res.subjectivity === 'SUBJECTIVE'){
            document.getElementById('obj').innerHTML = "- Our analysis notes that this article is more subjective than objective." }
        else if(res.subjectivity === null){
            document.getElementById('obj').innerHTML = ""}; 
        if(res.irony === 'NONIRONIC'){
            document.getElementById('ironic').innerHTML = "-We detected no irony."}
        else if(res.irony === 'IRONIC'){
            document.getElementById('ironic').innerHTML = "-Also, we detected a level of irony."}
        else if(res.irony === null){
            document.getElementById('ironic').innerHTML = ""}  
        })
      console.log("::: Form Submitted :::");
    }else{ alert("Please enter a valid URL");
        console.log("Not valid url");
    }
}

export { handleSubmit }
