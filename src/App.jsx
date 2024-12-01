
import './App.css'

let count = 0;
let uwu =  "😘";

//another component
function Header(props) {
    return (
        <header>
        <h1>{props.name}'s My React App {props.year}</h1>
        </header>
    );
}

// react component is a function that returns litte bit of ui
function App() {
  return(
      <div>
          <Header name="Kasun" year={new Date().getFullYear()} />
          <main>
              <h3>Hellow React {uwu} : {count}</h3>
          </main>
      </div>
  )
}

export default App
