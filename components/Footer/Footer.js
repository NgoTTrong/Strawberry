import {
  View,
  Image,
  StyleSheet
} from 'react-native'

import {
  HomeIcon,
  SettingIcon,
  ReportIcon
} from '../../assets/index'
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export default Footer = (props) => {
  return <View style={styles.navigateContainer}>
    <Image source={HomeIcon} style={styles.imageStyle}/>
    <Image source={SettingIcon} style={styles.imageStyle}/>
    <Image source={ReportIcon} style={styles.imageStyle}/>

  </View>
}

const styles = StyleSheet.create({
  navigateContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: screenWidth,
    height: screenHeight*0.5/8
  },
  imageStyle:{
    width: 30,
    height:30
  }
})