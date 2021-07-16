import { StyleSheet } from 'react-native';

export default StyleSheet.create(props => ({
    bar: {
        flex: 1,
        flexDirection: props.direction,
        height: props.height,
        backgroundColor: props.backgroundColor,
        borderRadius: props.borderRadius,
    },
    progress: {
        flex: props.progress,
        minWidth: props.height,
        backgroundColor: props.color,
        borderRadius: props.borderRadius,
        opacity: props.opacity,
    }
}));
