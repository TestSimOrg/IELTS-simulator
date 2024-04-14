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



