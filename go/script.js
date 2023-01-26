function generaPagina() {
    getParameters();
    document.getElementById("title").textContent = titolo;
    document.getElementById("titolo").textContent = titolo;
    document.getElementById("pulsante1").textContent = pulsante1;
    document.getElementById("pulsante2").textContent = pulsante2;
}
function apriLink1() {
    window.open(link1);
}
function apriLink2() {
    window.open(link2);

}
function getParameters() {
    let urlString = window.location.toString();
    let paramString = urlString.split('?')[1];
    let params_arr = paramString.split('&');
    for(let i = 0; i < params_arr.length; i++) {
        let pair = params_arr[i].split('=');
        if(i === 0) {
            title = pair[1].split("%20");
            titolo = title.join(" ");
        } else if (i === 1) {
            btn1 = pair[0].split("%20");
            pulsante1 = btn1.join(" ");
            lnk1 = pair[1].split("%20");
            link1 = lnk1.join(" ");
        } else if (i === 2) {
            btn2 = pair[0].split("%20");
            pulsante2 = btn2.join(" ");
            lnk2 = pair[1].split("%20");
            link2 = lnk2.join(" ");
        }
    }
}

