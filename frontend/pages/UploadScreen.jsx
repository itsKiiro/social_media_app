import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import profileImage from "../assets/profileImage.png";
import * as ImagePicker from 'expo-image-picker';


const UploadScreen = () => {
    const [pickedImage, setPickedImage] = useState("");
    const route = useRoute();
    const user = route.params?.user;
    const [description, setDiscription] = useState("");

    const navigation = useNavigation();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0.0001,
        });
      
        if (!result.canceled) {
            setPickedImage(result.assets[0].uri);
        }
    };

    const handleUpload = () => {
        if (!pickedImage) {
            alert("Select Image first.");
            return;
        }
    
        const data = new FormData();
        data.append('post_picture', {
            uri: pickedImage,
            type: 'image/jpeg',
            name: 'postPic.jpg',
        });

        fetch(`http://192.168.1.105:8080/upload/post/${user.username}/${description}`, {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: data
        }).then((response) => {
            if (response.ok) {
                alert("Post uploaded");
                navigation.replace("Home");
                return response.text();
            } else {
                alert("error while uploading");
            }
        }).catch((error) => {
            console.error("Upload failed", error);
            alert("Upload failed");
        });
    }

    return (
        <View style={styles.uploadContainer}>
            <View style={styles.uploadNav}>
                <TouchableOpacity onPress={() => navigation.replace("Home")}>
                    <Icon style={styles.icon} name="chevron-back-outline" size={34} color="#4F8EF7" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleUpload}>
                    <Text style={{ color: "#fff", fontWeight: "700" }}>Upload</Text>  
                </TouchableOpacity>                
            </View>
            <View style={styles.imageContainer}>
                <View style={styles.image}>
                    {pickedImage ? (
                        <TouchableOpacity style={{ width: "100%" }} onPress={pickImage}>
                            <Image 
                                source={pickedImage ? { uri: pickedImage } : "Hallo"}
                                style={{ width: "100%", height: "100%", borderRadius: 10 }}
                            />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={pickImage}>
                            <Icon style={styles.icon} name="cloud-upload-outline" size={70} color="#4F8EF7" /> 
                        </TouchableOpacity>
                    )}
                  
                </View>
                <View style={styles.description}>
                    <Image 
                        source={user.profile_picture ? { uri: `http://192.168.1.105:8080/user/${user.username}/profile-picture` } : profileImage}
                        style={{ width: 40, height: 40, borderRadius: 100 }}
                    />
                    <View style={{ marginLeft: "7%", paddingRight: "14%", paddingTop: "4%", paddingBottom: "4%" }}>
                       <Text style={{ fontWeight: "500" }}>Description:</Text>
                       <Text>{description}</Text> 
                    </View>
                </View>
            </View>

            <View style={styles.inputContainer}>
                <View style={{ gap: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "400" }}>Description:</Text>
                    <TextInput 
                        placeholder="Type here..."
                        onChangeText={(text) => setDiscription(text)}
                        value={description}
                        style={{ padding: "1%" }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    uploadContainer: {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%"
    },
    uploadNav: {
        backgroundColor: "#000033",
        height: "17%",
        width: "100%",
        padding: "10%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    imageContainer: {
        width: "90%",
        height: "35%",
        position: "absolute",
        backgroundColor: "#fff",
        alignSelf: "center",
        marginTop: "27%",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 5, height: -14 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    description: {
        borderTopColor: "#1a1a1a",
        display: "flex",
        flexDirection: "row",
        height: "20%",
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
        height: "80%",
        justifyContent: "center",
        width: "100%",
        flex: 1
    },
    inputContainer: {
        marginTop: "70%",
        padding: "7%",
        display: "flex",
        flexDirection: "column",
    }

})


export default UploadScreen;