import React from 'react';
import {View, Text} from 'react-native';
import styles from '../AppStyles';

const Score = ({result}) => {
    return (
        <View style={styles.scoreView}>
            <Text style={styles.scoreText}>Congratulations!</Text>
            {result 
                ? <Text style={styles.scoreText}>Your time: {result} sec!</Text>
                : <Text></Text>
            }
        </View>
    );
};

export default Score;