This is an explaination of all schemas and models.

In ielts exam there are a limited types of questions that can be asked. for eg:
- Listening
  - Multiple Choice Questions ( Type 1 and 2 )
  - Matching ( Matching List and Matching Info )
  - Diagram Labelling
  - Plan/Map Labelling
  - Sentence Completion
  - Note Completion
  - Flow Chat Completion
  - Table Completion
  - Summary Completion
  - Form Completion


- Reading
  - Multiple Choice Questions ( Type 1 and 2 )
  - True/False/Not Given
  - Yes/No/Not Given
  - Matching ( Matching List and Matching Info )
  - Sentence Completion
  - Note Completion
  - Flow Chat Completion
  - Table Completion
  - Diagram Labelling
  - Summary Completion
  - Short Answer Questions


Listening schema explainations:

1. Matching : 
   1. Type 1 example:

        <img src="../public/listening/matchingType1.png" alt="matching type 1 img" style="width:400px;"/>

        for this the json will be :
        ```const q = {
            startQuestionNum : 21,
            endQuestionNum : 25,
            questionHeader : 'Write the correct letter, A, B or C next to question 21-25.\nYou may choose any letter more than once.',
            questionOptionRepeatable : true,
            questionStatment : 'What does Jack tell his tutor about each of the following course option?',
            questionOptions : ['
            A He'll definitely do it.', 
            'B He may or may not do it.',
            'C He won't do it.'],
            numStatements : [
                '21 Media Studies _BLANK_',
                '22 Women and Power _BLANK_',
                '23 Culture and Society _BLANK_',
                '24 Identify and Popular Culture _BLANK_',
                '25 Introduction to Culture Theory _BLANK_',
            ],
        }
        ```
   2. Type 2 example:

        <img src="../public/listening/matchingType2.png" alt="matching type 2 img" style="width:400px;"/>

        for this the json will be:
        ```
        const q = {
            startQuestionNum: 1,
            endQuestionNum: 4,
            questionHeader: 'Choose your answers from the box and write the correct letter A-E next to questions 1-4.',
            questionOptionRepeatable: false,
            questionStatment: 'Which hotel matches each description?',
            questionOptions: [
                'A The Bridge Hotel',
                'B Carlton House',
                'C The Imperial',
                'D The Majestic',
                'E The Royal Oak'
            ],
            numStatements: [
                '1 is in a rural area _BLANK_',
                '2 only opened recently _BLANK_',
                '3 offers facilities for business functions _BLANK_',
                '4 has an indoor swimming pool _BLANK_',
            ]
        }
        ``` 




2. Sentence Completion: 
    
    example 1:

   <img src="../public/listening/sentenceCompletion.png" alt="sentence completion img" style="width:400px;"/>

    for this json will be:
    ```
    const q = {
        startQuestionNum: 9,
        endQuestionNum: 10,
        numOfWords: 3,
        numOfNum: 0,
        questionHeader: 'Write NO MORE THAN THREE WORDS to complete each space.' ,
        numStatements: [
            '9 Samuel's aunt plans to travel to his apartment on _BLANK_.',
            '10 The journey time is approximately _BLANK_.'
        ] 
    }
    ```

    example 2:

    <img src="../public/listening/sentencCompletion1.png" alt="sentence completion img" style="width:400px;"/>

    for this json will be:
    ```
    const q = {
        startQuestionNum: 7,
        endQuestionNum: 9,
        numOfWords: 1,
        numOfNum: 0,
        questionHeader: 'Complete the sentences below.\nWrite ONE WORD ONLY for each answer.\n\tPaxton Nature Reserve' ,
        numStatements: [
            '7 Paxton is a good place for seeing rare _BLANK_ all year round.',
            '9 This is a particularly good time for seeing certain unusual _BLANK_.',
            '9 Visitors will be able to learn about _BLANK_ and then collect some.',
            '10 Part of the _BLANK_ has been made suitable for swimming.'
        ] 
    }
    ```

    `numOfNum` property is for cases like this: 

    <img src="../public/listening/sentenceCompletion2.png" alt="sentence completion img" style="width:400px;"/>

    so json will be:
    ```
    const q = {
        ...
        numOfWords: 1,
        numOfNum: 1,
        ...
    }
    ```


3. Multiple Choice question:



    There are two types of multiple question:
    - type 1 (single answer)
    - type 2 (multiple answer)

    Type 1 eg:

    <img src="../public/listening/mcqType1.png" alt="mcq img" style="width:400px;"/>

    for this json will be:
    ```
    const q = {
        startQuestionNum: 15,
        endQuestionNum: 17,
        qType: 1
        questionHeader: ['Choose the correct letter, A, B or C.'],
        numStatements:[
            '15 How does BC Travel plan to expand the painting holidays?',
            '16 Why are BC Travel's cooking holidays unusual?',
            '17 What does the speaker say about the photography holidays?'
        ],
        questionStatements: [
            [
                'A by adding to the number of locations',
                'B by increasing the range of levels',
                'C by employing more teachers'
            ],
            [
                'A They only use organic foods',
                'B They have an international focus',
                'C They mainly involve vegetarian dishes'
            ],
            [
                'A Clients receive individual tution.',
                'B The tutors are also trained guides.',
                'C Advice is given on selling photographs.'
            ],
        ]
    };
    ```

    Type 2 eg:

    <img src="../public/listening/mcqType2.png" alt="mcq img" style="width:400px;"/>

    for this json will be:
    ```
    const q = {
        startQuestionNum: 11,
        endQuestionNum: 14,
        qType: 2
        questionHeader: ['Choose TWO letter, A-E','Choose TWO letter, A-E'],
        numStatements:['Which TWO age groups are taking increasing numbers of holiday with BC Travel?','Which TWO are the main reasons given for the popularity of activity holidays?'],
        questionStatements: [
            [
                'A 16-30 years', 
                'B 31-42 years', 
                'C 43-54 years', 
                'D 55-64 years', 
                'E over 65 years'],
                [
                    'A Clients make new friends.', 
                    'B Clients learn a useful skill.', 
                    'C Clients learn about a different culture.', 
                    'D Clients are excited by the risk involved.', 
                    'E Clients find them value for money.'
                ]
            ]
    };
    ```


