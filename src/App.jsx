import Quiz from './Quiz'
import './App.css'
import { quizQuestions } from './question'

function App() {

  return (
    <>
      <Quiz questions={quizQuestions.questions} />
    </>
  )
}

export default App
