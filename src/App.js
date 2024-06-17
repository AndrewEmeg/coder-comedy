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
  const [appear, setAppear] = useState("disappear");
  const [mobileNav, setMobileNav] = useState("");
  const [symbol, setSymbol] = useState("menu");
  const handleToggle = () => {
    if (appear === "appear") {
      setAppear("disappear");
      setSymbol("menu");
    } else {
      setAppear("appear");
      setMobileNav("mobile-nav");
      setSymbol("close-circle");
    }
  };
  return (
    <header className="header">
      <img
        // width="1254px"
        // height="385px"
        src="./images/logo.png"
        alt=""
        className="header-logo"
      />
      <nav className={`nav ${mobileNav}`} id={`${appear}`}>
        <ul>
          <li className="nav-element">
            <a href="#tj" className="nav-link" target="_blank" rel="noreferrer">
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
      <button
        onClick={handleToggle}
        className="res-icon res-icon-menu disappear"
      >
        <ion-icon name={`${symbol}-outline`}></ion-icon>
      </button>
      <button className="res-icon res-icon-x disappear">
        <ion-icon name="close-circle-outline"></ion-icon>
      </button>
    </header>
  );
}

function Hero() {
  return (
    <div className="hero-section-big-div">
      <div className="hero-text">
        <div className="hero-description">
          <h1 className="hero-headline">
            Laugh Your Bugs Away with <span className="span">Coder</span>
            <span>Comedy!</span>
          </h1>
          <p className="hero-subheadline">
            The ultimate hub for programming jokes and tech humor. Get your
            daily dose of laughter.
          </p>
          <a
            href="https://www.stripe.com"
            className="header-cta hero-cta"
            target="_blank"
            rel="noreferrer"
          >
            Get a Joke!
          </a>
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
      <About />
      <Testimonial />
      <Form />
      <Footer />
    </>
  );
}

function TopJokes() {
  return (
    <div className="container  jokes-featured">
      <h2 className="heading-h2" id="tj">
        Today's Top Jokes
      </h2>
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
        <h2 className="heading-h2">{joke}</h2>
        <button className="get-joke" onClick={getJoke}>
          Generate Jokee! 🤣🤣🤣
        </button>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="container about-section">
      <div className="about-description">
        <h2 className="heading-h2">About</h2>
        <p className="about-paragraph">
          At CoderComedy, we believe that laughter is the best debugging tool.
          Our mission is to bring joy and laughter to developers, tech
          enthusiasts, and anyone who appreciates a good joke. Whether you’re
          deep in code or just need a quick break, CoderComedy has the perfect
          joke to brighten your day.
        </p>
      </div>
      <div className="about-img-div">
        <img
          src="./images/pizza-people.jpg"
          alt=""
          className="about-img-actual"
        />
      </div>
    </div>
  );
}

function Testimonial() {
  return (
    <div className="testimonial container">
      <h2 className="heading-h2">What are our users saying?</h2>
      <div className="testimonial-cards">
        <div className="testimony-card">
          <img
            src="./images/testimonial-2.jpg"
            alt="A professional smiling so hard"
            className="testimony-img"
          />
          <p className="testimony-paragraph">
            "CoderComedy is my go-to for a quick laugh during work breaks. The
            jokes are spot on!"
          </p>
          <p className="testimony-name">
            - Sarah, <span>Flight Nurse.</span>
          </p>
        </div>
        <div className="testimony-card">
          <img
            src="./images/testimonial-3.jpg"
            alt="A professional smiling so hard"
            className="testimony-img"
          />
          <p className="testimony-paragraph">
            "As a tech enthusiast, I love how CoderComedy brings humor into the
            coding world."
          </p>
          <p className="testimony-name">
            - Lisa, <span>Software Engineer.</span>
          </p>
        </div>
        <div className="testimony-card">
          <img
            src="./images/testimonial-1.jpg"
            alt="A professional smiling so hard"
            className="testimony-img"
          />
          <p className="testimony-paragraph">
            "The perfect site for some light-hearted fun after a long day of
            coding."
          </p>
          <p className="testimony-name">
            - Mark, <span>IT Specialist.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <form className="container">
      <div className="form">
        <h2 className="heading-h2">
          Stay Updated with Our Latest
          <br /> Jokes.
        </h2>
        <p className="form-paragraph">
          Subscribe to our newsletter and never miss a joke! Get the funniest
          programming jokes delivered straight to your inbox.
        </p>
        <div className="inputs">
          <label htmlFor="first-name">
            <input
              type="text"
              name="first-name"
              id="last-name"
              placeholder="First Name"
            />
          </label>
          <label htmlFor="last-name">
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Last Name"
            />
          </label>
          <label htmlFor="email">
            <input type="email" name="emaile" id="email" placeholder="Email" />
          </label>
          <button>Stay Updated</button>
        </div>
      </div>
    </form>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container container">
        <div className="footer-part-one">
          <img src="./images/logo-white.png" alt="" className="footer-logo" />
          <p className="social-invite">
            Follow us on Facebook, Twitter, LinkedIn
          </p>
          <div className="footer-icon-div">
            <a
              href="https://www.linkedin.com/in/andrewemeghebo"
              className="social-link"
            >
              <box-icon
                type="logo"
                name="linkedin"
                className="social-link-individual bx-lg"
              ></box-icon>
            </a>
            <a
              href="https://www.linkedin.com/in/andrewemeghebo"
              className="social-link"
            >
              <box-icon
                type="logo"
                name="instagram"
                className="social-link-individual"
              ></box-icon>
            </a>
            <a
              href="https://www.linkedin.com/in/andrewemeghebo"
              className="social-link"
            >
              <box-icon
                type="logo"
                name="twitter"
                className="social-link-individual"
              ></box-icon>
            </a>
          </div>
        </div>

        <div className="footer-part-two">
          <h3 className="footer-h3">Quick Links</h3>
          <div className="quick-links">
            <p className="quick-paragraph">
              <a
                href="https://www.linkedin.com/in/andrewemeghebo"
                className="quick-link"
              >
                Home
              </a>
            </p>
            <p className="quick-paragraph">
              <a
                href="https://www.linkedin.com/in/andrewemeghebo"
                className="quick-link"
              >
                About
              </a>
            </p>
            <p className="quick-paragraph">
              <a
                href="https://www.linkedin.com/in/andrewemeghebo"
                className="quick-link"
              >
                Developer
              </a>
            </p>
          </div>
        </div>

        <div className="footer-part-three">
          <h3 className="footer-h3">Contact Us</h3>
          <div className="contacts">
            <div className="contact">
              <span>Email: </span>
              <a href="mailto:info@codercomedy.com" className="contact-email">
                info@codercomedy.com
              </a>
            </div>
            <div className="contact">
              <span>Phone: </span>
              <a href="tel:(123) 456-7890" className="contact-phone">
                (123) 456-7890
              </a>
            </div>
          </div>
        </div>
        <p className="copyright">
          Copyright: © 2024 CoderComedy. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
