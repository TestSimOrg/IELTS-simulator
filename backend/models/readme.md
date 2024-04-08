This is an explanation of all schemas and models.

In ielts exam there are a limited types of questions that can be asked. for eg:
- Listening
  - Multiple Choice Questions ( Type 1 and 2 )
  - Matching ( Matching List and Matching Info )
  - Diagram Completion
  - Plan/Map Labelling
  - Sentence Completion
  - Note Completion
  - Flow Chart Completion
  - Table Completion
  - Summary Completion
  - Form Completion
  - Short Answer Questions


- Reading
  - Multiple Choice Questions ( Type 1 and 2 )
  - True/False/Not Given
  - Yes/No/Not Given
  - Matching ( Matching List and Matching Info )
  - Sentence Completion
  - Note Completion
  - Flow Chart Completion
  - Table Completion
  - Diagram Label Completion
  - Summary Completion
  - Short Answer Questions

NOTE: You can use the json below the images to test the API endpoints in postman or insomnia. for eg:

for listening matching question:

- go to controllers folder
- go to lMatching file
- look at the createQuestion to see what is being extracted from req.body (const {listeningMatching} in this case)
- go to postman or insomnia and create a object with prop listeningMatching and put the json below the images inside that prop as shown in eg:
```
{
    "listeningMatching" : {
        "startQuestionNum": 21,
        "endQuestionNum": 25,
        "standAlone": true,
        "numOfWords": 1,
        "numOfNum": 0,
        "questionHeader": "Write the correct letter, A, B or C next to question 21-25.\nYou may choose any letter more than once.",
        "questionOptionRepeatable": true,
        "questionStatement": "What does Jack tell his tutor about each of the following course option?",
        "questionOptions": [
            "A He'll definitely do it.",
            "B He may or may not do it.",
            "C He won't do it."
        ],
        "numStatements": [
            "21 Media Studies _BLANK_",
            "22 Women and Power _BLANK_",
            "23 Culture and Society _BLANK_",
            "24 Identify and Popular Culture _BLANK_",
            "25 Introduction to Culture Theory _BLANK_"
        ],
	    "answer": [
	        {
               "number": 21,
		        "ansType": "L",
		        "ans": "C"
	        },
		    {
		    	"number": 22,
	        	"ansType": "L",
	        	"ans": "A"
            },
		    {
		    	"number": 23,
		    	"ansType": "L",
		    	"ans": "B"
		    },
		    {
	        	"number": 24,
	        	"ansType": "L",
                "ans": "B"
		    },
		    {
		        "number": 25,
		        "ansType": "L",
		        "ans": "C"
		    }
		]
	}
}

```

Listening schema explanations:

1. Matching : 

    1. Type 1 example:

        <img src="../public/listening/matchingType1.png" alt="matching type 1 img" style="width:500px;"/>

        for this the json from front-end will be :
        ```
        {
            "startQuestionNum": 21,
            "endQuestionNum": 25,
            "standAlone": true,
            "numOfWords": 1,
            "numOfNum": 0,
            "questionHeader": "Write the correct letter, A, B or C next to question 21-25.\nYou may choose any letter more than once.",
            "questionOptionRepeatable": true,
            "questionStatement": "What does Jack tell his tutor about each of the following course option?",
            "questionOptions": [
                "A He'll definitely do it.",
                "B He may or may not do it.",
                "C He won't do it."
            ],
            "numStatements": [
                "21 Media Studies _BLANK_",
                "22 Women and Power _BLANK_",
                "23 Culture and Society _BLANK_",
                "24 Identify and Popular Culture _BLANK_",
                "25 Introduction to Culture Theory _BLANK_"
            ],
		    "answer": [
		        {
			        "number": 21,
			        "ansType": "L",
			        "ans": "C"
		        },
		        {
		        	"number": 22,
		        	"ansType": "L",
		        	"ans": "A"
		        },
		        {
		        	"number": 23,
		        	"ansType": "L",
		        	"ans": "B"
		        },
		        {
		        	"number": 24,
		        	"ansType": "L",
		        	"ans": "B"
		        },
		        {
		        	"number": 25,
		        	"ansType": "L",
		        	"ans": "C"
		        }
		    ]
	    }
        ```
    2. Type 2 example:

        <img src="../public/listening/matchingType2.png" alt="matching type 2 img" style="width:500px;"/>

        for this the json from front-end will be:
        ```
        {
            "startQuestionNum": 1,
            "endQuestionNum": 4,
            "standAlone": false,
            "numOfWords": 1,
            "numOfNum": 0,
            "questionHeader": "Choose your answers from the box and write the correct letter A-E next to questions 1-4.",
            "questionOptionRepeatable": false,
            "questionStatement": "Which hotel matches each description?",
            "questionOptions": [
                "A The Bridge Hotel",
                "B Carlton House",
                "C The Imperial",
                "D The Majestic",
                "E The Royal Oak"
            ],
            "numStatements": [
                "1 is in a rural area _BLANK_",
                "2 only opened recently _BLANK_",
                "3 offers facilities for business functions _BLANK_",
                "4 has an indoor swimming pool _BLANK_"
            ]
	    }
        ``` 




