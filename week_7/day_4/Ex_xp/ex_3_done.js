(function addSentence (jobTitle, geographicLocation,partnerName,numberOfChildren ){
    const sentence = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`
    console.log(sentence);
    const p = document.createElement('p');
    p.innerText = sentence;
    document.body.appendChild(p);
})('hi','hi','hi','hi')