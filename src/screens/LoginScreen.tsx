import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const backgroundImage = require('../assets/login.jpg');


const LoginScreen = () => {
    return (
        // <View style={styles.outer}>
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}> 
            <View style={styles.container}>
                <LinearGradient
                    colors={['rgb(58,66,66)', 'rgb(73,70,69)']}
                    style={styles.card}
                >
                    <Text style={styles.title}>Login to FitApex</Text>
                    <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#ccc" />
                    <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#ccc" secureTextEntry={true} />
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.insideContainer}>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={styles.linkText}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={styles.linkText}>Reset password</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
   
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    card: {
        width: '80%',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        width: '100%',
    },
    button: {
        backgroundColor: 'rgb(30,35,35)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    insideContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    linkText: {
        color: 'white',
        marginHorizontal: 5,
    }
});

export default LoginScreen;
