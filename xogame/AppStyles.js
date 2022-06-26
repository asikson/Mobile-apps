import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width + 12;
const squareSize =  windowWidth / 10;

export const styles = {
    button: {
        backgroundColor: 'black',
        height: '15%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    playAgainButton: {
        backgroundColor: 'black',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        height: '30%',
        width: 0.4 * windowWidth
    },
    buttonView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    landscapeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    gameView: {
        width: windowWidth,
        height: windowWidth,
        alignItems: "center",
        justifyContent: "center",
    },
    landscapeGameView: {
        width: windowWidth - 50,
        height: windowWidth - 50,
        alignItems: "center",
        justifyContent: "center",
    },
    boardItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        testAlign: 'center',
        backgroundColor: "black",
        borderColor: "white",
        borderWidth: 2,
        width: squareSize,
        height: squareSize,
        marginTop: 0,
    },
    boardContent: {
        alignItems: "center",
        justifyContent: "center",
    },
    signs: {
        color: "white",
        fontSize: 0.75 * squareSize,
    },
    landscapeSigns: {
        color: "white",
        fontSize: 0.6 * squareSize,
    },
    boardText: {
        color: 'black',
        fontSize: 25,
    },
    scoresContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'space-between',
      },
    scoreItem: {
        width: '50%',
        alignItems: "center",
        justifyContent: "center",
    },
    crossItem: {
        color: 'yellow',
        fontSize: 0.7 * squareSize
    },
    circleItem: {
        color: 'chartreuse',
        fontSize: 0.7 * squareSize
    },
    scoreText: {
        color: 'black',
        fontSize: 30,
    },
};

export default styles;