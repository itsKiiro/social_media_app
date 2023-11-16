import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import profileImage from "../assets/profileImage.png";


const CardItem = ({ user, post }) => {

    return (
        <View style={styles.imageContainer}>
            <View style={styles.image}>
                    <TouchableOpacity style={{ width: "100%" }}>
                        <Image 
                            source={{ uri: `http://192.168.1.105:8080/upload/get/post-images/${post.id}` }}
                            style={{ width: "100%", height: 300, borderRadius: 10 }}
                        />
                    </TouchableOpacity>            
            </View>
            <View style={styles.description}>
                <Image 
                    source={user.profile_picture ? { uri: `http://192.168.1.105:8080/user/${user.username}/profile-picture` } : profileImage}
                    style={{ width: 40, height: 40, borderRadius: 100 }}
                />
                <View style={{ marginLeft: "7%", paddingRight: "14%", paddingTop: "4%", paddingBottom: "4%" }}>
                    <Text style={{ fontWeight: "500" }}>Description:</Text>
                    <Text>{post.description}</Text> 
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        backgroundColor: "#fff",
        alignSelf: "center",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 5, height: -4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        marginBottom: 40
    },
    description: {
        borderTopColor: "#1a1a1a",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
        paddingLeft: "4%",
        paddingRight: "4%",
        shadowColor: "#000",
        shadowOffset: { width: -7, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    image: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        resizeMode: "cover"
    },
})


export default CardItem;