function isDivisibleByFourButNotHundred(year: number) {
  return year % 4 === 0 && year % 100 !== 0;
}

function isDivisibleByFourByHundredButNotFourHundred(year: number) {
  return year % 4 === 0 && year % 100 === 0 && year % 400 !== 0;
}

function isNotDivisibleByFour(year: number) {
  return year % 4 !== 0;
}

function isDivisibleByFourThousand(year: number) {
  return year % 4000 === 0;
}

function isDivisibleByFourHundred(year: number) {
  return year % 400 === 0;
}

export function isLeapYear(year: number) {
  let leapYear = true;
  let reason = "";
  if (isDivisibleByFourHundred(year)) reason = "It is divisible by 400";
  if (isDivisibleByFourButNotHundred(year)) reason = "It is divisible by 4 but not by 100";
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
  return { isLeapYear: leapYear, reason, year };
}
