function generaPagina() {
    getParameters();
    document.getElementById("title").textContent = titolo;
    document.getElementById("titolo").textContent = titolo;
    document.getElementById("pulsante1").textContent = pulsante1;
    document.getElementById("pulsante2").textContent = pulsante2;
    window.history.replaceState({ id: "100"}, titolo, "/go")
}

function apriLink(linkToOpen) {
    window.open(linkToOpen);
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    if (cvalue == "https://tastefullelm548.github.io/go") {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
}

function getParameters() {
    let urlVar = getCookie("url");
    if (urlVar == "") {
        urlString = window.location.toString();
    } else {
        urlString = urlVar;
    }
    let paramString = urlString.split('?')[1];
    if (typeof paramString == "undefined" || paramString == null || paramString == "" ) {
        document.getElementById("body").style.display = "none";
        document.getElementById("error").style.display = "unset";
    } else {
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
    setCookie("url", urlString)
}

