import Typewriter from "../typewriter";
import './style.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Hi, I'm Tim</h1>
      <Typewriter text="Welcome to my portfolio!" speed={1000} />
    </section>
  );
}

export default Hero;
