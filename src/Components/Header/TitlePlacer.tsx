import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

// const navigation = useNavigation();

const Title = () => {
    const route = useRoute();
    return (
        <View style={styles.PlaceTitle}>
            <Text>{route.name}</Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    PlaceTitle: {
        width: 200,
        height: 45,
        paddingLeft: 75,
        paddingTop: 15,
    },
    text: {
        color: "black",
        fontWeight: "bold",
        fontSize: 36,
        fontVariant_caps: "small-caps",
    },
})