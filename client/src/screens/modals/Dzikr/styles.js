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
        marginBottom: 18,
    },
    footer: {
        height: 150,
        justifyContent: 'flex-end',
    },

    /*==============================================================================*/
    /* Text styling.
    /*==============================================================================*/
    pNor: {
        fontSize: 18,
    },
    pMed: {
        fontSize: 18,
        fontWeight: '500',
    },
    h1Sem: {
        fontSize: 24,
        fontWeight: '600',
    },
    h2Med: {
        fontSize: 20,
        fontWeight: '500',
    },

    /*==============================================================================*/
    /* Section.
    /*==============================================================================*/
    // Header detail
    detail: {
        flexDirection: 'row',
        height: 54,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    leftDetail: {
        width: 70,
        justifyContent: 'center',
    },
    centerDetail: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rightDetail: {
        width: 70,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },

    /*==============================================================================*/
    /* Footer.
    /*==============================================================================*/
    // Footer Container
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    moreActionContainer: {
        flexDirection: 'row',
        marginBottom: 15,
        justifyContent: 'space-between',
    },
    // Footer Button
    prevNextAction: {
        flex: .7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerAction: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subtractAction: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: 35,
    },
    resetAction: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    /*==============================================================================*/
    /* Header.
    /*==============================================================================*/
    centerLoadingContainer: {
        paddingHorizontal: 12,
    },
    rightLoadingContainer: {
        paddingLeft: 12,
        alignItems: 'flex-end',
    },
    loadingBox: {
        flex: 1,
        width: '100%',
        backgroundColor: props.backgroundColor,
        borderRadius: 15,
    },
    // Close Button
    closeButton: {
        marginRight: 12,
    },
}));
