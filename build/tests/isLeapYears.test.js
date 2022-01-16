"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isLeapYear_1 = require("../src/isLeapYear");
describe("Is Leap Years", function () {
    test.each([
        {
            itMsg: "it should tell me a valid leap year because divisible by 400",
            year: 2000,
            expectedIsLeapYear: true,
            reason: "It is divisible by 400",
        },
        {
            itMsg: "it should tell me a valid leap year because divisible by 400",
            year: 2400,
            expectedIsLeapYear: true,
            reason: "It is divisible by 400",
        },
        {
            itMsg: "it should tell me a valid leap year because divisible by 4 but not 100",
            year: 2008,
            expectedIsLeapYear: true,
            reason: "It is divisible by 4 but not by 100",
        },
        {
            itMsg: "it should tell me an invalid leap year because divisible by 4, by 100 but not 400",
            year: 1800,
            expectedIsLeapYear: false,
            reason: "It is divisible by 4, by 100 but not by 400",
        },
        {
            itMsg: "it should tell me an invalid leap year because not divisible by 4",
            year: 2017,
            expectedIsLeapYear: false,
            reason: "It is not divisible by 4",
        },
        {
            itMsg: "it should tell me an invalid leap year because divisible by 4000",
            year: 4000,
            expectedIsLeapYear: false,
            reason: "It is divisible by 4000",
        },
    ])("$itMsg", function (cases) {
        // Arrange
        var year = cases.year, expectedIsLeapYear = cases.expectedIsLeapYear, reason = cases.reason;
        var expectedResult = {
            year: year,
            isLeapYear: expectedIsLeapYear,
            reason: reason,
        };
        // Act
        var result = (0, isLeapYear_1.isLeapYear)(year);
        // Assert
        expect(result).toEqual(expectedResult);
    });
});
