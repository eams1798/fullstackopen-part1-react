import { useState } from 'react'
import './App.css'
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';
import { dataScore } from './interfaces/datascore';

const App = () => {

  const [score, setScore] = useState<dataScore>({
    good: 0,
    neutral: 0,
    bad: 0
  })

  return (
  <>
    <Feedback onUpdateScore={setScore}/>
    <Statistics data={score}/>
  </>
  )
}

export default App
