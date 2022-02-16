const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="world" age="4 billion" />
      <Hello name="Mike" age={2022 - 1980}/>
    </div>
  )
}

export default App