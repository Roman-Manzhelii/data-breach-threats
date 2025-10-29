import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import {useState} from "react";
import Questions from "../../content/questions.js";

export default function Question({   index,
                                     onSelectAnswer,
                                     onSkipAnswer,
}) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    })

    let timer = 60000;

    if (answer.selectedAnswer) {
        timer = 800;
    }

    if (answer.isCorrect !== null) {
        timer = 1500;
    }
    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: Questions[index].answers[0] === answer
            })

            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000)
        }, 1000);
    }

    let answerState = '';

    if(answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'answered';
    }

    return(
        <div id='question' >
            <QuestionTimer
                key={timer}
                timeout={timer}
                onTimeOut={answer.selectedAnswer === '' ? onSkipAnswer : null}
                mode={answerState}
            />
            <h2>{Questions[index].text}</h2>
            <Answers
                answers={Questions[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    )
}