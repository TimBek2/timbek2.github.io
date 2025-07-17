import Typewriter from "../typewriter";
import './style.scss';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Hi, I'm Tim</h1>
      <Typewriter text="Welcome to my portfolio!" speed={1000} />

      <p>This site is under construction. Check back soon!</p>
    </section>
  );
}

export default Hero;
