import { StyleSheet } from 'react-native';

export default StyleSheet.create(props => ({
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
    cardContainer: {
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
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    loadingContainer: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        justifyContent: 'center',
    },
}));
