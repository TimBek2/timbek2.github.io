import Typewriter from "../typewriter";
import './style.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <h1>Hi, I'm Tim</h1>
      <Typewriter text="Welcome to my portfolio!" speed={250} />
    </section>
  );
}

export default Hero;
