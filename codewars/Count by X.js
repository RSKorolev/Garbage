function countBy(x, n) {
    let i = x;
    let z = [];
    while (z.length <= n - 1) {
        z.push(i);
        i += x;
    }
    return z;
}
