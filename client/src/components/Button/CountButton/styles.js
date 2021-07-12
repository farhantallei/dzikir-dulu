import { StyleSheet } from "react-native";


export default StyleSheet.create(props => ({
    button: {
        backgroundColor: props.backgroundColor,
        width: props.width,
        height: props.width,
        borderBottomLeftRadius: '50%',
        borderBottomRightRadius: '50%',
        justifyContent: 'center',
    },
    buttonPress: {
        borderTopLeftRadius: '50%',
        borderTopRightRadius: '50%',
    },
    height: {
        backgroundColor: "rgba(0, 0, 0, .1)",
        borderRadius: '50%',
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
        borderRadius: '50%',
    },
    label: {
        color: props.color,
        fontWeight: props.fontWeight,
        fontSize: props.fontSize,
        textTransform: props.textTransform,
    },
}));