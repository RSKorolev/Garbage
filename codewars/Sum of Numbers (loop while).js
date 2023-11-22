function getSum(a, b) {
    if (a == b) {
        return a;
    } else if (a < b) {
        let sum = 0;
        while (a <= b) {
            sum += a;
            a++;
        }
        console.log(sum);
        return sum
    } else {
        let sum = 0;
        while (b <= a) {
            sum += b;
            b++;
        }
        return sum
    }
}