import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, Image } from 'react-native'
import Spacer from '../Components/Spacer';
import api from '../Api/api';
import { ORDERS } from '../Api/constants';
import Label from '../Components/Label';

const OrdersListScreen = () => {

  const getOrdersList = ()=> {
    api.get(ORDERS).then(response=> {
        setOrdersList(response.data)
        console.log(response.data)
    }).catch(error=> {
        console.log(error)
    })
  }

  const arrowImage = require('../Assets/Images/cook.jpg')


  const [ordersList, setOrdersList] = useState([])

  useEffect(() => {
      
      getOrdersList()
      setInterval(() => {
        getOrdersList()
        console.log('Call')
      }, 5000);
  }, [])
  const renderItem = (orderInfo: any)=> {
      return <View style={{height: 50, paddingStart: 75,borderBottomColor: '#f9f9f9'}}>
          <View style={{borderRadius: 20, width:40, height:40, justifyContent:'center',alignItems:'center', opacity:orderInfo.item.status === 'Ready for pickup' ? 0.7 : 0.3}}>
          <Label text={orderInfo.item.id} color={'#00ccbb'} bold={true} fontSize={30}/>
          </View>
      </View>
  }
  const Header = (props: any) => {
      return <View style = {{height:40, justifyContent: 'center', paddingStart: 10, marginBottom: 10, alignItems:'center'}}>
          
          <Label text={props.title} bold={true} fontSize={18} color={'#2e2e2e'}/>
    
          </View>
  }
    return (
        <View style={styles.container}>
            <Image resizeMode= 'contain' source={arrowImage} style={{position:'absolute', top:0, bottom:0, height:'100%', width:'60%', start: 75, end:0, opacity: 0.05} }/>
            <FlatList 
            style={{flex: 1, marginTop:20}}  
            ListHeaderComponent= { <Header title={'Ready For Pickup'}/>}
             data={ordersList.filter(el=> el.status === 'Ready for pickup')}
            renderItem={renderItem}
            />
            <FlatList 
            style={{flex: 1, marginTop:20}}
            ListHeaderComponent= { <Header title={'Being Prepared'}/>}
            data={ordersList.filter(el=> el.status === 'Being prepared')}
            renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
    }
  });
  
export default OrdersListScreen