2. Sentence Completion: 
   
   1. Example 1
        <img src="../public/listening/sentenceCompletion.png" alt="sentence completion img" style="width:500px;"/>

        for this json front-end will be:
        ```
        {
            "startQuestionNum": 27,
            "endQuestionNum": 30,
            "standAlone": false,
            "numOfWords": 2,
            "numOfNum": 0,
            "questionHeader": "Complete the sentences below.\nWrite NO MORE THAN TWO WORDS ONLY for each answer.",
            "numStatements": [
                "27 Studying with the Open University demanded a great deal of _BLANK_ ",
                "28 Studying and working at the same time improved Rachel's _BLANK_ skills.",
                "29 It was helpful that the course was structured in _BLANK_.",
                "30 She enjoyed meeting other students at _BLANK_."
            ]
        }
        ```

    2. example 2:

        <img src="../public/listening/sentenceCompletion1.png" alt="sentence completion img" style="width:500px;"/>

        for this json front-end will be:
        ```
        {
            "startQuestionNum": 7,
            "endQuestionNum": 10,
            "standAlone": true,
            "numOfWords": 1,
            "numOfNum": 0,
            "questionHeader": "Complete the sentences below.\nWrite ONE WORD ONLY for each answer.",
            "questionTitle": "Paxton Nature Reserve",
            "numStatements": [
                "7 Paxton is a good place for seeing rare _BLANK_ all year round.",
                "8 This is a particularly good time for seeing certain unusual _BLANK_.",
                "9 Visitors will be able to learn about _BLANK_ and then collect some.",
                "10 Part of the _BLANK_ has been made suitable for swimming."
            ],
	        	"answer": [ 
	        		{
	        			"number": 7, 
	        			"ansType": "S",
	        			"ans":"birds"
	        		},
	        		{
	        			"number": 9, 
	        			"ansType": "S",
	        			"ans":"flowers"
	        		},
	        		{
	        			"number": 10, 
	        			"ansType": "S",
	        			"ans":"mushrooms"
	        		},
	        		{
	        			"number": 7, 
	        			"ansType": "S",
	        			"ans":"river"
	        		}
	        	]
        }
        ```

        `numOfNum` property is for cases like this: 

        <img src="../public/listening/sentenceCompletion2.png" alt="sentence completion img" style="width:500px;"/>

        so json will be:
        ```
        {
            ...
            "numOfWords": 1,
            "numOfNum": 1,
            ...
        }
        ```

3. Multiple Choice question:

    There are two types of multiple choice question:
    - Type 1 (single answer)
    - Type 2 (multiple answers)

    1. Type 1 eg:

        <img src="../public/listening/mcqType1.png" alt="mcq img" style="width:500px;"/>

        for this json front-end will be:
        ```
        {
	    	"startQuestionNum": 15,
	    	"endQuestionNum": 17,
	    	"standAlone": true,
	    	"numOfWords": 1,
	    	"qType": 1,
	    	"questionHeader": [
	    		"Choose the correct letter, A, B or C."
	    	],
	    	"numStatements": [
	    		"15 How does BC Travel plan to expand the painting holidays?",
	    		"16 Why are BC Travel's cooking holidays unusual?",
	    		"17 What does the speaker say about the photography holidays?"
	    	],
	    	"questionOptions": [
	    		[
	    			"A by adding to the number of locations",
	    			"B by increasing the range of levels",
	    			"C by employing more teachers"
	    		],
	    		[
	    			"A They only use organic foods",
	    			"B They have an international focus",
	    			"C They mainly involve vegetarian dishes"
	    		],
	    		[
	    			"A Clients receive individual tution.",
	    			"B The tutors are also trained guides.",
	    			"C Advice is given on selling photographs."
	    		]
	    	],
	    	"answer": [
	    		{
	    			"number": 15,
	    			"ansType": "L",
	    			"ans": "C"
	    		},
	    		{
	    			"number": 16,
	    			"ansType": "L",
	    			"ans": "B"
	    		},
	    		{
	    			"number": 17,
	    			"ansType": "L",
	    			"ans": "A"
	    		}
	    	]
	    }
        ```

    2. Type 2 eg:

        <img src="../public/listening/mcqType2.png" alt="mcq img" style="width:500px;"/>

        for this json front-end will be:
        ```
        {
	    	"startQuestionNum": 11,
	    	"endQuestionNum": 14,
	    	"standAlone": true,
	    	"numOfWords": 1,
	    	"numOfNum": 0,
	    	"qType": 2,
	    	"questionHeader": [
	    		"Choose TWO letter, A-E",
	    		"Choose TWO letter, A-E"
	    	],
	    	"numStatements": [
	    		"Which TWO age groups are taking increasing numbers of holiday with BC Travel?",
	    		"Which TWO are the main reasons given for the popularity of activity holidays?"
	    	],
	    	"questionOptions": [
	    		[
	    			"A 16-30 years",
	    			"B 31-42 years",
	    			"C 43-54 years",
	    			"D 55-64 years",
	    			"E over 65 years"
	    		],
	    		[
	    			"A Clients make new friends.",
	    			"B Clients learn a useful skill.",
	    			"C Clients learn about a different culture.",
	    			"D Clients are excited by the risk involved.",
	    			"E Clients find them value for money."
	    		]
	    	],
	    	"answer": [
	    		{
	    			"number": 11,
	    			"ansType": "IEO",
	    			"qPair": [
	    				12
	    			],
	    			"ans": [
	    				"D",
	    				"E"
	    			]
	    		},
	    		{
	    			"number": 12,
	    			"ansType": "IEO",
	    			"qPair": [
	    				11
	    			],
	    			"ans": [
	    				"D",
	    				"E"
	    			]
	    		},
	    		{
	    			"number": 13,
	    			"ansType": "IEO",
	    			"qPair": [
	    				14
	    			],
	    			"ans": [
	    				"A",
	    				"C"
	    			]
	    		},
	    		{
	    			"number": 14,
	    			"ansType": "IEO",
	    			"qPair": [
	    				13
	    			],
	    			"ans": [
	    				"A",
	    				"C"
	    			]
	    		}
	    	]
	    }
        ```


