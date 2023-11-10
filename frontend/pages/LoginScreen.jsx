import React, { useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const LoginScreen = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigaton = useNavigation();

    const handleLogin = () => {
        navigaton.replace("Home")
    }


    return (
        <View style={styles.loginContainer}>
            <View style={styles.topContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Login</Text>
                    <View style={styles.inputs}>
                        <View style={styles.inputIconContainer}>
                            <Icon style={styles.icon} name="person-outline" size={20} color="#4F8EF7" />
                            <TextInput 
                                style={styles.input}
                                onChangeText={text => setUsername(text)}
                                value={username}
                                placeholder="Username"
                                keyboardType="default"
                            />
                        </View>
                        <View style={styles.inputIconContainer}>
                            <Icon style={styles.icon} name="lock-closed-outline" size={20} color="#4F8EF7" />
                            <TextInput 
                                style={styles.input}
                                onChangeText={text => setPassword(text)}
                                value={password}
                                placeholder="Password"
                                keyboardType="default"
                                secureTextEntry
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.loginButton}>
                                <Text style={styles.buttonText}>Forgot password?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.loginButton}>
                                <Text onPress={handleLogin} style={styles.buttonText}>login</Text>
                                <Icon style={styles.icon} name="log-in-outline" size={20} color="#4F8EF7" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.loginFooterContainer}>
                    <Text style={styles.signUpText}>
                        Don't have an account?
                        <Text onPress={() => navigaton.navigate("CreateAccount")} style={{ fontWeight: "800", marginLeft: 4 }}>
                            Sign up
                        </Text>
                    </Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={{ padding: 25 }}>
                    <Text style={{ color: "#fff" }}>Or login via social media</Text>
                </View>
                <View style={styles.socialLoginContainer}>
                    <TouchableOpacity style={styles.socialLoginLink}>
                        <Icon style={styles.icon} name="logo-google" size={20} color="#4F8EF7" />
                        <Text style={styles.socialLoginText}>Connect with google</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#fff"
    },
    topContainer: {
        height: "68%",
        width: "100%",
        backgroundColor: "#fff",
        paddingTop: 140,
        paddingLeft: 70
    },
    bottomContainer: {
        backgroundColor: "#000033",
        width: "100%",
        height: "32%",
        borderTopRightRadius: 100,
    },
    headerText: {
        fontSize: 27,
        fontWeight: "500",
        marginBottom: 20
    },
    inputIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        paddingLeft: 10,
        marginTop: 10,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderRightColor: "#fff"
    },
    icon: {
        marginRight: 10
    },
    input: {
        flex: 1,
        height: 40
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 25
    },
    loginButton: {
        display: "flex",
        flexDirection: "row"
    },
    buttonText: {
        fontSize: 17,
        fontWeight: "400"
    },
    loginFooterContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        alignItems :"center",
        marginBottom: 40
    },
    signUpText: {

    },
    socialLoginLink: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#ff7043",
        padding: 7,
        alignItems: "center",
        marginLeft: 100,
        marginRight: 100,
        borderRadius: 100
    },
    socialLoginText: {
        color: "#fff"
    },
    socialLoginContainer: {
        marginTop: 10
    }
})


export default LoginScreen;