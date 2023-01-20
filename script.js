    var down =  document.getElementById("arrow")
    var up = document.getElementById("arrow-up")
    var p1 = document.getElementById("panel1")

    var down2 =  document.getElementById("arrow2")
    var up2 = document.getElementById("arrow-up2")
    var p2 = document.getElementById("panel2")
function showPanel(){
    down.classList.add("hidden");
    up.classList.remove("hidden");
    p1.classList.remove("hidden")
}
function closePanel(){
    up.classList.add("hidden");
    down.classList.remove("hidden");
    p1.classList.add("hidden")
}

function showPanel2(){
    down2.classList.add("hidden");
    up2.classList.remove("hidden");
    p2.classList.remove("hidden")
}
function closePanel2(){
    up2.classList.add("hidden");
    down2.classList.remove("hidden");
    p2.classList.add("hidden")
}