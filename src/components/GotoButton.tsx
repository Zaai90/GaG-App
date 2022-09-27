import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { OmitGotoStack, RootStackParamList } from '../navigation/types';


type Props =
    {
        navigator: NativeStackScreenProps<RootStackParamList, keyof OmitGotoStack>;
        to: keyof OmitGotoStack;
        title: string
    }

const GotoButton = ({ navigator, title, to }: Props) => {
    return (
        <Button title={title} onPress={() => { navigator.navigation.navigate(to) }} />
    )
}

export default GotoButton

const styles = StyleSheet.create({})