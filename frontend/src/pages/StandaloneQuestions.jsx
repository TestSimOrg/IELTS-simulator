const q = [
	{
		number: 21,
		type: "Matching",
		content: {
			startQuestionNum: 21,
			endQuestionNum: 25,
			standAlone: true,
			numOfWords: 1,
			numOfNum: 0,
			questionHeader:
				"Write the correct letter, A, B or C next to question 21-25.\nYou may choose any letter more than once.",
			questionOptionRepeatable: true,
			questionStatment:
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
		},
	},
	{
		number: 27,
		type: "SentenceCompletion",
		content: {
			startQuestionNum: 27,
			endQuestionNum: 30,
			standAlone: true,
			numOfWords: 2,
			numOfNum: 0,
			questionHeader:
				"Complete the sentences below.\nWrite NO MORE THAN TWO WORDS ONLY for each answer.",
			questionTitle: "",
			numStatements: [
				"27 Studying with the Open University demanded a great deal of _BLANK_ ",
				"28 Studying and working at the same time improved Rachel's _BLANK_ skills.",
				"29 It was helpful that the course was structured in _BLANK_.",
				"30 She enjoyed meeting other students at _BLANK_.",
			],
		},
	},
	{
		number: 15,
		type: "MultipleChoiceType1",
		content: {
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
		},
	},
	{
		number: 11,
		type: "MultipleChoiceType2",
		content: {
			startQuestionNum: 11,
			endQuestionNum: 14,
			standAlone: true,
			numOfWords: 1,
			numOfNum: 0,
			qType: 2,
			questionHeader: [
				"Choose TWO letter, A-E",
				"Choose THREE letter, A-E",
			],
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
		},
	},
	{
		number: 30,
		type: "DiagramCompletion",
		content: {
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
		},
	},
	{
		number: 11,
		type: "NoteCompletion",
		content: {
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
				"Historical background:\t1940 area dostoyed by bombs\n19605 — Centre was 13 _BLANK_\nIn 14 _BLANK_ opened to public",
				"Managed by:\t15 _BLANK_",
				"Open:\t16 _BLANK_ days per year",
			],
		},
	},
	{
		number: 31,
		type: "FlowChart",
		content: {
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
		},
	},
];

import React from "react";
import { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Grid, Text, Container, Menu, Checkbox, Button } from "@mantine/core";
import CardStandaloneQuestion from "../components/CardStandaloneQuestion";

import imgBase64 from "../assets/imgExample";

import classes from "../styles/StandaloneQuestions.module.css";

export default function StandaloneQuestions() {
	const [questions, setQuestions] = useState([]);

	const questionTypes = {
		MultipleChoiceType1: "Multiple Choice",
		MultipleChoiceType2: "Multiple Choice",
		DiagramCompletion: "Diagram Completion",
		SentenceCompletion: "Sentence Completion",
		NoteCompletion: "Note Completion",
		Matching: "Matching",
		FlowChart: "Flow Chart",
		SummaryCompletion: "Summary Completion",
	};

	const [filterQuestionType, setFilterQuestionType] = useState(
		Object.keys(questionTypes)
	);
	const [filterQuestionTypeOpenend, setFilterQuestionTypeOpenend] =
		useState(false);

	useEffect(() => {
		// will fetch the questions from the backend instead of using static filtered data
		setQuestions(q.filter((q) => filterQuestionType.includes(q.type)));
	}, [filterQuestionType]);

	return (
		<Container size="xl" pt="lg">
			<Text align="center" size="xl" weight={700}>
				Standalone Problem Solving
			</Text>
			<Menu
				opened={filterQuestionTypeOpenend}
				onChange={setFilterQuestionTypeOpenend}
			>
				<Menu.Target>
					<Button color="blue" variant="outline">
						Question Type&nbsp;
						{filterQuestionTypeOpenend ? (
							<IoIosArrowUp />
						) : (
							<IoIosArrowDown />
						)}
					</Button>
				</Menu.Target>

				<Menu.Dropdown>
					{Object.keys(questionTypes).map((type, index) => (
						<Menu.Item key={index} className={classes.fakeMenuItem}>
							<div
								className={classes.realMenuItem}
								onClick={(e) => {
									e.stopPropagation();
									setFilterQuestionType(
										filterQuestionType.includes(type)
											? filterQuestionType.filter(
													(t) => t !== type
											  )
											: [...filterQuestionType, type]
									);
								}}
							>
								<Checkbox
									checked={filterQuestionType.includes(type)}
									onChange={() => {}}
								>
									{questionTypes[type]}
								</Checkbox>
								<Text>{questionTypes[type]}</Text>
							</div>
						</Menu.Item>
					))}
				</Menu.Dropdown>
			</Menu>

			<Grid id="standalone-questions" gutter="lg" pt="lg">
				{questions.map((q, index) => (
					<Grid.Col span={{ xs: 12, sm: 6, md: 4 }} key={index}>
						<CardStandaloneQuestion q={q} />
					</Grid.Col>
				))}
			</Grid>
		</Container>
	);
}
