import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Navbar from "../components/Navbar";


const HomeScreen = () => {

    return (
        
        <View style={styles.homeContainer}>
            <Navbar />        
            <View style={styles.blackLayer}>
                <View style={styles.topLayer}>
                    <Text>Hello world</Text>
                    
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: "#fff",
        height: "100%",
        width: "100%"
    },
    blackLayer: {
        backgroundColor: "#000033"
    },
    topLayer: {
        backgroundColor: "#fff",
        borderTopRightRadius: 100,
        height: "100%",
        padding: 40
    }
})


export default HomeScreen;