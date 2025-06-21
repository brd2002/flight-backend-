function compateDateTime(arivalTime, departureTime) {
    let date1 = new Date(arivalTime);
    let date2 = new Date(departureTime);
    return date1.getTime() > date2.getTime();
}

module.exports = { compateDateTime };