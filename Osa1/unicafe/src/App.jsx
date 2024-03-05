import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState([])
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))
  const [maxVote, setMaxVote] = useState(0)

  const painaAnekdootti = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const painaGood = () => {
    setAverage(average.concat(1))
    const updatedGood= good+1
    setGood(updatedGood)
    setAll(updatedGood+neutral+bad)
  }
  const painaNeutral = () => {
    setAverage(average.concat(0))
    const updatedNeutral = neutral+1
    setNeutral(updatedNeutral)
    setAll(good+updatedNeutral+bad)
  }
  const painaBad = () => {
    setAverage(average.concat(-1))
    const updatedBad = bad+1
    setBad(updatedBad)
    setAll(good+neutral+updatedBad)
  }
  let sum=0
  for (let number of average){
    sum += number
  }


  const painaVote = () => {
    let max = 0
    vote.forEach((element, index) => {
      if (index == selected){
        element++
      }
      if (element > max){
        max = element
      }
    })
    // setVote(vote[selected]+1)
    setMaxVote(vote.indexOf(max))
    console.log(vote)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={painaGood}>good</button>
      <button onClick={painaNeutral}>neutral</button>
      <button onClick={painaBad}>bad</button>
      <button onClick={painaAnekdootti}>anekdootti</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {sum/average.length}</p>
      <p>positive {good/all*100} %</p>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}<br />has {vote[selected]} votes</p>
      <button onClick={painaVote}>vote</button>
      <h1>Anecdote with most votes</h1>
      <p>{vote[maxVote]} has {vote[selected]} votes</p>
    </div>
  )
}

export default App