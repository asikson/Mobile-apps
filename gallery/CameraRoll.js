import CameraRoll from '@react-native-community/cameraroll';

const fetchPhotos = (photos2Fetch) => {
    return CameraRoll.getPhotos({
        first: photos2Fetch,
        assetType: "Photos",
    })
        .then(data => onFetchSuccess(data))
        .catch(e => handleFetchError(e));
}

const onFetchSuccess = (data) => {
    const images = data.edges.map(asset => 
        asset.node.image
    );

    return images;
}

const handleFetchError = (e) => {
    console.log(e);
}

export default fetchPhotos;