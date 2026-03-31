let img = document.querySelector("img");

fetch ("https://cataas.com/cat/says/adopt me please?json=true")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        img.src = data.url;
    })
 
