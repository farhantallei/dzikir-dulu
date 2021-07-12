import { StyleSheet } from 'react-native';

export default StyleSheet.create(props => ({
    bar: {
        flex: 1,
        flexDirection: props.direction,
        height: props.height,
        borderRadius: props.borderRadius,
        backgroundColor: props.backgroundColor,
    },
    progress: {
        flex: props.progress,
        borderRadius: props.borderRadius,
        backgroundColor: props.color,
    }
}));
