function printerError(s) {
    let count = s.replace(/[a-m]/gi, '').length
    return `${count}/${s.length}`
}

console.log(printerError('aaaxbbbbyyhwawiwjjjwwm')); //8/22