4. Summary Completion:
    
    In summary completion of listening test there will only be Type 1 questions asked. 
    
    Refer to Reading Summary Completion for Type 1 schema explanation.

5. Note Completion:
   
   This is similar to type 1 summary completion with subtle differences.

    <img src="../public/listening/noteCompletion.png" alt="note completion img" style="width:500px;"/>

    for this json front-end will be:
    ```
    {
        "startQuestionNum": 11,
        "endQuestionNum": 16,
        "standAlone": true,
        "numOfWords": 3,
        "numOfNum": 1,
        "questionHeader": "Complete the notes below.\nWrite NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
        "questionTitle": "The National Arts Centre",
        "questionStatements": [
            "Well known for:\t11 _BLANK_.",
            "Complex consists of:\tconcert rooms\ntheatres\ncinemas\nart galleries\npublic library\nrestaurants\n12 _BLANK_.",
            "Historical background:\t1940 area destroyed by bombs\n19605 — Centre was 13 _BLANK_\nIn 14 _BLANK_ opened to public.",
            "Managed by:\t15 _BLANK_.",
            "Open:\t16 _BLANK_ days per year."
        ],
    		"answer": [
    			{
    				"number": 11,
    				"ansType": "M",
    				"ans": ["classical music concerts", "classic concerts", "music concerts"]
    			},
    			{
    				"number": 12,
    				"ansType": "M",
    				"ans": ["bookshop", "bookstore"]
    			},
    			{
    				"number": 13,
    				"ansType": "S",
    				"ans": "planned"
    			},
    			{
    				"number": 14,
    				"ansType": "M",
    				"ans": ["1983", "the 1980s", "1980s"]
    			},
    			{
    				"number": 15,
    				"ansType": "S",
    				"ans": "City Council"
    			},
    			{
    				"number": 16,
    				"ansType": "S",
    				"ans": "363"
    			}
    		]
    }
    ```

6. Diagram Completion:
   
    In this type of question there will be an image with options given. You have to listening and label the appropriate question statement with a label from option.

    <img src="../public/listening/planMapDiagramLabelling1.png" alt="labelling img" style="width:500px;"/>

    for this json front-end will be:
    ```
    {
        "startQuestionNum": 14,
        "endQuestionNum": 20,
        "standAlone": false,
        "options": true,
        "numOfWords": 1,
        "questionHeader": "Label the map below.\\nWrite the correct letter, A-I, next to Questions 14-20",
        "questionTitle": "Proposed traffic changes in Granford",
        "questionOptions": [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I"
        ],
        "numStatements": [
            "14 New traffic lights _BLANK_",
            "15 Pedestrian crossing _BLANK_",
            "16 Parking allowed _BLANK_",
            "17 New 'No Parking' sign _BLANK_",
            "18 New disabled parking spaces _BLANK_",
            "19 Widened pavement _BLANK_",
            "20 Lorry loading/unloading restrictions _BLANK_"
        ]
    }
    ```
   
    <img src="../public/listening/planMapDiagramLabelling2.png" alt="labelling img" style="width:500px;"/>

    for this json front-end will be:
    ```
    {
        "startQuestionNum": 11,
        "endQuestionNum": 15,
        "standAlone": false,
        "options": true,
        "numOfWords": 1,
        "questionHeader": "Label the plan below.\nChoose five answers from the box and write the correct letters, A-I, next to questions 11-15.",
        "questionTitle": "Town Library",
        "questionOptions": [
          "A Art collection",
          "B Children’s books",
          "C Computers",
          "D Local history collection",
          "E Meeting room",
          "F Multimedia",
          "G Periodicals",
          "H Reference books",
          "I Tourist information"
        ],
        "numStatements": [
          "11 _BLANK_",
          "12 _BLANK_",
          "13 _BLANK_",
          "14 _BLANK_",
          "15 _BLANK_"
        ]
    }
    ```


7. Flowchart Completion:
   
    In this type of question there will be a flow chart. There will be blanks in the flow chart where you have to fill in the appropriate word through listening to audio or there might be options given to and you have to pick a synonym to the word in audio to fill. 

    <img src="../public/listening/flowchartCompletion1.png" alt="flowchart completion img" style="width:500px;"/>

    for this json front-end will be:
    ```
    {
        "startQuestionNum": 31,
        "endQuestionNum": 34,
        "standAlone": true,
        "options": false,
        "numOfWords": 2,
        "numOfNum": 2,
        "questionHeader": "You will hear an extract from a university lecture on the topic of economics.\nFirst, look at questions 31 to 34. Now listen carefully and answer questions 31-34.\nQuestions 31-34. Do not write MORE THAN TWO WORDS AND/OR NUMBERS. Complete the chart below.",
        "steps": [
            [
                "Effects of 2020 Pandemic"
            ],
            [
                "31 _BLANK_ changed"
            ],
            [
                " Demand for 32 _BLANK_ in stores increased"
            ],
            [
                "Prices increased by more than 2%"
            ],
            [
                "33 _BLANK_ went up by 2.4%",
                "Protein went up by 34 _BLANK_"
            ]
        ],
    	"answer": [
    		{
    			"number": 31,
    			"ansType": "S",
    			"ans": "consumer habits"
    		},
    		{
    			"number": 32,
    			"ansType": "M",
    			"ans": ["products", "food"]
    		},
    		{
    			"number": 33,
    			"ansType": "S",
    			"ans": "cereals"
    		},
    		{
    			"number": 34,
    			"ansType": "S",
    			"ans": "4.3%"
    		}
    	]
    }
    ```

    <img src="../public/listening/flowchartCompletion2.png" alt="flowchart completion img" style="width:500px;"/>

    ```
    {
        "startQuestionNum": 26,
        "endQuestionNum": 30,
        "standAlone": false,
        "options": true,
        "questionHeader": "Complete the flowchart below.\nChoose FIVE answers from the box and write the correct letter, A-H, next to Questions 26-30.",
        "questionTitle": "Stages in Experiment",
        "questionOptions": [
          "A container",
          "B soil",
          "C weight",
          "D condition",
          "E height",
          "F colour",
          "G types",
          "H depths"
        ],
        "steps": [
            [
                "Select seeds of different 26 _BLANK_ and sizes."
            ],
            [
                "Measure and record the 27 _BLANK_ and size of each one."
            ],
            [
                "Decide on the 28 _BLANK_ to be used."
            ],
            [
                "Use a different 29 _BLANK_ for each seed and label it."
            ],
            [
                "After about 3 weeks, record the plant's 30 _BLANK_"
            ],
            [
                "Investigate the findings."
            ]
        ]
    }
    ```

