import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import profileImage from "../assets/profileImage.png";
import * as ImagePicker from 'expo-image-picker';


const Settings = ({ user }) => {

    const [profilePicture, setProfilePicture] = useState("");

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0.0001,
        });
      
        if (!result.canceled) {
            setProfilePicture(result.assets[0].uri);
        }
    };

    const uploadImage = () => {
        if (!profilePicture) {
            alert("Select Image by clicking on the Image above.");
            return;
        }
    
        const data = new FormData();
        data.append('profile_picture', {
            uri: profilePicture,
            type: 'image/jpeg',
            name: 'profilePic.jpg',
        });
    
        fetch(`http://192.168.1.105:8080/user/upload/${user.username}`, {
            method: 'POST',
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: data,
        }).then((response) => {
            if (response.ok) {
                alert("picture uploaded");
                return response.text();
            } else {
                alert("error while uploading");
            }
        }).catch((error) => {
            console.error("Upload failed", error);
            alert("Upload failed");
        });
    };

    return (
        <View style={styles.settingsContainer}>
            <View style={styles.profileContainer}>
                <View style={styles.profileInfoContainer}>
                    <Text style={styles.welcomeText}>Welcome, <Text style={{ color: "#000033", fontWeight: "bold" }}>{user.username}</Text>!</Text>
                </View>
                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={pickImage}>
                        <Image 
                            source={profilePicture ? { uri: profilePicture } : (user.profile_picture ? { uri: `http://192.168.1.105:8080/user/${user.username}/profile-picture` } : profileImage)}
                            style={{ width: 100, height: 100, borderRadius: 100 }}     
                        />    

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
                        <Text style={{ color: "#000033", fontWeight: "400" }}>Upload Image</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    settingsContainer: {

    },
    profileContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    profileInfoContainer: {

    },
    welcomeText: {
        fontSize: 17,
        fontWeight: "400"
    },
    imageContainer: {
        gap: 20
    },
    uploadButton: {
        backgroundColor: "#89CFF0",
        padding: 7,
        borderRadius: 10
    }

})


export default Settings;