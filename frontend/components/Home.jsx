import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import CardItem from "./CardItem";


const Home = ({ user }) => {

    const [allPosts, setAllPosts] = useState([]);


    useEffect(() => {
        fetch(`http://192.168.1.105:8080/upload/get/all/posts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => res.json())
        .then((data) => {
            setAllPosts(data);
        })
    }, [])


    return (
        <View style={styles.homeContainer}>
            <ScrollView style={styles.feedContainer}>
                {allPosts.map((post, i) => (
                    <CardItem key={i} user={post.user} post={post} />
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {

    },
    feedContainer: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "80%"
    }
})


export default Home;