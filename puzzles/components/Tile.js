import React, {useState, useEffect} from 'react';
import {viewSize, viewMargin, viewPadding, cellWidth, cellHeight, topShift} from '../AppStyles';
import {getLeft, getTop, getTile, getColumn, getRow} from './tileTools';
import Draggable from 'react-native-draggable';

const minRatio = 0.1;
const maxRatio = 0.9;

const leftMin = minRatio * cellWidth;
const leftMax = maxRatio * cellWidth;
const topMin = topShift + viewSize + minRatio * cellHeight;
const topMax = topShift + viewSize + maxRatio * cellHeight;

const Tile = ({tileId, orderId, imageSource, moved, addMoved}) => {

    const [wasMoved, setWasMoved] = useState(moved);

    useEffect(() => {
        setWasMoved(moved);
    }, [moved]);

    const columnMargin = getColumn(orderId) * viewPadding;
    const rowMargin = getRow(orderId) * viewPadding;

    const x = getLeft(orderId, viewSize) + columnMargin + viewMargin;
    const y = getTop(orderId, viewSize) + rowMargin;

    const left = getLeft(tileId, viewSize);
    const top = getTop(tileId, viewSize);

    const checkPosition = (e) => {
        const leftDiff = e.nativeEvent.pageX - (left + columnMargin + viewMargin);
        const topDiff = e.nativeEvent.pageY - (top + rowMargin);

        if (leftDiff > leftMin && leftDiff < leftMax
            && topDiff > topMin && topDiff < topMax) {
            addMoved(tileId);
            setWasMoved(true);
        }
    }
    
    return (
        !wasMoved &&
            <Draggable 
                x={x} 
                y={y} 
                shouldReverse={true}
                onDragRelease={checkPosition}
            >
                {getTile(tileId, imageSource, viewSize)}
            </Draggable>    
    );
};

export default Tile;

