import { StyleSheet } from 'react-native';

export default StyleSheet.create(props => ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 24,
        paddingTop: 12,
        paddingBottom: 16,
        borderRadius: 30,
        backgroundColor: props.backgroundColor,
    },
    noTitleCard: {
        paddingBottom: 12,
    },
    arabicContainer: {
        paddingVertical: 12,
    },
    arabic: {
        fontWeight: '500',
        textAlign: 'center',
        writingDirection: 'rtl',
    },
    title: {
        color: '#636366',
        fontSize: 12,
        lineHeight: 16,
        textAlign: 'center',
    },
    source: {
        color: '#8E8E93',
        fontSize: 12,
        marginTop: 12,
        textAlign: 'center',
    },
    footer: {
        paddingHorizontal: 24,
        minHeight: 51,
    },
}));
