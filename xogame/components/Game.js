import React, { useState, useEffect } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import SquareGrid from "react-native-square-grid";
import styles from "../AppStyles";
import ScoreDisplay from './ScoreDisplay';
import GameButtons from './GameButtons';
import {ifStreak} from '../tools/gameTools';
import {getAgentMove} from '../tools/agent';
import {Dimensions} from 'react-native';
import {getBestScore, saveBestScore} from '../storage';

const x = 10;
const y = 10;
export const cross = "X";
export const circle = "O";
const empty = "  ";
const initialArray = Array(x * y).fill(empty);

const Game = ({route, navigation}) => {

    const twoPlayerMode = route.params.twoPlayerMode;

    const [board, updateBoard] = useState([...initialArray]);
    const [isXMove, setIsXMove] = useState(true);
    const [winner, setWinner] = useState(undefined);
    const [lastIndex, setLastIndex] = useState(undefined);
    const [XWins, setXWins] = useState(0);
    const [OWins, setOWins] = useState(0);
    const [moveCounter, setMoveCounter] = useState(0);
    const [landscapeScreen, setLandscapeScreen] = useState(false);
    const [bestScore, setBestScore] = useState(undefined);

    useEffect(() => {
        if (moveCounter == x * y) {
            setWinner(empty);
        }
        else {
            const currentWinner = checkWinner();
            if (currentWinner) {
                setWinner(currentWinner);
            }
            else {
                if (!twoPlayerMode && !isXMove) {
                    getAgentMove(board)
                        .then(response => makeMove(response));
                }
            }
        }
    }, [lastIndex]);

    useEffect(() => {
        if (winner == cross) {
            setXWins(XWins + 1);
        }
        else if (winner == circle) {
            setOWins(OWins + 1);
        }
    }, [winner]);

    useEffect(() => {
        getBestScore()
            .then(response => setBestScore(parseInt(response)));
        if (isLandscape()) {
            setLandscapeScreen(true);
        }
    }, []);

    const isLandscape = () => {
        const dim = Dimensions.get('screen');
        return dim.width >= dim.height;
    };

    Dimensions.addEventListener('change', () => {
        const landscape = isLandscape();
        setLandscapeScreen(landscape);
    });

    const renderItem = (item, index) => {
        return ( 
            <View style={styles.boardItem}>
                <TouchableHighlight 
                    onPress={() => handleClick(item, index)}   
                >
                    <Text style={item == cross ? styles.crossItem : styles.circleItem}>
                        {item}
                    </Text>
                </TouchableHighlight>
            </View>    
        );
    };
    
    const handleClick = (item, index) => {
        if (!winner && item == empty && (twoPlayerMode || isXMove)) {
            if (isXMove) {
                makeMove(index, cross);
            }
            else {
                makeMove(index, circle);
            }
        };
    };

    const resetGame = () => {
        setLastIndex(undefined);
        setWinner(undefined);
        setIsXMove(true);
        updateBoard([...initialArray]);
        setMoveCounter(0);
    };

    const goHome = () => {
        const best = Math.max(XWins, OWins, bestScore);
        if (best != bestScore) {
            saveBestScore(best).then(_ => navigation.navigate("Home"));
        } else {
            navigation.navigate("Home");
        }
    };

    const makeMove = (index, sign=circle) => {
        let newBoard = board;
        newBoard[index] = sign;
        updateBoard(newBoard);
        setIsXMove(!isXMove);
        setLastIndex(index);
        setMoveCounter(moveCounter + 1);
    };

    const checkWinner = () => {
        const lastSign = isXMove ? circle : cross;
        return ifStreak(board, lastIndex, lastSign) ? lastSign : undefined;
    };

    const portraitLayout = () => {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <ScoreDisplay
                        isXMove={isXMove}
                        winner={winner}
                        XWins={XWins}
                        OWins={OWins}
                    />
                </View>
                <View style={styles.gameView}>
                    <SquareGrid 
                        rows={x}
                        columns={y}
                        items={board}
                        renderItem={(item, index) => renderItem(item, index)}
                    />
                </View>
                <GameButtons
                    goHome={goHome}
                    winner={winner}
                    resetGame={resetGame}
                >
                </GameButtons>
            </View>
        );
    };

    const landscapeLayout = () => {
        return (
            <View style={styles.landscapeContainer}>
                <View style={styles.scoreItem}> 
                    <View style={styles.container}>
                        <ScoreDisplay
                            isXMove={isXMove}
                            winner={winner}
                            XWins={XWins}
                            OWins={OWins}
                        />
                        <GameButtons>
                            goHome={goHome}
                            winner={winner}
                            resetGame={resetGame}
                        </GameButtons>
                    </View>
                </View>
                <View style={styles.scoreItem}>
                    <View style={styles.landscapeGameView}>
                        <SquareGrid 
                            rows={x}
                            columns={y}
                            items={board}
                            renderItem={(item, index) => renderItem(item, index)}
                        />
                    </View>
                </View>
            </View>
        );
    };

    return (
        <>
            {landscapeScreen
                ? landscapeLayout()
                : portraitLayout()
            }
        </> 
    );
}

export default Game;