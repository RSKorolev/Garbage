function countBy(x, n) {
    z = [];
    let i = x
    while (z.length < n) {
        z.push(i);
        i += x
    }
    return z;
}