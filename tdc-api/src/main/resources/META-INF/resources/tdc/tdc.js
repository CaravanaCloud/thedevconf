const hashids = new Hashids()

const TDC_CLIENT_ID='tdc.clientId';

function onClientReady(cb){
    loadClientId(cb);
}

function log(){
    console.log.apply(null,arguments);
}

function debug(){
    console.log.apply(null,arguments);
}

function loadClientId(cb){
    var lStore = window.localStorage;
    var clientId = null;
    if (lStore){
        clientId = lStore.getItem(TDC_CLIENT_ID);
        if(! clientId){
            clientId = genRandomHash();
            lStore.setItem(TDC_CLIENT_ID, clientId);
        }
    }
    cb(clientId);
}

function debugOnCR(clientId){
    console.log("Client Id"+clientId);
}

function replaceClass(className, inerHtml){
    var els = document.getElementsByClassName(className);
    for (var i = 0; i < els.length; i++) {
        els[i].innerHTML = inerHtml;
    }
}

function replaceElements(clientId){
    replaceClass("tdc_client_id", clientId)
}

onClientReady(debugOnCR);
onClientReady(replaceElements);

console.log("TDC Client Library loaded...");
