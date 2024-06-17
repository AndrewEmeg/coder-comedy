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
      <Header />
      <Hero />
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
      <img
        // width="1254px"
        // height="385px"
        src="./images/logo.png"
        alt=""
        className="header-logo"
      />
      <nav className="nav">
        <ul>
          <li className="nav-element">
            <a
              href="https://www.stripe.com"
              className="nav-link"
              target="_blank"
              rel="noreferrer"
            >
              Home
            </a>
          </li>
          <li className="nav-element">
            <a
              href="https://www.stripe.com"
              className="nav-link"
              target="_blank"
              rel="noreferrer"
            >
              About
            </a>
          </li>
          <li className="nav-element">
            <a
              href="https://www.stripe.com"
              className="nav-link"
              target="_blank"
              rel="noreferrer"
            >
              Developer
            </a>
          </li>
          <li className="nav-element">
            <a
              href="https://www.stripe.com"
              className="header-cta"
              target="_blank"
              rel="noreferrer"
            >
              Get a Joke!
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <div className="hero-section-big-div">
      <div className="hero-text">
        <div className="hero-description">
          <h1 className="hero-headline">
            Laugh Your Bugs Away with CoderComedy!
          </h1>
          <p className="hero-subheadline">
            The ultimate hub for programming jokes and tech humor. Get your
            daily dose of laughter.
          </p>
        </div>
      </div>
      <div className="hero-empty"></div>
    </div>
  );
}
export default App;
