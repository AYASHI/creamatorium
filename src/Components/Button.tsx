import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Label from './Label';
interface IProps {
    onPress: ()=>void,
    title: string,
    enabled?: boolean,
    color?: string 
}

const Button = (props: IProps) => {
    const onPress =() => {
        if (props.enabled) {props.onPress()}
    }
    return (
        <TouchableOpacity onPress={onPress} style= {[styles.container, {backgroundColor: props.color  || '#00CCBB' }]}>
            <Label text={props.title} color={'white'}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 44,
        width: 250,
        justifyContent:'center',
        alignItems: 'center',
        paddingStart: 16,
        paddingEnd: 16,
        borderRadius: 5
    }
})

export default Button
