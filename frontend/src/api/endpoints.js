export const API_ENDPOINTS = {
    USER_CREATION: {
        METHOD: 'POST',
        ROUTE: '/user/signup'
    },
    USER_LOGIN: {
        METHOD: 'POST',
        ROUTE: '/user/login'
    },
    USER_LOGOUT: {
        METHOD: 'GET',
        ROUTE: '/user/logout'
    },
    Q_YNNG_CREATION: {
        METHOD: 'POST',
        ROUTE: '/ynng/'
    },
    Q_YNNG_GET_ALL: {
        METHOD: 'GET',
        ROUTE: '/ynng/all'
    },
    Q_YNNG_GET_ALL_STANDALONE: {
        METHOD: 'GET',
        ROUTE: '/ynng/'
    },
    Q_YNNG_GET_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/ynng/'
    },
    Q_YNNG_GET_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/ynng/ans/'
    },
    Q_YNNG_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/ynng/ans/'
    },
    Q_YNNG_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/ynng/'
    },
    Q_YNNG_DELETE_BY_ID: {
        METHOD: 'DELETE',
        ROUTE: '/ynng/'
    },
    Q_TFNG_CREATION: {
        METHOD: 'POST',
        ROUTE: '/tfng/'
    },
    Q_TFNG_GET_ALL: {
        METHOD: 'GET',
        ROUTE: '/tfng/all'
    },
    Q_TFNG_GET_ALL_STANDALONE: {
        METHOD: 'GET',
        ROUTE: '/tfng/'
    },
    Q_TFNG_GET_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/tfng/'
    },
    Q_TFNG_GET_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/tfng/ans/'
    },
    Q_TFNG_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/tfng/ans/'
    },
    Q_TFNG_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/tfng/'
    },
    Q_TFNG_DELETE_BY_ID: {
        METHOD: 'DELETE',
        ROUTE: '/tfng/'
    },
    Q_TABLE_CREATION: {
        METHOD: 'POST',
        ROUTE: '/tableCompletion/'
    },
    Q_TABLE_GET_ALL: {
        METHOD: 'GET',
        ROUTE: '/tableCompletion/all'
    },
    Q_TABLE_GET_ALL_STANDALONE: {
        METHOD: 'GET',
        ROUTE: '/tableCompletion/'
    },
    Q_TABLE_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/tableCompletion/'
    },
    Q_TABLE_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/tableCompletion/ans/'
    },
    Q_TABLE_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/tableCompletion/ans/'
    },
    Q_TABLE_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/tableCompletion/'
    },
    Q_TABLE_DELETE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/tableCompletion/'
    },
    Q_SENTENCE_CREATION: {
        METHOD: 'POST',
        ROUTE: '/sentenceCompletion/'
    },
    Q_SENTENCE_GET_ALL: {
        METHOD: 'GET',
        ROUTE: '/sentenceCompletion/all'
    },
    Q_SENTENCE_GET_ALL_STANDALONE: {
        METHOD: 'GET',
        ROUTE: '/sentenceCompletion/'
    },
    Q_SENTENCE_GET_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/sentenceCompletion/'
    },
    Q_SENTENCE_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/sentenceCompletion/ans/'
    },
    Q_SENTENCE_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/sentenceCompletion/ans/'
    },
    Q_SENTENCE_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/sentenceCompletion/'
    },
    Q_SENTENCE_DELETE_BY_ID: {
        METHOD: 'DELETE',
        ROUTE: '/sentenceCompletion/'
    },
    Q_SHORT_CREATION: {
        METHOD: 'POST',
        ROUTE: '/rShortAnswer/'
    },
    Q_SHORT_GET_ALL: {
        METHOD: 'GET',
        ROUTE: '/rShortAnswer/all'
    },
    Q_SHORT_GET_ALL_STANDALONE: {
        METHOD: 'GET',
        ROUTE: '/rShortAnswer/'
    },
    Q_SHORT_GET_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/rShortAnswer/'
    },
    Q_SHORT_GET_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/rShortAnswer/ans/'
    },
    Q_SHORT_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/rShortAnswer/ans/'
    },
    Q_SHORT_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/rShortAnswer/'
    },
    Q_SHORT_DELETE_BY_ID: {
        METHOD: 'DELETE',
        ROUTE: '/rShortAnswer/'
    },
    Q_PMD_CREATION: {
        METHOD: 'POST',
        ROUTE: '/planMapDiagramLabelling/'
    },
    Q_PMD_GET_ALL: {
        METHOD: 'GET',
        ROUTE: '/planMapDiagramLabelling/all'
    },
    Q_PMD_GET_ALL_STANDALONE: {
        METHOD: 'GET',
        ROUTE: '/planMapDiagramLabelling/'
    },
    Q_PMD_GET_IMG_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/planMapDiagramLabelling/img/'
    },
    Q_PMD_GET_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/planMapDiagramLabelling/'
    },
    Q_PMD_GET_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/planMapDiagramLabelling/ans/'
    },
    Q_PMD_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/planMapDiagramLabelling/ans/'
    },
    Q_PMD_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/planMapDiagramLabelling/'
    },
    Q_PMD_DELETE_BY_ID: {
        METHOD: 'DELETE',
        ROUTE: '/planMapDiagramLabelling/'
    },
    Q_NOTE_CREATION: {
        METHOD: 'POST',
        ROUTE: '/noteCompletion/'
    },
    Q_NOTE_GET_ALL: {
        METHOD: 'GET',
        ROUTE: '/noteCompletion/all'
    },
    Q_NOTE_GET_ALL_STANDALONE: {
        METHOD: 'GET',
        ROUTE: '/noteCompletion/'
    },
    Q_NOTE_GET_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/noteCompletion/'
    },
    Q_NOTE_GET_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/noteCompletion/ans/'
    },
    Q_NOTE_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/noteCompletion/ans/'
    },
    Q_NOTE_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/noteCompletion/'
    },
    Q_NOTE_DELETE_BY_ID: {
        METHOD: 'DELETE',
        ROUTE: '/noteCompletion/'
    },
    Q_MCQ_CREATION: {
        METHOD: 'POST',
        ROUTE: '/mcq/'
    },
    Q_MCQ_GET_ALL: {
        METHOD: 'GET',
        ROUTE: '/mcq/all'
    },
    Q_MCQ_GET_ALL_STANDALONE: {
        METHOD: 'GET',
        ROUTE: '/mcq/'
    },
    Q_MCQ_GET_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/mcq/'
    },
    Q_MCQ_GET_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/mcq/ans/'
    },
    Q_MCQ_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/mcq/ans/'
    },
    Q_MCQ_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/mcq/'
    },
    Q_MCQ_DELETE_BY_ID: {
        METHOD: 'DELETE',
        ROUTE: '/mcq/'
    },
    Q_MATCHING_CREATION: {
        METHOD: 'POST',
        ROUTE: '/matching/'
    },
    Q_MATCHING_GET_ALL: {
        METHOD: 'GET',
        ROUTE: '/matching/all'
    },
    Q_MATCHING_GET_ALL_STANDALONE: {
        METHOD: 'GET',
        ROUTE: '/matching/'
    },
    Q_MATCHING_GET_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/matching/'
    },
    Q_MATCHING_GET_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/matching/ans/'
    },
    Q_MATCHING_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/matching/ans/'
    },
    Q_MATCHING_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/matching/'
    },
    Q_MATCHING_DELETE_BY_ID: {
        METHOD: 'DELETE',
        ROUTE: '/matching/'
    },
    Q_FORM_CREATION: {
        METHOD: 'POST',
        ROUTE: '/formCompletion/'
    },
    Q_FORM_GET_ALL: {
        METHOD: 'GET',
        ROUTE: '/formCompletion/all'
    },
    Q_FORM_GET_ALL_STANDALONE: {
        METHOD: 'GET',
        ROUTE: '/formCompletion/'
    },
    Q_FORM_GET_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/formCompletion/'
    },
    Q_FORM_GET_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/formCompletion/ans/'
    },
    Q_FORM_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/formCompletion/ans/'
    },
    Q_FORM_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/formCompletion/'
    },
    Q_FORM_DELETE_BY_ID: {
        METHOD: 'DELETE',
        ROUTE: '/formCompletion/'
    },
    Q_FLOW_CREATION: {
        METHOD: 'POST',
        ROUTE: '/flowchartCompletion/'
    },
    Q_FLOW_GET_ALL: {
        METHOD: 'GET',
        ROUTE: '/flowchartCompletion/all'
    },
    Q_FLOW_GET_ALL_STANDALONE: {
        METHOD: 'GET',
        ROUTE: '/flowchartCompletion/'
    },
    Q_FLOW_GET_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/flowchartCompletion/'
    },
    Q_FLOW_GET_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/flowchartCompletion/ans/'
    },
    Q_FLOW_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/flowchartCompletion/ans/'
    },
    Q_FLOW_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/flowchartCompletion/'
    },
    Q_FLOW_DELETE_BY_ID: {
        METHOD: 'DELETE',
        ROUTE: '/flowchartCompletion/'
    },
    Q_SUMMARY_CREATION: {
        METHOD: 'POST',
        ROUTE: '/summaryCompletion/'
    },
    Q_SUMMARY_GET_ALL: {
        METHOD: 'GET',
        ROUTE: '/summaryCompletion/all'
    },
    Q_SUMMARY_GET_ALL_STANDALONE: {
        METHOD: 'GET',
        ROUTE: '/summaryCompletion/'
    },
    Q_SUMMARY_GET_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/summaryCompletion/'
    },
    Q_SUMMARY_GET_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/summaryCompletion/ans/'
    },
    Q_SUMMARY_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/summaryCompletion/ans/'
    },
    Q_SUMMARY_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/summaryCompletion/'
    },
    Q_SUMMARY_DELETE_BY_ID: {
        METHOD: 'DELETE',
        ROUTE: '/summaryCompletion/'
    }
}
