header:
1) Ielts sim logo or text
2) Home page button
3) Test:
	1) /listening_test
	2) /reading_test
	3) /writing_test
	4) /speaking_test
4) Practice: stand alone questions. route: /practice
5) Exam: /exam
6) Simulate: /simulate
7) test _only_dev_ : create a route for every type of question and then create that question component in isolation without any other component on the page (including headers.) eg: /test/mcq to create and test mcq question and how it looks. 
footer: similar to header but just has bunch of links:
![alt text](image.png)

## Home page

For now just add a heading: 
`IELTS PREP HAS NEVER BEEN EASIER`
Then add a list of features of the website:
1) Stand-Alone Question Solver: Users can solve individual questions from all modules: Listening, Reading, Writing, Speaking.
2) Single Test Mode: Users can choose to take tests for specific module only: Listening, Reading, Writing, Speaking.
3) Full Exam Mode: Users can take a full IELTS exam comprising all of tests (Listening, Reading, Writing, Speaking) in the standard order (L,R,W,S).
4) Question Upload: - Allows users to upload questions to create custom tests. Option to upload questions for a single test type or for all four types to create a full exam.
5) Answer Evaluation: Users can submit their answers for evaluation. After submission, users can input the actual answers. The system evaluates the submitted answers against the actual answers. Marks are provided to users based on their performance.
6) Scoring System: Implement a scoring system based on IELTS standards. Provide detailed feedback on each test section and overall performance.
7) Progress Tracking: Track user progress over time. Provide insights into strengths and weaknesses in each test type.
8) Resource Section: Include study materials, tips, and resources to help users prepare for the exam. Links to official IELTS resources and practice materials.

TODO: 
1) Create good CSS scroll animation for features: 
	1) https://youtu.be/T33NN_pPeNI?si=mtlTRVqsN0PRNRLM
	2) https://gurshabad.vercel.app/ can do similar to the `my projects` section or `my experience ` section.
## Practice:

On this route we do stand alone questions:
reference: https://www.gregmat.com/problems/quant
we have heading: Question Practice
then the: `My progress` button to see the stats of user for every question type.
Then we have 3 column grid for questions (like in reference site). The site has to be responsive in that the 3 columns should become 2 column and then 1 column.
Users should be able to like and bookmark a question.

## Listening Question Types:

These are the things that should be visible from the question props.
1) Matching:
	1) questionHeader
	2) questionStatement? (? = could be missing)
	3) questionTitle?
	4) questionOptions (options with capital letters)
	5) numStatements (options with numbers)
2) Sentence Completion:
	1) questionHeader
	2) questionTitle
	3) numStatements
3) MCQ:
	1) questionHeader
	2) numStatements
	3) questionOptions
4) Summary Completion:
	1) questionHeader
	2) questionTitle
	3) summary
5) Note Completion:
	1) questionHeader
	2) questionTitle
	3) questionStatements
6) Diagram Completion:
	1) questionHeader
	2) questionTitle
	3) questionOptions
	4) numStatements
7) Flowchart Completion:
	1) questionHeader
	2) questionTitle?
	3) questionOptions?
	4) steps
8) Table Completion:
	1) rows
9) Form Completion:
	1) questionHeader
	2) questionTitle
	3) questionStatements
10) Short Answer:
	1) questionHeader
	2) questionStatements
	3) questionBlanks

## Reading Question Types:

1) Matching:
	1) questionHeader
	2) questionTitle
	3) questionStatements
	4) numStatements
2) Sentence Completion:
	1) same as listening
3) MCQ:
	1) same as listening
4) Summary Completion:
	1) questionHeader
	2) questionTitle
	3) summary
	4) questionOptions?
5) Note Completion:
	1) same as listening
6) Diagram Completion:
	1) questionHeader
	2) questionTitle
	3) numStatements
7) Flowchart Completion:
	1) questionHeader
	2) steps
8) Table Completion:
	1) rows
9) Short Answer:
	1) questionHeader
	2) numStatements
10) Yes No Not given:
	1) questionHeader
	2) questionOptions: `YES`, `NO`, `NOT GIVEN`
	3) numStatements
11) True False Not given:
	1) questionHeader
	2) questionOptions: `TRUE`, `FALSE`, `NOT GIVEN`
	3) numStatements
