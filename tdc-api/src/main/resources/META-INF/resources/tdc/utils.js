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
    var mmt = toMoment(dateArr);
    return mmt.format('LLLL');
}