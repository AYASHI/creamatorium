import React, {useState, useEffect} from 'react'
import { View, StyleSheet, Image , TouchableOpacity, Modal} from 'react-native'
import Button from '../Components/Button'
import api from '../Api/api'
import {NEW_ORDER} from '../Api/constants'
import Label from '../Components/Label'
import { ScrollView } from 'react-native-gesture-handler'
const NewOrderScreen = () => {
    const [base, setBase] = useState([])
    const [nuts, setNuts] = useState([])
    const [sauces, setSauces] = useState([])
    const [fruits, setFruits] = useState([])
    const [backedYuminess, setBackedYuminess] = useState([])
    const [enabled, setEnabled] = useState()

    const [state, setState] = useState(
        {ingredients: {
            base,
            nuts,
            fruits,
        }
    }
    )

    const createNewOrder = () => {
        console.log('base',base, base.length)
        if (base.length > 0) {
            console.log('New Order')
        api.post(NEW_ORDER, state).then(response=> {
            console.log(response.data)
            setOrderNumber(response.data)
        }).catch(error=> {
            console.log(error)
        })
    }
    }

    const arrowImage = require('../Assets/Images/arrow.png')
    const checkImage = require('../Assets/Images/check.png')
    const iceCreamImage = require('../Assets/Images/iceCream.jpg')

    const CheckedItem = (props)=> {
        const [checked, setChecked] = useState(false)
        useEffect(() => {
            props.onPress(props.text, checked)
        }, [checked])

        const  onPress = () => {
            const temp = !checked
            setChecked(temp)
        }
        return <TouchableOpacity
        onPress={onPress}
         style={{flex: 1, flexDirection:'row', alignItems:'center', height: 30}}>
            <View style={[styles.imageContainer, {backgroundColor: checked ? '#00CCBB': 'white'}]}>
                <Image source={checked ? checkImage : null}style={{width: 10, height: 10, tintColor: 'white'}}/>
            </View>
            <Label text={props.text}/>
        </TouchableOpacity>
    }

    const CategoryHeaderNuts= (props) => {
        const [expanded, setExpanded] = useState(props.expanded || false)
        return (
        <View style={{width: '100%'}}>
            <TouchableOpacity style={styles.categoryHeader} onPress={()=> setExpanded(!expanded)}>
                <Label text={props.title} bold={true}/>
                <Image source={arrowImage} />
            </TouchableOpacity>
            {expanded &&
             <View style={{padding: 10}}>
                 <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                     <CheckedItem text= {'Nut1'}
                      onPress={
                         (text, checked)=> {
                            let newNuts = nuts;
                             if(checked){
                                newNuts.push(text)
                             } else {
                                 const index = newNuts.indexOf(text)
                                 if (index != -1) {
                                     newNuts.splice(index, 1)
                            }
                        }
                            setNuts(newNuts) 
                        }
                        }
                         />
                     <CheckedItem text= {'Nut2'} 
                     onPress={
                        (text, checked)=> {
                           let newNuts = nuts;
                            if(checked){
                               newNuts.push(text)
                            } else {
                                const index = newNuts.indexOf(text)
                                if (index != -1) {
                                    newNuts.splice(index, 1)
                           }
                       }
                           setNuts(newNuts) 
                       }
                       }
                       />
                 </View>
                 <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                     <CheckedItem text= {'Nut3'}
                    onPress={
                        (text, checked)=> {
                           let newNuts = nuts;
                            if(checked){
                               newNuts.push(text)
                            } else {
                                const index = newNuts.indexOf(text)
                                if (index != -1) {
                                    newNuts.splice(index, 1)
                           }
                       }
                           setNuts(newNuts) 
                       }
                       }
                       />
                     <CheckedItem text= {'Nut4'}
                      onPress={
                        (text, checked)=> {
                           let newNuts = nuts;
                            if(checked){
                               newNuts.push(text)
                            } else {
                                const index = newNuts.indexOf(text)
                                if (index != -1) {
                                    newNuts.splice(index, 1)
                           }
                       }
                           setNuts(newNuts) 
                       }
                       }
                       />
                 </View>
                 <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                     <CheckedItem text= {'Nut5'}
                      onPress={
                        (text, checked)=> {
                           let newNuts = nuts;
                            if(checked){
                               newNuts.push(text)
                            } else {
                                const index = newNuts.indexOf(text)
                                if (index != -1) {
                                    newNuts.splice(index, 1)
                           }
                       }
                           setNuts(newNuts) 
                       }
                       }
                       />
                 </View>
            </View>
            }
            </View>
        )
    }

    const CategoryHeaderBase = (props) => {
        const [expanded, setExpanded] = useState(props.expanded || false)
        return (
        <View style={{width: '100%'}}>
            <TouchableOpacity style={styles.categoryHeader} onPress={()=> setExpanded(!expanded)}>
                <Label text={props.title} bold={true}/>
                <Image source={arrowImage} />
            </TouchableOpacity>
            {expanded &&
             <View style={{padding: 10}}>
                 <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                     <CheckedItem text= {'Vanela'}
                      onPress={
                         (text, checked)=> {
                            let newNuts = base;
                             if(checked){
                                newNuts.push(text)
                             } else {
                                 const index = newNuts.indexOf(text)
                                 if (index != -1) {
                                     newNuts.splice(index, 1)
                            }
                        }
                            setBase(newNuts) 
                        }
                        }
                         />
                     <CheckedItem text= {'Strwberry'} 
                     onPress={
                        (text, checked)=> {
                           let newNuts = base;
                            if(checked){
                               newNuts.push(text)
                            } else {
                                const index = newNuts.indexOf(text)
                                if (index != -1) {
                                    newNuts.splice(index, 1)
                           }
                       }
                       setBase(newNuts) 
                       }
                       }
                       />
                 </View>
                 <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                     <CheckedItem text= {'Choclate'}
                    onPress={
                        (text, checked)=> {
                           let newNuts = base;
                            if(checked){
                               newNuts.push(text)
                            } else {
                                const index = newNuts.indexOf(text)
                                if (index != -1) {
                                    newNuts.splice(index, 1)
                           }
                       }
                       setBase(newNuts) 
                       }
                       }
                       />
                     <CheckedItem text= {'Lemon'}
                      onPress={
                        (text, checked)=> {
                           let newNuts = base;
                            if(checked){
                               newNuts.push(text)
                            } else {
                                const index = newNuts.indexOf(text)
                                if (index != -1) {
                                    newNuts.splice(index, 1)
                           }
                       }
                       setBase(newNuts) 
                       }
                       }
                       />
                 </View>
                 <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                     <CheckedItem text= {'Coffe'}
                      onPress={
                        (text, checked)=> {
                           let newNuts = base;
                            if(checked){
                               newNuts.push(text)
                            } else {
                                const index = newNuts.indexOf(text)
                                if (index != -1) {
                                    newNuts.splice(index, 1)
                           }
                       }
                       setBase(newNuts) 
                       }
                       }
                       />
                 </View>
                 <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                     <CheckedItem text= {'Mango'}
                     onPress={
                        (text, checked)=> {
                           let newNuts = base;
                            if(checked){
                               newNuts.push(text)
                            } else {
                                const index = newNuts.indexOf(text)
                                if (index != -1) {
                                    newNuts.splice(index, 1)
                           }
                       }
                       setBase(newNuts) 
                       }
                       }
                       />
                 </View>
                
            </View>
            }
            </View>
        )
    }

    const CategoryHeaderFruits = (props) => {
        const [expanded, setExpanded] = useState(props.expanded || false)
        return (
        <View style={{width: '100%'}}>
            <TouchableOpacity style={styles.categoryHeader} onPress={()=> setExpanded(!expanded)}>
                <Label text={props.title} bold={true}/>
                <Image source={arrowImage} />
            </TouchableOpacity>
            {expanded &&
             <View style={{padding: 10}}>
                 <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                     <CheckedItem text= {'Orange'}
                      onPress={
                         (text, checked)=> {
                            let newNuts = fruits;
                             if(checked){
                                newNuts.push(text)
                             } else {
                                 const index = newNuts.indexOf(text)
                                 if (index != -1) {
                                     newNuts.splice(index, 1)
                            }
                        }
                        setFruits(newNuts) 
                        }
                        }
                         />
                     <CheckedItem text= {'Strwberry'} 
                     onPress={
                        (text, checked)=> {
                           let newNuts = fruits;
                            if(checked){
                               newNuts.push(text)
                            } else {
                                const index = newNuts.indexOf(text)
                                if (index != -1) {
                                    newNuts.splice(index, 1)
                           }
                       }
                       setFruits(newNuts) 
                       }
                       }
                       />
                 </View>
                 <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                     <CheckedItem text= {'Banana'}
                    onPress={
                        (text, checked)=> {
                           let newNuts = fruits;
                            if(checked){
                               newNuts.push(text)
                            } else {
                                const index = newNuts.indexOf(text)
                                if (index != -1) {
                                    newNuts.splice(index, 1)
                           }
                       }
                       setFruits(newNuts) 
                       }
                       }
                       />
                 </View>
            </View>
            }
            </View>
        )
    }
    const [orderNumber, setOrderNumber] = useState('')
    return (
        <ScrollView style={{flex: 1}}>
            <Modal visible={orderNumber !== ''} >
                <TouchableOpacity 
                style={{flex: 1, justifyContent:'center', alignItems:'center'}}
                onPress={()=> setOrderNumber('')}>
                <Label text={'Thank you for ordring'} fontSize={30}/>
                    <Label text={'Order #' + orderNumber} fontSize={30} color={'#00CCBB'} bold={true}/>
                </TouchableOpacity>
            </Modal>

            <View style={{overflow:'hidden',justifyContent:'center', alignItems:'center', width:'100%', height: 150}}>
                <Image source={iceCreamImage} resizeMode= 'contain'/>
                <Label text={''} bold={true} fontSize={20}/>
            </View>
            
            <View style={styles.container}>
            <CategoryHeaderBase title={'Base (required)'} expanded= {true}/>
            <CategoryHeaderNuts title={'Nuts'}/>
            <CategoryHeaderFruits title={'Fruits'}/>
            <View style={{height: 150}}/>
            <Button title={'Submit order'} onPress={createNewOrder} enabled={true}/>

        </View>
        </ScrollView>
        
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingBottom:  30,
        flex: 1,
        alignItems:'flex-end'
        },
    categoryHeader: {
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        height : 44,
        borderColor: '#d9d9d9',
        borderRadius: 4,
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f2f2f2'
    },
    imageContainer: {
        marginEnd: 8,
        borderColor: '#9a9a9a',
        borderWidth: 0.5,
        padding: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        }
})

export default NewOrderScreen
