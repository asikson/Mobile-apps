import React from "react";
import styles from "./AppStyles";
import { Image } from 'react-native';

const ImageDisplay = ({image}) => {
    return (
        <Image
            style={styles.imageDisplay}
            source={{uri: image.uri}}
        />
    )
}

export default ImageDisplay;