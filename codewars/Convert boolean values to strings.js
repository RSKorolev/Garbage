function findShort(s) {
    return s.split(' ').map((a) => { return a = a.length }).sort((a, b) => a - b)[0];
}
console.log(findShort("Let'-s travel abroad shall weedfdfdfdfsssssdf")); //5
