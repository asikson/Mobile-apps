import React from 'react';
import {View, Image} from 'react-native';
import styles, {X, Y} from '../AppStyles';

export const getRow = (id) => {
    return Math.floor(id / X);
}

export const getColumn = (id) => {
    return id % X;
}

export const getTop = (id, imageHeight) => {
    return getRow(id) * (imageHeight / Y);
}

export const getLeft = (id, imageWidth) => {
    return getColumn(id) * (imageWidth / X);
}

export const getTile = (tileId, imageSource, viewSize) => {
    const top = getTop(tileId, viewSize);
    const left = getLeft(tileId, viewSize);

    return (
        <View style={styles.tileView}>
            <Image
                source={imageSource}
                style={{top: -top, left: -left, ...styles.image}}
            />     
        </View> 
    );
}