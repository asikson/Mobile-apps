const each = require('jest-each').default;
import {
    indexCorrect,
    convert2XY,
    mergeXY,
    checkAndMerge,
    rowIndexes,
    columnIndexes,
    leftSlantIndexes,
    rightSlantIndexes,
    ifStreakInArray
} from "./gameTools";

const cross = 'X';
const circle = 'O';
const empty = '';

describe("indexCorrect", () => {
    each([
            [10, false],
            [-3, false],
            [0, true],
            [-14, false],
            [76, false],
            [100, false],
            [5, true],
    ]).it("Check if index is correct", (value, expectedValue) => {
        expect(indexCorrect(value)).toEqual(expectedValue)
    });
});

describe("convert2XY", () => {
    each([
        [66, [6, 6]],
        [0, [0, 0]],
        [49, [9, 4]],
        [99, [9, 9]],
    ]).it("Convert to 2-dimensional indexes", (value, expectedValue) => {
        expect(convert2XY(value)).toEqual(expectedValue)
    });
});

describe("mergeXY", () => {
    each([
        [[0, 0], 0],
        [[8, 1], 18],
        [[9, 9], 99],
        [[5, 5], 55]
    ]).it("Convert to 1-dimensional index", (value, expectedValue) => {
        expect(mergeXY(value[0], value[1])).toEqual(expectedValue)
    });
});

describe("checkAndMerge", () => {
    it("Check indexes and merge to single-dimension", () => {
        expect(checkAndMerge([[1, 1], [-14, 1], [0, 0], [10, 10], [9, 9]])).toEqual([11, 0, 99]);
    });
});

describe("rowIndexes", () => {
    each([
        [0, [0, 1, 2, 3, 4]],
        [57, [53, 54, 55, 56, 57, 58, 59]],
        [89, [85, 86, 87, 88, 89]]
    ]).it("Find indexes from the same row (closer than 5)", (value, expectedValue) => {
        expect(rowIndexes(value)).toEqual(expectedValue)
    });
});

describe("columnIndexes", () => {
    each([
        [0, [0, 10, 20, 30, 40]],
        [57, [17, 27, 37, 47, 57, 67, 77, 87, 97]],
        [89, [49, 59, 69, 79, 89, 99]]
    ]).it("Find indexes from the same column (closer than 5", (value, expectedValue) => {
        expect(columnIndexes(value)).toEqual(expectedValue)
    });
});

describe("leftSlantIndexes", () => {
    each([
        [10, [10, 21, 32, 43, 54]],
        [81, [70, 81, 92]],
        [54, [10, 21, 32, 43, 54, 65, 76, 87, 98]]
    ]).it("Find indexes from the same left slant (closer than 5)", (value, expectedValue) => {
        expect(leftSlantIndexes(value)).toEqual(expectedValue)
    });
});

describe("rightSlantIndexes", () => {
    each([
        [18, [54, 45, 36, 27, 18, 9]]
    ]).it("Find indexes from the same right slant (closer than 5)", (value, expectedValue) => {
        expect(rightSlantIndexes(value)).toEqual(expectedValue)
    });
});

describe("ifStrakInArray", () => {
    each([
        [[cross, cross, empty, circle, cross, cross], cross, false],
        [[cross, cross, cross, cross], cross, false],
        [[empty, cross, empty, empty, circle, circle, circle, circle, circle], circle, true],
        [[empty, cross, empty, empty, circle, circle, circle, circle, circle], cross, false],
        [[ circle, circle, circle, circle, circle, cross, cross, cross, cross], circle, true]
    ]).it("Check if there is a streak", (value, sign, expectedValue) => {
        expect(ifStreakInArray(value, sign)).toEqual(expectedValue)
    });
});