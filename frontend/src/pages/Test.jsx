// just display a MatchingType1 question.
//
// Path: frontend/src/pages/Test.jsx

import React from "react";
import { SentenceCompletion } from "../components/questions/SentenceCompletion";
import { MultipleChoiceType1 } from "../components/questions/MultipleChoiceType1";
import { MultipleChoiceType2 } from "../components/questions/MultipleChoiceType2";
import { NoteCompletion } from "../components/questions/NoteCompletion";
import { DiagramCompletion } from "../components/questions/DiagramCompletion";
import { Flowchart } from "../components/questions/Flowchart";
import { YNNG } from "../components/questions/YNNG";
import { TFNG } from "../components/questions/TFNG";
import imgBase64 from "../assets/imgExample";
import { TableCompletion } from "../components/questions/TableCompletion";
import { SummaryCompletion } from "../components/questions/SummaryCompletion";
import { FormCompletion } from "../components/questions/FormCompletion";
import { ShortAnswer } from "../components/questions/ShortAnswer";
import { Matching } from "../components/questions/Matching";

export const qMatching = {
	startQuestionNum: 21,
	endQuestionNum: 25,
	standAlone: true,
	numOfWords: 1,
	numOfNum: 0,
	questionHeader:
		"Write the correct letter, A, B or C next to question 21-25.\nYou may choose any letter more than once.",
	questionOptionRepeatable: true,
	questionStatement:
		"What does Jack tell his tutor about each of the following course options?",
	questionOptions: [
		"A He'll definitely do it.",
		"B He may or may not do it.",
		"C He won't do it.",
	],
	numStatements: [
		"21 Media Studies _BLANK_",
		"22 Women and Power _BLANK_",
		"23 Culture and Society _BLANK_",
		"24 Identify and Popular Culture _BLANK_",
		"25 Introduction to Culture Theory _BLANK_",
	],
};

export const qYNNG = {
	startQuestionNum: 7,
	endQuestionNum: 12,
	standAlone: true,
	questionHeader:
		"Do the following statements agree with the views of the writer in the Reading Passage?\nWrite:\n\tYES if the statement agrees with the views of the writer.\n\tNO if the statement contradicts what the writer thinks.\n\tNOT GIVEN if it is impossible to know what the writer's point of view is.",
	numStatements: [
		"7\tChildren can learn their first language without being taught.",
		"8\tFrom the time of their birth, humans seem to have an ability to learn language",
		"9\tAccording to experts in the 1950s and '60s, language learning is very similar to the training of animals.",
		"10\tRepetition in language learning is important, according to Dr Eliot.",
		'11\tDr Golinkoff is concerned that "baby talk" is spoken too much by some parents.',
		'12\tThe first word a child learns to recognise is usually "Mummy" or "Daddy".',
	],
};

export const qTFNG = {
	startQuestionNum: 9,
	endQuestionNum: 13,
	standAlone: true,
	questionHeader:
		"Do the following statements agree with the views of the writer in the Reading Passage?\nIn boxes 9-13 on your answer write:\n\tTRUE if the statement agrees with the views of the information.\n\tNO if the statement contradicts the information.\n\tNOT GIVEN if there is no information on this.",
	numStatements: [
		"9\tCoconut seeds need shade in order to germinate.",
		"11\tCoconuts were probably transported to Asia from America in the 16th century.",
		" 12\tCoconuts found on the west coast of America were a different type from those found on the east coast.",
		"13\tAll coconuts found in Asia are cultivated varieties.",
		"14\tCoconuts are cultivated in different ways in America and the Pacific.",
	],
};

export const qSentenceCompletion = {
	startQuestionNum: 27,
	endQuestionNum: 30,
	standAlone: true,
	numOfWords: 2,
	numOfNum: 0,
	questionHeader:
		"Complete the sentences below.\nWrite NO MORE THAN TWO WORDS ONLY for each answer.",
	questionTitle: "",
	numStatements: [
		"27 Studying with the Open University demanded a great deal of _BLANK_ .",
		"28 Studying and working at the same time improved Rachel's _BLANK_ skills.",
		"29 It was helpful that the course was structured in _BLANK_.",
		"30 She enjoyed meeting other students at _BLANK_.",
	],
};

