import React from 'react';
import { Text, StyleSheet } from 'react-native';
interface IProps {
    text: string;
    color?: string;
    bold?: boolean;
    fontSize? : number
}
const Label = (props: IProps) => {
    const styles = StyleSheet.create({
        text: {
            fontSize: props.fontSize,
            fontFamily: props.bold ? 'DroidArabicKufi-Bold' :'DroidArabicKufi',
            color: props.color || '#54585a',
        }
    })
    return (
    <Text style={styles.text}>{props.text}</Text>
    )
}

export default Label