8. Table Completion: 
   
    In this question there is a table filled with data and there are blanks you have to use audio info or passage info. (same schema as listening table completion)

    <img src="../public/listening/tableCompletion.png" alt="table completion img" style="width:500px;"/>

    for this json front-end will be:
    ```
    {
        "startQuestionNum": 6,
        "endQuestionNum": 10,
        "standAlone": true,
        "numOfWords": 1,
        "numOfNum": 1,
        "numOfRows": 7,
        "numOfCols": 3,
        "rows": [
            ["TRANSPORT", "CASH FARE", "CARD FARE"],
            ["Bus", "6 $ _BLANK_", "$1.50"],
            ["Train (peak)", "$10", "$10"],
            ["Train (off-peak)- before 5pm or after 7 _BLANK_ pm", "$10", "8 $ _BLANK_"],
            ["9 _BLANK_ ferry", "$4.50", "$3.55"],
            ["Tourist ferry 10 _BLANK_", "$35", "-"],
            ["Tourist ferry (whole day)", "$65", "-"]
        ],
        "answer": [
            {
                "number": 6,
                "ansType": "S",
                "ans": "1.80"
            },
            {
                "number": 7,
                "ansType": "S",
                "ans": "7.30"
            },
            {
                "number": 8,
                "ansType": "S",
                "ans": "7.15"
            },
            {
                "number": 9,
                "ansType": "S",
                "ans": "commuter"
            },
            {
                "number": 10,
                "ansType": "S",
                "ans": "afternoon"
            }
        ]
    }
    ```

9. Form Completion:
    
    In this question there is a form with blanks in it and you have to use audio info to fill it in.

    <img src="../public/listening/formCompletion.png" alt="form completion img" style="width:500px;"/>

    for this the json from front-end will be:
    ```
    {
	    "startQuestionNum": 1,
		"endQuestionNum": 8,
		"standAlone": true,
		"numOfWords": 3,
		"numOfNum": 1,
		"questionHeader": "Questions 1-8\nComplete the form below.\nWrite NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
		"questionTitle": "PACKHAM'S SHIPPING AGENCY - customer quotation form",
		"questionStatements": [
		    "Name:\tJacob 1 _BLANK_",
			"Address to be collected from:\t2 _BLANK_ College, Downlands Rd",
			"Town:\tBristol",
			"Postcode:\t3 _BLANK_",
			"Size of container:",
			"length: 1.5m",
			"width: 4 _BLANK_",
			"height: 5 _BLANK_",
			"Contents:",
			"clothes",
			"6 _BLANK_",
		    "7 _BLANK_",
			"Total estimated value: 8 £ _BLANK_"
		],
		"answer": [
		    {
				"number": 1,
				"ansType": "S",
				"ans": "Mkere"
			},
			{
				"number": 2,
				"ansType": "S",
				"ans": "Westall"
			},
			{
				"number": 3,
				"ansType": "S",
				"ans": "BS8 9PU"
			},
			{
				"number": 4,
				"ansType": "M",
				"ans": [
					"0.75 m",
					"0.75 m wide",
					"0.75 metre",
					"0.75 metre wide",
					"0.75 metres",
					"0.75 metres wide",
					"0.75 meter",
					"0.75 meter wide",
					"0.75 meters",
					"0.75 meters wide",
					"three quarter metre wide",
					"three quarter meter",
					"three quarter meter wide",
					"three quarter a metre",
					"three quarter a metre wide",
					"three quarter a meter",
					"three quarter a meter wide",
					"three quarter of metre",
					"three quarter of metre wide",
					"three quarter of meter",
					"three quarter of meter wide",
					"three quarter of a metre",
					"three quarter of a metre wide",
					"three quarter of a meter",
					"three quarter of a meter wide",
					"three quarters metre",
					"three quarters metre wide",
					"three quarters meter",
					"three quarters meter wide",
					"three quarters a metre",
					"three quarters a metre wide",
					"three quarters a meter",
					"three quarters a meter wide",
					"three quarters of metre",
					"three quarters of metre wide",
					"three quarters of meter",
					"three quarters of meter wide",
					"three quarters of a metre",
					"three quarters of a metre wide",
					"three quarters of a meter",
					"three quarters of a meter wide",
					"three - quarter metre",
					"three - quarter metre wide",
					"three - quarter meter",
					"three - quarter meter wide",
					"three - quarter a metre",
					"three - quarter a metre wide",
					"three - quarter a meter",
					"three - quarter a meter wide",
					"three - quarter of metre",
					"three - quarter of metre wide",
					"three - quarter of meter",
					"three - quarter of meter wide",
					"three - quarter of a metre",
					"three - quarter of a metre wide",
					"three - quarter of a meter",
					"three - quarter of a meter wide",
					"three - quarters metre",
					"three - quarters metre wide",
					"three - quarters meter",
					"three - quarters meter wide",
					"three - quarters a metre",
					"three - quarters a metre wide",
					"three - quarters a meter",
					"three - quarters a meter wide",
					"three - quarters of metre",
					"three - quarters of metre wide",
					"three - quarters of meter",
					"three - quarters of meter wide",
					"three - quarters of a metre",
					"three - quarters of a metre wide",
					"three - quarters of a meter",
					"three - quarters of a meter wide",
					"3/4 m",
					"3/4 m wide",
					"75 cm",
					"75 cm wide",
					"75 cms",
					"75 cms wide"
				]
			},
			{
				"number": 5,
				"ansType": "M",
				"ans": [
					"0.5 m",
					"0.5 m high",
					"0.5 m deep",
					"0.5 metre",
					"0.5 metre high",
					"0.5 metre deep",
					"0.5 metres",
					"0.5 metres high",
					"0.5 metres deep",
					"0.5 meter",
					"0.5 meter high",
					"0.5 meter deep",
					"0.5 meters",
					"0.5 meters high",
					"0.5 meters deep",
					"half  meter",
					"half  meter deep",
					"half  meter high",
					"half  metre",
					"half  metre deep",
					"half  metre high",
					"half a meter",
					"half a meter deep",
					"half a meter high",
					"half a metre",
					"half a metre deep",
					"half a metre high",
					"a half  meter",
					"a half  meter deep",
					"a half  meter high",
					"a half  metre",
					"a half  metre deep",
					"a half  metre high",
					"a half a meter",
					"a half a meter deep",
					"a half a meter high",
					"a half a metre",
					"a half a metre deep",
					"a half a metre high",
					"1/2 m",
					"1/2 m deep",
					"1/2 m high",
					"50 cm",
					"50 cm deep",
					"50 cm high",
					"50 cms",
					"50 cms deep",
					"50 cms high"
				]
			},
			{
				"number": 6,
				"ansType": "IEO",
				"qPair": [
					7
				],
				"ans": [
					"some books",
					"books",
					"some toys",
					"toys"
				]
			},
			{
				"number": 7,
				"ansType": "IEO",
				"qPair": [
					6
				],
				"ans": [
					"some books",
					"books",
					"some toys",
					"toys"
				]
			},
			{
				"number": 8,
				"ansType": "S",
				"ans": "1700"
			}
		]
	}
    ```

