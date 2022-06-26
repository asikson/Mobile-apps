import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {styles} from '../AppStyles';
import ExitButton from './ExitButton';

const Home = ({navigation}) => {

    return (
        <View style={styles.buttonView}>
            <TouchableHighlight
                style={styles.button}
                onPress={() => navigation.navigate("Game", {twoPlayerMode: false})}
            >
                <Text style={styles.buttonText}> New game </Text>
            </TouchableHighlight>

            <TouchableHighlight
                style={styles.button}
                onPress={() => navigation.navigate("Game", {twoPlayerMode: true})}
            >
                <Text style={styles.buttonText}> New game 1 vs 1 </Text>
            </TouchableHighlight>

            <TouchableHighlight 
                style={styles.button}
                onPress={() => navigation.navigate("Scores")}
            >
                <Text style={styles.buttonText}> Scores </Text>
            </TouchableHighlight>

            <ExitButton />
        </View>
    );
};

export default Home;