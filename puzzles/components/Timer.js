import React from 'react';
import {View, Text} from 'react-native';
import styles from '../AppStyles';

const Timer = ({time}) => {

    return (
        <View style={styles.button}>
            <Text>{time} sec</Text>
        </View>
    );
};

export default Timer;