export const qMultipleChoiceType1 = {
	startQuestionNum: 15,
	endQuestionNum: 17,
	standAlone: true,
	numOfWords: 1,
	qType: 1,
	questionHeader: ["Choose the correct letter, A, B or C."],
	numStatements: [
		"15 How does BC Travel plan to expand the painting holidays?",
		"16 Why are BC Travel's cooking holidays unusual?",
		"17 What does the speaker say about the photography holidays?",
	],
	questionStatements: [
		[
			"A by adding to the number of locations",
			"B by increasing the range of levels",
			"C by employing more teachers",
		],
		[
			"A They only use organic foods",
			"B They have an international focus",
			"C They mainly involve vegetarian dishes",
		],
		[
			"A Clients receive individual tution.",
			"B The tutors are also trained guides.",
			"C Advice is given on selling photographs.",
		],
	],
};

export const qMultipleChoiceType2 = {
	startQuestionNum: 11,
	endQuestionNum: 14,
	standAlone: true,
	numOfWords: 1,
	numOfNum: 0,
	qType: 2,
	questionHeader: ["Choose TWO letter, A-E", "Choose TWO letter, A-E"],
	numStatements: [
		"Which TWO age groups are taking increasing numbers of holiday with BC Travel?",
		"Which TWO are the main reasons given for the popularity of activity holidays?",
	],
	questionOptions: [
		[
			"A 16-30 years",
			"B 31-42 years",
			"C 43-54 years",
			"D 55-64 years",
			"E over 65 years",
		],
		[
			"A Clients make new friends.",
			"B Clients learn a useful skill.",
			"C Clients learn about a different culture.",
			"D Clients are excited by the risk involved.",
			"E Clients find them value for money.",
		],
	],
};

export const qDiagramCompletion = {
	startQuestionNum: 14,
	endQuestionNum: 20,
	standAlone: true,
	options: true,
	questionHeader:
		"Label the map below.\nWrite the correct letter, A-I, next to Questions 14-20",
	questionTitle: "Proposed traffic changes in Granford",
	image: {
		data: imgBase64,
		contentType: "image/png",
	},
	questionOptions: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
	numStatements: [
		"14 New traffic lights _BLANK_",
		"15 Pedestrian crossing _BLANK_",
		"16 Parking allowed _BLANK_",
		"17 New 'No Parking' sign _BLANK_",
		"18 New disabled parking spaces _BLANK_",
		"19 Widened pavement _BLANK_",
		"20 Lorry loading/unloading restrictions _BLANK_",
	],
};

export const qFormCompletion = {
	startQuestionNum: 1,
	endQuestionNum: 8,
	standAlone: true,
	numOfWords: 3,
	numOfNum: 1,
	questionHeader:
		"Questions 1-8\nComplete the form below.\nWrite NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
	questionTitle: "PACKHAM'S SHIPPING AGENCY - customer quotation form",
	questionStatements: {
		Name: ["Jacob 1 _BLANK_"],
		"Address to be collected from": ["2 _BLANK_ College, Downlands Rd"],
		Town: ["Bristol"],
		Postcode: ["3 _BLANK_"],
		"Size of container": [
			"length: 1.5m",
			"width: 4 _BLANK_",
			"height: 5 _BLANK_",
		],
		Contents: ["clothes", "6 _BLANK_", "7 _BLANK_"],
		"Total estimated value": ["8 £ _BLANK_"],
	},
};

export const qNoteCompletion = {
	startQuestionNum: 11,
	endQuestionNum: 16,
	standAlone: true,
	numOfWords: 3,
	numOfNum: 1,
	questionHeader:
		"Complete the notes below.\nWrite NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
	questionTitle: "The National Arts Centre",
	questionStatements: [
		"Well known for:\t11 _BLANK_.",
		"Complex consists of:\tconcert rooms\ntheatres\ncinemas\nart galleries\npublic library\nrestaurants\n12 _BLANK_",
		"Historical background:\t1940 area destroyed by bombs\n19605 — Centre was 13 _BLANK_\nIn 14 _BLANK_ opened to public",
		"Managed by:\t15 _BLANK_",
		"Open:\t16 _BLANK_ days per year",
	],
};

