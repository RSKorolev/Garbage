function reverseWords(str) {
    return str.split(' ')
        .map(a => { return a.split('').reverse().join('') })
        .join(' ');
}
console.log(reverseWords('The quick brown fox jumps over the lazy dog.')); //'ehT kciuq nworb xof spmuj revo eht yzal .god'
