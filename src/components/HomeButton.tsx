import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text } from 'react-native';

const HomeButton = () => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate("Home")}>
            <Text>Home</Text>
        </Pressable>
    )
}
export default HomeButton;