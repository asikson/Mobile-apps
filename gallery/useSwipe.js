import { Dimensions } from 'react-native';
const window = Dimensions.get('window');

const useSwipe = (
    onSwipeLeft,
    onSwipeRight,
    onSwipeUpOrDown,
    rangeOffset = 5,
) => {

    let firstTouchX = 0;
    let firstTouchY = 0;

    const onTouchStart = (e) => {
        firstTouchX = e.nativeEvent.pageX;
        firstTouchY = e.nativeEvent.pageY;
    }

    const onTouchEnd = (e) => {
        const positionX = e.nativeEvent.pageX;
        const positionY = e.nativeEvent.pageY;

        const rangeX = window.width / rangeOffset;
        const rangeY = window.height / rangeOffset;

        if (positionX - firstTouchX > rangeX) {
            onSwipeRight && onSwipeRight();
        }
        else if (firstTouchX - positionX > rangeX) {
            onSwipeLeft && onSwipeLeft();
        }
        else if (positionY - firstTouchY > rangeY
            || firstTouchY - positionY > rangeY) {
            onSwipeUpOrDown && onSwipeUpOrDown();
        }
    }

    return {onTouchStart, onTouchEnd};
}

export default useSwipe;