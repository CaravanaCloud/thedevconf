log("Sample Registration Page")
var vo = null;

function postForm(){
    var params = {"clientId":vo.clientId};
    var url = '/api/user/registration?' + new URLSearchParams(params).toString();;

    vo.data = document.getElementById("vo_data").value;

    fetch(url,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vo)
    }).then(response => response.json())
        .then(data => paint(data));
    console.log("UALA")
}

function paint(registration){
    var ctime = toLocalString(registration.createTime);
    replaceClass("createTime", registration.createTime);
    vo = registration;
}

function load(clientId){
    log("Registering Client "+clientId);

    var params = {"clientId":clientId};
    var url = '/api/user/registration?' + new URLSearchParams(params).toString();;

    fetch(url)
        .then(response => response.json())
        .then(data => paint(data));
}

onClientReady(load);