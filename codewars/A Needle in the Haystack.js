function findNeedle(haystack) {
    let findIndex = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == "needle") {
            findIndex = i;
        }
    }
    return `found the needle at position ${findIndex}`
}

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false])); // 'found the needle at position 3' 