function filter_list(l) {
    return l.filter(a => typeof a === 'number');
}

console.log(filter_list([1, "a", "b", 0, 15]));

