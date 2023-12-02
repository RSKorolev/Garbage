function correct(string) {
    return string.replace(/[5,0,1]/gi, (a) => {
        if (a == '5') return a = 'S';
        if (a == '0') return a = 'O';
        if (a == '1') return a = 'I';
    })
}
console.log(correct("PAR15"));  // PARIS


// correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')