"use strict";
exports.__esModule = true;
exports.isLeapYear = void 0;
function isDivisibleByFourButNotHundred(year) {
    return year % 4 === 0 && year % 100 !== 0;
}
function isDivisibleByFourByHundredButNotFourHundred(year) {
    return year % 4 === 0 && year % 100 === 0 && year % 400 !== 0;
}
function isNotDivisibleByFour(year) {
    return year % 4 !== 0;
}
function isDivisibleByFourThousand(year) {
    return year % 4000 === 0;
}
function isDivisibleByFourHundred(year) {
    return year % 400 === 0;
}
function isLeapYear(year) {
    var leapYear = true;
    var reason = "";
    if (isDivisibleByFourHundred(year))
        reason = "It is divisible by 400";
    if (isDivisibleByFourButNotHundred(year))
        reason = "It is divisible by 4 but not by 100";
    if (isDivisibleByFourByHundredButNotFourHundred(year)) {
        leapYear = false;
        reason = "It is divisible by 4, by 100 but not by 400";
    }
    if (isNotDivisibleByFour(year)) {
        leapYear = false;
        reason = "It is not divisible by 4";
    }
    if (isDivisibleByFourThousand(year)) {
        leapYear = false;
        reason = "It is divisible by 4000";
    }
    return { isLeapYear: leapYear, reason: reason, year: year };
}
exports.isLeapYear = isLeapYear;
