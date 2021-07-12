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
        height: 40,
        flexDirection: 'row',
    },
    section: {
        flex: 1,
        marginBottom: 24,
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

    // Dzikr card
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 24,
        paddingVertical: 36,
        borderRadius: 30,
        backgroundColor: '#f2f2f7',
    },
    cardLabel: {
        color: '#8E8E93',
        fontSize: 18,
        fontWeight: '500',
    },
    cardArabic: {
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        lineHeight: 40,
        marginBottom: 16,
        writingDirection: 'rtl',
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
}));
