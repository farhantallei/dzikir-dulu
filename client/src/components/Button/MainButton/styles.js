import { StyleSheet } from 'react-native';

export default StyleSheet.create(props => ({
    container: {
      flex: props.flex,
      marginTop: props.marginTop,
      marginBottom: props.marginBottom,
    },
    button: {
      backgroundColor: props.backgroundColor,
      width: "100%",
      height: props.height,
      borderRadius: props.radius,
      justifyContent: "center",
    },
    height: {
      backgroundColor: "rgba(0, 0, 0, .1)",
      borderRadius: props.radius,
      marginTop: -props.length,
      paddingBottom: props.length,
    },
    heightPress: {
      marginTop: 0,
      paddingBottom: 0,
    },
    inner: {
      height: "100%",
      backgroundColor: props.backgroundColor,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: props.radius,
    },
    innerPress: {
      borderRadius: props.radius,
    },
    label: {
      color: props.color,
      fontWeight: props.fontWeight,
      fontSize: props.fontSize,
      textTransform: props.textTransform,
    },
}));