var number = function (busStops) {
    let sumInc = 0;
    let summOut = 0;
    for (let i = 0; i < busStops.length; i++) {
        sumInc += busStops[i][0];
        summOut += busStops[i][1];
    } return sumInc - summOut;
}

console.log(number([[10, 0], [3, 5], [5, 8]])); // 5