function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomHash(max) {
    return hashids.encode(getRandomInt(max));
}

function genRandomHash() {
    return getRandomHash(Number. MAX_SAFE_INTEGER);
}

function toMoment(dateArr){
    // Note: Because this mirrors the native Date parameters, months, hours, minutes, seconds, and milliseconds are all zero indexed. Years and days of the month are 1 indexed.
    dateArr = [
        dateArr[0],
        dateArr[1]-1,
        dateArr[2],
        dateArr[3],
        dateArr[4],
        dateArr[5],
        0]
    return moment(dateArr);
}

function toLocalString(dateArr){
    const mmt = toMoment(dateArr);
    return mmt.format('LLLL');
}

function addHTML(id, value) {
    const el = document.getElementById(id);
    if (el){
        el.innerHTML = value;
    } else {
        debug(`No element found by id [${id}]`);
    }
}