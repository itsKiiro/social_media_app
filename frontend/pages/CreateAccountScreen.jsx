import React, { useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CreateAccountScreen = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    const navigaton = useNavigation();

    const handleSignUp = () => {

        if (password !== confirmedPassword) {
            alert("Confirmed Password must equal password!");
            return;
        }

        const bodyData = {
            username: username,
            password: password,
            email: email
        }

        fetch("http://192.168.1.105:8080/user/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyData)
        }).then((res) => {
            if (res.ok) {
                navigaton.navigate("Login")
            }
        })
    }

    return (
        <View style={styles.signUpContainer}>
            <View style={styles.topContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Sign Up</Text>
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
                            <Icon style={styles.icon} name="mail-outline" size={20} color="#4F8EF7" />
                            <TextInput 
                                style={styles.input}
                                onChangeText={text => setEmail(text)}
                                value={email}
                                placeholder="Email"
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
                        <View style={styles.inputIconContainer}>
                            <Icon style={styles.icon} name="lock-closed-outline" size={20} color="#4F8EF7" />
                            <TextInput 
                                style={styles.input}
                                onChangeText={text => setConfirmedPassword(text)}
                                value={confirmedPassword}
                                placeholder="Confirm Password"
                                keyboardType="default"
                                secureTextEntry
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.signUpFooterContainer}>
                    <Text style={styles.signUpText}>
                        Already have an account? 
                        <Text onPress={() => navigaton.navigate("Login")} style={{ fontWeight: "800" }}>
                            Sign in
                        </Text>
                    </Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.socialSignUpContainer}>
                    <TouchableOpacity onPress={handleSignUp} style={styles.socialSignUpLink}>
                        <Text style={styles.socialSignUpText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    signUpContainer: {
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
    signUpFooterContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        alignItems :"center",
        marginBottom: 40
    },
    signUpText: {

    },
    socialSignUpLink: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#89CFF0",
        padding: 14,
        alignItems: "center",
        marginLeft: 70,
        marginRight: 70,
        borderRadius: 10,
        justifyContent: "center"
    },
    socialSignUpText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 17
    },
    socialSignUpContainer: {
        marginTop: 70
    }
})


export default CreateAccountScreen;