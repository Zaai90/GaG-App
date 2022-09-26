import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { RootStackParamList } from '../navigation/types';

type Props =
    {
        navigator: NativeStackScreenProps<RootStackParamList, "Home">;
        title: string
        name: keyof RootStackParamList
        id?: string;
    }

const GotoButton = ({ navigator, name, id = "", title }: Props) => {
    return (
        <Button title={title} onPress={() => { name === "Edit" ? navigator.navigation.navigate("Edit", { id }) : navigator.navigation.navigate(name) }} />
    )
}

export default GotoButton

const styles = StyleSheet.create({})