import {Dimensions} from 'react-native';

export const X = 3;
export const Y = 4;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const viewSize = Math.min(
    windowWidth - 40,
    (windowHeight - 80) / 2
);

export const viewPadding = 2;
const viewSizeWithPadding = viewSize + (X - 1) * viewPadding;
export const viewMargin = (windowWidth - viewSizeWithPadding) / 2;

export const topShift = windowHeight - 2 * viewSizeWithPadding - 10;
const tileWidth = viewSize / X;
const tileHeight = viewSize / Y;
export const cellWidth = viewSizeWithPadding / X;
export const cellHeight = viewSizeWithPadding / Y;

const styles = {
    tileView: {
        width: tileWidth,
        height: tileHeight,
        overflow: 'hidden'
    },
    image: {
        width: viewSize,
        height: viewSize
    },
    boardSize: {
        width: viewSizeWithPadding,
        height: viewSizeWithPadding
    },
    cell: {
        backgroundColor: "transparent",
        borderColor: "black",
        borderWidth: viewPadding / 2,
        width: cellWidth,
        height: cellHeight
    },
    board: {
        width: viewSizeWithPadding,
        height: viewSizeWithPadding,
        backgroundColor: 'transparent'
    },
    column: {
        flexDirection: 'column'
    },
    centerItems: {
        alignItems: 'center'
    },
    topBar: {
        width: '100%',
        height: 0.75 * topShift,
        backgroundColor: 'black',
        marginBottom: 0.25 * topShift,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'white',
        height: '80%',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
    },
    scoreView: {
        width: '100%',
        height: viewSizeWithPadding,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scoreText: {
        color: 'black',
        fontSize: 30,
    }
};

export default styles;