export const qFlowChart = {
	startQuestionNum: 31,
	endQuestionNum: 34,
	standAlone: true,
	options: false,
	numOfWords: 2,
	numOfNum: 2,
	questionHeader:
		"You will hear an extract from a university lecture on the topic of economics.\nFirst, look at questions 31 to 34. Now listen carefully and answer questions 31-34.\nQuestions 31-34. Do not write MORE THAN TWO WORDS AND/OR NUMBERS. Complete the chart below.",
	steps: [
		["Effects of 2020 Pandemic"],
		["31 _BLANK_ changed"],
		[" Demand for 32 _BLANK_ in stores increased"],
		["Prices increased by more than 2%"],
		["33 _BLANK_ went up by 2.4%", "Protein went up by 34 _BLANK_"],
	],
	answer: [
		{
			number: 31,
			ansType: "S",
			ans: "consumer habits",
		},
		{
			number: 32,
			ansType: "M",
			ans: ["products", "food"],
		},
		{
			number: 33,
			ansType: "S",
			ans: "cereals",
		},
		{
			number: 34,
			ansType: "S",
			ans: "4.3%",
		},
	],
};

export const qSummaryCompletion = {
	startQuestionNum: 27,
	endQuestionNum: 31,
	standAlone: true,
	numOfWords: 2,
	numOfNum: 0,
	qType: 1,
	questionHeader:
		"Complete the summary below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.\nWrite your answers in boxes 27-31 on your answer sheet.",
	questionTitle: "The Montreal Study",
	summary:
		"Participants, who were recruited for the study through advertisements, had their brain activity monitored while listening to their favourite music. It was noted that the music stimulated the brain's neurons to release a substance called 27 _BLANK_ in two of the parts of the brain which are associated with feelings 28 _BLANK_.\nResearchers also observed that the neurons in the area of the brain called the 20 _BLANK_ were particularly active just before the participant's favourite moment in the music — the period known as the 30 _BLANK_. Activity in this part of the brain is associated with the expectation of ‘reward stimuli such as 31 _BLANK_.",
};

export const qTableCompletion = {
	startQuestionNum: 6,
	endQuestionNum: 10,
	standAlone: true,
	numOfWords: 1,
	numOfNum: 1,
	questionHeader:
		"Complete the table below. Write NO MORE THAN ONE WORD AND/OR NUMBER for each answer.",
	numOfRows: 7,
	numOfCols: 3,
	rows: [
		["TRANSPORT", "CASH FARE", "CARD FARE"],
		["Bus", "6 $ _BLANK_", "$1.50"],
		["Train (peak)", "$10", "$10"],
		[
			"Train (off-peak)- before 5pm or after 7 _BLANK_ pm",
			"$10",
			"8 $ _BLANK_",
		],
		["9 _BLANK_ ferry", "$4.50", "$3.55"],
		["Tourist ferry 10 _BLANK_", "$35", "-"],
		["Tourist ferry (whole day)", "$65", "-"],
	],
};

export const qMatching3 = {
	startQuestionNum: 21,
	endQuestionNum: 25,
	standAlone: true,
	numOfWords: 1,
	numOfNum: 0,
	questionHeader:
		"Write the correct letter, A, B or C next to question 21-25.\nYou may choose any letter more than once.",
	questionOptionRepeatable: true,
	questionStatement:
		"What does Jack tell his tutor about each of the following course option?",
	questionOptions: [
		"A He'll definitely do it.",
		"B He may or may not do it.",
		"C He won't do it.",
	],
	numStatements: [
		"21 Media Studies _BLANK_",
		"22 Women and Power _BLANK_",
		"23 Culture and Society _BLANK_",
		"24 Identify and Popular Culture _BLANK_",
		"25 Introduction to Culture Theory _BLANK_",
	],
};