10. Short Answer:
    
    In this question you have to fill the given blanks using audio info.

    <img src="../public/listening/shortAnswer.png" alt="short ans img" style="width:500px;"/>

    for this json front-end will be:
    ```
    {
        "startQuestionNum": 11,
        "endQuestionNum": 16,
        "standAlone": true,
        "numOfWords": 3,
        "numOfNum": 1,
        "questionHeader": "Answer the questions below.\nWrite NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
        "questionStatements": [
            "What TWO factors can make social contact in a foreign country difficult?",
            "Which types of community group does the speaker give examples of?",
            "In which TWO places can information about community activities be found?"
        ],
        "questionBlanks": [
            [
                "11 _BLANK_",
                "12 _BLANK_"
            ],
            [
                "theatre",
                "13 _BLANK_",
                "14 _BLANK_"
            ],
            [
                "15 _BLANK_",
                "16 _BLANK_"
            ]
        ],
        "answer": [
            {
        	    "number": 11,
        		"ansType": "S",
        		"ans": "language"
        	},
        	{
        		"number": 12,
        		"ansType": "S",
        		"ans": "customs"
        	},
        	{
        		"number": 13,
        		"ansType": "M",
        		"ans": ["music", "music groups"]
        	},
        	{
        		"number": 14,
        		"ansType": "M",
        		"ans": ["local history", "local history groups"]
        	},
        	{
        		"number": 15,
        		"ansType": "M",
        		"ans": ["library", "libraries", "public library", "public libraries", "the public library", "the public libraries", "the public library", "the public libraries"]
        	},
        	{
        		"number": 16,
        		"ansType": "M",
        		"ans": ["town hall", "the town hall"]
        	}
        ]
    }   
    ```

Reading Schema explanations:

