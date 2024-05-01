import axios from "axios";
import { API_ENDPOINTS } from "./endpoints";

let url = "www.api.ieltssim.com"; // api url
if (import.meta.env.MODE === "development") {
	url = "http://localhost:3000";
}

export const user = {
	signup: async (email, username, password) => {
		const response = await axios.post(
			url + API_ENDPOINTS.USER_CREATION.ROUTE,
			{
				email,
				username,
				password,
			}
		);
		return response;
	},

	login: async (email, password) => {
		const response = await axios.post(
			url + API_ENDPOINTS.USER_LOGIN.ROUTE,
			{
				email,
				password,
			},
			{ withCredentials: true }
		);
		return response;
	},

	logout: async () => {
		const response = await axios.get(url + API_ENDPOINTS.USER_LOGOUT.ROUTE);
		return response;
	},
};

export const ynng = {
	create: async (yesNoNG) => {
		const response = await axios.post(
			url + API_ENDPOINTS.Q_YNNG_CREATION.ROUTE,
			{
				yesNoNG,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	getAll: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_YNNG_GET_ALL.ROUTE
		);
		return response;
	},

	getAllStandalone: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_YNNG_GET_ALL_STANDALONE.ROUTE
		);
		return response;
	},

	getByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_YNNG_GET_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	getAnsByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_YNNG_GET_ANS_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	updateAnsByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_YNNG_UPDATE_ANS_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	updateByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_YNNG_UPDATE_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	deleteByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_YNNG_DELETE_BY_ID.ROUTE + `${qID}`,
			null,
			{
				withCredentials: true,
			}
		);
		return response;
	},
};

export const tfng = {
	create: async (trueFalseNG) => {
		const response = await axios.post(
			url + API_ENDPOINTS.Q_TFNG_CREATION.ROUTE,
			{
				trueFalseNG,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	getAll: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_TFNG_GET_ALL.ROUTE
		);
		return response;
	},

	getAllStandalone: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_TFNG_GET_ALL_STANDALONE.ROUTE
		);
		return response;
	},

	getByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_TFNG_GET_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	getAnsByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_TFNG_GET_ANS_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	updateAnsByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_TFNG_UPDATE_ANS_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	updateByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_TFNG_UPDATE_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	deleteByID: async (qID) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_TFNG_DELETE_BY_ID.ROUTE + `${qID}`,
			null,
			{
				withCredentials: true,
			}
		);
		return response;
	},
};

export const tableCompletion = {
	create: async (tableCompletion) => {
		const response = await axios.post(
			url + API_ENDPOINTS.Q_TABLE_CREATION.ROUTE,
			{
				tableCompletion,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	getAll: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_TABLE_GET_ALL.ROUTE
		);
		return response;
	},

	getAllStandalone: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_TABLE_GET_ALL_STANDALONE.ROUTE
		);
		return response;
	},

	getByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_TABLE_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	getAnsByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_TABLE_ANS_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	updateAnsByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_TABLE_UPDATE_ANS_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	updateByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_TABLE_UPDATE_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	deleteByID: async (qID) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_TABLE_DELETE_BY_ID.ROUTE + `${qID}`,
			null,
			{
				withCredentials: true,
			}
		);
		return response;
	},
};

export const sentenceCompletion = {
	create: async (listeningShortAns) => {
		const response = await axios.post(
			url + API_ENDPOINTS.Q_SENTENCE_CREATION.ROUTE,
			{
				listeningShortAns,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	getAll: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_SENTENCE_GET_ALL.ROUTE
		);
		return response;
	},

	getAllStandalone: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_SENTENCE_GET_ALL_STANDALONE.ROUTE
		);
		return response;
	},

	getByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_SENTENCE_GET_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	getAnsByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_SENTENCE_ANS_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	updateAnsByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_SENTENCE_UPDATE_ANS_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	updateByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_SENTENCE_UPDATE_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	deleteByID: async (qID) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_SENTENCE_DELETE_BY_ID.ROUTE + `${qID}`,
			null,
			{
				withCredentials: true,
			}
		);
		return response;
	},
};

export const shortAnswer = {
	create: async (sentenceCompletion) => {
		const response = await axios.post(
			url + API_ENDPOINTS.Q_SHORT_CREATION.ROUTE,
			{
				sentenceCompletion,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	getAll: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_SHORT_GET_ALL.ROUTE
		);
		return response;
	},

	getAllStandalone: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_SHORT_GET_ALL_STANDALONE.ROUTE
		);
		return response;
	},

	getByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_SHORT_GET_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	getAnsByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_SHORT_GET_ANS_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	updateAnsByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_SHORT_UPDATE_ANS_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	updateByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_SHORT_UPDATE_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	deleteByID: async (qID) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_SHORT_DELETE_BY_ID.ROUTE + `${qID}`,
			null,
			{
				withCredentials: true,
			}
		);
		return response;
	},
};

export const pmd = {
	create: async (pmdLabelling) => {
		const response = await axios.post(
			url + API_ENDPOINTS.Q_PMD_CREATION.ROUTE,
			{
				pmdLabelling,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	getAll: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_PMD_GET_ALL.ROUTE
		);
		return response;
	},

	getAllStandalone: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_PMD_GET_ALL_STANDALONE.ROUTE
		);
		return response;
	},

	getImgByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_PMD_GET_IMG_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	getByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_PMD_GET_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	getAnsByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_PMD_GET_ANS_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	updateAnsByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_PMD_UPDATE_ANS_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	updateByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_PMD_UPDATE_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	deleteByID: async (qID) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_PMD_DELETE_BY_ID.ROUTE + `${qID}`,
			null,
			{
				withCredentials: true,
			}
		);
		return response;
	},
};

