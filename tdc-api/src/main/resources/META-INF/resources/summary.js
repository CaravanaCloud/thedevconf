console.log("Hello World");

function addHTML(id,val){
    document.getElementById(id).innerHTML += val;
}

function drawMode(mode){
    addHTML("div-summary",mode.name);
    addHTML("div-summary","<hr/>");
}

function draw(data){
    console.log(data.modes);
    var modes = data.modes;
    modes.forEach(drawMode);
}

function refresh(){
    fetch('/api/user/summary')
        .then(response => response.json())
        .then(data => draw(data));
}

refresh();