export const qMatching4 = {
	startQuestionNum: 1,
	endQuestionNum: 3,
	standAlone: true,
	qTypeMatchingInfo: true,
	questionHeader:
		"Reading Passage 1 has nine paragraphs, A-I.\nWrite the correct letter, A-I, in boxes 1-3 on your answer sheet.",
	questionOptionRepeatable: false,
	questionOptions: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
	numStatements: [
		"1 a reference to characteristics that only apply to food production.",
		"2 a reference to challenges face only farmers in certain parts of the world.",
		"3 a reference to difficulties in bringing about co-operation between farmers",
	],
};

export const qMatching5 = {
	startQuestionNum: 7,
	endQuestionNum: 10,
	standAlone: true,
	qTypeList: true,
	questionHeader:
		"Look at the following items (Questions 7-10) and the list of groups below.\nMatch each item with the group which first invented or used them.\nWrite the correct letter A-E in boxes 7-10 on your answer sheet.\nNB you may use any letter more than once",
	questionOptionRepeatable: true,
	questionTitle: "First invented or used by",
	questionOptions: [
		"A The Chinese",
		"B The Indians",
		"C The British",
		"D The Arabs",
		"E The Americans",
	],
	numStatements: [
		"7 black powder",
		"8 rocket-propelled arrows for fighting",
		"9 rocket as war weapons",
		"10 the rocket launcher",
	],
};

export const qMatching2 = {
	startQuestionNum: 1,
	endQuestionNum: 4,
	standAlone: false,
	numOfWords: 1,
	numOfNum: 0,
	questionHeader:
		"Choose your answers from the box and write the correct letter A-E next to questions 1-4.",
	questionOptionRepeatable: false,
	questionStatement: "Which hotel matches each description?",
	questionOptions: [
		"A The Bridge Hotel",
		"B Carlton House",
		"C The Imperial",
		"D The Majestic",
		"E The Royal Oak",
	],
	numStatements: [
		"1 is in a rural area _BLANK_",
		"2 only opened recently _BLANK_",
		"3 offers facilities for business functions _BLANK_",
		"4 has an indoor swimming pool _BLANK_",
	],
};

export const qShortAnswer1 = {
	startQuestionNum: 1,
	endQuestionNum: 4,
	standAlone: true,
	numOfWords: 3,
	numOfNum: 1,
	questionHeader:
		"Answer the questions below.\nChoose NO MORE THAN THREE WORDS AND/OR A NUMBER from the text for each answer.\nWrite your answers in boxes 1-4 on your answer sheet.",
	numStatements: [
		"What is the African rhinoceros compared to?",
		"Which type of rhino fell in number to below a hundred?",
		"What percentage of black rhinos had been illegally killed by 1992?",
		"How have the criminals improved their success?",
	],
};

export const qShortAnswer2 = {
	startQuestionNum: 11,
	endQuestionNum: 16,
	standAlone: true,
	numOfWords: 3,
	numOfNum: 1,
	questionHeader:
		"Answer the questions below.\nWrite NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
	numStatements: [
		"What TWO factors can make social contact in a foreign country difficult?",
		"Which types of community group does the speaker give examples of?",
		"In which TWO places can information about community activities be found?",
	],
	numBlanks: [
		["11 _BLANK_", "12 _BLANK_"],
		["theatre", "13 _BLANK_", "14 _BLANK_"],
		["15 _BLANK_", "16 _BLANK_"],
	],
};

export default function Test() {
	return (
		<div>
			<Matching q={qMatching} />
			<SentenceCompletion q={qSentenceCompletion} />
			<MultipleChoiceType1 q={qMultipleChoiceType1} />
			<MultipleChoiceType2 q={qMultipleChoiceType2} />
			<YNNG q={qYNNG} />
			<TFNG q={qTFNG} />
			<DiagramCompletion q={qDiagramCompletion} />
			<NoteCompletion q={qNoteCompletion} />
			<Flowchart q={qFlowChart} />
			<TableCompletion q={qTableCompletion} />
			<SummaryCompletion q={qSummaryCompletion} />
			<FormCompletion q={qFormCompletion} />
			<ShortAnswer q={qShortAnswer1} />
			<ShortAnswer q={qShortAnswer2} />
			<Matching q={qMatching2} />
			<Matching q={qMatching3} />
			<Matching q={qMatching4} />
			<Matching q={qMatching5} />
		</div>
	);
}
