import React from "react"
import ReactDOM from "react-dom"
import Joke from "./Joke.js"

ReactDOM.render(
  <>
  
  <Joke setup="knock knock" punchline="who's there"/>
  <Joke setup="knock" punchline="knock who"/>
  <Joke setup="knock knock" punchline="who's there"/>
  <Joke setup="who" punchline="who's there"/>
  <Joke punchline="It's hard to explain puns to kleptomaniacs because they always take things literally." />
  </>,
  document.getElementById("root")
)