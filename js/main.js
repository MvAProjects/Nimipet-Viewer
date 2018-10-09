function searchPet(name) {
    fetch('https://nimipetdev.com/api/v1/pet/' + name, {
            // mode: "no-cors"
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson)
        });
}