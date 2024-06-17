import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AppOther />
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

function AppOther() {
  return (
    <>
      <TopJokes />
      <GenerateJoke />
    </>
  );
}

function TopJokes() {
  return (
    <div className="container  jokes-featured">
      <h2 className="heading-h2">Today's Top Jokes</h2>
      <div className="funny-jokes">
        <div className="jokes-featured-card">
          <img
            src="./images/besties.jpg"
            alt=""
            className="jokes-featured-card-img"
          />
          <p className="jokes-featured-card-paragraph">
            “Why are Assembly programmers always soaking wet? They work below
            C-level.”
          </p>
        </div>
        <div className="jokes-featured-card">
          <img
            src="./images/buddies.jpg"
            alt=""
            className="jokes-featured-card-img"
          />
          <p className="jokes-featured-card-paragraph">
            “Why do Java developers wear glasses? Because they don't C#.”
          </p>
        </div>
        <div className="jokes-featured-card">
          <img
            src="./images/solo-prenuer.jpg"
            alt=""
            className="jokes-featured-card-img"
          />
          <p className="jokes-featured-card-paragraph">
            “Why do programmers prefer dark mode? Because light attracts bugs.”
          </p>
        </div>
      </div>
      <h2 className="heading-h2">
        Go ahead, laugh all
        <br /> the more!
      </h2>
      <p className="hero-subheadline">
        Click on the “Generate Joke” button below to crack your ribsssss
        🤣🤣🤣🤣
      </p>
    </div>
  );
}

function GenerateJoke() {
  const [joke, setJoke] = useState('"This is where the joke should appear."');

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
  }
  return (
    <div className="generate-joke">
      <div className="container">
        <h2 className="hero-subheadline">{joke}</h2>
        <button className="get-joke" onClick={getJoke}>
          Get Jokee!
        </button>
        <p>What's happening</p>
      </div>
    </div>
  );
}
export default App;
