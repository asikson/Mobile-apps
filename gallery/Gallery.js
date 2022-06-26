import React, { useEffect, useState } from 'react';
import styles from "./AppStyles";
import ImageItem from "./ImageItem";
import fetchPhotos from "./CameraRoll";
import ImageDisplay from './ImageDisplay';
import useSwipe from './useSwipe';
import {
    FlatList,
    View,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

const Gallery = ({photos2Fetch}) => {

    [images, setImages] = useState([]);
    [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        fetchPhotos(photos2Fetch)
            .then(photos => setImages(photos));
    }, []);

    const imageByIndex = (index) => {
        return images[index];
    }

    const handlePress = (index) => {
        setCurrentIndex(index);
    }

    const onSwipeLeft = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    const onSwipeRight = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const onSwipeUpOrDown = () => {
        setCurrentIndex(-1);
    }

    const {onTouchStart, onTouchEnd} = useSwipe(onSwipeLeft, onSwipeRight, onSwipeUpOrDown, 6);

    return (
        <View style={styles.container}>
            {currentIndex >= 0
                ? <ScrollView 
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                    contentContainerStyle={styles.container}
                >
                    <ImageDisplay
                        image={imageByIndex(currentIndex)}
                    />
                </ScrollView>

                : <FlatList
                    data={images}
                    renderItem={({item, index}) => 
                        <TouchableHighlight 
                            onPress={() => handlePress(index)}
                        >
                            <ImageItem image={item}/>
                        </TouchableHighlight>     
                    }
                    numColumns={2}
                />
            }
        </View>
    );
}

export default Gallery;