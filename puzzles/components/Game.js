import React, {useState, useEffect, useRef} from 'react';
import {View} from 'react-native';
import {getSource} from '../images/imageTools';
import styles from '../AppStyles';
import Tile from './Tile';
import Board from './Board';
import {shuffle, getRandomInt} from '../tools';
import TopBar from './TopBar';
import Score from './Score';

const indexArray = shuffle([...Array(12).keys()]);
const numOfImages = 10;

const Game = () => {

    const [moved, setMoved] = useState(new Set());
    const [imageId, setImageId] = useState(getRandomInt(numOfImages));
    const imageSource = getSource(imageId);
    const [ifEnd, setIfEnd] = useState(false);
    const [result, setResult] = useState(null);

    const isMoved = (id) => {
        return moved.has(id);
    };

    useEffect(() => {
        if (moved.size == 12) {
            setIfEnd(true);
        }
    }, [moved]);
    
    const getTile = (element, id) => {
        return (
            <Tile
                key={id}
                tileId={element}
                orderId={id}
                imageSource={imageSource}
                moved={isMoved(element)}
                addMoved={addMoved}
            />
        );
    };

    const addMoved = (id) => {
        const newMoved = new Set(moved);
        newMoved.add(id);
        setMoved(newMoved);
    };

    const restart = () => {
        setMoved(new Set());
        setImageId(getRandomInt(numOfImages));
        setIfEnd(false);
        setResult(null);
    };

    const tiles = indexArray.map((element, idx) => getTile(element, idx));

    return (
        <View style={styles.column}>
            <TopBar restart={restart} ifEnd={ifEnd} setResult={setResult}/>
            {ifEnd
                ? <Score result={result} />
                : <View style={styles.boardSize}>
                    {tiles}
                </View>
            }
            <View style={styles.centerItems}>
                <View style={styles.board}>
                    <Board
                        tileIds={moved}
                        imageSource={imageSource}
                    />
                </View>
            </View> 
        </View> 
    );
};

export default Game;