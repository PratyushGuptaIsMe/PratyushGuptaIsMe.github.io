const LINKCOLLECTION = document.getElementsByClassName("link");
const LINKS = Array.from(LINKCOLLECTION);
LINKS.forEach((link) => {
    link.addEventListener("click", (e) => {
        if(navigator.onLine === false){
            e.preventDefault();
            window.location.href = "html/offline.html";
        }
    })
})