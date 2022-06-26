import React from 'react';
import styles from "../AppStyles";
import { Text, View } from 'react-native';
import { cross, circle } from "./Game";


const ScoreDisplay = (
    {
        isXMove,
        winner,
        XWins,
        OWins
    }
) => {
    
    const displayMove = isXMove ? cross : circle;

    const displayResult = () => {
        if (winner == cross || winner == circle) {
            return (
                <Text style={styles.boardText}>Winner: {winner}</Text>
            );
        }
        return <Text style={styles.boardText}>Tie!</Text>
    }

    const displayScore = () => {
        return (
            <>
                <View style={styles.scoresContainer}>
                    <View style={styles.scoreItem}>
                        <Text style={styles.boardText}>X Score:</Text>
                        <Text style={styles.boardText}>{XWins}</Text>
                    </View>
                    <View style={styles.scoreItem}>
                        <Text style={styles.boardText}>O Score:</Text>
                        <Text style={styles.boardText}>{OWins}</Text>
                    </View>
                </View>
                <Text style={styles.boardText}>Move: {displayMove}</Text>
            </>
        );
    }

    return (
        <View style={styles.buttonView}>
            {winner 
                ? displayResult()
                : displayScore()
            }
        </View>
    );
};

export default ScoreDisplay;