function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    for (let i = 0; i < classPoints.length; i++)
        sum += classPoints[i];
    let averageSum = sum / classPoints.length;
    return averageSum < yourPoints;
}
