import { Dimensions } from 'react-native';
const imageWidth = Dimensions.get('window').width - 15;

const styles = {
    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    imageGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    image: {
      width: imageWidth / 2,
      height: imageWidth / 2,
      margin: 5,
      justifyContent: 'center',
      flex:1,
    },
    imageDisplay: {
      width: imageWidth,
      height: imageWidth,
      flex: 1,
    }
};

export default styles;