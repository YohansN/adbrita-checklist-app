import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    textInputContainer:{
        width: "75%",
        alignSelf: "center",
        marginVertical: 6
        //backgroundColor: "red"
    },
    label:{
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14,
        paddingBottom: 4,
        textTransform: "uppercase", 
    },
    textInput:{
        width: "100%",
        height: 40,
        alignSelf: "center",
        backgroundColor: "#F3F3F3",
        borderRadius: 4,
        padding: 8
    }
})