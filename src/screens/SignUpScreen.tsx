import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

const backgroundImage = require('../assets/register.jpg');

const SignUpScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <BlurView style={styles.absolute} blurType="prominent" blurAmount={1} />
            <View style={styles.container}>
                <LinearGradient
                    colors={['rgb(58,66,66)', 'rgb(73,70,69)']}
                    style={styles.card}
                >
                    <Text style={styles.title}>Sign Up</Text>
                    <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#ccc" />
                    <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#ccc" secureTextEntry={true} />
                    <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="#ccc" secureTextEntry={true} />
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    <View style={styles.insideContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.linkText}>Login</Text>
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
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
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
    },
});

export default SignUpScreen;
