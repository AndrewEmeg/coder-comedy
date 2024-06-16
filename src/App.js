import { useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("This is where the joke should appear.");
  // const [amount, setAmount] = useState(4);

  async function getJoke() {
    const res = await fetch(
      `https://v2.jokeapi.dev/joke/Programming?blacklistFlags=sexist`
    );
    const prom = await res.json();

    if (Boolean(prom.joke) === true) {
      console.log("single");
      setJoke(prom.joke);
    } else {
      console.log("two-part");
      setJoke(`${prom.setup}  ${prom.delivery}`);
    }

    console.log(prom);
    // console.log(prom.joke || prom.setup, prom.delivery);
  }
  return (
    <div className="App">
      {/* <select value={amount} onChange={(e) => setAmount(e.target.value)}>
        {Array.from({ length: 5 }, (_, i) => i + 1).map((number) => (
          <option key={number}>{number}</option>
        ))}
      </select> */}
      <p>{joke}</p>
      <button className="get-joke" onClick={getJoke}>
        Get Jokee!
      </button>
      <p>What's happening</p>
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li className="nav-element">Home</li>
          <li className="nav-element">About</li>
          <li className="nav-element">Developer</li>
        </ul>
      </nav>
    </header>
  );
}
export default App;
