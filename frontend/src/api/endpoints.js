const API_ENDPOINTS = {
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
        ROUTE: '/ynng/:id'
    },
    Q_YNNG_GET_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/ynng/ans/:id'
    },
    Q_YNNG_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/ynng/ans/:id'
    },
    Q_YNNG_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/ynng/:id'
    },
    Q_YNNG_DELETE_BY_ID: {
        METHOD: 'DELETE',
        ROUTE: '/ynng/:id'
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
        ROUTE: '/tfng/:id'
    },
    Q_TFNG_GET_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/tfng/ans/:id'
    },
    Q_TFNG_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/tfng/ans/:id'
    },
    Q_TFNG_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/tfng/:id'
    },
    Q_TFNG_DELETE_BY_ID: {
        METHOD: 'DELETE',
        ROUTE: '/tfng/:id'
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
        ROUTE: '/tableCompletion/:id'
    },
    Q_TABLE_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/tableCompletion/ans/:id'
    },
    Q_TABLE_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/tableCompletion/ans/:id'
    },
    Q_TABLE_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/tableCompletion/:id'
    },
    Q_TABLE_DELETE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/tableCompletion/:id'
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
        ROUTE: '/sentenceCompletion/:id'
    },
    Q_SENTENCE_GET_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/sentenceCompletion/ans/:id'
    },
    Q_SENTENCE_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/sentenceCompletion/ans/:id'
    },
    Q_SENTENCE_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/sentenceCompletion/:id'
    },
    Q_SENTENCE_DELETE_BY_ID: {
        METHOD: 'DELETE',
        ROUTE: '/sentenceCompletion/:id'
    },
    Q_R_SHORT_CREATION: {
        METHOD: 'POST',
        ROUTE: '/rShortAnswer/'
    },
    Q_R_SHORT_GET_ALL: {
        METHOD: 'GET',
        ROUTE: '/rShortAnswer/all'
    },
    Q_R_SHORT_GET_ALL_STANDALONE: {
        METHOD: 'GET',
        ROUTE: '/rShortAnswer/'
    },
    Q_R_SHORT_GET_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/rShortAnswer/:id'
    },
    Q_R_SHORT_GET_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/rShortAnswer/ans/:id'
    },
    Q_R_SHORT_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/rShortAnswer/ans/:id'
    },
    Q_R_SHORT_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/rShortAnswer/:id'
    },
    Q_R_SHORT_DELETE_BY_ID: {
        METHOD: 'DELETE',
        ROUTE: '/rShortAnswer/:id'
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
        ROUTE: '/planMapDiagramLabelling/img/:id'
    },
    Q_PMD_GET_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/planMapDiagramLabelling/:id'
    },
    Q_PMD_GET_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/planMapDiagramLabelling/ans/:id'
    },
    Q_PMD_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/planMapDiagramLabelling/ans/:id'
    },
    Q_PMD_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/planMapDiagramLabelling/:id'
    },
    Q_PMD_DELETE_BY_ID: {
        METHOD: 'DELETE',
        ROUTE: '/planMapDiagramLabelling/:id'
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
        ROUTE: '/noteCompletion/:id'
    },
    Q_NOTE_GET_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/noteCompletion/ans/:id'
    },
    Q_NOTE_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/noteCompletion/ans/:id'
    },
    Q_NOTE_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/noteCompletion/:id'
    },
    Q_NOTE_DELETE_BY_ID: {
        METHOD: 'DELETE',
        ROUTE: '/noteCompletion/:id'
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
        ROUTE: '/mcq/:id'
    },
    Q_MCQ_GET_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/mcq/ans/:id'
    },
    Q_MCQ_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/mcq/ans/:id'
    },
    Q_MCQ_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/mcq/:id'
    },
    Q_MCQ_DELETE_BY_ID: {
        METHOD: 'DELETE',
        ROUTE: '/mcq/:id'
    },
    Q_L_SHORT_CREATION: {
        METHOD: 'POST',
        ROUTE: '/lShortAnswer/'
    },
    Q_L_SHORT_GET_ALL: {
        METHOD: 'GET',
        ROUTE: '/lShortAnswer/all'
    },
    Q_L_SHORT_GET_ALL_STANDALONE: {
        METHOD: 'GET',
        ROUTE: '/lShortAnswer/'
    },
    Q_L_SHORT_GET_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/lShortAnswer/:id'
    },
    Q_L_SHORT_GET_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/lShortAnswer/ans/:id'
    },
    Q_L_SHORT_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/lShortAnswer/ans/:id'
    },
    Q_L_SHORT_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/lShortAnswer/:id'
    },
    Q_L_SHORT_DELETE_BY_ID: {
        METHOD: 'DELETE',
        ROUTE: '/lShortAnswer/:id'
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
        ROUTE: '/matching/:id'
    },
    Q_MATCHING_GET_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/matching/ans/:id'
    },
    Q_MATCHING_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/matching/ans/:id'
    },
    Q_MATCHING_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/matching/:id'
    },
    Q_MATCHING_DELETE_BY_ID: {
        METHOD: 'DELETE',
        ROUTE: '/matching/:id'
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
        ROUTE: '/formCompletion/:id'
    },
    Q_FORM_GET_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/formCompletion/ans/:id'
    },
    Q_FORM_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/formCompletion/ans/:id'
    },
    Q_FORM_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/formCompletion/:id'
    },
    Q_FORM_DELETE_BY_ID: {
        METHOD: 'DELETE',
        ROUTE: '/formCompletion/:id'
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
        ROUTE: '/flowchartCompletion/:id'
    },
    Q_FLOW_GET_ANS_BY_ID: {
        METHOD: 'GET',
        ROUTE: '/flowchartCompletion/ans/:id'
    },
    Q_FLOW_UPDATE_ANS_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/flowchartCompletion/ans/:id'
    },
    Q_FLOW_UPDATE_BY_ID: {
        METHOD: 'PATCH',
        ROUTE: '/flowchartCompletion/:id'
    },
    Q_FLOW_DELETE_BY_ID: {
        METHOD: 'DELETE',
        ROUTE: '/flowchartCompletion/:id'
    }
}

export default API_ENDPOINTS;