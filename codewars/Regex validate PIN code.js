function validatePIN(pin) {
    if (/^\d+$/.test(pin)) {
        if (pin.length == 4 || pin.length == 6) return true
    }
    return false
}
console.log(validatePIN('132')); //false