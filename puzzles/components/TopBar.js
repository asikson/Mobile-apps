import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import styles from '../AppStyles';
import ExitButton from './ExitButton';
import RestartButton from './RestartButton';
import Timer from './Timer';

const TopBar = ({restart, ifEnd, setResult}) => {

    const [time, setTime] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!ifEnd) {
                setTime(time + 1)
            }
            else {
                setResult(time);
            }}, 1000);
        return () => clearInterval(timer);
      }, [time]);

    useEffect(() => {
        if (!ifEnd) {
            setTime(0);
        }
    }, [ifEnd]);

    return (
        <View style={styles.topBar}>
            <RestartButton
                restart={() => {
                    setTime(0);
                    restart();
                }}
            />
            <Timer time={time}/>
            <ExitButton />
        </View>
    );
};

export default TopBar;