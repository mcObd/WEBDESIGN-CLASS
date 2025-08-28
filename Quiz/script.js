
        const quizData = [
            {
                question: "What is the correct syntax to print a message in the console in JavaScript?",
                a: "console.log(\"Hello World\")",
                b: "print(\"Hello World\")",
                c: "echo \"Hello World\"",
                d: "console.print(\"Hello World\")",
                correct: "A"
            },
            {
                question: "How do you declare a variable in JavaScript?",
                a: "let variableName;",
                b: "var variableName;",
                c: "const variableName;",
                d: "All of the above",
                correct: "D"
            },
            {
                question: "Which data type is not supported in JavaScript?",
                a: "String",
                b: "Boolean",
                c: "Integer",
                d: "Undefined",
                correct: "C"
            },
            {
                question: "What is the output of the following code?\n console.log(2 + \"2\");",
                a: "4",
                b: "22",
                c: "NaN",
                d: "undefined",
                correct: "B"
            },
            {
                question: "Which method is used to add elements to the end of an array?",
                a: "push()",
                b: "pop()",
                c: "shift()",
                d: "unshift()",
                correct: "A"
            }
        ];

        const quizQuestion = document.querySelector('#question');
        const allQuestionOptions = document.querySelectorAll('.answer');
        const quizContainer = document.querySelector('.quiz-container');
        const submitBtn = document.querySelector("#submit");
        const optionA = document.querySelector('#A_text');
        const optionB = document.querySelector('#B_text');
        const optionC = document.querySelector('#C_text');
        const optionD = document.querySelector('#D_text');
        const optionsList = document.querySelector('#options-list');

        let currentQuestionIndex = 0;
        let score = 0;

        loadQuiz();

        function displayData(selectElement, message) {
            selectElement.textContent = message;
        }

        function deSelectAllOptions() {
            allQuestionOptions.forEach(option => {
                if (option.checked) {
                    option.checked = false;
                }
            })
        }

        function loadQuiz() {
            deSelectAllOptions();
            const currentQuizObj = quizData[currentQuestionIndex];
            displayData(quizQuestion, currentQuizObj.question);
            displayData(optionA, currentQuizObj.a);
            displayData(optionB, currentQuizObj.b);
            displayData(optionC, currentQuizObj.c);
            displayData(optionD, currentQuizObj.d);
        }

        function getSelectedOption() {
            let selectedOption;
            allQuestionOptions.forEach(option => {
                if (option.checked) {
                    selectedOption = option.id;
                }
            })
            return selectedOption;
        }

        function displayScore() {
            // Hide all radio button options
            const allOptions = document.querySelectorAll('#options-list li');
            allOptions.forEach(option => {
                option.style.display = 'none';
            });

            // Create and add score display
            const scoreLi = document.createElement('li');
            const percentage = Math.round((score / quizData.length) * 100);
            
            scoreLi.innerHTML = `
                <div class="score-display">
                    Quiz Completed!<br>
                    Your Score: ${score}/${quizData.length}
                    <div class="score-percentage">${percentage}%</div>
                </div>
            `;
            
            optionsList.appendChild(scoreLi);

            // Change button text and functionality
            submitBtn.textContent = "Restart Quiz";
            submitBtn.onclick = function() {
                location.reload();
            };
        }

        submitBtn.addEventListener('click', function() {
            let userAnswer = getSelectedOption();
            if (userAnswer) {
                if (userAnswer === quizData[currentQuestionIndex].correct) {
                    score++;
                }

                currentQuestionIndex++;

                if (currentQuestionIndex < quizData.length) {
                    loadQuiz();
                } else {
                    // Quiz is completed, display score
                    quizQuestion.textContent = "Quiz Results";
                    displayScore();
                }
            } else {
                alert("You must select an option to continue");
            }
        })