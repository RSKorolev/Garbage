var countSheep = function (num) {
    let str = ''
    if (num == 0) {
        return str;
    } else {
        for (let i = 0; i < num; i++) {
            str = str + `${i + 1} sheep...`;
        }
        return str;
    }
}