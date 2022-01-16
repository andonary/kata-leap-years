"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isLeapYear_1 = require("./src/isLeapYear");
for (var year = 1800; year <= 2100; year++) {
    var result = (0, isLeapYear_1.isLeapYear)(year);
    console.log("".concat(result.year, " is ").concat(result.isLeapYear ? "valid" : "invalid", " because ").concat(result.reason));
}
