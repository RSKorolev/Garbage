function neutralise(s1, s2) {
    let str = ''
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] + s2[i] == '++')
            str += '+';
        if (s1[i] + s2[i] == '--')
            str += '-';
        if (s1[i] + s2[i] == '+-' || s1[i] + s2[i] == '-+')
            str += '0';

    } return str;
}
console.log(neutralise("-+-+-+", "-+-+-+")); // '-+-+-+'