function isPalindrome(x) {
    let arrA = x.toUpperCase().split('');
    let arrB = x.toUpperCase().split('').reverse();
    for (let i = 0; i < arrA.length; i++) {
        if (arrA[i] !== arrB[i]) {
            return false;
        }
    } return true;
}