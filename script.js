function getIdea() {
    var part = parseInt(document.getElementById("parts").value) || 1
    part = (part > 5) ? 5 : part
    var min = Math.min(parseInt(document.getElementById("min").value), 30) / 100 || 0
    var max = Math.min(parseInt(document.getElementById("max").value), 100) / 100 || 1
    const url = "https://www.boredapi.com/api/activity/" + "?participants=" + part + "&minprice=" + min + "&maxprice=" + max
    document.getElementById("idea").innerHTML = ("...")
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json)
            var resp = json.activity || json.error
            resp == undefined ? "Invalid Parameters" : resp
            document.getElementById("idea").innerHTML = (resp)
        });
}

document.getElementById("idea-button").addEventListener("click", function (event) {
    event.preventDefault();
    getIdea()
});

getIdea()