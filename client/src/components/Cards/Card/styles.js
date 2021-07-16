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
        paddingTop: 12,
        paddingBottom: 16,
        borderRadius: 30,
        backgroundColor: props.backgroundColor,
    },
    noTitleCard: {
        paddingTop: 24,
        paddingBottom: 24,
    },
    arabicContainer: {
        flex: 1,
        justifyContent:'center',
    },
    arabic: {
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 40,
        textAlign: 'center',
        writingDirection: 'rtl',
    },
    singleCard: {
        marginTop: 12,
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
    small: {
        fontSize: 19,
        lineHeight: 19*1.666666666666667,
    },
    medium: {
        fontSize: 24,
        lineHeight: 40,
    },
    big: {
        fontSize: 30,
        lineHeight: 30*1.666666666666667,
    },
}));
