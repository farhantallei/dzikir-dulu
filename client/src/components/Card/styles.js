import { StyleSheet } from 'react-native';

export default StyleSheet.create(props => ({
    card: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 24,
        paddingVertical: 36,
        borderRadius: 30,
        backgroundColor: '#f2f2f7',
    },
    cardContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardLabel: {
        color: '#8E8E93',
        fontSize: 18,
        fontWeight: '500',
    },
    cardArabic: {
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 16,
        writingDirection: 'rtl',
    },
}));
