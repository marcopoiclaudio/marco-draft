function myFunction() {
    var x = document.getElementById("indizio"),
        y = document.getElementById('revealText');

    if (x.style.display === "none") {
        x.style.display = "block";
        y.innerHTML = "Se tu vergogna clicca per chiudere ↑";
    } else {
        x.style.display = "none";
        y.innerHTML = "Se invece non ama chiede indizio qui ↓";
    }
}
