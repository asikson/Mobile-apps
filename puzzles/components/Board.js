import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import styles, {viewSize, X} from '../AppStyles';
import {getTile} from './tileTools';

const indexArray = [...Array(12).keys()];
export const currentCells = (tileIds) => {
    return indexArray.map(idx => tileIds.has(idx) ? idx : -1);
};

const Board = ({tileIds, imageSource}) => {
    
    const [cells, setCells] = useState(currentCells(tileIds));

    useEffect(() => {
        setCells(currentCells(tileIds));
    }, [tileIds]);

    const getCell = (id) => {
        if (id >= 0) {
            return getTile(id, imageSource, viewSize);
        }

        return <View style={styles.cell}/>;
    };

    return (
        <View style={styles.board}>
            <FlatList
                data={cells}
                renderItem={({item}) => getCell(item)}
                numColumns={X}
            />
        </View>
    );
};

export default Board;