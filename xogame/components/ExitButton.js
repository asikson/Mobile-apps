import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import RNExitApp from 'react-native-exit-app';
import { styles } from '../AppStyles';

const ExitButton = () => {

    const exitApp = () => {
        RNExitApp.exitApp();
    };

    return (
        <TouchableOpacity
                style={styles.button}
                onPress={exitApp}
            >
                <Text style={styles.buttonText}> Exit </Text>
        </TouchableOpacity>
    );
};

export default ExitButton;