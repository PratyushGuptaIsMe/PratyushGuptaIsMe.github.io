async function insertRandomImgToHTMLImgTag(id){
    document.getElementById(id).src = await "https://picsum.photos/300/300";
    document.getElementById(id).style.width = "300px";
    document.getElementById(id).style.height = "300px";
}

function insertImgToTag(id, path, w, h){
    document.getElementById(id).src = path;
    document.getElementById(id).style.width = w;
    document.getElementById(id).style.height = h;
}

function log(i){
    console.log(i);
}

function animation_loop(){
    online = navigator.onLine;
    requestAnimationFrame(animation_loop);
}

function doesElementExist(id){
    return document.getElementById(id) !== null;
}