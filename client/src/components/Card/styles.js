import { StyleSheet } from 'react-native';

export default StyleSheet.create(props => ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        paddingHorizontal: 24,
        paddingVertical: 36,
        borderRadius: 30,
        backgroundColor: '#f2f2f7',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    source: {
        color: '#8E8E93',
        fontSize: 18,
        fontWeight: '500',
    },
    arabic: {
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 16,
        writingDirection: 'rtl',
    },
    loadingContainer: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        justifyContent: 'center',
    },
}));