1. Matching:

    1. Matching Info Type:
   
        <img src="../public/reading/matchingInfo.png" alt="matching  info img" style="width:500px;"/>

        for this the json from front-end will be:
        ```
        {
        	"startQuestionNum": 1,
        	"endQuestionNum": 3,
        	"standAlone": true,
        	"qTypeMatchingInfo": true,
        	"questionHeader": "Reading Passage 1 has nine paragraphs, A-I.\\nWrite the correct letter, A-I, in boxes 1-3 on your answer sheet.",
        	"questionOptionRepeatable": false,
        	"numStatements": [
        		"1 a reference to characteristics that only apply to food production.",
        		"2 a reference to challenges face only farmers in certain parts of the world.",
        		"3 a reference to difficulties in bringing about co-operation between farmers"
            ],
        	"answer": [
        		{
        			"number": 1,
        			"ansType": "L",
        			"ans": "A"
        		},
        		{
        			"number": 2,
        			"ansType": "L",
        			"ans": "B"
        		},
        		{
        			"number": 3,
        			"ansType": "L",
        			"ans": "H"
        		}
        	]
        }
        ```

    2. Matching List Type:

        <img src="../public/reading/matchingList.png" alt="matching list img" style="width:500px;"/>

        for this the json from front-end will be:
        ```
        {
        	"startQuestionNum": 7,
        	"endQuestionNum": 10,
        	"standAlone": true,
        	"qTypeList": true,
        	"questionHeader": "Look at the following items (Questions 7-10) and the list of groups below.\nMatch each item with the group which first invented or used them.\nWrite the correct letter A-E in boxes 7-10 on your answer sheet.\nNB you may use any letter more than once",
        	"questionOptionRepeatable": true,
        	"questionTitle": "First invented or used by",
        	"questionStatements": [
        		"A The Chinese",
        		"B The Indians",
        		"C The British",
        		"D The Arabs",
        		"E and The Americans"
        	],
        	"numStatements": [
        		"7 black powder",
        		"8 rocket-propelled arrows for fighting",
        		"9 rocket as war weapons",
        		"10 the rocket launcher"
        	],
        	"answer": [
        		{
        			"number": 7,
        			"ansType": "L",
        			"ans": "A"
        		},
        		{
        			"number": 8,
        			"ansType": "L",
        			"ans": "A"
        		},
        		{
        			"number": 9,
        			"ansType": "L",
        			"ans": "B"
        		},
        		{
        			"number": 1,
        			"ansType": "L",
        			"ans": "E"
        		}
            ]
        }
        ```

2. Sentence Completion: 
   The schema and model for the sentence completion is same for reading and listening.

3. Multiple Choice Questions: 
    There are two types of multiple question:
    - Type 1 (single answer)
    - Type 2 (multiple answer)

    1. Type 1 eg:

        <img src="../public/reading/mcqType1.png" alt="mcq img" style="width:500px;"/>

        for this json front-end will be:

        ```
            {
            	"startQuestionNum": 10,
            	"endQuestionNum": 12,
            	"standAlone": false,
            	"numOfWords": 1,
            	"qType": 1,
            	"questionHeader": [
            		"Choose the correct letter, A, B, C or D.\nWrite your answers ni boxes 10-12 on your answer sheet."
            	],
            	"numStatements": [
            		"10 Research completed in 1982 found that in the US soil erosion",
            		"11 By the mid-1980s, farmers in Denmark",
            		"12 Which one of the following increased in New Zealand after 1984"
            	],
            	"questionOptions": [
            		[
                		'A. reduced the productivity of farmland by 20 per cent.',
                		'B. was almost as severe as in India and China.',
                		'C. was causing significant damage to 20 per cent of farmland.',
                		'D. could be reduced by converting cultivated land to meadow or forest.',
            		],
            		[
            		    'A. used 50 per cent less fertiliser than Dutch farmers.',
            		    'B. used twice as much fertiliser as they had in 1960.',
            		    'C. applied fertiliser much more frequently than in 1960.more than doubled the amount of pesticide they used in just 3 years.',
            		    'D. more than doubled the amount of pesticide they used in just 3 years.',
            		],
            		[
            		    'A. farm incomes',
            		    'B. use of fertiliser',
            		    'C. over-stocking',
            		    'D. farm diversification',
            		],
        		]
            }
        ```

    2. Type 2 eg:

        <img src="../public/reading/mcqType2.png" alt="mcq img" style="width:500px;"/>

        for this json front-end will be:

        ```
            {
        		"startQuestionNum": 25,
        		"endQuestionNum": 27,
        		"standAlone": false,
        		"numOfWords": 1,
        		"numOfNum": 0,
        		"qType": 2,
        		"questionHeader": ['Choose THREE letters, A-G'],
        		"numStatements": ['Which THREE topics does Sandra agree to include in the proposal?'],
        		"questionOptions": [
            		[
            		    'A. climate change',
            		    'B. field trip activities',
            		    'C. geographical features',
            		    'D. impact of tourism',
            		    'E. myths and legends',
            		    'F. plant and animal life',
            		    'G. social history',
            		],
        		]
        	}
        ```

