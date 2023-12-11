// quizQuestions.js

export const quizQuestions = {
    questions: [{
        type: "mcq",
        question: "What is React?",
        options: [
            "A JavaScript framework",
            "A JavaScript library for building user interfaces",
            "A styling preprocessor",
            "A server-side language"
        ],
        correctAnswer: "A JavaScript library for building user interfaces"
    },
    {
        type: "mcq",
        question: "Which of the following is used to manage state in a React component?",
        options: [
            "setState",
            "stateManager",
            "updateState",
            "stateControl"
        ],
        correctAnswer: "setState"
    },
    {
        type: "mcq",
        question: "What does JSX stand for?",
        options: [
            "JavaScript XML",
            "JavaScript Extension",
            "JSON XML",
            "Java XML"
        ],
        correctAnswer: "JavaScript XML"
    },
    {
        type: "mcq",
        question: "What function is called when a component is first added to the DOM?",
        options: [
            "componentDidMount",
            "componentWillMount",
            "componentDidUpdate",
            "componentWillUpdate"
        ],
        correctAnswer: "componentDidMount"
    },
    ]
};

export const resultIntialState = {
    score: 0,
    correctAnswer: 0,
    wrongAnswer: 0,
};

