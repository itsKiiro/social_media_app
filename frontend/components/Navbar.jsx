import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const Navbar = () => {



    return (
        <View style={styles.navContainer}>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <Icon style={styles.icon} name="camera-outline" size={27} color="#4F8EF7" />
                    <TextInput 
                        placeholder="Type here..."
                        placeholderTextColor={"#fff"}
                        style={{ color: "#fff" }}
                    />
                    <Icon style={styles.icon} name="search-outline" size={27} color="#4F8EF7" />
                </View>
                <View style={styles.navLinkContainer}>
                    <View>
                        <Text style={styles.linkText}>Home</Text>
                    </View>
                    <View>
                        <Text style={styles.linkText}>Social</Text>
                    </View>
                    <View>
                        <Text style={styles.linkText}>Settings</Text>
                    </View>
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
    }
})


export default Navbar;