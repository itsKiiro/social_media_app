import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Social from "../components/Social";
import Settings from "../components/Settings";


const HomeScreen = () => {

    const [activeTab, setActiveTab] = useState('Home');
    const [user, setUser] = useState(null);

    const handleHomeClick = () => setActiveTab('Home');
    const handleSocialClick = () => setActiveTab('Social');
    const handleSettingsClick = () => setActiveTab('Settings');

    useEffect(() => {
        const fetchUserData = async () => {
            const token = await AsyncStorage.getItem("jwt");
    
            if (token) {
                try {
                    const response = await fetch(`http://192.168.1.105:8080/user/get/user/info`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `${token}`
                        }
                    });
    
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
    
                    const data = await response.json();
                    setUser(data);
                } catch (error) {
                    console.error('There was a problem with the fetch operation:', error);
                }
            }
        };
    
        fetchUserData();
    }, []);
    

    return (
        
        <View style={styles.homeContainer}>
            <Navbar activeTab={activeTab} onHomeClick={handleHomeClick} onSocialClick={handleSocialClick} onSettingsClick={handleSettingsClick} />        
            <View style={styles.blackLayer}>
                <View style={styles.topLayer}>
                    {activeTab === "Home" && (
                        <Home user={user} />
                    )}
                    {activeTab === "Social" && (
                        <Social user={user} />
                    )}
                    {activeTab === "Settings" && (
                        <Settings user={user} />
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