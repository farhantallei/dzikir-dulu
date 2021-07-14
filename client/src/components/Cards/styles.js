import { StyleSheet } from 'react-native';

export default StyleSheet.create(() => ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        marginHorizontal: 24,
        marginVertical: 24,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    section: {
        flex: 1,
        marginBottom: 24,
    },
    footer: {
        height: 150,
        justifyContent: 'flex-end',
    },
}));
