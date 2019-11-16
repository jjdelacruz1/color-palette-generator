// Write your app here! (HINT: First thing should be a call to ReactDOM.render()... )

function RandomButton () {
  return <div className="text-center bg-dark fixed-top">
  <button className="btn btn-secondary m-1">RANDOMIZE COLORS</button> </div>
}

class Color extends React.Component {
  state = {
    color: 'blue',
    hex: '#FF00FF'
  }

  render() {
    return(
      <div className="w-100 d-flex" style={{height: "100vh"}}>
        <button style={{height: "10vh"}}>LOCK</button>
      </div>
    )
  }
}

const App = function() {
  return (
    <div>
      <RandomButton />
      <div className="d-flex flex-row">
      <Color />
      <Color />
      <Color />
      <Color />
      <Color />
      </div>
    </div>)
}

ReactDOM.render(<App />, document.getElementById('root'))

