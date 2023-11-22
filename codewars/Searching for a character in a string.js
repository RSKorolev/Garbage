function areYouPlayingBanjo(name) {
    if (((name.indexOf('R') == 0)) || (name.indexOf('r') == 0)) {
        return `${name} plays banjo`;
    } else {
        return `${name} does not play banjo`;;
    }
}