export const noteCompletion = {
	create: async (noteCompletion) => {
		const response = await axios.post(
			url + API_ENDPOINTS.Q_NOTE_CREATION.ROUTE,
			{
				noteCompletion,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	getAll: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_NOTE_GET_ALL.ROUTE
		);
		return response;
	},

	getAllStandalone: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_NOTE_GET_ALL_STANDALONE.ROUTE
		);
		return response;
	},

	getByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_NOTE_GET_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	getAnsByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_NOTE_GET_ANS_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	updateAnsByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_NOTE_UPDATE_ANS_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	updateByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_NOTE_UPDATE_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	deleteByID: async (qID) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_NOTE_DELETE_BY_ID.ROUTE + `${qID}`,
			null,
			{
				withCredentials: true,
			}
		);
		return response;
	},
};

export const mcq = {
	create: async (MCQ) => {
		const response = await axios.post(
			url + API_ENDPOINTS.Q_MCQ_CREATION.ROUTE,
			{
				MCQ,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	getAll: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_MCQ_GET_ALL.ROUTE
		);
		return response;
	},

	getAllStandalone: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_MCQ_GET_ALL_STANDALONE.ROUTE
		);
		return response;
	},

	getByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_MCQ_GET_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	getAnsByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_MCQ_GET_ANS_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	updateAnsByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_MCQ_UPDATE_ANS_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	updateByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_MCQ_UPDATE_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	deleteByID: async (qID) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_MCQ_DELETE_BY_ID.ROUTE + `${qID}`,
			null,
			{
				withCredentials: true,
			}
		);
		return response;
	},
};

export const matching = {
	create: async (matching) => {
		const response = await axios.post(
			url + API_ENDPOINTS.Q_MATCHING_CREATION.ROUTE,
			{
				matching,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	getAll: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_MATCHING_GET_ALL.ROUTE
		);
		return response;
	},

	getAllStandalone: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_MATCHING_GET_ALL_STANDALONE.ROUTE
		);
		return response;
	},

	getByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_MATCHING_GET_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	getAnsByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_MATCHING_GET_ANS_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	updateAnsByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_MATCHING_UPDATE_ANS_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	updateByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_MATCHING_UPDATE_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	deleteByID: async (qID) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_MATCHING_DELETE_BY_ID.ROUTE + `${qID}`,
			null,
			{
				withCredentials: true,
			}
		);
		return response;
	},
};

export const formCompletion = {
	create: async (formCompletion) => {
		const response = await axios.post(
			url + API_ENDPOINTS.Q_FORM_CREATION.ROUTE,
			{
				formCompletion,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	getAll: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_FORM_GET_ALL.ROUTE
		);
		return response;
	},

	getAllStandalone: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_FORM_GET_ALL_STANDALONE.ROUTE
		);
		return response;
	},

	getByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_FORM_GET_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	getAnsByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_FORM_GET_ANS_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	updateAnsByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_FORM_UPDATE_ANS_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	updateByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_FORM_UPDATE_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	deleteByID: async (qID) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_FORM_DELETE_BY_ID.ROUTE + `${qID}`,
			null,
			{
				withCredentials: true,
			}
		);
		return response;
	},
};

export const flowchartCompletion = {
	create: async (fcCompletion) => {
		const response = await axios.post(
			url + API_ENDPOINTS.Q_FLOW_CREATION.ROUTE,
			{
				fcCompletion,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	getAll: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_FLOW_GET_ALL.ROUTE
		);
		return response;
	},

	getAllStandalone: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_FLOW_GET_ALL_STANDALONE.ROUTE
		);
		return response;
	},

	getByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_FLOW_GET_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	getAnsByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_FLOW_GET_ANS_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	updateAnsByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_FLOW_UPDATE_ANS_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	updateByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_FLOW_UPDATE_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	deleteByID: async (qID) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_FLOW_DELETE_BY_ID.ROUTE + `${qID}`,
			null,
			{
				withCredentials: true,
			}
		);
		return response;
	},
};

export const summaryCompletion = {
	create: async (summaryCompletion) => {
		const response = await axios.post(
			url + API_ENDPOINTS.Q_SUMMARY_CREATION.ROUTE,
			{
				summaryCompletion,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	getAll: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_SUMMARY_GET_ALL.ROUTE
		);
		return response;
	},

	getAllStandalone: async () => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_SUMMARY_GET_ALL_STANDALONE.ROUTE
		);
		return response;
	},

	getByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_SUMMARY_GET_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	getAnsByID: async (qID) => {
		const response = await axios.get(
			url + API_ENDPOINTS.Q_SUMMARY_GET_ANS_BY_ID.ROUTE + `${qID}`
		);
		return response;
	},

	updateAnsByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_SUMMARY_UPDATE_ANS_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	updateByID: async (qID, updates) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_SUMMARY_UPDATE_BY_ID.ROUTE + `${qID}`,
			{
				updates,
			},
			{
				withCredentials: true,
			}
		);
		return response;
	},

	deleteByID: async (qID) => {
		const response = await axios.patch(
			url + API_ENDPOINTS.Q_SUMMARY_DELETE_BY_ID.ROUTE + `${qID}`,
			null,
			{
				withCredentials: true,
			}
		);
		return response;
	},
};
