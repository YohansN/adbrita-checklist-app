import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    title:{
        fontSize: 24,
        color: "#fff",
        marginTop: 20,
        fontWeight: "bold"
    },
    subtitle:{
        marginBottom: 20,
        color: "#fff",
        fontWeight: "300"
    },
    textInfo:{
        flex: 2,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#02407C",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        paddingVertical: 50
    },
    radioInfo:{
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    previousSectionButton:{
        width: "85%",
        alignItems: "flex-start",
        marginBottom: 10,
    },
    nextSectionButton:{
        width: "85%",
        alignItems: "flex-end",
        marginBottom: 10,
    },
    sectionButtonsContainer:{
        width: "85%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    }
})