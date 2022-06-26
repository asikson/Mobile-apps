import {indexOf, range} from "lodash";
import {cross, circle} from "../components/Game";
import {checkAndMerge, convert2XY} from "./gameTools";

const roundSteps = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
];

const desiredValues = [2, 1, ...range(3, 9), 0];

export const getAgentMove = (board) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(getBestMove(board));
        }, 300);
    });
};

const getBestMove = (board) => {
    const boardIndexes = range(100);
    const freeIndexes = boardIndexes
        .filter(idx => board[idx] != cross && board[idx] != circle);
    const points = freeIndexes
        .map(f => convert2XY(f))
        .map(f => produceSteps(f))
        .map(indexes => countX(indexes, board));
    
    const bestIndex = chooseBestIndex(points);
    return freeIndexes[bestIndex];
};

const chooseBestIndex = (points) => {
    const found = desiredValues.filter(value => indexOf(points, value) != -1);
    return indexOf(points, found[0]);
};
    

const produceSteps = (f) => {
    const candidates = roundSteps.map(step => [f[0] + step[0], f[1] + step[1]]);
    return checkAndMerge(candidates);
};

const sum = (numbers) => {
    return numbers.reduce((a, b) => a + b, 0);
}

const countX = (indexes, board, sign=cross) => {
    return sum(indexes.map(idx => board[idx] == sign ? 1 : 0));
}