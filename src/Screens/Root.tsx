import React from 'react'
import { View, Image} from 'react-native'
import Button from '../Components/Button'
import NavigatorService from '../Navigators/NavigationService';
import Screens from '../Navigators/Screens';
import Spacer from '../Components/Spacer';

const RootScreen = () => {
    const arrowImage = require('../Assets/Images/background.jpg')

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <Image source={arrowImage} style={{position: 'absolute', top:0, bottom:0, height:'100%'}}/>
            <View style={{position: 'absolute', top:0, bottom:0, height:'100%',width:'100%', backgroundColor: '#000', opacity:0.6}}/>
            <Button title={'New Order'} onPress={()=> {
                NavigatorService.push(Screens.NewOrder)
            }} enabled={true}/>
            <Spacer/>
            <Button title={'My Orders'} onPress={()=> {
                NavigatorService.push(Screens.OrdersList)
            }} enabled={true}/>
        </View>
    )
}

export default RootScreen