4. Summary Completion: 

    There are two types of reading questions. In Type 1 there is a summary with blanks and you have to fill them. In type 2 there are options which are multiple options. The number of options is greater than the number fo blanks.

    1. Type 1 example: 

        <img src="../public/listening/summaryCompletionType1.png" alt="summary completion img" style="width:500px;"/>

        for this the json from front-end will be:
        ```
        {
        	"startQuestionNum": 27,
        	"endQuestionNum": 31,
        	"standAlone": true,
        	"numOfWords": 2,
        	"numOfNum": 0,
        	"qType": 1,
        	"questionHeader": "Complete the summary below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.\nWrite your answers in boxes 27-31 on your answer sheet.",
        	"questionTitle": "The Montreal Study",
        	"summary": "Participants, who were recruited for the study through advertisements, had their brain activity monitored while listening to their favourite music. It was noted that the music stimulated the brain's neurons to release a substance called 27 _BLANK_ in two of the parts of the brain which are associated with feelings 28 _BLANK_.\nResearchers also observed that the neurons in the area of the brain called the 20 _BLANK_ were particularly active just before the participant's favourite moment in the music — the period known as the 30 _BLANK_. Activity in this part of the brain is associated with the expectation of ‘reward stimuli such as 31 _BLANK_.",
        	"questionOptions": [],
        	"answer": [
        		{
        			"number": 27, 
        			"ansType": "S",
        			"ans":"dopamine"
        		},
        		{
        			"number": 28, 
        			"ansType": "S",
        			"ans":"pleasure"
        		},
        		{
        			"number": 29, 
        			"ansType": "S",
        			"ans":"caudate"
        		},
        		{
        			"number": 30, 
        			"ansType": "S",
        			"ans":"anticipatory phase"
        		},
        		{
        			"number": 31, 
        			"ansType": "S",
        			"ans":"food"
        		}
        	]
        }
        ```

    2. Type 2 example: 

        <img src="../public/reading/summaryCompletion.png" alt="summary completion img" style="width:500px;"/>

        for this the json from front-end will be:
        ```
        {
            "startQuestionNum": 1,
            "endQuestionNum": 4,
            "standAlone": true,
            "numOfWords": 1,
            "numOfNum": 0,
            "qType": 2,
            "questionHeader": "Complete the summary using the list of words, A-G, below.\nWrite the correct letter, A-G, in boxes 1-4 on your answer sheet.",
            "questionTitle": "The importance of language",
            "summary": "The wheel is one invention that has had a major impact on 1 _BLANK_ aspects of life, but no impact has been as 2 _BLANK_ as that of language. Language is very 3 _BLANK_, yet composed of just a small number of sounds. Language appears to be 4 _BLANK_ to us. However, its sophistication is often overlooked.",
            "questionOptions": [
                "A difficult",
                "B complex",
                "C original",
                "D admired",
                "E material",
                "F easy",
                "G fundamental"
            ],
        		"answer": [
        			{
        				"number": 1,
        				"ansType": "L",
        				"ans": "E"
        			},
        			{
        				"number": 2,
        				"ansType": "L",
        				"ans": "G"
        			},
        			{
        				"number": 3,
        				"ansType": "L",
        				"ans": "B"
        			},
        			{
        				"number": 4,
        				"ansType": "L",
        				"ans": "F"
        			}
        		]
        }
        ```

5. Note Completion:

   The schema and model for the note completion is same for reading and listening.

6. Diagram Completion:
   
    In this type of question there will be an image with blanks or image with options to fill the blanks. You have to read the passage and fill the blanks appropriately. 

    <img src="../public/reading/diagramCompletion1.png" alt="diagram completion img" style="width:500px;"/>

    for this json front-end will be:
    ```
    {
        "startQuestionNum": 1,
        "endQuestionNum": 5,
        "standAlone": true,
        "options": false,
        "numOfWords": 3,
        "questionHeader": "Label the diagram below. Choose NO MORE THAN THREE WORDS from the passage for each answer. Write your answers in boxes 1-5 on your answer sheet.",
        "questionTitle": "The Seawater Greenhouse",
        "numStatements": [
            "1 _BLANK_",
            "2 _BLANK_",
            "3 _BLANK_",
            "4 _BLANK_",
            "5 _BLANK_ for irrigation"
        ],
        "answer": [
            {
            	"number": 1,
            	"ansType": "M",
            	"ans": ["hot dry hair", "dry hot air"]
            },
            {
            	"number": 2,
            	"ansType": "M",
            	"ans": ["cool moist air","moist cool air"]
            },
            {
            	"number": 3,
            	"ansType": "M",
            	"ans": ["infrared radiation", "infrared light"]
            },
            {
            	"number": 4,
            	"ansType": "M",
            	"ans": ["a condenser", "the condenser"]
            },
            		{
            	"number": 5,
            	"ansType": "M",
            	"ans": ["pure water","distilled water","pure distilled water"]
            }
    	]
    }
    ```

7. Flowchart Completion: 

    In this type of question there will be a flow chart. There will be blanks in the flow chart where you have to fill in the appropriate word through reading the passage.

    <img src="../public/reading/flowchartCompletion.png" alt="flowchart completion img" style="width:500px;"/>

    from this json will be:
    ```
    {
        "startQuestionNum": 31,
        "endQuestionNum": 34,
        "standAlone": true,
        "options": false,
        "numOfWords": 2,
        "numOfNum": 2,
        "questionHeader": "You will hear an extract from a university lecture on the topic of economics.\nFirst, look at questions 31 to 34. Now listen carefully and answer questions 31-34.\nQuestions 31-34. Do not write MORE THAN TWO WORDS AND/OR NUMBERS. Complete the chart below.",
        "steps": [
            [
                "Effects of 2020 Pandemic"
            ],
            [
                "31 _BLANK_ changed"
            ],
            [
                " Demand for 32 _BLANK_ in stores increased"
            ],
            [
                "Prices increased by more than 2%"
            ],
            [
                "33 _BLANK_ went up by 2.4%",
                "Protein went up by 34 _BLANK_"
            ]
        ],
    		"answer": [
    			{
    				"number": 31,
    				"ansType": "S",
    				"ans": "consumer habits"
    			},
    			{
    				"number": 32,
    				"ansType": "M",
    				"ans": ["products", "food"]
    			},
    			{
    				"number": 33,
    				"ansType": "S",
    				"ans": "cereals"
    			},
    			{
    				"number": 34,
    				"ansType": "S",
    				"ans": "4.3%"
    			}
    		]
    }
    ```

