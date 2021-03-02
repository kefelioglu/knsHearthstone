import { StyleSheet} from 'react-native'
import { color } from 'react-native-reanimated'

import Images from '../../static/images'
export default StyleSheet.create({
    button: {
        flex: 1,
        padding: 20,
        alignItems:'center'
      },
    image:{ 
        margin:10,
        flex: 1,
        resizeMode: 'cover' 
    },
    whiteText:{
        color:'#fff'
    },
    cardBackTexts:{
        color:'#fff',
        marginTop:10,
    }   
})