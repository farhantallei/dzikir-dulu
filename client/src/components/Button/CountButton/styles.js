import { StyleSheet } from "react-native";


export default StyleSheet.create(props => ({
    button: {
        backgroundColor: props.backgroundColor,
        width: props.width,
        height: props.width,
        borderBottomLeftRadius: props.width/2,
        borderBottomRightRadius: props.width/2,
        justifyContent: 'center',
    },
    buttonPress: {
        borderTopLeftRadius: props.width/2,
        borderTopRightRadius: props.width/2,
    },
    height: {
        backgroundColor: "rgba(0, 0, 0, .1)",
        borderRadius: props.width/2,
        marginTop: -props.length,
        paddingBottom: props.length,
    },
    heightPress: {
        marginTop: 0,
        paddingBottom: 0,
    },
    inner: {
        height: '100%',
        backgroundColor: props.backgroundColor,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: props.width/2,
    },
    label: {
        color: props.color,
        fontWeight: props.fontWeight,
        fontSize: props.fontSize,
        textTransform: props.textTransform,
    },
}));