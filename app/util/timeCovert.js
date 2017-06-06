export function ts2date(timestamp) {
    let date = new Date(parseInt(timestamp));
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    return `${year}年${toDB(month + 1)}月${toDB(day)}日 ${toDB(hour)}:${toDB(min)}`;
}

function toDB(n){
    return n<10?'0'+n:''+n;
}