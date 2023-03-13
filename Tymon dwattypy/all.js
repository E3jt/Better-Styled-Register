function ok() {
    document.getElementById("alrt").style.display = "none";
    document.getElementById("over").style.display = "none";
};
function okdupli() {
    document.getElementById("alrtdupli").style.display = "none";
    document.getElementById("over").style.display = "none";
};
function okp() {
    document.getElementById("alrtp").style.display = "none";
    document.getElementById("over").style.display = "none";
};
function okdone() {
    document.getElementById("alrtdone").style.display = "none";
    document.getElementById("over").style.display = "none";
    window.open("http://localhost/dwatrzy/praca.php", "_self");
};
function okbad() {
    document.getElementById("alrtbad").style.display = "none";
    document.getElementById("over").style.display = "none";
};
function okpes() {
    document.getElementById("alrtpes").style.display = "none";
    document.getElementById("over").style.display = "none";
};
function okema() {
    document.getElementById("alrtema").style.display = "none";
    document.getElementById("over").style.display = "none";
};
function disa() {
    document.getElementById('rem').removeAttribute("enabled");
    document.getElementById('rem').setAttribute("disabled", "");
    document.getElementById('rem').style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    document.getElementById('nazwadok').removeAttribute("disabled");
    document.getElementById('nazwadok').setAttribute("enabled", "");
    document.getElementById('nazwadok').style.backgroundColor = "rgba(70, 90, 126, 0.4)";
    document.getElementById('numerdok').removeAttribute("disabled");
    document.getElementById('numerdok').setAttribute("enabled", "");
    document.getElementById('numerdok').style.backgroundColor = "rgba(70, 90, 126, 0.4)";
    document.getElementById('rem').value="";
}

const checkbox = document.getElementById('check')

checkbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        disa();
    } else {
        document.getElementById('rem').removeAttribute("disabled");
        document.getElementById('rem').setAttribute("enabled", "");
        document.getElementById('rem').style.backgroundColor = "rgba(70, 90, 126, 0.4)";
        document.getElementById('nazwadok').removeAttribute("enabled");
        document.getElementById('nazwadok').setAttribute("disabled", "");
        document.getElementById('nazwadok').style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        document.getElementById('numerdok').removeAttribute("enabled");
        document.getElementById('numerdok').setAttribute("disabled", "");
        document.getElementById('numerdok').style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        document.getElementById('numerdok').value="";
        document.getElementById('nazwadok').value=null;
    }
});