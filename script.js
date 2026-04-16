let img = document.querySelector("img");
let addButton = document.getElementById("checkBtn");

addButton.addEventListener("click", function () {
    fetch("https://cataas.com/cat/says/adopt me please?json=true")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            img.src = data.url;
            setTimeout(showPage, 550);

            
        })
        .catch(function (error) {
            console.log("Error:", error);
        });
});


              
            

            function showPage() {
                document.querySelector(".loader").style.display = "none";
                console.log("loading ended")
                // document.getElementById("myDiv").style.display = "block";
            }