8. Table Completion:
   
    In this question there is a table filled with data and there are blanks you have to use audio info or passage info. (same schema as listening table completion)

    <img src="../public/reading/tableCompletion.png" alt="flowchart completion img" style="width:500px;"/>

    from this json will be:
    ```
    {
        "startQuestionNum": 6,
        "endQuestionNum": 10,
        "standAlone": true,
        "numOfWords": 1,
        "numOfNum": 1,
        "numOfRows": 7,
        "numOfCols": 3,
        "rows": [
          ["TRANSPORT", "CASH FARE", "CARD FARE"],
          ["Bus", "6 $ _BLANK_", "$1.50"],
          ["Train (peak)", "$10", "$10"],
          ["Train (off-peak)- before 5pm or after 7 _BLANK_ pm", "$10", "8 $ _BLANK_"],
          ["9 _BLANK_ ferry", "$4.50", "$3.55"],
          ["Tourist ferry 10 _BLANK_", "$35", "-"],
          ["Tourist ferry (whole day)", "$65", "-"]
        ],
    	"answer": [
    		{
    			"number": 6,
    			"ansType": "S",
    			"ans": "1.80"
    		},
    		{
    			"number": 7,
    			"ansType": "S",
    			"ans": "7.30"
    		},
    		{
    			"number": 8,
    			"ansType": "S",
    			"ans": "7.15"
    		},
    		{
    			"number": 9,
    			"ansType": "S",
    			"ans": "commuter"
    		},
    		{
    			"number": 10,
    			"ansType": "S",
    			"ans": "afternoon"
    		}
    	]
    }
    ```

9. Short Answer:
    
    Use info from passage to answer questions.

    <img src="../public/reading/shortAns.png" alt="short ans img" style="width:500px;"/>

    for this json front-end will be:
    ```
    {
      "startQuestionNum": 1,
      "endQuestionNum": 4,
      "standAlone": true,
      "numOfWords": 3,
      "numOfNum": 1,
      "questionHeader": "Answer the questions below.\nChoose NO MORE THAN THREE WORDS AND/OR A NUMBER from the text for each answer.\nWrite your answers in boxes 1-4 on your answer sheet.",
      "numStatements": [
        "What is the African rhinoceros compared to?",
        "Which type of rhino fell in number to below a hundred?",
        "What percentage of black rhinos had been illegally killed by 1992?",
        "How have the criminals improved their success?"
      ],
    	"answer": [
    		{
    			"number": 1,
    			"ansType": "S",
    			"ans": "tank on legs"
    		},
    		{
    			"number": 2,
    			"ansType": "S",
    			"ans": "southern white rhino"
    		},
    		{
    			"number": 3,
    			"ansType": "S",
    			"ans": "96%"
    		},
    		{
    			"number": 4,
    			"ansType": "S",
    			"ans": "better equipped"
    		}
    	]
    }
    ```

10. Yes/No/Not Given and True/False/Not Given:

    In this type of question there will be statements that you have to label as True, False or Not Given there is also case where the question statements are facts and you have to based on the passage label them with Yes, No or Not Given.

    <img src="../public/reading/ynng.png" alt="short ans img" style="width:500px;"/>

    for this json front-end will be:
    ```
    {
        "startQuestionNum": 7,
        "endQuestionNum": 12,
        "standAlone": true,
        "questionHeader": "Do the following statements agree with the views of the writer in the Reading Passage?\nWrite:\n\tYES if the statement agrees with the views of the writer.\n\tNO if the statement contradicts what the writer thinks.\n\tNOT GIVEN if it is impossible to know what the writer's point of view is.",
        "numStatements": [
            "7\tChildren can learn their first language without being taught.",
            "8\tFrom the time of their birth, humans seem to have an ability to learn language",
            "9\tAccording to experts in the 1950s and '60s, language learning is very similar to the training of animals.",
            "10\tRepetition in language learning is important, according to Dr Eliot.",
            "11\tDr Golinkoff is concerned that \"baby talk\" is spoken too much by some parents.",
            "12\tThe first word a child learns to recognise is usually \"Mummy\" or \"Daddy\"."
        ],
    	"answer": [
    		{
    			"number": 7,
    			"ansType": "O1",
    			"ans": "YES"
    		},
    		{
    			"number": 8,
    			"ansType": "O1",
    			"ans": "NO"
    		},
    		{
    			"number": 9,
    			"ansType": "O1",
    			"ans": "YES"
    		},
    		{
    			"number": 10,
    			"ansType": "O1",
    			"ans": "NG"
    		},
    		{
    			"number": 11,
    			"ansType": "O1",
    			"ans": "NO"
    		},
    		{
    			"number": 12,
    			"ansType": "O1",
    			"ans": "NG"
    		}
    	]
    }
    ```

    <img src="../public/reading/tfng.png" alt="short ans img" style="width:500px;"/>

    for this json front-end will be:
    ```
    {
        "startQuestionNum": 9,
        "endQuestionNum": 13,
        "standAlone": true,
        "questionHeader": "Do the following statements agree with the views of the writer in the Reading Passage?\nIn boxes 9-13 on your answer write:\n\tTRUE if the statement agrees with the views of the information.\n\tNO if the statement contradicts the information.\n\tNOT GIVEN if there is no information on this.",
        "numStatements": [
            "9\tCoconut seeds need shade in order to germinate.",
            "11\tCoconuts were probably transported to Asia from America in the 16th century.",
            " 12\tCoconuts found on the west coast of America were a different type from those found on the east coast.",
            "13\tAll coconuts found in Asia are cultivated varieties.",
            "14\tCoconuts are cultivated in different ways in America and the Pacific."
        ],
    	"answer": [
    		{
    			"number": 9,
    			"ansType": "O2",
    			"ans": "FALSE"
    		},
    		{
    			"number": 10,
    			"ansType": "O2",
    			"ans": "FALSE"
    		},
    		{
    			"number": 11,
    			"ansType": "O2",
    			"ans": "NG"
    		},
    		{
    			"number": 12,
    			"ansType": "O2",
    			"ans": "TRUE"
    		},
    		{
    			"number": 13,
    			"ansType": "O2",
    			"ans": "NG"
    		}
    	]
    }
    ```

