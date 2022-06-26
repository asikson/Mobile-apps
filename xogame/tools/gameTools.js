import {range} from "lodash";

const diffs = range(-4, 5);

export const ifStreak = (board, i, sign) => {
    const rowElements = getElements(rowIndexes(i), board);
    const columnElements = getElements(columnIndexes(i), board);
    const leftSlantElements = getElements(leftSlantIndexes(i), board);
    const rightSlantElements = getElements(rightSlantIndexes(i), board);
    
    return ifStreakInArray(rowElements, sign) 
        || ifStreakInArray(columnElements, sign)
        || ifStreakInArray(leftSlantElements, sign)
        || ifStreakInArray(rightSlantElements, sign);
}

export const indexCorrect = (i) => {
    return i >= 0 && i < 10;
}

export const checkAndMerge = (pairList) => {
    return pairList.filter(p => indexCorrect(p[0]) && indexCorrect(p[1]))
        .map(p => mergeXY(p[0], p[1]));
}

export const convert2XY = (i) => {
    const x = i % 10;
    const y = Math.floor(i / 10);

    return [x, y];
}

export const mergeXY = (x, y) => {
    return y * 10 + x;
}

export const rowIndexes = (i) => {
    const rowNumber = convert2XY(i)[1];
    const row = range(rowNumber * 10, (rowNumber + 1) * 10);
    return row.filter(idx => Math.abs(i - idx) < 5);
}

export const columnIndexes = (i) => {
    const columnNumber = convert2XY(i)[0];
    const column = range(columnNumber, 100, 10);
    return column.filter(idx => Math.abs(i - idx) < 50);
}

export const leftSlantIndexes = (i) => {
    const [x, y] = convert2XY(i);
    const candidates = diffs.map(d => [x + d, y + d]);
    
    return checkAndMerge(candidates);
}

export const rightSlantIndexes = (i) => {
    const [x, y] = convert2XY(i);
    const candidates = diffs.map(d => [x + d, y - d]);

    return checkAndMerge(candidates);
}

export const ifStreakInArray = (signArray, sign) => {
    if (signArray.length < 5) {
        return false;
    }

    let counter = signArray.slice(0, 5)
        .filter(e => e == sign).length;

    if (counter == 5) {
        return true;
    }
    
    let e = 4;
    let newElem;

    while (e < signArray.length - 1) {
        newElem = signArray[e + 1];
        if (newElem != signArray[e - 4]) {
            if (newElem == sign) {
                counter++;
            }
            else {
                counter--;
            }
        }
        if (counter == 5) {
            return true;
        }
        e++;
    }

    return false;
}

const getElements = (indexes, board) => {
    return indexes.map(idx => board[idx]);
}

