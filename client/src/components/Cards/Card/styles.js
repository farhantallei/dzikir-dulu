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
        backgroundColor: props.backgroundColor,
    },
    arabicContainer: {
        flex: 1,
        justifyContent:'center',
    },
    titleContainer: {
        paddingTop: 12,
    },
    arabic: {
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 40,
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
        flex: 1,
        color: '#8E8E93',
        fontSize: 16,
        marginTop: 12,
        textAlign: 'center',
    },
    footer: {
        paddingHorizontal: 24,
        minHeight: 51,
    },
}));
