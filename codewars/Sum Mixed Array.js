function sumMix(x) {
    return x.map(item => +item).reduce((prev, item) => prev += item)
}