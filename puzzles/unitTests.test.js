import {currentCells} from './components/Board';
import {getColumn, getRow, getTop, getLeft} from './components/tileTools';

const each = require('jest-each').default;

describe("correctCurrentCells", () => {
    each([
            [new Set(), new Array(12).fill(-1)],
            [new Set([1, 3, 7, 11]), [-1, 1, -1, 3, -1, -1, -1, 7, -1, -1, -1, 11]]
    ]).it("Get correct board state.", (value, expectedValue) => {
        expect(currentCells(value)).toEqual(expectedValue)
    });
});

describe("getColumn", () => {
    each([
       [0, 0],
       [3, 0],
       [4, 1],
       [5, 2],
       [11, 2]
    ]).it("Get correct column for tile id .", (value, expectedValue) => {
        expect(getColumn(value)).toEqual(expectedValue)
    });
});

describe("getRow", () => {
    each([
        [0, 0],
        [2, 0],
        [3, 1],
        [6, 2],
        [11, 3]
     ]).it("Get correct row for tile id.", (value, expectedValue) => {
         expect(getRow(value)).toEqual(expectedValue)
     });
});

describe("getTop", () => {
    const imageSize = 120;

    each([
        [0, 0],
        [1, 0],
        [3, 30],
        [5, 30],
        [6, 60],
        [11, 90]
     ]).it("Get correct Y for %s and image size.", (value, expectedValue) => {
        expect(getTop(value, imageSize)).toEqual(expectedValue)
     });
});

describe("getLeft", () => {
    const imageSize = 120;

    each([
        [0, 0],
        [1, 40],
        [3, 0],
        [5, 80],
        [6, 0],
        [11, 80]
     ]).it("Get correct X for %s and image size.", (value, expectedValue) => {
        expect(getLeft(value, imageSize)).toEqual(expectedValue)
     });
});