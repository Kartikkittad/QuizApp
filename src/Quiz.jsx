import './Quiz.css'
import { useState } from 'react';
import { resultIntialState } from './question'

function quiz({ questions }) {
    const [currentQues, setCurrentQues] = useState(0);
    const [answerIndex, setAnswerIndex] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [result, setResult] = useState(resultIntialState);
    const [showResult, setShowResult] = useState(false);

    const { question, options, correctAnswer } = questions[currentQues];

    const AnswerClick = (answer, index) => {
        setAnswerIndex(index);
        if (answer === correctAnswer) {
            setAnswer(true);
        }
        else {
            setAnswer(false);
        }
    }

    const onClickNext = () => {
        setAnswerIndex(null);
        setResult((prev) => {
            return answer
                ? {
                    ...prev,
                    score: prev.score + 5,
                    correctAnswer: prev.correctAnswer + 1,
                } : {
                    ...prev,
                    wrongAnswer: prev.wrongAnswer + 1,
                };
        });

        if (currentQues !== questions.length - 1) {
            setCurrentQues((prev) => prev + 1);
        } else {
            setShowResult(true);
        }
    };

    const onTryAgain = () => {
        setCurrentQues(0);
        setAnswerIndex(null);
        setAnswer(null);
        setResult(resultIntialState);
        setShowResult(false);
    };



    return (
        <>
            <div className="container">
                {!showResult ? (
                    <>
                        <span> Question </span>
                        <span className='active-question'>
                            {currentQues + 1}
                        </span>
                        <span className='total-question'>
                            / {questions.length}
                        </span>
                        <h2>{question}</h2>
                        <div className='line'></div>
                        <ul>
                            {
                                options.map((answer, index) => (
                                    <li
                                        onClick={() => AnswerClick(answer, index)}
                                        key={answer}
                                        className={answerIndex === index ? 'selected-answer' : null}>
                                        {answer}
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='footer'>
                            <button onClick={onClickNext} disabled={answerIndex === null}>
                                {currentQues === questions.length - 1 ? "Finish" : "Next"}
                            </button>
                        </div>

                    </>
                ) : (
                    <div className='result'>
                        <h3>Result</h3>
                        <p>
                            Total questions: <span className='scores'>{questions.length}</span>
                        </p>
                        <p>
                            Total score: <span className='scores'>{result.score}</span>
                        </p>
                        <p>
                            Correct answers: <span className='scores'>{result.correctAnswer}</span>
                        </p>
                        <p>
                            Wrong answers: <span className='scores'>{result.wrongAnswer}</span>
                        </p>
                        <button className='try' onClick={onTryAgain}>Try Again</button>
                    </div>
                )}
            </div>
        </>
    )
}
export default quiz;