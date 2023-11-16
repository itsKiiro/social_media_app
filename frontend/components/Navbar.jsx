import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Animated } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const Navbar = ({ user, activeTab, onHomeClick, onSocialClick, onSettingsClick }) => {

    const underlinePosition = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();

    useEffect(() => {
        Animated.spring(underlinePosition, {
            toValue: activeTab === 'Home' ? 0 : activeTab === 'Social' ? 100 : 200,
            useNativeDriver: true,
        }).start();
    }, [activeTab]);

    return (
        <View style={styles.navContainer}>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TouchableOpacity onPress={() => navigation.replace("Upload", { user: user })}>
                        <Icon style={styles.icon} name="camera-outline" size={27} color="#4F8EF7" />
                    </TouchableOpacity>
                    <TextInput 
                        placeholder="Type here..."
                        placeholderTextColor={"#fff"}
                        style={{ color: "#fff" }}
                    />
                    <TouchableOpacity>
                        <Icon style={styles.icon} name="search-outline" size={27} color="#4F8EF7" />
                    </TouchableOpacity>
                </View>
                <View style={styles.navLinkContainer}>
                    <TouchableOpacity onPress={onHomeClick}>
                        <Text style={styles.linkText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onSocialClick}>
                        <Text style={styles.linkText}>Social</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onSettingsClick}>
                        <Text style={styles.linkText}>Settings</Text>
                    </TouchableOpacity>
                    <Animated.View
                        style={[
                            styles.underline,
                            {
                                transform: [{ translateX: underlinePosition }]
                            }
                        ]}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer: {
        backgroundColor: "#fff",
        height: "27%",
        width: "100%",
    },
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#000033",
        borderBottomLeftRadius: 100
    },
    searchContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 40,
        paddingTop: 70
    },
    navLinkContainer: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#89CFF0",
        marginLeft: 40,
        marginRight: 40,
        padding: 17,
        borderRadius: 10,
        justifyContent: "space-around"
    },
    linkText: {
        color: "black",
        fontWeight: "700"
    },
    underline: {
        height: 4,
        width: 70,
        backgroundColor: 'blue',
        position: 'absolute',
        bottom: 10,
        borderRadius: 100 
    },
})


export default Navbar;