4. Summary Completion:
    In summary completion of listening test there will only be Type 1 questions asked. Refer to Reading Summary Completion for Type 1 schema explaination.

Will keep adding as the schemas are finalised

Reading Schema explainations:

1. Matching:
   1. Matching Info Type:

        <img src="../public/reading/matchingInfo.png" alt="matching  info img" style="width:400px;"/>

        for this the json will be:
        ```
        const q = {
            startQuestionNum: 1,
            endQuestionNum: 3,
            qTypeMatchingInfo : true,
            questionHeader : 'Reading Passage 1 has nine paragraphs, A-I.\nWrite the correct letter, A-I, in boxes 1-3 on your answer sheet.',
            numStatements : [
                '1 a reference to characteristics that only apply to food production.',
                '2 a reference to challenges face only farmers in certain parts of the world.',
                '3 a reference to difficulties in bringing about co-operation between farmers'
            ]
        }
        ```
   2. Matching List Type:

        <img src="../public/reading/matchingList.png" alt="matching list img" style="width:400px;"/>

        for this the json will be:
        ```
        const q = {
            startQuestionNum : 1,
            endQuestionNum : 5,
            qTypeList : true,
            questionHeader : 'Sample Passage 6 has six sections, A-F.\nChoose the correct heading for section A-D and F from the list of heading below.',
            questionTitle: 'List of Headings',
            questionTitle: 'List of Headings',
            questionStatements: [
                'i. The probable effects of the new international trade agreement',
                'ii. The environmental impact of modern farming',
                'iii. Farming and soil erosion',
                'iv. The effects of government policy in poor countries.',
                'v Governments and management of environment',
                'vi The effects of government policy in rich countries',
                'vii Farming and food output',
                'viii The effects of government policy on food output;,
                'ix The new prospects for world trade'
                ],
                numStatements: [
                    '1 Section A',
                    '2 Section B',
                    '3 Section C',
                    '4 Section D',
                    '5 Section F'
                ],
        }
        ```
2. Sentence Completion: 
   The schema and model for the sentence completion is same for reading and listening.

3. Multiple Choice Questions: 
    The schema and model is the same.  However, the reading mcqs will not include type 2 question. so `qType` should always be 1 for reading only.

4. Summary Completion: 

    There are two types of reading questions. In Type 1 there is a summary with blanks and you have to fill them. In type 2 there are options which are multiple options. The number of options is greater than the number fo blanks.

    Type 1 example: 

    <img src="../public/reading/summaryCompletionType1.png" alt="summary completion img" style="width:400px;"/>

    for this the json will be:
    ```
    const q = {
        startQuestionNum: 27,
        endQuestionNum: 31,
        numOfWords: 2,
        numOfNum: 0,
        qType: 1,
        questionHeader: 'Complete the summary below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.\nWrite your answers in boxes 27-31 on your answer sheet.',
        questionTitle: 'The Montreal Study',
        summary: 'Participants, who were recruited for the study through advertisements, had their brain activity monitored while listening to their favourite music. It was noted that the music stimulated the brain's neurons to release a substance called 27 _BLANK_ in two of the parts of the brain which are associated with feelings 28 _BLANK_. \nResearchers also observed that the neurons in the area of the brain called the 20 _BLANK_ were particularly active just before the participant's favourite moment in the music — the period known as the 30 _BLANK_. Activity in this part of the brain is associated with the expectation of ‘reward stimuli such as 31 _BLANK_.',
    }
    ```

    Type 2 example: 

    <img src="../public/reading/summaryCompletionType2.png" alt="summary completion img" style="width:400px;"/>

    for this the json will be:
    ```
    const q = {
        startQuestionNum: 1,
        endQuestionNum: 4,
        numOfWords: 1,
        numOfNum: 0,
        qType: 2,
        questionHeader: 'Complete the summary using the list of words, A-G, below.\nWrite the correct letter, A-G, in boxes 1-4 on your answer sheet.',
        questionTitle: 'The importance of language',
        summary: 'The wheel is one invention that has had a major impact on 1 _BLANK_ aspects of life, but no impact has been as 2 _BLANK_ as that of language. Language is very 3 _BLANK_, yet composed of just a small number of sounds. Language appears to be 4 _BLANK_ to us.However, its sophistication is often overlooked.',
        questoinOptions: [
            'A difficult',
            'B complex',
            'C original',
            'D admired',
            'E material',
            'F easy',
            'G fundamental',
        ],
    }
    ```
Will keep adding as the schemas are finalised