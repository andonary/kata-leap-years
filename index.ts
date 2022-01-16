import { isLeapYear } from "./src/isLeapYear";

for (let year = 1800; year <= 2100; year++) {
  const result = isLeapYear(year);
  console.log(`${result.year} is ${result.isLeapYear ? "valid" : "invalid"} because ${result.reason}`);
}
