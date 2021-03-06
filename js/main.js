function searchPet(petname) {
    let name = document.getElementById("search-name").value;
    fetch('https://nimipetdev.com/api/v1/pet/' + name)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            //name, mood, ttmuf, tud, dob
            document.getElementById('nimipet-name').innerHTML = "Name: <b>" + myJson.nimi['nim_name'] + "</b>";
            document.getElementById('nimipet-mood').innerHTML = "Mood: <b>" + myJson.nimiMood + "</b>";
            let ttmuf = 900000 - myJson.nimi['food_progress'];
            ttmuf = millisToMinutesAndSeconds(ttmuf);
            document.getElementById('nimipet-ttmuf').innerHTML = "Time remaining to mine for food: <b>" + ttmuf + "</b>";
            document.getElementById('nimipet-tud').innerHTML = "Time until death: <b>WIP</b>";
            document.getElementById('nimipet-dob').innerHTML = "Date of Birth: <b>" + myJson.nimi['nim_born'] + "</b>";

            getImage(myJson.nimi['nim_name']);
        }).catch(function() {
            alert("Pet not found. Try replacing spaces with '-' and only use lowercase letters.");
        });
}

function getImage(name) {
    document.getElementById('nimipet-image').src = "https://nimipetdev.com/api/v1/img/" + name + ".svg";
}

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

millisToMinutesAndSeconds(298999); // "4:59"
millisToMinutesAndSeconds(60999); // "1:01"