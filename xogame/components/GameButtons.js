import React from 'react';
import styles from "../AppStyles";
import { Text, View, TouchableHighlight } from 'react-native';

const GameButtons = (
    {
        goHome,
        winner,
        resetGame
    }
) => {

    return (
        <View style={styles.container}>
            {winner &&
                <TouchableHighlight
                    style={styles.playAgainButton}
                    onPress={resetGame}
                >
                    <Text style={styles.buttonText}>Play again</Text>
                </TouchableHighlight>
            }
            <TouchableHighlight
                style={styles.playAgainButton}
                onPress={goHome}
            >
                <Text style={styles.buttonText}>Quit</Text>
            </TouchableHighlight>
        </View>
    );
};

export default GameButtons;