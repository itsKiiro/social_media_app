import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Social from "../components/Social";
import Settings from "../components/Settings";


const HomeScreen = () => {

    const [activeTab, setActiveTab] = useState('Home');

    const handleHomeClick = () => setActiveTab('Home');
    const handleSocialClick = () => setActiveTab('Social');
    const handleSettingsClick = () => setActiveTab('Settings');

    return (
        
        <View style={styles.homeContainer}>
            <Navbar activeTab={activeTab} onHomeClick={handleHomeClick} onSocialClick={handleSocialClick} onSettingsClick={handleSettingsClick} />        
            <View style={styles.blackLayer}>
                <View style={styles.topLayer}>
                    {activeTab === "Home" && (
                        <Home />
                    )}
                    {activeTab === "Social" && (
                        <Social />
                    )}
                    {activeTab === "Settings" && (
                        <Settings />
                    )}
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