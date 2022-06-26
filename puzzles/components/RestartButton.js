import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../AppStyles';

const RestartButton = ({restart}) => {

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={restart}
        >
            <Text style={styles.buttonText}> Restart </Text>
        </TouchableOpacity>
    );
};

export default RestartButton;