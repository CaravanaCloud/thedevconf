log("Sample Registration Page")



function paint(registration){
    var ctime = toLocalString(registration.createTime);
    replaceClass("createTime", ctime)
}

function load(clientId){
    log("Registering Client "+clientId)

    var params = {"clientId":clientId}
    var url = '/api/user/registration?' + new URLSearchParams(params).toString();;

    fetch(url)
        .then(response => response.json())
        .then(data => paint(data));
}


onClientReady(load);
