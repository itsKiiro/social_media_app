import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import startImage from "../assets/startImage.png";


const StartScreen = () => {

    const navigation = useNavigation();


    return (
        <View style={styles.startContainer}>
            <View style={styles.topLayer}>
                <View style={styles.topContainer}>
                    <Image 
                        source={startImage}
                        style={styles.startImage}
                    />
                </View>
            </View>
            <View style={styles.bottomLayer}>
                <View style={styles.bottomContainer}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Let's connect{"\n"}with each other</Text>
                            <Text style={styles.infoText}>Dies ist ein Beispieltext{"\n"}dies dient nur als beispiel</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.startButton} onPress={() => navigation.replace('Login')}>
                                <Text style={styles.buttonText}>Let's Start</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    startContainer: {
        flex: 1,
        backgroundColor: "#fff"
    },
    topLayer: {
        backgroundColor: "#000033",
        flex: 1,
        height: "50%",
        width: "100%"
    },
    topContainer: {
        flex: 1,
        height: "50%",
        width: "100%",
        backgroundColor: "#fff",
        borderBottomRightRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    bottomLayer: {
        flex: 1,
        backgroundColor: "#fff",
        width: "100%",
        height: "50%"
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: "#000033",
        borderTopLeftRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {

    },
    header: {
        gap: 27
    },
    headerText: {
        fontSize: 27,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center"
    },
    infoText: {
        color: "#fff",
        textAlign: "center"
    },
    buttonContainer: {
        marginTop: 17
    },
    buttonText: {
        color: "#fff",
        textAlign: "center"
    },
    startButton: {
        backgroundColor: "#ff7043",
        padding: 10,
        borderRadius: 10
    },
    startImage:{
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
        maxWidth: 300,
        maxHeight: 300,
    }

})


export default StartScreen;