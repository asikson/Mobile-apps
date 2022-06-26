import AsyncStorage from '@react-native-community/async-storage';

const key = 'best';

export const getBestScore = () => {
    try {
        return AsyncStorage.getItem(key);
    }
    catch(e) {
        console.log(e);
    }
}

export const saveBestScore = (score) => {
    return AsyncStorage.setItem(key, score.toString());
}