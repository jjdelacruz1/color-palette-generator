// Write your app here! (HINT: First thing should be a call to ReactDOM.render()... )

function RandomButton () {
  return <div className="text-center bg-dark fixed-top">
  <button className="btn btn-secondary m-1">RANDOMIZE COLORS</button> </div>
}

class Color extends React.Component {
  state = {
    color: '#FF00FF'
  }

  render() {
    return(
      <div  style={{ backgroundColor: this.state.color}} className="w-100 d-flex flex-column align-items-center justify-content-center">
        <h1>#FF00FF</h1>
        <button className="btn btn-dark">LOCK</button>
      </div>
    )
  }
}

const App = function() {
  return (
    <div style={{marginTop: "50px", 
    height: "100vh"}} className="w-100 d-flex">
      <RandomButton />
      <Color />
      <Color />
      <Color />
      <Color />
      <Color />
    </div>)
}

ReactDOM.render(<App />, document.getElementById('root'))

