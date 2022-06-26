import React from "react";
import styles from "./AppStyles";
import { Image } from 'react-native';

const ImageItem = ({image}) => {
    return (
        <Image
            style={styles.image}
            source={{uri: image.uri}}
        />
    )
}

export default ImageItem;