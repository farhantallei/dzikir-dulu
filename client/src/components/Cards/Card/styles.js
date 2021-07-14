import { StyleSheet } from 'react-native';

export default StyleSheet.create(props => ({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    card: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 16,
        borderRadius: 30,
        backgroundColor: '#f2f2f7',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    arabicContainer: {
        flex: 1,
        justifyContent:'center',
    },
    titleContainer: {
        paddingTop: 12,
    },
    arabic: {
        fontWeight: '500',
        textAlign: 'center',
        writingDirection: 'rtl',
    },
    title: {
        color: '#636366',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
    },
    source: {
        color: '#8E8E93',
        fontSize: 16,
        marginTop: 12,
    },
    loadingContainer: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        justifyContent: 'center',
    },
}));
