import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        marginVertical: 10
    },
    itemLabel:{
        textTransform: "uppercase", 
        fontSize: 16,
        marginBottom: 8
    },
    optionsWrapper:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    optionsContainer:{
        flexDirection: "row",
        marginHorizontal: 12,
        alignItems: "center",
    },
    outterCircle:{
        width: 25,
        height: 25,
        borderRadius: 25,
        backgroundColor: "#F3F3F3" ,
        borderColor: "#F3F3F3",
        justifyContent: "center",
        alignItems: "center"
    },
    innerCircle:{
        width: 15,
        height: 15,
        borderRadius: 25,
        backgroundColor: "#0772B7",
    },
    optionText:{
        textTransform: "uppercase", 
        fontWeight: "500",
        fontSize: 18,
        paddingHorizontal: 10
    }
})