import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Workout = () => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E4E2',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Workout;