import React, {useEffect, useState} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {getBestScore, saveBestScore} from '../storage';
import {styles} from '../AppStyles';

const Scores = ({navigation}) => {

    const [bestScore, setBestScore] = useState([]);
    
    useEffect(() => {
        getBestScore()
            .then(response => setBestScore(response));
    }, [])

    const goHome = () => {
        navigation.navigate("Home");
    }

    const resetScore = () => {
        saveBestScore(0).then(_ => setBestScore(0));
    }

    return (
        <View style={styles.buttonView}>
            <View style={styles.container}>
                <Text style={styles.scoreText}>Your best score is:</Text>
                <Text style={styles.scoreText}>{bestScore ? bestScore : 0}</Text>
            </View>
            <TouchableHighlight
                style={styles.button}
                onPress={resetScore}
            >
                <Text style={styles.buttonText}>Reset best score</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.button}
                onPress={goHome}
            >
                <Text style={styles.buttonText}>OK</Text>
            </TouchableHighlight>
        </View>
    );
}

export default Scores;