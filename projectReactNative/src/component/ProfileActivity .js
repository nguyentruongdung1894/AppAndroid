import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

class ProfileActivity extends React.Component {
    static navigationOptions = {
        //tieu de
        title: "Profile",
        headerStyle: {
            backgroundColor: "#03A9F4",
        },
        //mau chu
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Profile Activity</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate("Home")}
                />

                <Text style={styles.headerText}>Create a New Profile Screen </Text>
                <Button
                    title="Go to new Profile"
                    onPress={() => this.props.navigation.push("Profile")}
                />

                <Text style={styles.headerText}> Go Back </Text>
                <Button
                    title="Go Back"
                    onPress={() => this.props.navigation.goBack()}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    }
});

export default ProfileActivity;