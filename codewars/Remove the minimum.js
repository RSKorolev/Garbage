function abbrevName(name) {
    let nameToArray = name.toUpperCase().split(' ');
    return `${nameToArray[0][0]}.${nameToArray[1][0]}`
};
console.log(abbrevName('ruslan kor'));   //'R.K'